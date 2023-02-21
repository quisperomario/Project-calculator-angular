### Install Bootstrap
1. Stop the server
2. Exceute the next command
```
npm install bootstrap --save
```
3. We look for the file angular.json, in the linea styles, scripts add the following command:
```
'node_modules/bootstrap/dist/css/bootstrap.min.css'
'node_modules/bootstrap/dist/js/bootstrap.min.js'
```

### Merge in git
```
git branch new_branch
git checkout new_branch
```

### Push in git
```
git remote add origin url-of-repository
git push -u origin dev
```