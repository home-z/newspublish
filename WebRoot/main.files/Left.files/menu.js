var tree = null;
var root = new TreeNode('系统菜单');
var fun1 = new TreeNode('类别管理');
var fun2 = new TreeNode('查看类别', '/newspublish/category.action?category.topid=1', 'tree_node.gif', null,'tree_node.gif', null);
fun1.add(fun2);
var fun3 = new TreeNode('添加类别', '/newspublish/category!categoryInsert.action', 'tree_node.gif', null,'tree_node.gif', null);
fun1.add(fun3);
var fun4 = new TreeNode('修改类别', '/newspublish/category.action?category.topid=1', 'tree_node.gif', null,'tree_node.gif', null);
fun1.add(fun4);
var func5 = new TreeNode('删除类别', '/newspublish/category.action?category.topid=1', 'tree_node.gif', null,'tree_node.gif', null);
fun1.add(func5);
root.add(fun1);
var fun5 = new TreeNode('新闻管理');
var fun6 = new TreeNode('所有新闻', '/newspublish/news.action?topid=1', 'tree_node.gif', null,'tree_node.gif', null);
fun5.add(fun6);
var fun7 = new TreeNode('发布新闻', '/newspublish/news!newsInput.action?topid=1', 'tree_node.gif', null,'tree_node.gif', null);
fun5.add(fun7);
var fun8 = new TreeNode('修改新闻', '/newspublish/news.action?topid=1', 'tree_node.gif', null,'tree_node.gif', null);
fun5.add(fun8);
var func9 = new TreeNode('查看新闻', '/newspublish/news.action?topid=1', 'tree_node.gif', null,'tree_node.gif', null);
fun5.add(func9);
var func10 = new TreeNode('删除新闻', '/newspublish/news.action?topid=1', 'tree_node.gif', null,'tree_node.gif', null);
fun5.add(func10);
root.add(fun5);
var fun9 = new TreeNode('用户管理');
var fun10 = new TreeNode('添加用户', '/newspublish/main.files/accountadd.jsp', 'tree_node.gif', null,'tree_node.gif', null);
fun9.add(fun10);
var fun11 = new TreeNode('所有用户', '/newspublish/manager.action', 'tree_node.gif', null,'tree_node.gif', null);
fun9.add(fun11);
var fun12 = new TreeNode('管理用户', '/newspublish/manager.action', 'tree_node.gif', null,'tree_node.gif', null);
fun9.add(fun12);
root.add(fun9);

tree = new Tree(root);
tree.show('menuTree');