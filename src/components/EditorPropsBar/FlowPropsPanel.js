import React from 'react';
import PropType from 'prop-types'

class FlowPropsPanel extends React.Component{
  static propType = {
    getNode : PropType.object.isRequired, 
}
  render(){
    const {showFlag,getNode} = this.props
    return (
      <div style={{position:"fixed",bottom:0,height:200,width:'100%',background:'rgba(255,255,255,0.7)',borderTop:'1px solid #ccc',display:showFlag}}>
          <span style={{padding:'10px 20px'}}>type: {getNode.type}</span>
          <span style={{padding:'10px 20px'}}>size: {getNode.size}</span>
          <span style={{padding:'10px 20px'}}>shape: {getNode.shape}</span>
          <span style={{padding:'10px 20px'}}>color: {getNode.color}</span>
          <span style={{padding:'10px 20px'}}>label: {getNode.label}</span>
          <span style={{padding:'10px 20px'}}>x: {getNode.x}</span>
          <span style={{padding:'10px 20px'}}>y: {getNode.y}</span>
          <span style={{padding:'10px 20px'}}>id: {getNode.id}</span>
          <span style={{padding:'10px 20px'}}>index: {getNode.index}</span>
      </div>
    );
  } 
};

export default FlowPropsPanel;
