import { useState } from 'react';
import { MyIcon, MyUpload, getAvatar } from '@/common';
import { Flex, Image, Text, useDisclosure } from '@chakra-ui/react';

export default ({
  onChange,
  label,
  h = '180px',
  emptyImg,
  defaultVal = '',
  ...field
}: any) => {
  const [getUrl, setUrl] = useState(defaultVal);
  const { onOpen } = useDisclosure();
  const onSelectFile = (e: any) => {
    onOpen();
    onChange(e.src);
    setUrl(e.src);
  };

  return (
    <>
      <MyUpload
        onChange={onSelectFile}
        defaultVal={getUrl}
        accept='image/*'
        {...field}
      >
        <Flex
          borderRadius='8px'
          border='1px solid #89909e'
          flexDir='column'
          h={h}
          overflow='hidden'
          justifyContent='center'
          w='full'
        >
          {getUrl ? (
            <Image src={getAvatar(getUrl, true)} />
          ) : (
            <Flex flexDir='column'>
              {emptyImg ? (
                <Image
                  src={emptyImg}
                  style={{ margin: '0 auto' }}
                  width='80px'
                />
              ) : (
                <MyIcon
                  icon=''
                  fontSize='5rem'
                  h='50px'
                  color='#dedfe2'
                  w='full'
                />
              )}
              <Text
                color='#5b616e'
                w='full'
                textAlign='center'
                fontSize='12px'
                pt={3}
              >
                {label}
              </Text>
            </Flex>
          )}
        </Flex>
      </MyUpload>
    </>
  );
};
