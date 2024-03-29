import React, { useState, useEffect } from 'react'
import { parse } from 'qs'
import { PageHeader, Icon } from 'antd';
import Styles from "../css/playlist.css";
import { get } from "../utils/request"
import Playsonglist from "../components/playsonglist/playsonglist"

function playlist(props) {
  // console.log(props);

  const queryData = parse(props.location.search, {
    ignoreQueryPrefix: true,  //忽略掉？前缀
  })
  //console.log(queryData)
  const id = queryData.id;
  const [music, setMusic] = useState([]);
  const [musicName, setMusicName] = useState([]);
  const [musicDetail, setMusicDetail] = useState([]);
  // const showDetail = id => {




  useEffect(() => {
    get("/song/detail", { ids: id }).then(res => {
      setMusicName(res.data.songs[0].ar[0])
      setMusic(res.data.songs[0])
    }

    );
  }, []);



  console.log(music);
  // useEffect(() => {
  //   get("/song/url", { id: id })
  //     .then(res =>
  //       console.log(res.data),
  //       //setMusic(res.data.songs[0].al)
  //     )
  // }, []);



  return (
    <div className={Styles.main}>
      {/* 头部导航栏 */}
      <div className={Styles.header}>
        {/* <PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" /> */}
        <span className={Styles.back}><Icon type="left" /></span>
        <span className={Styles.name}>
          <span className={Styles.songname}>{music.name}</span><br />
          <span className={Styles.singer}>{musicName.name}</span>
          {/* {
            music.map(song => {
              return (
                <span className={Styles.singer}>{song.name}</span>
              )
            })

          } */}
        </span>
        <span className={Styles.share}><Icon type="share-alt" /></span>
      </div>
      <hr />
      {/* 头部导航栏结束 */}
      {/* 中间内容部分 */}
      <div className={Styles.section}>
        <div className={Styles.round}>
          <img src="" style={{ width: "3rem", height: "3rem", borderRadius: "50%" }} />
        </div>



      </div>
      <div >
        <div className={Styles.Icontop}>
          <span><Icon type="heart" /></span>
          <span><Icon type="download" /></span>
          <span><Icon type="message" /></span>
          <span><Icon type="more" /></span>
        </div>
        <div>
          {/* <audio src="../test/蔡健雅 - 空白格.mp3" controls="controls"></audio > */}
          <div className={Styles.progress}>
            <span className={Styles.start}></span>
            <div className={Styles.progressbar}>
              <div className={Styles.now}></div>
            </div>
            <span className={Styles.end}></span>
          </div>
        </div>
        <div className={Styles.Iconbottom}>
          <span><Icon type="sync" /></span>
          <span><Icon type="step-backward" /></span>
          <span className={Styles.play}><Icon type="play-circle" /></span>
          <span><Icon type="step-forward" /></span>
          <span onClick={() => { this.setState({ show: true }) }} > <Icon type="unordered-list" /></span>
        </div>
        {/* 播放的歌曲列表 */}

        {/* <Playsonglist className={this.state.show ? 'show more' : 'more'} /> */}


      </div>
    </div>
  )
}

export default playlist
