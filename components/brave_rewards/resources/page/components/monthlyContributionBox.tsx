/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import * as React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  DisabledContent,
  Box,
  TableDonation,
  List,
  Tokens,
  ModalDonation,
  NextContribution
} from '../../ui/components'
import { Provider } from '../../ui/components/profile'

import { getLocale } from '../../../../common/locale'
import * as rewardsActions from '../actions/rewards_actions'
import * as utils from '../utils'
import { DetailRow } from '../../ui/components/tableDonation'

interface Props extends Rewards.ComponentProps {
}

interface State {
  modalShowAll: boolean
}

class MonthlyContributionBox extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      modalShowAll: false
    }
  }

  get actions () {
    return this.props.actions
  }

  disabledContent = () => {
    return (
      <DisabledContent
        type={'monthly'}
      >
        {getLocale('monthlyContributionDisabledText')}
      </DisabledContent>
    )
  }

  getRows = () => {
    const { balance, recurringList } = this.props.rewardsData
    let recurring: DetailRow[] = []

    if (!recurringList) {
      return recurring
    }

    return recurringList.map((item: Rewards.Publisher) => {
      let faviconUrl = `chrome://favicon/size/48@1x/${item.url}`
      const verified = utils.isPublisherConnectedOrVerified(item.status)

      if (item.favIcon && verified) {
        faviconUrl = `chrome://favicon/size/48@1x/${item.favIcon}`
      }

      return {
        profile: {
          name: item.name,
          verified,
          provider: (item.provider ? item.provider : undefined) as Provider,
          src: faviconUrl
        },
        contribute: {
          tokens: item.percentage.toFixed(1),
          converted: utils.convertBalance(item.percentage.toString(), balance.rates)
        },
        url: item.url,
        type: 'recurring' as any,
        onRemove: () => { this.actions.removeRecurringTip(item.id) }
      }
    })
  }

  onModalToggle = () => {
    this.setState({
      modalShowAll: !this.state.modalShowAll
    })
  }

  render () {
    const {
      balance,
      firstLoad,
      enabledMain,
      recurringList,
      reconcileStamp,
      ui
    } = this.props.rewardsData
    const showDisabled = firstLoad !== false || !enabledMain
    const tipRows = this.getRows()
    const topRows = tipRows.slice(0, 5)
    const numRows = tipRows && tipRows.length
    const allSites = !(numRows > 5)
    const total = utils.tipsListTotal(recurringList)
    const converted = utils.convertBalance(total, balance.rates)
    const { onlyAnonWallet } = ui

    return (
      <Box
        type={'donation'}
        title={getLocale('monthlyContributionTitle')}
        description={getLocale('monthlyContributionDesc')}
        disabledContent={showDisabled ? this.disabledContent() : null}
      >
        {
          this.state.modalShowAll
          ? <ModalDonation
            rows={tipRows}
            onClose={this.onModalToggle}
            title={getLocale('monthlyContributionTitle')}
          />
          : null
        }
        <List title={getLocale('donationTotalMonthlyContribution')}>
          <Tokens onlyAnonWallet={onlyAnonWallet} value={total} converted={converted} />
        </List>
        <List title={getLocale('donationNextDate')}>
          <NextContribution>
            {new Intl.DateTimeFormat('default', { month: 'short', day: 'numeric' }).format(reconcileStamp * 1000)}
          </NextContribution>
        </List>

        <TableDonation
          rows={topRows}
          allItems={allSites}
          numItems={numRows}
          headerColor={true}
          onShowAll={this.onModalToggle}
          onlyAnonWallet={onlyAnonWallet}
        >
          {getLocale('monthlyContributionEmpty')}
        </TableDonation>
      </Box>
    )
  }
}

const mapStateToProps = (state: Rewards.ApplicationState) => ({
  rewardsData: state.rewardsData
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(rewardsActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonthlyContributionBox)
