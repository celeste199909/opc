let dockWrapper  = opc.createNode("div", "dock-wrapper")

let dock = opc.createNode("div", "dock")

dockWrapper.appendChild(dock)

opc.mainEl.appendChild(dockWrapper)

opc.dockEl = dock;
