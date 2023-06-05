import NewbieGift from '@/assets/images/gift-new.svg';
import { stateActions, useMyState, useMyToast } from '@/common';
import { getFirstWithdrawalFree, getNewbieCard } from '@api/user';
import { Flex, Image, useDisclosure } from '@chakra-ui/react';
import { StakingMembership } from '@components/NewbieCard/StakingMembership';
import { useEffect, useState } from 'react';
import '../index/scss/nav.scss';

export const NewbieCard = () => {
  const enabledNum = 100;
  const { snap } = useMyState();
  const { user } = snap.session;
  const { showRes } = useMyToast();
  const [visible, setVisible] = useState(false);
  const {
    isOpen: isMemberCardOpen,
    onOpen: onMemberCardOpen,
    onClose: onMemberCardClose,
  } = useDisclosure();
  useEffect(() => {
    if (snap.session.global.showNewbieCard) {
      onMemberCardOpen();
    }
  }, [snap.session.global.showNewbieCard]);

  const handleDrawShip = async () => {
    const { user } = snap.session;
    getNewbieCard(user.id)
      .then((res) => {
        showRes(res);
      })
      .catch((e) => {
        showRes(e);
      });
    getFirstWithdrawalFree(user.id)
      .then((res) => {
        showRes(res);
      })
      .catch((e) => {
        showRes(e);
      })
      .finally(() => {
        onMemberCardClose();
      });
  };

  useEffect(() => {
    const user = snap.session.user;
    if (!user) return;
    setVisible(
      user.vips_id == 1 &&
        !user.membership_card &&
        user.total_staking_amount >= enabledNum,
    );
  }, [snap.session.user]);

  if (!visible) return null;

  return (
    <>
      <Flex
        animation='heartbeat 1.5s ease-in-out infinite both'
        position={'fixed'}
        top={'50%'}
        transform={'translateY(-50%)'}
        cursor={'pointer'}
        right={{ base: 4, sm: 4, md: 6, lg: 6 }}
        h={{ base: 10, sm: 10, md: 16, lg: 16 }}
        zIndex={1000}
        onClick={() => {
          if (snap.session.global.showNewbieCard) return;
          stateActions.toggleNewbieCard();
        }}
      >
        <Image
          src={NewbieGift}
          backdropFilter='blur(5px)'
          borderRadius='100px'
        />
      </Flex>
      <StakingMembership
        open={isMemberCardOpen}
        onClose={() => {
          onMemberCardClose();
          stateActions.toggleNewbieCard();
        }}
        enjoyed={false}
        onDrawShip={handleDrawShip}
      />
    </>
  );
};
