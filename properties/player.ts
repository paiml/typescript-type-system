// The ? makes nickname optional: a player may not have one.
type Player = {
  first: string;
  nickname?: string;
};

function nicknameLength(player: Player): number {
  return player.nickname.length;
}
