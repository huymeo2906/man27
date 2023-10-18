import { useState, useCallback } from "react";
import Chat from "../components/Chat";
import PortalPopup from "../components/PortalPopup";
import More from "../components/More";
import Toggle from "../components/Toggle";
import styles from "./ChiTitCngVicNew.module.css";

const ChiTitCngVicNew = () => {
  const [isChatOpen, setChatOpen] = useState(false);
  const [isMoreOpen, setMoreOpen] = useState(false);
  const [isToggleOpen, setToggleOpen] = useState(false);

  const openChat = useCallback(() => {
    setChatOpen(true);
  }, []);

  const closeChat = useCallback(() => {
    setChatOpen(false);
  }, []);

  const openMore = useCallback(() => {
    setMoreOpen(true);
  }, []);

  const closeMore = useCallback(() => {
    setMoreOpen(false);
  }, []);

  const openToggle = useCallback(() => {
    setToggleOpen(true);
  }, []);

  const closeToggle = useCallback(() => {
    setToggleOpen(false);
  }, []);

  return (
    <>
      <div className={styles.chiTitCngVicNew}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.uleftArrowToLeftParent}>
              <img
                className={styles.uleftArrowToLeftIcon}
                alt=""
                src="/uleftarrowtoleft.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.tag}>
                      <div className={styles.daysLeft}>Agile</div>
                      <div className={styles.ucodeBranchParent}>
                        <img
                          className={styles.ucodeBranchIcon}
                          alt=""
                          src="/ucodebranch.svg"
                        />
                        <div className={styles.daysLeft1}>Xem quy trình</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.ulinkAltWrapper}>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/ulinkalt.svg"
                    />
                  </div>
                  <div className={styles.ulinkAltWrapper}>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/usharealt.svg"
                    />
                  </div>
                  <div className={styles.frameParent1} onClick={openChat}>
                    <div className={styles.ucommentDotsWrapper}>
                      <img
                        className={styles.ulinkAltIcon}
                        alt=""
                        src="/ucommentdots.svg"
                      />
                    </div>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>2</div>
                    </div>
                  </div>
                  <div className={styles.unotifiacationWrapper}>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/unotifiacation.svg"
                    />
                  </div>
                  <div className={styles.uellipsisHWrapper} onClick={openMore}>
                    <img
                      className={styles.ulinkAltIcon}
                      alt=""
                      src="/uellipsish.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3} onClick={openToggle}>
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/progress.svg"
                  />
                </div>
                <img className={styles.downIcon} alt="" src="/down.svg" />
              </div>
              <div className={styles.tasknameParent}>
                <div
                  className={styles.taskname}
                >{`Thiết kế giao diện Dashboard & Todo-list`}</div>
                <div className={styles.taskname1}>Thiết kế UI/UX</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent5}>
                <div className={styles.frameParent6}>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Người giao việc</div>
                    <div className={styles.info}>
                      <div className={styles.input}>
                        <div className={styles.usearchParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/usearch.svg"
                          />
                          <div className={styles.searchParent}>
                            <div className={styles.search}>Nhập thông tin</div>
                            <div className={styles.frameChild} />
                          </div>
                        </div>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Người thực hiện</div>
                    <div className={styles.info}>
                      <div className={styles.input1}>
                        <div className={styles.usearchParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/usearch.svg"
                          />
                          <div className={styles.searchParent}>
                            <div className={styles.search}>...</div>
                            <div className={styles.frameItem} />
                          </div>
                        </div>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Người theo dõi</div>
                    <div className={styles.info}>
                      <div className={styles.input1}>
                        <div className={styles.usearchParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/usearch.svg"
                          />
                          <div className={styles.searchParent}>
                            <div className={styles.search}>...</div>
                            <div className={styles.frameItem} />
                          </div>
                        </div>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Thời gian thực hiện</div>
                    <div className={styles.info}>
                      <div className={styles.input1}>
                        <div className={styles.usearchParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/usearch.svg"
                          />
                          <div className={styles.searchParent}>
                            <div className={styles.search}>...</div>
                            <div className={styles.frameItem} />
                          </div>
                        </div>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Nguồn lực</div>
                    <div className={styles.info}>
                      <div className={styles.input1}>
                        <div className={styles.usearchParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/usearch.svg"
                          />
                          <div className={styles.searchParent}>
                            <div className={styles.search}>...</div>
                            <div className={styles.frameItem} />
                          </div>
                        </div>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Khẩn cấp</div>
                    <div className={styles.switchWrapper}>
                      <div className={styles.switch}>
                        <div className={styles.rectangleParent}>
                          <div className={styles.groupChild} />
                          <div className={styles.groupItem} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ngiGiaoVicParent}>
                    <div className={styles.ngiGiaoVic}>Sprint</div>
                    <div className={styles.info}>
                      <div className={styles.input1}>
                        <div className={styles.usearchParent}>
                          <img
                            className={styles.usearchIcon}
                            alt=""
                            src="/usearch.svg"
                          />
                          <div className={styles.searchParent}>
                            <div className={styles.search}>...</div>
                            <div className={styles.frameItem} />
                          </div>
                        </div>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.uplusParent}>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/uplus.svg"
                  />
                  <div className={styles.daysLeft}>Thêm thuộc tính</div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <div className={styles.downWrapper}>
                    <img className={styles.downIcon1} alt="" src="/down1.svg" />
                  </div>
                  <div className={styles.mT}>Mô tả</div>
                </div>
                <div className={styles.ueditAltWrapper}>
                  <img
                    className={styles.ulinkAltIcon}
                    alt=""
                    src="/ueditalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <div className={styles.downWrapper}>
                    <img className={styles.downIcon1} alt="" src="/down1.svg" />
                  </div>
                  <div className={styles.mT}>Tài liệu</div>
                </div>
                <div className={styles.ueditAltWrapper}>
                  <img
                    className={styles.ulinkAltIcon}
                    alt=""
                    src="/uplus1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <div className={styles.downWrapper}>
                    <img className={styles.downIcon1} alt="" src="/down1.svg" />
                  </div>
                  <div className={styles.mT}>File đính kèm</div>
                </div>
                <div className={styles.ueditAltWrapper}>
                  <img
                    className={styles.ulinkAltIcon}
                    alt=""
                    src="/upaperclip.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper2}>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <div className={styles.downWrapper}>
                    <img className={styles.downIcon1} alt="" src="/down1.svg" />
                  </div>
                  <div className={styles.mT}>Subtasks</div>
                </div>
                <div className={styles.ueditAltWrapper}>
                  <img
                    className={styles.ulinkAltIcon}
                    alt=""
                    src="/uplus1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper6}>
              <div className={styles.frameParent7}>
                <div className={styles.frameParent8}>
                  <div className={styles.downWrapper}>
                    <img className={styles.downIcon1} alt="" src="/down1.svg" />
                  </div>
                  <div className={styles.mT}>Check list</div>
                </div>
                <div className={styles.ueditAltWrapper}>
                  <img
                    className={styles.ulinkAltIcon}
                    alt=""
                    src="/uplus1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper7}>
            <div className={styles.avtParent}>
              <div className={styles.avt}>
                <div className={styles.userpic} />
                <div className={styles.state} />
                <div className={styles.label}>HN</div>
              </div>
              <div className={styles.nhpNiDungParent}>
                <div className={styles.nhpNiDung}>Nhập nội dung</div>
                <div className={styles.avtParent}>
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/upaperclip1.svg"
                  />
                  <img
                    className={styles.progressIcon}
                    alt=""
                    src="/uimageupload.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modalfooter}>
            <div className={styles.avtParent}>
              <div className={styles.button}>
                <img
                  className={styles.progressIcon}
                  alt=""
                  src="/usearch.svg"
                />
                <div className={styles.daysLeft}>Duyệt</div>
              </div>
              <div className={styles.button1}>
                <img className={styles.usearchIcon} alt="" src="/usearch.svg" />
                <button onClick={this.handleClick}>Hủy bỏ</button>
              </div>
              <div className={styles.button2}>
                 <button onClick={this.handleClick}>Cập nhật</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isChatOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChat}
        >
          <Chat onClose={closeChat} />
        </PortalPopup>
      )}
      {isMoreOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMore}
        >
          <More onClose={closeMore} />
        </PortalPopup>
      )}
      {isToggleOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeToggle}
        >
          <Toggle onClose={closeToggle} />
        </PortalPopup>
      )}
    </>
  );
};

export default ChiTitCngVicNew;
