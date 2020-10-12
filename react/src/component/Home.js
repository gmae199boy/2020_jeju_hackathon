import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function Home(){
    return(
      <div>
        <div style = {{marginTop: '10em'}}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              집피스
          </Typography>
        </div>
      </div>
    //     <React.Fragment>
    //     <CssBaseline />
    //     <AppBar position="relative">
    //       <Toolbar>
    //       <Navbar bg="#6610f2" variant="dark">
    //             <Nav className="mr-auto">
    //               <button onClick={this.goback}>뒤로</button>
    //               <Navbar.Brand href="/" >Home </Navbar.Brand>
    //                 <Nav.Link  href="/RegisterRoom"> 등록 </Nav.Link>
    //                 <Nav.Link href="/report">마이페이지</Nav.Link>                                                                        
    //             </Nav>
    //         </Navbar>
    //       </Toolbar>
    //     </AppBar>
    //     <br /><br /><br />
    // </React.Fragment>
    )
}


export default Home;