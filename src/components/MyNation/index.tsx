import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { stateActions, useMyState } from '../../common';
import { Locales } from '../../consts/TheLocales';

export default () => {
  const { snap } = useMyState();
  return (
    <Menu>
      <MenuButton>
        <Flex>
          <Image
            w='25px'
            h='20px'
            borderRadius='4px'
            mr={2}
            src={'/img/flags/' + snap.storage.locale + '.svg'}
          />
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList minW='130px' mt={3} mr={1}>
        {Locales?.map((item, index) => {
          return (
            <MenuItem
              key={'menuItem_' + index}
              onClick={() => {
                stateActions.setLocale(item.value);
              }}
            >
              <Image
                w='25px'
                h='20px'
                borderRadius='4px'
                mr={2}
                src={'/img/flags/' + item.value + '.svg'}
              />
              <Text>{item.label}</Text>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
