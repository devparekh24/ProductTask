// import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { ListItem } from '../listItem/ListItem'
import ProductCard from '../card/ProductCard';
// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

// export default function Dashboard() {
//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box sx={{
//         display: 'flex',
//         justifyItems: "baseline"
//       }}>
//         <CssBaseline />
//         <List component="nav">
//             {<ListItem />}
//           </List>
//           <Divider orientation='vertical' flexItem/>
//           <Divider orientation="vertical" sx={{
//             height:"100vh", fontSize:"50px", width:"50px", fontWeight:"bold", padding:"15px"}}/>

//         <Box>
//           <Container maxWidth="lg" sx={{
//             m: 5
//           }}>
//             <Grid>
//               <Grid item xs={12} md={8} lg={9} sx={{
//                 display:'flex',
//                 flexWrap:'wrap',
//                 justifyContent:'space-around',
//                 position:'absolute'
//                 }}>
//                 <ProductCard
//                   img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                   title="Baked Cod with Vegetables"
//                   description="Baked Cod with Vegetables. 30 minute meal!" />
//                 <ProductCard
//                   img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                   title="Baked Cod with Vegetables"
//                   description="Baked Cod with Vegetables. 30 minute meal!" />
//                 <ProductCard
//                   img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                   title="Baked Cod with Vegetables"
//                   description="Baked Cod with Vegetables. 30 minute meal!" />
//                 <ProductCard
//                   img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
//                   title="Baked Cod with Vegetables"
//                   description="Baked Cod with Vegetables. 30 minute meal!" />
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {ListItem} from '../listItem/ListItem'

const drawerWidth = 240;
const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Dashboard() {


  return (
    <ThemeProvider theme={defaultTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Shopping Cart
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {<ListItem/>}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box>
        <Toolbar />
        <Box>
          <Container 
          style={{display: 'initial'}}
          >
            <Grid>
              <Grid item xs={12} md={8} lg={9} sx={{
                display:'-webkit-flex',
                flexWrap:'wrap',
                justifyContent:'space-evenly',
                paddingLeft:'0',
                // width: '135%'
                }}>
                <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
                                  <ProductCard
                  img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  title="Baked Cod with Vegetables"
                  description="Baked Cod with Vegetables. 30 minute meal!" />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
    </ThemeProvider>
  );
}