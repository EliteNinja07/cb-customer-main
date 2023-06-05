import { state } from '.';

const stateActions = {
  toggleNewbieCard: () => {
    console.log('toggle', state.session.global.showNewbieCard)
    state.session.global.showNewbieCard = !state.session.global.showNewbieCard;
  }
};

export default  stateActions