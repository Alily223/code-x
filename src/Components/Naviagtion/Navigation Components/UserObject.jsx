import React, { useState, useEffect } from 'react';
import { useDisclosure } from '@mantine/hooks'
import { Avatar, Badge, Burger, Group, Text, Menu , createStyles } from '@mantine/core';
import { useAppContext } from '../../../context';
import { IconSettings , IconUser, IconDeviceDesktopAnalytics} from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    item: {
      '&[data-hovered]': {
        backgroundColor: theme.colors[theme.primaryColor][theme.fn.primaryShade()],
        color: theme.white,
      },
    },
  }));

const UserObject = () => {
  const { usersCredits, userName, userLoggedIn } = useAppContext();
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  const rootStyles = getComputedStyle(document.documentElement);
  const navigate = useNavigate();

  const { classes } = useStyles();
  
  const darkThemeBBlack = rootStyles.getPropertyValue('--dark-theme-bblack');
  const darkThemeRed = rootStyles.getPropertyValue('--dark-theme-red');
  const darkThemeGrey = rootStyles.getPropertyValue('--dark-theme-grey');
  const darkThemeCyan = rootStyles.getPropertyValue('--dark-theme-cyan');


  return (
    <Group spacing="xl">
        <Menu classNames={classes} shadow="md" width={200} position="bottom-start" offset={36} theme={{ colorScheme: 'dark'}}>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle} aria-label={label} color="red"/>
            </Menu.Target>
            <Menu.Dropdown style={{backgroundColor:"rgba(1,1,1,1)"}}>
                <Menu.Item icon={<IconUser size="14"/>} color="blue" onClick={() => navigate("/UserProfile")}>Profile</Menu.Item>
                <Menu.Item icon={<IconDeviceDesktopAnalytics size="14"/>} color="blue" onClick={() => navigate("/UserStats")}>Stats</Menu.Item>
                <Menu.Item icon={<IconSettings size="14"/>} color="blue" onClick={() => navigate("/UserSettings")}>Settings</Menu.Item>
            </Menu.Dropdown>
        </Menu>
        
        <Avatar variant="outline" radius="xl" size="lg" bg="transparent" style={{color:darkThemeRed, boxShadow: `1px 1px 2px ${darkThemeRed}, 0 0 1em ${darkThemeRed}, 0 0 0.2em ${darkThemeRed}`}}>
            <p style={{color: darkThemeRed, fontFamily: "neuropol-nova, sans-serif" , fontWeight: 400 ,fontStyle: "normal", fontSize: "1.6rem"}}>{userName[0]}</p>
        </Avatar>
        <div style={{ flex: '1' }}>
            <Text size="sm" style={{color: darkThemeCyan, fontFamily: "neuropol-nova, sans-serif" , fontWeight: 400 ,fontStyle: "normal", fontSize: "2.4rem", textShadow: `1px 1px 2px ${darkThemeCyan}, 0 0 1em ${darkThemeCyan}, 0 0 0.2em ${darkThemeCyan}`}}>{userName}</Text>
            <Badge style={{color: darkThemeRed, backgroundColor: 'black', boxShadow: `0px 0px 6px 2px ${darkThemeRed}`, border: `1px solid ${darkThemeRed}`,fontFamily: "neuropol-nova, sans-serif" , fontWeight: 400 ,fontStyle: "normal", fontSize: "1.4rem", marginTop: '4px'}}>{usersCredits} credits</Badge>
        </div>
        
    </Group>
  )
}

export default UserObject