import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

function SimpleGraph() {
  console.log('SimpleGraph');
  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 100, y: 100 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 200, y: 200 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
  ];
  return (
    <div>
      <h1>単純なグラフ</h1>
      <CytoscapeComponent elements={elements} style={{ width: '300px', height: '300px' }} />
    </div>
  );
}

export default SimpleGraph;
