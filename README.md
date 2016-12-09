# react-change-when-scrolledto
React Component Wrapper that change child properties when scrolled to. It does a shallow merge of new properties and old properties once the element is scrolled to view.

# Demo
https://yongzhi-chen.github.io/react-change-when-scrolledto/

# Usage
```
npm install --save react-change-when-scrolledto

```
In your code
```
import ReactChangeWhenScrolledto from 'react-change-when-scrolledto';

<ReactChangeWhenScrolledto className='newclsname'>
 <div className='oldclsname'></div>
</ReactChangeWhenScrolledto>
```

