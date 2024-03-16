import { useState, useContext } from 'react';
import { StoreContext } from '../../lib/context/context.ts';
import { StatsPlay } from './stats-play.tsx';
import { upgradeChar, getSingleChar } from '../../lib/api/api.ts';
import { SecondaryPlay } from './secondary-play.tsx';
import { SkillsPlay } from './skills-play.tsx';
import { InventoryPlay } from './inventory-play.tsx';
import { EquipmentPlay } from './equipment-play.tsx';
import { ReputationPlay } from './reputation-play.tsx';
import { PropertyPlay } from './property-play.tsx';

const STATS_TAB_TYPES = {
  "STATS": "stats",
  "SECONDARY": "secondary",
  "SKILLS": "skills",
  "INVENTORY": "inventory",
  "EQUIPMENT": "equipment",
  "REPUTATION": "reputation",
  "PROPERTY": "property",
  "OPERATIONS": "operations",
}

export const CharPlay = () => {
  const { store, setStore } = useContext(StoreContext);
  const [activeStats, setActiveStats] = useState(STATS_TAB_TYPES.STATS);

  const updateStore = (charData) => {
    //@ts-ignore
    setStore({ ...store, char: charData });
    console.log(store);
  }

  const doUpgrade = (id, type, name) => {
    upgradeChar(id, type, name).then(() => {
      getSingleChar(id).then(res => {
        console.log('getSingleChar', res?.data);
        if (res?.data) {
          updateStore(res?.data)
          setActiveStats(activeStats);
        };
      });
    });
  };

  return <div className="char">
    {store?.char && <div>
      <div onClick={() => setActiveStats(STATS_TAB_TYPES.STATS)} className={(activeStats === STATS_TAB_TYPES.STATS ? 'text-blue-500 ' : '') + 'inline-block pr-3 cursor-pointer'}>Primary Stats</div>
      <div onClick={() => setActiveStats(STATS_TAB_TYPES.SECONDARY)} className={(activeStats === STATS_TAB_TYPES.SECONDARY ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r border-l cursor-pointer'}>Secondary Stats</div>
      <div onClick={() => setActiveStats(STATS_TAB_TYPES.SKILLS)} className={(activeStats === STATS_TAB_TYPES.SKILLS ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Skills</div>
      <div onClick={() => setActiveStats(STATS_TAB_TYPES.INVENTORY)} className={(activeStats === STATS_TAB_TYPES.INVENTORY ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Inventory</div>
      <div onClick={() => setActiveStats(STATS_TAB_TYPES.EQUIPMENT)} className={(activeStats === STATS_TAB_TYPES.EQUIPMENT ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Equipment</div>
      <div onClick={() => setActiveStats(STATS_TAB_TYPES.REPUTATION)} className={(activeStats === STATS_TAB_TYPES.REPUTATION ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Reputation</div>
      <div onClick={() => setActiveStats(STATS_TAB_TYPES.PROPERTY)} className={(activeStats === STATS_TAB_TYPES.PROPERTY ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 cursor-pointer'}>Property</div>
    </div>}
    <br />
    {store?.char && activeStats === STATS_TAB_TYPES.STATS && <StatsPlay char={store?.char} upgrade={doUpgrade} />}
    {store?.char && activeStats === STATS_TAB_TYPES.SECONDARY && <SecondaryPlay char={store?.char} />}
    {store?.char && activeStats === STATS_TAB_TYPES.SKILLS && <SkillsPlay char={store?.char} upgrade={doUpgrade} />}
    {store?.char && activeStats === STATS_TAB_TYPES.INVENTORY && <InventoryPlay char={store?.char} upgrade={doUpgrade} />}
    {store?.char && activeStats === STATS_TAB_TYPES.EQUIPMENT && <EquipmentPlay char={store?.char} upgrade={doUpgrade} />}
    {store?.char && activeStats === STATS_TAB_TYPES.REPUTATION && <ReputationPlay char={store?.char} upgrade={doUpgrade} />}
    {store?.char && activeStats === STATS_TAB_TYPES.PROPERTY && <PropertyPlay char={store?.char} upgrade={doUpgrade} />}
    {!store?.char && <div>{"Character is not selected"}</div>}
  </div>
}
