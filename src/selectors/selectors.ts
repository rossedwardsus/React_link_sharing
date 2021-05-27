import { createSelector } from 'reselect';



//const selectUser = (state: any, userId: any) => users.find((user: any) => user.id === userId);
const selectUser = (state: any) => state;

const selectUserById = createSelector(
  [selectUser],
  (user: any) => user
);

export default selectUserById


interface ichannel {
    id: any,
    name:any,
    //about: any,
    //created_at: any
}

const selectChannels = (state: any) => state.user.channels;

export const selectChannelById:(state: any, channel_id: any) => ichannel = createSelector(
  (state: any) => state.user.channels,
  (_: any, channel_id: any) => channel_id,
  //(channels, channel_id) => channels.filter((channels: any) => channels.id === channel_id)
  (channels, channel_id) => {
  				let index = channels.findIndex((channels: any) => channels.id === channel_id)
  				return channels[index];
  }

)
