import * as THREE from './three.module.js';
const works=[
{title:'楼层',original:'ЭТАЖИ',spine:'МОЛЧАТ ДОМА — ЭТАЖИ',kind:'MUSIC',year:'2018',by:'Molchat Doma',theme:'fog',tag:'冰冷的建筑里，仍然有人在跳舞。',tabs:['唱片内页','声音切片','建筑回声'],body:['合成器铺开阴冷的空间，鼓机维持机械的步伐，低沉的人声像从隔壁房间传来。把这张唱片放进楼底，让整座档案楼从它的回声中长出来。','聆听线索：«На дне»、«Судно (Борис Рыжий)»、«Тоска»。留意重复的贝斯线如何让身体进入节拍，又让情绪停留在原地。','这座唱片建筑借用了封面中的退台结构：每一层都由独立的光盘盒构成。塑料、印刷封套与银色光盘，共同替换了原本的建筑材料。']},
{title:'花样年华',original:'IN THE MOOD FOR LOVE',spine:'花樣年華 / IN THE MOOD FOR LOVE',kind:'FILM',year:'2000',by:'王家卫',theme:'red',tag:'如果多一张船票，你会不会跟我走？',tabs:['放映室','镜头札记','色彩索引'],body:['一段关系藏在走廊、楼梯和擦肩而过的时刻里。重复的动作与音乐让时间变得黏稠，也让每一次微小的变化格外清晰。','从门框外观察人物，留意身体被墙壁和家具遮挡的方式。空间把亲近和距离同时放进一个镜头。','旗袍的花纹、昏黄的灯、暗红色的墙面。浓烈的颜色包裹着始终克制的动作。']},
{title:'寂静岭 2',original:'SILENT HILL 2',spine:'SILENT HILL 2',kind:'GAME',year:'2001',by:'Team Silent / KONAMI',theme:'fog',tag:'在我的不安梦境里，我看见了那座城镇。',tabs:['进入迷雾','空间档案','声音记忆'],body:['沿着通向小镇的道路走下去。雾遮住远处，也让玩家把注意力收回到脚步、呼吸和下一扇门。这里收藏的是 2001 年原作的记忆。','医院、公寓、旅馆：熟悉的日常空间逐渐发生偏移。重复的房间与难以辨认的走廊，把寻找变成一段内心旅程。','山冈晃把工业噪声与脆弱的旋律并置。可以从《Theme of Laura》和《Promise》开始，听见小镇的另一种温度。']},
{title:'银翼杀手',original:'BLADE RUNNER',spine:'BLADE RUNNER / THE FINAL CUT',kind:'FILM',year:'1982',by:'Ridley Scott',theme:'neon',tag:'雨、霓虹，以及会消失的记忆。',tabs:['放映室','城市切片','记忆档案'],body:['进入潮湿拥挤的未来洛杉矶。高楼、广告、街头摊位与残旧室内同时存在，一座城市容纳着多个时代。','看一看灯光穿过百叶窗的角度，以及烟雾如何让光束获得形状。未来感也来自旧材料被不断使用的痕迹。','照片成为记忆的凭证，复制人也拥有对过去的渴望。可以从这里追问：当记忆能够制造，一个人的连续性依靠什么？']},
{title:'OK Computer',original:'OK COMPUTER',spine:'RADIOHEAD — OK COMPUTER',kind:'MUSIC',year:'1997',by:'Radiohead',theme:'blue',tag:'连接越来越多，距离越来越远。',tabs:['唱片内页','聆听路径','时代残片'],body:['高速公路、交通工具、警报与疲惫的人声。唱片把技术承诺中的轻盈，与身体实际感到的失重叠在一起。','从《Airbag》进入，经过《Paranoid Android》，在《No Surprises》放慢脚步。试着留意优美旋律下面那些令人不安的词。','蓝白色的视觉残片像标识、手册和失真的信息。它们共同构成一种过量连接下的疏离感。']},
{title:'旺达与巨像',original:'SHADOW OF THE COLOSSUS',spine:'SHADOW OF THE COLOSSUS',kind:'GAME',year:'2005',by:'Team Ico / 上田文人',theme:'paper',tag:'穿过空旷，爬上一座活着的山。',tabs:['禁忌之地','尺度实验','旅途回声'],body:['一人、一马、一片寂静的土地。通往巨像的漫长路程，让每一次遭遇都拥有不同的重量。','巨像同时承担敌人与地形的角色。玩家需要观察、攀爬、停留，把一场战斗逐渐读成一段空间。','旅途中的风声与战斗时的音乐形成强烈落差。空白让宏大的时刻有了足够的回响。']},
{title:'潜行者',original:'STALKER',spine:'СТАЛКЕР / STALKER',kind:'FILM',year:'1979',by:'Andrei Tarkovsky',theme:'paper',tag:'你最深处的愿望，在房间里等你。',tabs:['进入区域','时间切片','房间'],body:['跟随潜行者，离开熟悉的秩序，走进“区域”。旅途不断改变方向，人物也不断重新理解自己的动机。','水、泥土、锈蚀的金属和缓慢移动的镜头，让观看获得一种近乎触觉的质感。时间在材料表面留下痕迹。','当一个房间能够满足最深处的愿望，跨进门槛也许会成为最困难的动作。我们对自己的欲望究竟知道多少？']},
{title:'黑暗之魂',original:'DARK SOULS',spine:'DARK SOULS / PREPARE TO DIE',kind:'GAME',year:'2011',by:'FromSoftware',theme:'red',tag:'火将熄灭。前路仍然相连。',tabs:['传火祭祀场','世界剖面','篝火余烬'],body:['每一次出发都从有限的补给开始。失败留下经验，也改变了下一次靠近敌人的步伐。','电梯、捷径与垂直落差，把看似遥远的地方重新接到一起。重返熟悉的地点时，玩家对整个世界的理解也发生变化。','篝火提供短暂的安全感。安静的火光、远方的危险与再次出发的犹豫，构成一种独特的节奏。']},
{title:'Discovery',original:'DISCOVERY',spine:'DAFT PUNK — DISCOVERY',kind:'MUSIC',year:'2001',by:'Daft Punk',theme:'neon',tag:'把未来装进一首旧日的舞曲。',tabs:['唱片内页','舞池入口','动画联想'],body:['采样、循环与电子处理，把熟悉的声音拼成闪亮的新世界。机械的精确里，保留着旋律的直接与温柔。','《One More Time》《Digital Love》《Something About Us》：从集体狂欢走向私人情绪，再回到舞池的光线里。','可以与《Interstella 5555》一起观看，观察整张唱片如何被延展为连续的动画叙事。']},
{title:'2001 太空漫游',original:'2001: A SPACE ODYSSEY',spine:'2001 / A SPACE ODYSSEY',kind:'FILM',year:'1968',by:'Stanley Kubrick',theme:'blue',tag:'越过木星，越过熟悉的尺度。',tabs:['登舱','形式档案','未知坐标'],body:['从骨头到航天器，一次剪辑跨过漫长的历史。影片把技术、身体与未知放到同一条难以测量的时间线上。','观察对称构图、旋转的空间和人物缓慢的移动。音乐让太空飞行获得舞蹈般的秩序。','黑石碑始终保留着解释的空隙。它让观看停在一种开放的状态：面对未知，我们急于寻找什么？']},
{title:'极乐迪斯科',original:'DISCO ELYSIUM',spine:'DISCO ELYSIUM / THE FINAL CUT',kind:'GAME',year:'2019',by:'ZA/UM',theme:'paper',tag:'废墟之上，思想还在争吵。',tabs:['瑞瓦肖','内心议会','城市记忆'],body:['在一间陌生的房间醒来，从零开始拼起自己。调查一桩案件，也逐渐进入一座城市的历史与伤口。','技能拥有自己的声音，会建议、打断、诱惑和误导。一个人的内心因此成为可以交谈的公共空间。','破损的墙面、褪色的标语与未完成的生活，让历史以物质形式留在街头。沿着这些痕迹，重新理解眼前的人。']}
];
const $=s=>document.querySelector(s),stage=$('#tower'),dialog=$('#detail');
let selected=0,opened=-1,openTimer,spin=0,drag=null;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const targets=Array(11).fill(0),cases=[],pickables=[];
const colors=['#c2c0a4','#751923','#859482','#181e2e','#dae4e5','#b7b8a6','#82784e','#191a1b','#b6ada4','#ebdfc9','#b59575'];
const inks=['#1b2b28','#efdbc3','#e7e8cc','#f89b68','#23353d','#333b2e','#ece6c3','#dfbf82','#28293e','#a33521','#282d2d'];
let scene,camera,renderer,root,raycaster;
const view={theta:.62,radius:18.8,height:.45},home={...view},aim=new THREE.Vector3(.25,4.35,-.45);
function choose(i){selected=i;const w=works[i];$('#currentNum').textContent=String(i+1).padStart(2,'0')+' / 11';$('#currentName').textContent=w.original+' · '+w.title;$('#currentType').textContent=w.kind+' / '+w.year;$('#tower').setAttribute('aria-label',`三维光盘建筑，当前选择第${i+1}层，${w.title}。上下键选择，Enter打开。`)}
function canvasTexture(width,height,draw){const c=document.createElement('canvas');c.width=width;c.height=height;draw(c.getContext('2d'),width,height);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=renderer?Math.min(8,renderer.capabilities.getMaxAnisotropy()):1;return t}
function labelTexture(w,i,back=false){return canvasTexture(back?768:1536,back?768:160,(c,W,H)=>{
 c.fillStyle=colors[i];c.fillRect(0,0,W,H);c.fillStyle=inks[i];
 if(back){c.font='24px Arial';c.fillText(w.kind+' / '+w.year,55,70);c.font='bold 42px Arial';const words=w.original.split(' ');let line='',y=170;for(const word of words){if(c.measureText(line+word).width>W-100){c.fillText(line,55,y);y+=54;line=''}line+=word+' '}c.fillText(line,55,y);c.globalAlpha=.5;c.fillRect(55,y+35,W-110,2);c.font='18px Arial';c.fillText(w.by,55,y+80);c.fillText('TAPE RAIN / PERMANENT COLLECTION',55,H-70);c.globalAlpha=.9;for(let n=0;n<52;n++){const x=W-210+n*2.4;c.fillRect(x,H-170,n%3===0?2:1,50)}c.font='14px monospace';c.fillText('ARCHIVE '+String(i+1).padStart(2,'0'),W-210,H-95)}
 else{c.globalAlpha=.2;c.fillRect(0,0,W,6);c.fillStyle=inks[i];c.globalAlpha=1;c.font='bold 38px Arial';c.fillText(w.kind==='GAME'?'DISC':w.kind==='FILM'?'DVD':'CD',40,98);c.fillRect(173,30,2,100);let size=65;c.font=`600 ${size}px Arial`;while(c.measureText(w.original).width>1090){size--;c.font=`600 ${size}px Arial`}c.fillText(w.original,210,104);c.font='24px monospace';c.fillText(w.year,1400,100)}
})}
function coverTexture(w,i){return canvasTexture(768,768,(c,W,H)=>{c.fillStyle=colors[i];c.fillRect(0,0,W,H);c.fillStyle=inks[i];c.font='22px monospace';c.fillText(w.kind+' / '+w.year,50,65);c.font='bold 64px Arial';let y=220;for(const word of w.original.split(' ')){let size=64;c.font=`bold ${size}px Arial`;while(c.measureText(word).width>660){size--;c.font=`bold ${size}px Arial`}c.fillText(word,50,y);y+=80}c.globalAlpha=.6;c.fillRect(50,620,668,2);c.font='21px Arial';c.fillText(w.by,50,665);c.font='16px monospace';c.fillText('TAPE RAIN / ARCHIVE EDITION',50,713)})}
function meshBox(w,h,d,material,parent,x=0,y=0,z=0){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
function makeCase(w,i){
 const group=new THREE.Group();group.position.set(-.5+i*.10,.78+i*.59,1.25-i*.235);root.add(group);
 const width=5.1,depth=4.65,h=.37;
 const black=new THREE.MeshStandardMaterial({color:i===4?0xc4c9c8:0x141b1e,roughness:.33,metalness:.25});
 const clear=new THREE.MeshPhysicalMaterial({color:0xc9dde0,roughness:.12,metalness:.12,transparent:true,opacity:.3,depthWrite:false,clearcoat:1,clearcoatRoughness:.08});
 const edge=new THREE.MeshStandardMaterial({color:0xa9b8b8,roughness:.19,metalness:.72});
 const paper=new THREE.MeshStandardMaterial({map:labelTexture(w,i,true),roughness:.8});
 const spine=new THREE.MeshStandardMaterial({map:labelTexture(w,i),roughness:.66});
 const cover=new THREE.MeshStandardMaterial({map:coverTexture(w,i),roughness:.58,side:THREE.DoubleSide});
 const back=meshBox(width-.13,.065,depth-.13,black,group,0,-h/2+.025,0);
 const backPaper=new THREE.Mesh(new THREE.PlaneGeometry(width-.25,depth-.25),paper);backPaper.rotation.x=Math.PI/2;backPaper.position.y=-h/2-.012;group.add(backPaper);
 // Black tray and an actual silver disc visible when its hinged lid opens.
 const disk=new THREE.Mesh(new THREE.CylinderGeometry(1.83,1.83,.022,64),new THREE.MeshPhysicalMaterial({color:0xc9d0ca,metalness:.95,roughness:.22,iridescence:1,iridescenceIOR:1.35,iridescenceThicknessRange:[100,380]}));disk.position.set(0,-.105,0);group.add(disk);
 const hub=new THREE.Mesh(new THREE.CylinderGeometry(.28,.28,.055,40),black);hub.position.set(0,-.078,0);group.add(hub);
 const ring=new THREE.Mesh(new THREE.TorusGeometry(.44,.016,8,48),edge);ring.rotation.x=Math.PI/2;ring.position.y=-.077;group.add(ring);
 // Four independent clear case walls and fine reflective seams.
 meshBox(width,h,.09,clear,group,0,0,depth/2);meshBox(width,h,.09,clear,group,0,0,-depth/2);
 meshBox(.09,h,depth,clear,group,width/2,0,0);meshBox(.09,h,depth,clear,group,-width/2,0,0);
 meshBox(width-.18,h-.09,.025,spine,group,0,0,depth/2+.051);
 meshBox(.13,h+.02,depth,black,group,width/2-.04,0,0);
 for(const y of [-h/2,h/2]){meshBox(width,.018,.024,edge,group,0,y,depth/2+.06);meshBox(.025,.018,depth,edge,group,-width/2,y,0)}
 for(let n=0;n<22;n++)meshBox(.11,h-.04,.016,edge,group,width/2+.011,0,-depth/2+.18+n*.19);
 // A physical hinge, not a flattened picture animation.
 const lid=new THREE.Group();lid.position.set(width/2,h/2,0);group.add(lid);
 meshBox(width,.045,depth,clear,lid,-width/2,0,0);
 const art=new THREE.Mesh(new THREE.PlaneGeometry(width-.22,depth-.2),cover);art.rotation.x=-Math.PI/2;art.position.set(-width/2,.028,0);lid.add(art);
 const lidEdge=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(width,.055,depth)),new THREE.LineBasicMaterial({color:0xc5d8d9,transparent:true,opacity:.65}));lidEdge.position.x=-width/2;lid.add(lidEdge);
 for(const z of [-depth/2+.2,depth/2-.2])meshBox(.19,.17,.33,edge,group,width/2+.015,.1,z);
 group.traverse(o=>{if(o.isMesh){o.userData.floor=i;pickables.push(o)}});
 cases.push({group,lid,base:group.position.clone(),cover,pull:0,angle:0});
 // Real cover images, when available, are loaded from bundled local assets.
 if(w.cover)new THREE.TextureLoader().load(w.cover,t=>{t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());cover.map.dispose();cover.map=t;cover.needsUpdate=true;const ratio=t.image.width/t.image.height;const cw=Math.min(width-.22,(depth-.2)*ratio),ch=cw/ratio;art.geometry.dispose();art.geometry=new THREE.PlaneGeometry(cw,ch)});
}
function cameraUpdate(){const r=view.radius;camera.position.set(Math.sin(view.theta)*r,view.height,Math.cos(view.theta)*r-.7);camera.lookAt(aim)}
function setup3D(){
 renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;renderer.setClearColor(0x132229,0);stage.appendChild(renderer.domElement);
 scene=new THREE.Scene();scene.fog=new THREE.Fog(0x132229,25,60);root=new THREE.Group();scene.add(root);
 camera=new THREE.PerspectiveCamera(39,1,.1,100);cameraUpdate();raycaster=new THREE.Raycaster();
 scene.add(new THREE.HemisphereLight(0xd6e4e2,0x26322f,2.2));
 const key=new THREE.DirectionalLight(0xffe9c1,4);key.position.set(-7,15,9);key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-11,right:11,top:13,bottom:-8,near:.1,far:45});key.shadow.bias=-.0005;key.shadow.normalBias=.035;scene.add(key);
 const rim=new THREE.DirectionalLight(0x83b8ce,2.8);rim.position.set(9,9,-6);scene.add(rim);
 const fill=new THREE.DirectionalLight(0xe0e6df,1.2);fill.position.set(4,2,12);scene.add(fill);
 const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:0x15282e,roughness:.94}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;ground.position.y=-.07;scene.add(ground);
 meshBox(5.5,.25,5.1,new THREE.MeshStandardMaterial({color:0x26383c,metalness:.6,roughness:.38}),root,-.5,.15,1.25);
 meshBox(4.4,.45,3.9,new THREE.MeshStandardMaterial({color:0x101c22,metalness:.35,roughness:.5}),root,-.5,.45,1.25);
 works.forEach(makeCase);
 const resize=()=>{const b=stage.getBoundingClientRect();renderer.setSize(b.width,b.height,false);camera.aspect=b.width/b.height;camera.fov=camera.aspect<1.05?THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(39/2))*1.05/camera.aspect)):39;camera.updateProjectionMatrix()};new ResizeObserver(resize).observe(stage);resize();
 const pointer=new THREE.Vector2();function hit(e){const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);return raycaster.intersectObjects(pickables,false)[0]?.object.userData.floor??-1}
 stage.addEventListener('pointerdown',e=>{if(e.button!==0||dialog.open)return;const i=hit(e);stage.setPointerCapture(e.pointerId);drag={i,x:e.clientX,y:e.clientY,moved:0,theta:view.theta,height:view.height,start:i>=0?targets[i]:0};if(i>=0)choose(i);stage.classList.add('grabbing')});
 stage.addEventListener('pointermove',e=>{if(!drag){const i=hit(e);stage.style.cursor=i>=0?'grab':'move';if(i>=0&&opened<0)choose(i);return}const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.moved=Math.max(drag.moved,Math.hypot(dx,dy));if(drag.i>=0){const r=stage.getBoundingClientRect();targets[drag.i]=THREE.MathUtils.clamp(drag.start+(-dx+dy*.25)/r.width*12,0,4.8)}else{view.theta=drag.theta-dx*.005;view.height=THREE.MathUtils.clamp(drag.height+dy*.015,-.2,12);cameraUpdate()}});
 stage.addEventListener('pointerup',e=>{if(!drag)return;const d=drag;drag=null;stage.classList.remove('grabbing');if(stage.hasPointerCapture(e.pointerId))stage.releasePointerCapture(e.pointerId);if(d.i>=0){if(d.moved<8||targets[d.i]>1)openFloor(d.i);else targets[d.i]=0}});
 stage.addEventListener('pointercancel',()=>{if(drag?.i>=0)targets[drag.i]=0;drag=null;stage.classList.remove('grabbing')});
 stage.addEventListener('wheel',e=>{e.preventDefault();view.radius=THREE.MathUtils.clamp(view.radius+e.deltaY*.015,12,28);cameraUpdate()},{passive:false});
 stage.addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown','Enter',' '].includes(e.key))e.preventDefault();if(e.key==='ArrowUp')choose((selected+1)%11);if(e.key==='ArrowDown')choose((selected+10)%11);if(e.key==='Enter'||e.key===' ')openFloor(selected);if(e.key==='Escape')resetView()});
 renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();$('#sceneStatus').textContent='三维画面暂时中断，请刷新恢复。楼层索引仍可使用。';$('#sceneStatus').hidden=false});
 renderer.setAnimationLoop(()=>{for(let i=0;i<cases.length;i++){const c=cases[i];c.pull+=(targets[i]-c.pull)*(reduced?1:.11);c.group.position.copy(c.base);c.group.position.z+=c.pull;c.group.position.y+=Math.min(c.pull,.4)*.15;const a=opened===i&&c.pull>2.3?-.95:0;c.angle+=(a-c.angle)*(reduced?1:.075);c.lid.rotation.z=c.angle}renderer.render(scene,camera)});
}
function resetView(){Object.assign(view,home);if(camera)cameraUpdate()}
function openFloor(i){clearTimeout(openTimer);targets.fill(0);targets[i]=4.35;opened=i;choose(i);$('#floorIndex').hidden=true;$('#indexToggle').setAttribute('aria-expanded','false');openTimer=setTimeout(()=>{renderDetail(i);if(!dialog.open)dialog.showModal()},reduced?0:1000)}
function renderDetail(i){const w=works[i];dialog.className='theme-'+w.theme;$('#detailNum').textContent='FLOOR '+String(i+1).padStart(2,'0');$('#detailKind').textContent=w.kind+' / '+w.year;$('#originalTitle').textContent=w.original;$('#detailTitle').textContent=w.title;$('#detailSubtitle').textContent=w.tag;$('#credit').textContent=w.by+' / '+w.year;$('#discLabel').textContent=w.original;$('#disc').style.transform='rotate(-18deg)';spin=-18;$('#disc').classList.remove('reference-disc');$('#tabs').innerHTML='';w.tabs.forEach((t,k)=>{const b=document.createElement('button');b.textContent=t;b.addEventListener('click',()=>setTab(k));$('#tabs').appendChild(b)});setTab(0)}
function setTab(k){const w=works[opened];[...$('#tabs').children].forEach((b,j)=>{b.classList.toggle('selected',j===k);b.setAttribute('aria-pressed',String(j===k))});$('#tabContent').replaceChildren();const p=document.createElement('p');p.textContent=w.body[k];$('#tabContent').appendChild(p);const s=document.createElement('small');s.textContent='磁带雨 · 档案札记 / '+String(k+1).padStart(2,'0');$('#tabContent').appendChild(s)}
function closeFloor(){clearTimeout(openTimer);dialog.close();opened=-1;targets.fill(0);stage.focus({preventScroll:true})}
$('#close').onclick=closeFloor;dialog.addEventListener('cancel',e=>{e.preventDefault();closeFloor()});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeFloor()}});$('#disc').onclick=()=>{$('#disc').style.transform=`rotate(${spin+=360}deg)`};$('#next').onclick=()=>{const j=(opened+1)%11;targets.fill(0);targets[j]=4.35;opened=j;choose(j);renderDetail(j)};$('#reset').onclick=()=>{closeFloor();resetView()};$('#viewReset').onclick=resetView;
$('#indexToggle').onclick=()=>{const n=$('#floorIndex');n.hidden=!n.hidden;$('#indexToggle').setAttribute('aria-expanded',String(!n.hidden))};[...works].reverse().forEach((w,n)=>{const i=10-n,b=document.createElement('button');const a=document.createElement('span'),c=document.createElement('span');a.textContent=String(i+1).padStart(2,'0')+' / '+w.title;c.textContent=w.kind;b.append(a,c);b.onclick=()=>openFloor(i);$('#floorIndex').appendChild(b)});
choose(0);
fetch('./covers.json').then(r=>r.ok?r.json():{}).catch(()=>({})).then(covers=>{works.forEach((w,i)=>{if(covers[i])w.cover=covers[i].path});try{setup3D()}catch(error){$('#sceneStatus').hidden=false;$('#sceneStatus').textContent='当前浏览器无法启动三维画面。可先通过楼层索引打开收藏，或开启浏览器硬件加速后刷新。';$('#floorIndex').hidden=false;$('#indexToggle').setAttribute('aria-expanded','true');console.error(error)}});
