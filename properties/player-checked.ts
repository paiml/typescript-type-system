type Player = {
  first: string;
  nickname?: string;
};

function nicknameLength(player: Player): number {
  if (player.nickname === undefined) {
    return 0;
  }
  return player.nickname.length;
}

console.log("Ada:", nicknameLength({ first: "Ada" }));
console.log("Linus:", nicknameLength({ first: "Linus", nickname: "Tux" }));
