import React, { Component } from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Flow } from 'gg-editor';
import EditorMinimap from '../../components/EditorMinimap';
import { FlowContextMenu } from '../../components/EditorContextMenu';
import { FlowToolbar } from '../../components/EditorToolbar';
import { FlowItemPanel } from '../../components/EditorItemPanel';
import { FlowDetailPanel } from '../../components/EditorDetailPanel';
import { FlowPropsPanel } from '../../components/EditorPropsBar';
import styles from './index.module.less';


class NewPage extends Component {
 
  componentWillMount() {
    // console.log(this.props);
  }
  state = {
    showFlag : 'none',
    getNode:'',
    data: {
      nodes: [{
        type: 'node',
        size: '70*70',
        shape: 'flow-circle',
        color: '#FA8C16',
        label: '起止节点',
        x: 655,
        y: 105,
        id: 'ea1184e8',
        index: 0,
      }, {
        type: 'node',
        size: '70*70',
        shape: 'flow-circle',
        color: '#FA8C16',
        label: '结束节点',
        x: 555,
        y: 255,
        id: '481fbb1a',
        index: 2,
      }],
      edges: [{
        source: 'ea1184e8',
        sourceAnchor: 2,
        target: '481fbb1a',
        targetAnchor: 0,
        id: '7989ac70',
        label: '是',
        shape: "flow-polyline"
      }],
    }
  }
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Flow data={this.state.data} className={styles.flow} add={this.onChangeData.bind(this)} onClick={this.flowClick.bind(this)} onAfterChange={this.onAfterChange.bind(this)} onBeforeChange={this.onBeforeChange.bind(this)} onContextMenu={this.onContextMenu.bind(this)} />
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <FlowContextMenu />
        <FlowPropsPanel showFlag = {this.state.showFlag} getNode={this.state.getNode}/>
      </GGEditor>
    );
  }

  onContextMenu() {
    console.log('鼠标右键菜单事件')
  }
  flowClick(e) {
    if(e.item !== null){
      if(e.item.model.type === 'node'){
        this.setState({
          showFlag:'block',
          getNode:e.item.model
        })
      } 
    }else{
      this.setState({
        showFlag:'none',
        getNode:''
      })
    }
  }
  // 子项数据变化后
  onAfterChange(v) {
    // console.log(this.state.data)
    let data = v.item.dataMap;
    console.log(data, '子项数据变化后');
  }
  // 子项数据变化前
  onBeforeChange(v) {
    // console.log(v, '子项数据变化前');
  }
  // onChangeData
  onChangeData(v) {
    console.log(v);
  }
}

export default NewPage;
