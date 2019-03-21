/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/13
 * Time: 14:26
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Tree} from 'antd';
import {connect} from 'dva';

const TreeNode = Tree.TreeNode;
const TreeC = ({dispatch,example}) => {

  const onLoadData = (treeNode) => {
    console.log(treeNode);
    return new Promise((resolve) => {
      if (treeNode.props.children) {
        resolve();
        return;
      }
      //
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: '树根', key: `${treeNode.props.eventKey}-0` },
          { title: '树根', key: `${treeNode.props.eventKey}-1` },
          { title: '树根', key: `${treeNode.props.eventKey}-2` },
        ];
        dispatch({
          type:'example/setState',
          formData:{treeData: example.treeData}
        });
        resolve();
      }, 1000);
    });
  };

 const  renderTreeNodes = (data) => {
    return Array.from(data).map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    });
  };

  return (
    <div>
      <Tree loadData={onLoadData}>
        {renderTreeNodes(example.treeData)}
      </Tree>
    </div>
  )
}

export default connect(state =>state)(({example,dispatch}) => <TreeC example={example}  dispatch={dispatch} />)
