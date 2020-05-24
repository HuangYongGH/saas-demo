import React, { Component } from 'react';
import { Layout, Button  } from 'antd';
import GGEditor, {
    Flow,
    Command,
    Toolbar,
    DetailPanel,
    NodePanel,
    EdgePanel,
    GroupPanel,
    MultiPanel,
    CanvasPanel,
    Minimap,
    ItemPanel,
    Item
} from 'gg-editor';
import './index.css';
const { Header, Sider, Content} = Layout;

class Index extends Component {
    componentWillMount() {
        GGEditor.setTrackable(false);
    }
    state = {
        data: {
            nodes: [{
                type: 'node',
                size: '170*170',
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
                index: 1,
            }],
        },
        shortcut: {
            zoomIn: true,   // 开启放大快捷键
            zoomOut: true, // 开启视口缩小快捷键
            copy: true,
            paste: true
        },
        json: ''
    }
    render() {
        return (
            <Layout style={{height: "100%"}}>
                <GGEditor onBeforecommandexecute={this.onBeforecommandexecute.bind(this)} style={{height: "100%"}}>
                    <Header>
                        <Toolbar>
                        <Command name="undo"><Button type="primary">撤销</Button></Command>
                        <Command name="redo"><Button type="primary">重做</Button></Command>
                        </Toolbar>
                        <DetailPanel>
                            <NodePanel>
                            </NodePanel>
                            <EdgePanel />
                            <GroupPanel />
                            <MultiPanel />
                            <CanvasPanel />
                        </DetailPanel>
                    </Header>
                    <Layout>
                        <Sider>
                            <ItemPanel>
                                <Item
                                    type="node"
                                    size="72*72"
                                    shape="flow-circle" src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
                                />
                            </ItemPanel>
                        </Sider>
                        <Content>
                            <Flow 
                                style={{ width: '100%', 'minHeight': '600px' }} 
                                data={this.state.data} 
                                shortcut={this.state.shortcut} 
                                add={this.onChangeData.bind(this)} 
                                onClick={this.flowClick.bind(this)} 
                                onAfterChange={this.onAfterChange.bind(this)} 
                                onBeforeChange={this.onBeforeChange.bind(this)} 
                                onContextMenu={this.onContextMenu.bind(this)} 
                            />
                        </Content>
                        <Sider>
                            <Minimap/>
                            <div>
                                <div>{this.state.json}</div>
                                <button onClick={this.outJson.bind(this)}>导出Json</button>
                            </div>
                        </Sider>
                    </Layout>
                </GGEditor>
            </Layout>
        )
    }
    outJson() {
        this.setState({
            json: JSON.stringify(this.state.data)
        });
    }
    onBeforecommandexecute(command) {
        console.log(command);
    }
    onContextMenu() {
        console.log('鼠标右键菜单事件')
    }
    flowClick(e) {
        console.log(e);
    }
    // 子项数据变化后
    onAfterChange(v) {
        // console.log(this.state.data)
        console.log(v, '子项数据变化后');
    }
    // 子项数据变化前
    onBeforeChange(v) {
        console.log(v, '子项数据变化前');
    }
    // onChangeData
    onChangeData(v) {
        console.log(v);
    }
}

export default Index;