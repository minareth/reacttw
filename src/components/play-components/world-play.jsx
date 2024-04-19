import { useState, useContext } from 'react';
import { StoreContext } from '../../lib/context/context.ts';
import { HomeBasePlay } from './home-base-play.tsx';
import { LocationsPlay } from './locations-play.tsx';
import { NpcPlay } from './npc-play.tsx';
import { VendorsPlay } from './vendors-play.tsx';

const WORLD_TAB_TYPES = {
  "HOMEBASE": "homebase",
  "LOCATIONS": "locations",
  "NPC": "npc",
  "VENDORS": "vendors",
}

export const WorldPlay = () => {
  const { store } = useContext(StoreContext);
  const [activeStats, setActiveStats] = useState(WORLD_TAB_TYPES.STATS);

  return <div className="char">
    {store?.char && <div>
      <div onClick={() => setActiveStats(WORLD_TAB_TYPES.HOMEBASE)} className={(activeStats === WORLD_TAB_TYPES.HOMEBASE ? 'text-blue-500 ' : '') + 'inline-block pr-3 cursor-pointer'}>Home location</div>
      <div onClick={() => setActiveStats(WORLD_TAB_TYPES.LOCATIONS)} className={(activeStats === WORLD_TAB_TYPES.LOCATIONS ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r border-l cursor-pointer'}>Locations</div>
      <div onClick={() => setActiveStats(WORLD_TAB_TYPES.NPC)} className={(activeStats === WORLD_TAB_TYPES.NPC ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>NPC</div>
      <div onClick={() => setActiveStats(WORLD_TAB_TYPES.VENDORS)} className={(activeStats === WORLD_TAB_TYPES.VENDORS ? 'text-blue-500 ' : '') + 'inline-block pr-2 pl-2 border-black border-solid border-r cursor-pointer'}>Vendors</div>
    </div>}
    <br />
    {store?.char && activeStats === WORLD_TAB_TYPES.HOMEBASE && <HomeBasePlay char={store?.char} />}
    {store?.char && activeStats === WORLD_TAB_TYPES.LOCATIONS && <LocationsPlay char={store?.char} />}
    {store?.char && activeStats === WORLD_TAB_TYPES.NPC && <NpcPlay char={store?.char} />}
    {store?.char && activeStats === WORLD_TAB_TYPES.VENDORS && <VendorsPlay char={store?.char} />}
  </div>
}
