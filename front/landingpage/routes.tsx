const staticbuild = false;// process.env.STATIC_BUILD;

const routes = {
    home: staticbuild?'../index.html':'/',
    contribute: staticbuild?'./contribute.html':'/contribute',
    story: staticbuild?'./story.html':'/story',
    actions: staticbuild?'./actions.html':'/actions',
  };
  
  export default routes;