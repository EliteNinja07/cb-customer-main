import {
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';
import { useIntl } from 'react-intl';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { request, PrimaryButton } from '../../common';
import { stateActions } from '../../common/state';
import AiTradeCard from './AiTradeCard';
import { useNavigate } from 'react-router';
import { FormattedMessage } from 'react-intl';

const styles = {
  ModalBody: {
    position: 'relative',
    paddingBottom: 10,
    width: { base: '100vw', sm: '100vw', md: '400px', lg: '440px' },
    height: { base: '100vh', sm: '100vh', md: '700px', lg: '800px' },
    maxWidth: 'auto',
    borderRadius: { base: '0', sm: '0', md: '10px', lg: '10px' },
  },
  NextBtn: {
    position: 'absolute',
    bottom: '8%',
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 100,
  },
};

export default ({ user, onModalClose, isModalOpen }: any) => {
  const navigate = useNavigate();
  const [swiper_cont, setSwiper] = useState<SwiperCore | null>(null);
  const [swiperIdx, setSwiperIdx] = useState<any>(0);
  const onSwiperChange = (idx: number) => {
    console.log('idx', idx);
  };
  const intl = useIntl();
  return (
    <Modal
      isCentered
      onClose={onModalClose}
      isOpen={isModalOpen}
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent sx={styles.ModalBody}>
        {/* <ModalCloseButton sx={{ zIndex: 1500 }} /> */}
        <ModalBody>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className='AiTradeSwiper'
            onSwiper={(swiper) => setSwiper(swiper)}
            onSlideChange={(item) => {
              onSwiperChange(item.activeIndex);
              setSwiperIdx(item.activeIndex);
            }}
          >
            <SwiperSlide key='1'>
              <AiTradeCard
                svg='/img/robots/robots1.svg'
                title={intl.formatMessage({ id: 'trade.config.item0.title' })}
                subTitle={intl.formatMessage({
                  id: 'trade.config.item.Member',
                })}
                description={intl.formatMessage({
                  id: 'trade.config.item0.toolt',
                })}
                field='can_automatic_trade'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='2'>
              <AiTradeCard
                svg='/img/robots/robots2.svg'
                title={intl.formatMessage({ id: 'trade.config.item2.title' })}
                subTitle={intl.formatMessage({
                  id: 'trade.config.item.Member',
                })}
                description={intl.formatMessage({
                  id: 'trade.config.item2.toolt',
                })}
                field='can_automatic_exchange'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='3'>
              <AiTradeCard
                svg='/img/robots/robots3.svg'
                title={intl.formatMessage({ id: 'trade.config.item3.title' })}
                subTitle={intl.formatMessage({ id: 'trade.config.item.Mail' })}
                description={intl.formatMessage({
                  id: 'trade.config.item3.toolt',
                })}
                field='can_email_notification'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='4'>
              <AiTradeCard
                svg='/img/robots/robots4.svg'
                title={intl.formatMessage({ id: 'trade.config.item1.title' })}
                subTitle={intl.formatMessage({ id: 'trade.config.item.ID' })}
                description={intl.formatMessage({
                  id: 'trade.config.item1.toolt',
                })}
                field='can_trail_bonus'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='5'>
              <AiTradeCard
                svg='/img/robots/robots5.svg'
                title={intl.formatMessage({ id: 'trade.config.item4.title' })}
                subTitle={intl.formatMessage({ id: 'trade.config.item.VIP1' })}
                description={intl.formatMessage({
                  id: 'trade.config.item4.toolt',
                })}
                field='can_leveraged_investment'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='6'>
              <AiTradeCard
                svg='/img/robots/robots6.svg'
                title={intl.formatMessage({ id: 'trade.config.item6.title' })}
                subTitle={intl.formatMessage({ id: 'trade.config.item.VIP1' })}
                description={intl.formatMessage({
                  id: 'trade.config.item6.toolt',
                })}
                field='can_prevent_liquidation'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='7'>
              <AiTradeCard
                svg='/img/robots/robots7.svg'
                title={intl.formatMessage({ id: 'trade.config.item7.title' })}
                subTitle={intl.formatMessage({ id: 'trade.config.item.VIP1' })}
                description={intl.formatMessage({
                  id: 'trade.config.item7.toolt',
                })}
                field='can_profit_guarantee'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='8'>
              <AiTradeCard
                svg='/img/robots/robots8.svg'
                title={intl.formatMessage({ id: 'trade.config.item5.title' })}
                subTitle={intl.formatMessage({ id: 'trade.config.item.VIP1' })}
                description={intl.formatMessage({
                  id: 'trade.config.item5.toolt',
                })}
                field='can_automatic_loan_repayment'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='9'>
              <AiTradeCard
                svg='/img/robots/robots9.svg'
                title={intl.formatMessage({ id: 'trade.config.item9.title' })}
                subTitle={intl.formatMessage({ id: 'trade.config.item.VIP2' })}
                description={intl.formatMessage({
                  id: 'trade.config.item9.toolt',
                })}
                field='can_automatic_staking'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
            <SwiperSlide key='108'>
              <AiTradeCard
                svg='/img/robots/robots10.svg'
                title={intl.formatMessage({ id: 'trade.config.item10.title' })}
                subTitle={intl.formatMessage({ id: 'trade.config.item.VIP3' })}
                description={intl.formatMessage({
                  id: 'trade.config.item10.toolt',
                })}
                field='can_automatic_withdrawal'
                user={user}
                onModalClose={onModalClose}
              />
            </SwiperSlide>
          </Swiper>
          <Flex sx={styles.NextBtn}>
            <PrimaryButton
              colorScheme='primary'
              onClick={() => {
                swiper_cont?.slideNext();
                if (swiperIdx == 9) {
                  //最后一个跳走
                  request('ai_trade/dont_show_card', {}).then(async () => {
                    await stateActions.me();
                    onModalClose();
                    navigate('/home/aitrade');
                  });
                }
              }}
            >
              <FormattedMessage
                id={swiperIdx == 9 ? 'text.GetStart' : 'text.Next'}
              />
            </PrimaryButton>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
