import React from 'react';
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const TabButton = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  :hover {
    text-decoration: underline;
  }
  ${props => 
  props.selectedTab === props.tab ?
    css`
       background-color: #fff;
       color: #333;
       border: 2px solid #333;
    ` :
    css`
      display: flex;
      justify-content: none;
      align-items: center;
      flex-direction: row;
      color: #fff;
      background-color: #333;
      margin: 0 5px;
      padding: 2px 10px;
      font-size: 12px;
      letter-spacing: 2px;
      cursor: pointer;
      font-weight: bold;
      :hover {
        text-decoration: underline;
      }
    `
}
`
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <TabButton selectedTab={props.selectedTab} tab={props.tab} onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </TabButton>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
}
export default Tab;
