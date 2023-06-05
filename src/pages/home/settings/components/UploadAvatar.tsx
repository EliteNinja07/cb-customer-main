import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { MyIcon, MyUpload, getAvatar } from '@/common';
import { Avatar, Flex, Text, useDisclosure } from '@chakra-ui/react';

export default ({ onChange, defaultVal = '', ...field }: any) => {
  const [getAvatarUrl, setAvatarUrl] = useState(defaultVal);
  const { onOpen } = useDisclosure();
  const onSelectFile = (e: any) => {
    onOpen();
    onChange(e.src);
    setAvatarUrl(e.src);
  };

  return (
    <>
      <MyUpload
        onChange={onSelectFile}
        defaultVal={getAvatarUrl}
        accept='image/*'
        {...field}
      >
        <Flex alignItems='center' color='#0052ff'>
          <Avatar bg='#e9ebee' src={getAvatar(getAvatarUrl)} size='lg' />
          <MyIcon icon='' fontSize='16px' />
          <Text>
            <FormattedMessage id='settings.UploadProfilePhoto' />
          </Text>
        </Flex>
      </MyUpload>
    </>
  );
};
