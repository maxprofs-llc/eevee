$(document).ready(function() {
  var units = [
    {stars: "***", unit_name: "Ice Selena", materials: ["Water Spirit", "Water Idol"]},
    {stars: "****", unit_name: "Ice Queen Selena", materials: ["Water Nymph", "Water Nymph", "Water Spirit", "Water Idol", "Water Totem"]},
    {stars: "*****", unit_name: "Ice Goddess Selena", materials: ["Water Nymph", "Water Spirit", "Water Idol", "Water Totem", "Miracle Totem"]},
    {stars: "******", unit_name: "Holy Ice Selena", materials: []},
    {stars: "**", unit_name: "Zephu", materials: ["Water Nymph", "Water Nymph", "Water Spirit"]},
    {stars: "***", unit_name: "Knight Zephu", materials: ["Water Nymph", "Water Nymph", "Water Spirit", "Water Idol"]},
    {stars: "****", unit_name: "Dragoon Zephu", materials: ["Water Nymph", "Water Idol", "Water Idol", "Water Totem", "Water Pot"]},
    {stars: "*****", unit_name: "Dragon Hero Zephu", materials: []},
    {stars: "*", unit_name: "Squirty", materials: ["Water Nymph"]},
    {stars: "**", unit_name: "King Squirty", materials: []},
    {stars: "*", unit_name: "Priest Merith", materials: ["Water Nymph"]},
    {stars: "**", unit_name: "Healer Merith", materials: ["Water Nymph", "Water Spirit"]},
    {stars: "***", unit_name: "Bishop Merith", materials: []},
    {stars: "*", unit_name: "Merman", materials: ["Mimic"]},
    {stars: "**", unit_name: "Sahuagin", materials: []},
    {stars: "**", unit_name: "Pirate Verica", materials: ["Water Nymph", "Water Nymph", "Water Spirit"]},
    {stars: "***", unit_name: "Plunderer Verica", materials: ["Water Nymph", "Water Idol", "Mimic", "Mimic"]},
    {stars: "****", unit_name: "Sea Prince Verica", materials: []},
    {stars: "**", unit_name: "Ramia", materials: ["Water Nymph", "Mimic", "Mimic"]},
    {stars: "***", unit_name: "Scylla", materials: []},
    {stars: "**", unit_name: "Rantoul", materials: ["Water Nymph", "Water Spirit", "Mimic"]},
    {stars: "***", unit_name: "Legtos", materials: ["Water Idol", "Water Spirit", "Water Spirit", "Mimic"]},
    {stars: "****", unit_name: "Legnaura", materials: []},
    {stars: "***", unit_name: "Undine", materials: ["Water Spirit", "Water Spirit", "Water Spirit", "Bat Mimic"]},
    {stars: "****", unit_name: "Siren", materials: ["Water Totem", "Water Idol", "Water Spirit", "Water Nymph", "Bat Mimic"]},
    {stars: "*****", unit_name: "Meltia", materials: []},
    {stars: "***", unit_name: "Knight Sergio", materials: ["Water Spirit", "Water Idol", "Bat Mimic"]},
    {stars: "****", unit_name: "Ice Ruler Sergio", materials: ["Water Nymph", "Water Nymph", "Water Idol", "Water Totem", "Water Pot"]},
    {stars: "*****", unit_name: "Ice Knight Sergio", materials: []},
    {stars: "***", unit_name: "Leviathan", materials: ["Water Idol", "Bat Mimic"]},
    {stars: "****", unit_name: "Loch Ness", materials: ["Water Nymph", "Water Spirit", "Water Totem", "Mimic", "Bat Mimic"]},
    {stars: "*****", unit_name: "Malnaplis", materials: ["Water Nymph", "Water Spirit", "Water Totem", "Miracle Totem", "Dragon Mimic"]},
    {stars: "******", unit_name: "Felneus", materials: []},
    {stars: "***", unit_name: "Captain Mega", materials: ["Water Spirit", "Water Spirit", "Water Spirit", "Water Idol"]},
    {stars: "****", unit_name: "War Captain Mega", materials: ["Water Nymph", "Water Nymph", "Water Idol", "Water Totem", "Bat Mimic"]},
    {stars: "*****", unit_name: "Commander Mega", materials: ["Water Idol", "Water Totem", "Water Pot", "Miracle Totem", "Dragon Mimic"]},
    {stars: "******", unit_name: "Sea King Mega", materials: []},
    {stars: "**", unit_name: "Stya", materials: ["Water Nymph", "Water Nymph", "Water Nymph", "Water Spirit", "Mimic"]},
    {stars: "***", unit_name: "Snow Blade Stya", materials: ["Water Nymph", "Water Nymph", "Water Spirit", "Water Idol", "Bat Mimic"]},
    {stars: "****", unit_name: "Frost Queen Stya", materials: ["Water Nymph", "Water Spirit", "Water Totem", "Water Pot", "Bat Mimic"]},
    {stars: "*****", unit_name: "Mother Snow Stya", materials: []},
    {stars: "***", unit_name: "Elimo", materials: ["Water Nymph", "Water Nymph", "Water Idol", "Mimic"]},
    {stars: "****", unit_name: "Royal Elimo", materials: ["Water Nymph", "Water Idol", "Water Totem", "Mimic", "Bat Mimic"]},
    {stars: "*****", unit_name: "Genius Elimo", materials: []},
    {stars: "***", unit_name: "Dean", materials: ["Water Nymph", "Water Nymph", "Water Nymph", "Water Idol"]},
    {stars: "****", unit_name: "Ice Mage Dean", materials: ["Water Idol", "Water Idol", "Water Totem", "Bat Mimic", "Bat Mimic"]},
    {stars: "*****", unit_name: "Ice Wizard Dean", materials: []},
    {stars: "**", unit_name: "Wendigo", materials: ["Water Spirit", "Mimic"]},
    {stars: "***", unit_name: "Hrungnir", materials: []},
    {stars: "**", unit_name: "Black Rose Elize", materials: ["Water Nymph", "Water Spirit"]},
    {stars: "***", unit_name: "Frozen Rose Elize", materials: []},
    {stars: "***", unit_name: "Water Ghost", materials: ["Fire Ghost", "Earth Ghost", "Thunder Ghost", "Light Ghost", "Metal Ghost"]},
    {stars: "****", unit_name: "Water King", materials: []},
    {stars: "***", unit_name: "Twin Gem Rickel", materials: ["Water Nymph", "Water Spirit", "Water Spirit", "Water Idol"]},
    {stars: "****", unit_name: "Twin Flash Rickel", materials: ["Water Idol", "Water Idol", "Water Totem", "Bat Mimic", "Bat Mimic"]},
    {stars: "*****", unit_name: "Twin Shot Rickel", materials: []},
    {stars: "****", unit_name: "Brave Knight Karl", materials: ["Water Idol", "Water Idol", "Water Totem", "Water Pot", "Water Pot"]},
    {stars: "*****", unit_name: "Ice Warrior Karl", materials: []},
    {stars: "****", unit_name: "Eliza", materials: ["Water Totem", "Water Idol", "Water Spirit", "Water Pot", "Dark Pot"]},
    {stars: "*****", unit_name: "Snow Sibyl Eliza", materials: []},
    {stars: "****", unit_name: "Polar Angel Tiara", materials: ["Water Idol", "Water Idol", "Water Totem", "Water Pot", "Bat Mimic"]},
    {stars: "*****", unit_name: "Ice Apostle Tiara", materials: []},
    {stars: "****", unit_name: "Hail Bot Reeze", materials: ["Water Nymph", "Water Spirit", "Water Idol", "Water Totem", "Water Pot"]},
    {stars: "*****", unit_name: "Hail Mech Reeze", materials: []},
    {stars: "***", unit_name: "Maiden Serin", materials: ["Water Spirit", "Water Spirit", "Water Idol", "Water Idol", "Mimic"]},
    {stars: "****", unit_name: "Gun Lady Serin", materials: ["Water Spirit", "Water Idol", "Water Idol", "Water Totem", "Bat Mimic"]},
    {stars: "*****", unit_name: "Gun Goddess Serin", materials: []}
  ];

  $('#search-unit').select2({
    data: units
  }).on('change', function(e) {
    console.log(e + "hello world");
    window.hello = e;
  });
});
