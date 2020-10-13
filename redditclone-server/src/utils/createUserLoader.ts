import DataLoader from 'dataloader';
import { User } from '../entities/User';

export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdsToUsers: Record<number, User> = {};
    users.forEach((u) => {
      userIdsToUsers[u.id] = u;
    });

    return userIds.map((userId) => userIdsToUsers[userId]);
  });
