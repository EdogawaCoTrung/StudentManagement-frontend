import UpdatePasswordModal from "../../../components/share/UpdatePasswordModal"
import ProfileViewModal from "../../../components/share/ProfileViewModal"

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';



export default function AdministratorProfile() {
  const [value, setValue] = React.useState('profileView');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', paddingTop: '40px'  }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          centered
          sx={{
            backgroundColor: 'lightskyblue',
            marginLeft: '20vw',
            marginRight: '20vw',
            borderRadius: '20px',
          }}
        >
          <Tab
            value="profileView"
            label="Thông tin tài khoản"
            onClick={() => setValue('profileView')}
            sx = {{
              fontSize: '20px',
              fontWeight: 'medium',
              color: "white",
              textTransform: 'none',
            }}
          />
          <Tab
            value="updatePassword"
            label="Đổi mật khẩu"
            onClick={() => setValue('updatePassword')}
            sx = {{
              fontSize: '20px',
              fontWeight: 'medium',
              color: "white",
              textTransform: 'none',
            }}
          />
        </Tabs>
      </Box>
      {value === 'updatePassword' && <UpdatePasswordModal />}
      {value === 'profileView' && <ProfileViewModal />}
    </div>
  );
}
