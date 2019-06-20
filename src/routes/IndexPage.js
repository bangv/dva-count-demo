import React from 'react';
import { connect } from 'dva';
import {Button} from 'antd'
import styles from './IndexPage.css';

function IndexPage({props,dispatch}) {
  console.log(props)

  function minusClick(value) {
    dispatch({type: 'counts/getDetail',value:value})
  }

  function addClick(value) {
    dispatch({type: 'counts/add',value:value})
  }

  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      <h2>count={props.count}</h2>
      <h2>test={props.test}</h2>
      <button className={styles.minus} onClick={minusClick.bind(null, 5)}>-</button>
      <button className={styles.add} onClick={addClick.bind(null, 5)}>+</button>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  console.log('可以查看state的值：', state)
  return {
    props:state.counts//counts就是namespace  props就是传给
  }
}
const _IndexPage = connect(mapStateToProps)(IndexPage)

export default _IndexPage
