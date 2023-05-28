import {defineConfig} from 'sanity'; 
import {deskTool} from 'sanity/desk';
import schemas from './sanity/schemas';


const config = defineConfig ({

projectId:'3gbau1d5',

dataset: "production",

title: "My Personal website",

apiVersion: "2023-05-27",

basePath : "/admin",

plugins: [deskTool()],

schema: {types: schemas}
})

export default config