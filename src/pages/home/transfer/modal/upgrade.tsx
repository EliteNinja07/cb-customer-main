import {
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Button,
  Highlight,
  Text,
} from '@chakra-ui/react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router';

export default ({ tdata, methods, onClose }: any) => {
  const navigate = useNavigate();
  console.log(tdata, 'mup');
  return (
    <AlertDialogContent>
      <AlertDialogHeader fontSize='lg' fontWeight='bold'>
        <FormattedMessage id='text.ToUpgrade' />
      </AlertDialogHeader>
      <AlertDialogBody>
        <Text sx={{ fontSize: '1rem', pt: 4, pb: 3 }}>
          <Highlight query='--' styles={{ fontWeight: 'bold' }}>
            {tdata?.message || '--'}
          </Highlight>
        </Text>
      </AlertDialogBody>
      <AlertDialogFooter>
        {tdata.flag && (
          <Button
            ml={3}
            colorScheme='facebook'
            onClick={() => {
              methods?.onFriendFun(tdata);
            }}
          >
            <FormattedMessage id='text.FriendHelp' />
          </Button>
        )}
        <Button
          ml={3}
          colorScheme='messenger'
          onClick={() => {
            navigate('/home/vip');
          }}
        >
          <FormattedMessage id='text.ToUpgrade' />
        </Button>
        <Button onClick={onClose} ml={2}>
          <FormattedMessage id='text.Cancel' />
        </Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
