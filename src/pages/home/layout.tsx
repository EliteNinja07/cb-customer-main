import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MyTransitionerContainer, useMyState } from "@/common";
import Footer from "../../components/layout/Footer";
import HeaderBar from "../../components/layout/HeaderBar";
import Sidebar from "../../components/layout/Sidebar";
import { styles } from "./layout.styles";
import { NewbieCard } from '@/components/NewbieCard';

export default function layout() {
  const [getSidebarStatus, setSidebarStatus] = useState(1);
  const { snap } = useMyState();

  return (
    <Flex sx={styles.CDSProvider}>
      <Box sx={styles.Large}>
        <Box sx={styles.LayoutContainer}>
          <Flex sx={styles.LayoutDesktop}>
            <Box sx={styles.LayoutDesktopContent}>
              <MyTransitionerContainer>
                <Sidebar
                  showSidebar={getSidebarStatus}
                  user={snap.session.user}
                />
              </MyTransitionerContainer>
              <Box sx={styles.MainContentFlex}>
                <Flex sx={styles.HeaderBlank} />
                <HeaderBar
                  user={snap.session.user}
                  account={snap.storage}
                  onSidebarChange={() => {
                    setSidebarStatus(getSidebarStatus + 1);
                  }}
                />
                <Flex sx={styles.MainContentWrapper}>
                  <Flex sx={styles.StyledContent}>
                    <Flex sx={styles.MainContent}>
                      <Outlet />
                    </Flex>
                  </Flex>
                </Flex>
                <Footer />
              </Box>
              <NewbieCard></NewbieCard>

            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
