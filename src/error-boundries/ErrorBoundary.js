import React from 'react';


class ErrorBoundary extends React.Component{

    constructor(){
        super();
        this.state = {hasError : false};
    }


   static getDerivedStateFromError(err){
     return {hasError : true}
    }

componentDidCatchError(err){
   console.log( "Error boundary catched this error" , err)
}

    render(){
   if(this.state.hasError){
       return  this.props.fallback
   }

   return this.props.children;

    }
}


export default ErrorBoundary;