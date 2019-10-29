# 日常记录
+ `Node.ownerDocument`
只读属性会返回当前节点的顶层的 document 对象。被此属性返回的 document 对象是在实际的HTML文档中的所有子节点所属的主对象。
如果在文档节点自身上使用此属性，则结果是null。
 
 + `Document.defaultView`
 在浏览器中，该属性返回当前 document 对象所关联的 window 对象，如果没有，会返回 null。
` document.querySelector(".aaa").ownerDocument.defaultView === window` 返回true

+ `pageXOffset` 
这是 scrollX 的别名

+ `Element.getClientRects()`
