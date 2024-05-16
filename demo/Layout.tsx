import app, { Component, update } from "apprun";
import { Markdown } from "./components/Markdown";
import { Spinner } from "./components/Spinner";

const Layout = () => <>
    <nav id="menus">
      <a href="#home">Home</a>
      <a href="#quick-start">Quick Start</a>
    </nav>
    <div id="pages"></div>
  </>

export function start(){

    app.render(document.body, <Layout />);
    
    const test = [
        {md:'./demo/content/home.md', routes:['#home']},
        {md:'./demo/content/quick-start.md', routes:['#quick-start']},
    ]
    test.forEach((t, index) =>{ 
        MarkdownComponent(t.md,t.routes).mount('pages');
    });
    app.run(location.hash||'#home');
}

function MarkdownComponent(cont: string, routes: string[]) {
    return new Component<{loading:boolean, md:string}>(
        {loading:true, md:''},
        function (state){
            if(state.loading)(fetch(`${cont}`))
            .then(r=>r.text())
            .then(text => this.run('load', text));
            return state.loading?<Spinner/>:<Markdown>{state.md}</Markdown>
        }, 
        routes.reduce((update, route)=>({...update, [route]:(x)=>x}), 
        {load:(state, md)=>({...state, loading:false, md})}))
}
