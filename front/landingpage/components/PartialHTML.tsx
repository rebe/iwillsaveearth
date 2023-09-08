import React , { forwardRef, useImperativeHandle, useState } from 'react'

//import CodingDecisions from '../data/CodingDecisions'
import FirstContentPage from '../data/FirstContent'
import Grid from '@mui/material/Grid';
import StartPage from '../data/GettingStarted'
import Typography from '@mui/material/Typography';

interface PageData {
  name: string,
  component: JSX.Element,
}

const pageDataList = [
  {
    name: "How the project got started in the first place?",
    component: StartPage
  },
  {
    name: "First content committed and put online",
    component: FirstContentPage
  },
  /*{
    name: "2023 03 Coding Decisions",
    component: CodingDecisions
  }*/
]

const PartialHTML = forwardRef((props, ref) => {
    const [activeComponent, setActiveComponent] = useState<number>(0);
    // Allow the ref to access the setActiveComponent function
    useImperativeHandle(ref, () => ({
      setActiveComponent,
      getComponents: () => {
        // Return an array of component names
        return pageDataList.map((item) => item.name);
      },
    }));

    const renderActiveComponent = () => {
        console.log("Render active component", activeComponent);
        switch (activeComponent) {  
          case 0:
            return <StartPage />;
          case 1:
            return <FirstContentPage />;
          /*case 2:
            return <CodingDecisions />;*/
          default:
            return null;
        }
      };
    return (
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            '& .markdown': {
              py: 3,
            },
        }}
        >
        <Typography variant="h6" gutterBottom>
          {pageDataList[activeComponent].name}
        </Typography>
        <div className=".markdown">{renderActiveComponent()}</div>
        </Grid>

    )
  });
  export default PartialHTML
