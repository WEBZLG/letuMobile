function t(t) {
	return t && t.__esModule ? t : {
		default: t
	};
}

t(require("../../utils/httpRequest"));

var s = t(require("./../../config/api")),
	i = (t(require("./../../utils/util")),
		require("../../utils/promisify"), getApp()),
	a = "",
	e = "album",
	o = "height",
	n = 0,
	l = 0,
	d = 0,
	h = 0,
	c = {
		x: 0,
		y: 0
	},
	r = {
		x: 0,
		y: 0
	},
	u = {
		x: 0,
		y: 0
	},
	m = 0,
	p = {
		id: 0
	},
	g = [],
	w = {
		playimg: "../../assets/images/4play1@2x.png",
		pauseimg: "../../assets/images/bofang.gif",
		addimg: "../../assets/images/4add.png",
		cancelimg: "../../assets/images/4xuanze@2x.png"
	},
	f = !1,
	v = {
		who: "",
		id: 0
	},
	x = {
		new: {
			type_id: 0,
			id: 0
		},
		old: {
			type_id: 0,
			id: 0
		}
	},
	_ = !1,
	y = !1,
	b = -1,
	T = [],
	C = !1,
	S = !0,
	N = !1,
	z = "",
	k = "",
	P = 0,
	D = {
		yes: "../../assets/images/4xuanze.png",
		no: "../../assets/images/4huati.png"
	},
	F = wx.createInnerAudioContext();

F.obeyMuteSwitch = !1, F.autoplay = !1, F.loop = !0;

var V = wx.createInnerAudioContext();

V.obeyMuteSwitch = !1, V.autoplay = !1, V.loop = !1;

var I = "none";

Page({
	data: {
		chooseVideo: 0,
		models: "defaultmodel",
		showwrappers: "visible",
		picsize: {
			height: 0,
			width: 0
		},
		previewsize: {
			height: 0,
			width: 0
		},
		tempFilePath: "",
		size: 0,
		duration: 0,
		movableviewNum: [{
			id: "movableview0",
			width: 80,
			height: 80,
			show: "none",
			x: 0,
			y: 0,
			pic: "",
			rotate: 0
		}, {
			id: "movableview1",
			width: 80,
			height: 80,
			show: "none",
			x: 0,
			y: 0,
			pic: "",
			rotate: 0
		}, {
			id: "movableview2",
			width: 80,
			height: 80,
			show: "none",
			x: 0,
			y: 0,
			pic: "",
			rotate: 0
		}],
		oldCoordinatey: 0,
		originMovableview: {
			x: 10,
			y: 0
		},
		oldVideoSize: {
			width: 0,
			height: 0
		},
		previewpic: "",
		photoFrame: 0,
		photoFramePic: {
			top: "",
			bottom: ""
		},
		filters: [{
			filterdiv: "chosefilterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-0.png",
			chose: "../../assets/images/2attention3@2x.png",
			name: "原画",
			id: "none"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-1.png",
			chose: "../../assets/filter/4filter-1.png",
			name: "秘语",
			id: "vintage"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-2.png",
			chose: "../../assets/filter/4filter-2.png",
			name: "绿光",
			id: "strong_contrast"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-3.png",
			chose: "../../assets/filter/4filter-3.png",
			name: "消逝",
			id: "medium_contrast"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-4.png",
			chose: "../../assets/filter/4filter-4.png",
			name: "暗淡",
			id: "linear_contrast"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-5.png",
			chose: "../../assets/filter/4filter-5.png",
			name: "明亮",
			id: "lighter"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-6.png",
			chose: "../../assets/filter/4filter-6.png",
			name: "原画1",
			id: "increase_contrast"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-7.png",
			chose: "../../assets/filter/4filter-7.png",
			name: "秘语1",
			id: "darker"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-8.png",
			chose: "../../assets/filter/4filter-8.png",
			name: "绿光1",
			id: "cross_process"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-9.png",
			chose: "../../assets/filter/4filter-9.png",
			name: "消逝1",
			id: "color_negative"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-0.png",
			chose: "../../assets/filter/4filter-0.png",
			name: "暗淡1",
			id: "boxblur"
		}, {
			filterdiv: "filterdiv",
			ispic: "../../assets/images/2attention3@2x.png",
			nopic: "../../assets/filter/4filter-0.png",
			chose: "../../assets/filter/4filter-0.png",
			name: "明亮1",
			id: "black_white"
		}],
		photoframes: [],
		pasters_type: [],
		pasterbegin: 0,
		pasters: [],
		pasterId: [],
		hiddenpaster: "flex",
		nowpasterId: 1,
		pastersrequest: [],
		musics: [],
		musicbegin: 0,
		musiclists: [],
		showmusiclists: [],
		showoption: "flex",
		showfilter: "none",
		showphotoFrame: "none",
		showpaster: "none",
		showmusic: "none",
		showmusiclist: "none",
		showpause: "flex",
		showVideosPic: "flex",
		showtextcontent: "block",
		showtopictype: "none",
		showsure: "flex",
		topic: "原创",
		topics: [],
		publish: [{
			pic: "",
			width: 0,
			height: 0,
			x: 0,
			y: 0,
			rotate: 0
		}, {
			pic: "",
			width: 0,
			height: 0,
			x: 0,
			y: 0,
			rotate: 0
		}, {
			pic: "",
			width: 0,
			height: 0,
			x: 0,
			y: 0,
			rotate: 0
		}],
		uploadContent: {
			video_url: "",
			filter: "none",
			video_desc: "",
			join_sub_id: -1,
			join_sub: -1,
			audio_url: "",
			audio_id: "",
			tiezhi_arr: [],
			xiangkuan_arr: []
		},
		myUpload: [{
			img_url: "",
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}, {
			img_url: "",
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}, {
			img_url: "",
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}],
		photoFramearr: [{
			img_url: "",
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}, {
			img_url: "",
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}],
		showovercover: "none",
		compose_success: !0,
		showsubmission: "none",
		wrappers_width: "100%",
		wrappers_height: "100%",
		isShowTopic: !0,
		topicHeight: 7
	},
	onLoad: function(t) {
		console.log("onLoad"), e = t.usermethod;
		var s = this;
		wx.getSystemInfo({
			success: function(t) {
				console.log("看我看我看我"), l = t.windowWidth, d = t.windowHeight, s.data.oldCoordinatey = 0,
					t.model.indexOf("iPhone X") > -1 || t.model.indexOf("iPhone11") > -1 ? s.data.models = "iphoneX" : t.model.indexOf("BLA-AL00") > -1 ? s.data.models = "huaweimate10plus" : t.model.indexOf("ONEPLUS A5010") > -1 ? s.data.models = "oneplus5t" : t.model.indexOf("MI 8") > -1 && (s.data.models = "xiaomi8"),
					s.data.originMovableview.x = l / 2 - 40, s.data.originMovableview.y = d / 2 - 40,
					h = 69 * l / 75;
				for(var i = 0; i < 3; i++) s.data.movableviewNum[i].x = s.data.originMovableview.x,
					s.data.movableviewNum[i].y = s.data.originMovableview.y;
				s.setData({
					models: s.data.models,
					originMovableview: s.data.originMovableview,
					movableviewNum: s.data.movableviewNum,
					isShowTopic: !0
				});
			}
		}), a = i.globalData.userInfo.nickName, console.log(d);
	},
	onReady: function() {
		this.videoContext1 = wx.createVideoContext("myVideo1"), console.log("onReady"),
			console.log("选取本地视频");
		var t = this;
		wx.chooseVideo({
			sourceType: [e],
			maxDuration: 30,
			camera: "back",
			success: function(a) {
				console.log("选取视频"), console.log(a);
				var n = a.tempFilePath;
				if("mp4" === n.substring(n.length - 3) || "mov" === n.substring(n.length - 3) || "avi" === n.substring(n.length - 3)) {
					console.log(n.substring(n.length - 3)), t.data.oldVideoSize.height = a.height, t.data.oldVideoSize.width = a.width,
						o = a.height > a.width ? "height" : "width";
					var c = a.height / a.width;
					if("height" === o ? (t.data.picsize.height = d, t.data.picsize.width = d / c, t.data.previewsize.height = h,
							t.data.previewsize.width = h / c, t.data.photoFrame = 0) : (t.data.picsize.width = l,
							t.data.picsize.height = l * c, t.data.previewsize.width = h, t.data.previewsize.height = h * c,
							t.data.photoFrame = (d - t.data.picsize.height) / 2), wx.showToast({
							title: "选取视频成功",
							icon: "success",
							duration: 2e3
						}), t.setData({
							tempFilePath: a.tempFilePath,
							duration: a.duration,
							oldVideoSize: t.data.oldVideoSize,
							size: (a.size / 1048576).toFixed(2),
							picsize: t.data.picsize,
							previewsize: t.data.previewsize,
							photoFrame: t.data.photoFrame
						}), console.log(t.data.oldVideoSize), wx.showLoading({
							title: "视频上传中",
							mask: !0
						}), "camera" === e && (console.log("拍摄视频"), wx.saveVideoToPhotosAlbum({
							filePath: a.tempFilePath,
							success: function(t) {
								console.log(t);
							},
							fail: function(t) {
								console.log(t.errMsg);
							}
						})), t.data.size > 100) {
						wx.showToast({
							title: "上传的视频大小不能超过100M！",
							icon: "none",
							duration: 1500,
							mask: !0
						});
						var r = setTimeout(function() {
							i.shootsuccess = "camera" === e, wx.navigateBack({
								delta: 1
							}), clearTimeout(r);
						}, 1500);
					} else if(t.data.duration > 30) {
						wx.showToast({
							title: "上传的视频拍摄时间不能大于30秒！",
							icon: "none",
							duration: 3500,
							mask: !0
						});
						var u = setTimeout(function() {
							i.shootsuccess = "camera" === e, wx.navigateBack({
								delta: 1
							}), clearTimeout(u);
						}, 1500);
					} else if(t.data.duration < 5) {
						wx.showToast({
							title: "上传的视频拍摄时间不能低于5秒！",
							icon: "none",
							duration: 3500,
							mask: !0
						});
						var m = setTimeout(function() {
							i.shootsuccess = "camera" === e, wx.navigateBack({
								delta: 1
							}), clearTimeout(m);
						}, 1500);
					} else console.log("发送上传视频请求"), wx.uploadFile({
						url: s.default.upload_cover,
						filePath: t.data.tempFilePath,
						name: "filename",
						header: {
							"content-type": "multipart/form-data",
							"auth-token": wx.getStorageSync("loginSessionKey")
						},
						formData: {
							upload_type: "tmp1",
							filename: t.data.tempFilePath
						},
						success: function(s) {
							var i = JSON.parse(s.data);
							t.data.uploadContent.video_url = i.data.file_path, console.log(s.data), console.log(i),
								t.setData({
									previewpic: i.data.savehttp,
									uploadContent: t.data.uploadContent,
									chooseVideo: 1
								});
						},
						complete: function() {
							console.log("隐藏了哈"), wx.hideLoading();
						}
					});
				} else wx.showToast({
					title: "视频只支持mp4,aiv和mov格式！",
					icon: "none",
					duration: 1500,
					mask: !0,
					success: function(t) {
						var s = setTimeout(function() {
							clearTimeout(s), wx.navigateBack({
								delta: 1
							});
						}, 1500);
					}
				});
			},
			fail: function(s) {
				console.log("选择视频失败！"), console.log(s), i.shootsuccess = !1, wx.navigateBack({
					delta: 1
				}), t.setData({
					chooseVideo: 2
				});
			},
			complete: function(t) {
				console.log("我的错我的错我的错");
			}
		});
	},
	onShow: function() {
		var t = this;
		console.log("onShow"), i.isAuth(function() {
			t.data.hasInit ? console.log("已初始化") : (console.log("未初始化"), t.data.hasInit = !0);
		}), this.setData({}), this.data.chooseVideo;
	},
	onHide: function(t) {
		console.log("onHide"), S = !0, m = 0, T = [], g = [], F.pause(), V.pause();
		for(var s = this.data.musiclists.length, i = 0; i < s; i++) this.data.musiclists[i].forEach(function(t) {
			t.leftimg = w.playimg, t.rightimg = w.addimg;
		});
		console.log(F.src), console.log(V.src), this.data.showmusiclists = [], this.setData({
			musiclists: this.data.musiclists,
			showmusiclists: this.data.showmusiclists,
			showmusiclist: "none",
			showpause: "flex",
			chooseVideo: 0
		});
	},
	onUnload: function(t) {
		console.log("onUnload"), S = !0, m = 0, T = [], g = [], F.pause(), V.pause(), this.data.uploadContent = {
				video_url: "",
				filter: "none",
				video_desc: "",
				join_sub_id: -1,
				join_sub: -1,
				audio_url: "",
				audio_id: "",
				tiezhi_arr: [],
				xiangkuan_arr: []
			}, V.src = "https://nomusic.mp3", F.src = "https://nomusic.mp3", console.log(F.src),
			console.log(V.src);
		for(var s = this.data.musiclists.length, i = 0; i < s; i++) this.data.musiclists[i].forEach(function(t) {
			t.leftimg = w.playimg, t.rightimg = w.addimg;
		});
		this.data.showmusiclists = [], this.setData({
			musiclists: this.data.musiclists,
			showmusiclists: this.data.showmusiclists,
			uploadContent: this.data.uploadContent,
			chooseVideo: 0
		});
	},
	blockThis: function(t) {
		console.log("blockThis"), "flex" === this.data.showfilter ? (console.log("goHomeFilter"),
			"" !== k && wx.showToast({
				title: "已选择" + k,
				icon: "none",
				duration: 1500,
				mask: !1
			})) : "flex" === this.data.showpaster ? console.log("goHomePaster") : "flex" === this.data.showmusic && (console.log("goHomeMusic"),
			"https://nomusic.mp3" !== V.src && "" !== V.src && wx.showToast({
				title: "已选择" + z,
				icon: "none",
				duration: 1500,
				mask: !1
			})), this.goHome();
	},
	goHome: function(t) {
		console.log("goHome"), F.stop();
		for(var s = this.data.showmusiclists.length, i = 0; i < s; i++) this.data.showmusiclists[i].leftimg === w.pauseimg && (this.data.showmusiclists[i].leftimg = w.playimg);
		this.setData({
			showoption: "flex",
			showfilter: "none",
			showphotoFrame: "none",
			showpaster: "none",
			showmusic: "none",
			showmusiclists: this.data.showmusiclists,
			movableviewNum: this.data.movableviewNum,
			uploadContent: this.data.uploadContent
		});
	},
	cancelMovableView: function(t) {
		console.log("cancelMovableView"), console.log(t), m > 0 && m--;
		var s = t.target.id,
			i = s.substring(s.length - 1);
		this.data.movableviewNum[i] = {
			id: s,
			width: 80,
			height: 80,
			show: "none",
			x: 0,
			y: 0,
			pic: "",
			rotate: 0
		}, this.setData({
			movableviewNum: this.data.movableviewNum
		});
	},
	showMovableView: function(t) {
		console.log("showMovableView"), I = "none", this.setPasterHidden();
	},
	moveMovableView: function(t) {
		console.log("moveMovableView"), console.log(t);
		var s = t.target.id,
			i = s.substring(s.length - 1);
		this.data.movableviewNum[i].x = t.detail.x, this.data.movableviewNum[i].y = t.detail.y,
			this.setData({
				movableviewNum: this.data.movableviewNum
			});
	},
	getStartLocation: function(t) {
		console.log("getStartLocation"), I = "flex", this.setPasterHidden();
		for(var s = t.target.id, i = 0; i < m; i++) s === "bottom" + this.data.movableviewNum[i].id && (c.x = t.changedTouches[0].pageX - this.data.movableviewNum[i].width,
			c.y = t.changedTouches[0].pageY - this.data.movableviewNum[i].height);
	},
	moveLocation: function(t) {
		console.log("moveLocation");
		for(var s = t.target.id, i = t.changedTouches[0].pageX - c.x, a = t.changedTouches[0].pageY - c.y, e = i > a ? a : i, o = this.data.picsize.width > this.data.picsize.height ? this.data.picsize.height : this.data.picsize.width, n = 0; n < m; n++) s === "bottom" + this.data.movableviewNum[n].id && (e <= this.data.picsize.width && e <= this.data.picsize.height ? (console.log("不行不行不行1"),
			this.data.movableviewNum[n].width = e, this.data.movableviewNum[n].height = e) : e === this.data.picsize.width && e === this.data.picsize.height && t.changedTouches[0].pageX < c.x && t.changedTouches[0].pageY < c.y ? (console.log("不行不行不行2"),
			this.data.movableviewNum[n].width = e, this.data.movableviewNum[n].height = e) : e > this.data.picsize.width ? (console.log("不行不行不行3"),
			this.data.movableviewNum[n].width = this.data.picsize.width, this.data.movableviewNum[n].height = this.data.picsize.width) : e > this.data.picsize.height ? (console.log("不行不行不行4"),
			this.data.movableviewNum[n].width = this.data.picsize.height, this.data.movableviewNum[n].height = this.data.picsize.height) : e > this.data.picsize.width && e > this.data.picsize.height && (console.log("不行不行不行5"),
			this.data.movableviewNum[n].width = o, this.data.movableviewNum[n].height = o));
		this.setData({
			movableviewNum: this.data.movableviewNum
		});
	},
	endLocation: function(t) {
		console.log("endLocation"), I = "none", this.setPasterHidden();
		for(var s = t.target.id, i = 0; i < m; i++) s === "bottom" + this.data.movableviewNum[i].id && (this.data.movableviewNum[i].width > this.data.picsize.width ? this.data.movableviewNum[i].width = this.data.picsize.width : this.data.movableviewNum[i].height > this.data.picsize.height && (this.data.movableviewNum[i].height = this.data.picsize.height));
		this.setData({
			movableviewNum: this.data.movableviewNum
		});
	},
	nextStep: function(t) {
		var i = this;
		if(console.log("nextStep"), this.data.isShowTopic && wx.showToast({
				title: "已选择默认话题！",
				icon: "none",
				duration: 3e3
			}), 0 === this.data.topics.length && wx.request({
				url: s.default.new_topic_sub,
				method: "POST",
				header: {
					"content-type": "application/x-www-form-urlencoded",
					"auth-token": wx.getStorageSync("loginSessionKey")
				},
				success: function(t) {
					console.log(t);
					for(var s = t.data.data.length, a = 0; a < s; a++) t.data.count.sub_title === t.data.data[a].sub_title ? (t.data.data[a].pic = D.yes,
						t.data.data[a].class = "thisTopic", i.data.topic = t.data.data[a].sub_title, i.data.uploadContent.join_sub_id = t.data.data[a].sub_type,
						i.data.uploadContent.join_sub = t.data.data[a].id, N = !0) : (t.data.data[a].pic = D.no,
						t.data.data[a].class = "notTopic");
					s >= 7 && (s = 7), i.setData({
						topics: t.data.data,
						topicHeight: s,
						topic: t.data.count.sub_title
					}), console.log(i.data.topics);
				},
				complete: function() {
					console.log("设置默认话题！");
				}
			}), this.videoContext1.play(), this.videoContext1.pause(), F.stop(), m > 0)
			for(var a = this.data.previewsize.height / this.data.picsize.height, e = this.data.oldVideoSize.height / this.data.picsize.height, o = this.data.movableviewNum.length, n = 0; n < o; n++) "flex" === this.data.movableviewNum[n].show && (this.data.publish[n].pic = this.data.movableviewNum[n].pic,
				this.data.publish[n].height = this.data.movableviewNum[n].height * a, this.data.publish[n].width = this.data.movableviewNum[n].width * a,
				this.data.publish[n].y = this.data.movableviewNum[n].y * a, this.data.publish[n].x = this.data.movableviewNum[n].x * a,
				this.data.publish[n].rotate = this.data.movableviewNum[n].rotate, this.data.myUpload[n].img_url = this.data.movableviewNum[n].pic,
				this.data.myUpload[n].height = this.data.movableviewNum[n].height * e, this.data.myUpload[n].width = this.data.movableviewNum[n].width * e,
				this.data.myUpload[n].y = this.data.movableviewNum[n].y * e, this.data.myUpload[n].x = this.data.movableviewNum[n].x * e,
				this.data.myUpload[n].rotate = this.data.movableviewNum[n].rotate);
		console.log(this.data.publish), this.data.uploadContent.tiezhi_arr = this.data.myUpload,
			this.data.uploadContent.tiezhi_arr = JSON.stringify(this.data.uploadContent.tiezhi_arr),
			console.log(this.data.uploadContent.tiezhi_arr), "" !== this.data.photoFramePic.top && (this.data.photoFramearr[0].width = this.data.oldVideoSize.width,
				this.data.photoFramearr[0].height = .59 * this.data.oldVideoSize.height, this.data.photoFramearr[1].width = this.data.oldVideoSize.width,
				this.data.photoFramearr[1].height = .5 * this.data.oldVideoSize.height, this.data.photoFramearr[1].y = .5 * this.data.oldVideoSize.height,
				this.data.uploadContent.xiangkuan_arr = this.data.photoFramearr, this.data.uploadContent.xiangkuan_arr = JSON.stringify(this.data.uploadContent.xiangkuan_arr)),
			this.setData({
				showwrappers: "hidden",
				uploadContent: this.data.uploadContent,
				myUpload: this.data.myUpload,
				publish: this.data.publish,
				topic: this.data.topic,
				wrappers_width: 0,
				wrappers_height: 0,
				photoFramearr: this.data.photoFramearr
			});
	},
	filter: function(t) {
		console.log("filter"), this.setData({
			showoption: "none",
			showfilter: "flex"
		});
	},
	photoFrame: function(t) {
		console.log("photoFrame");
		var i = this;
		this.setData({
			showoption: "none",
			showphotoFrame: "flex"
		}), 0 === this.data.photoframes.length && wx.request({
			url: s.default.photoframe,
			method: "POST",
			header: {
				"content-type": "application/x-www-form-urlencoded",
				"auth-token": wx.getStorageSync("loginSessionKey")
			},
			success: function(t) {
				console.log(t);
				for(var s = t.data.data.length, a = 0; a < s; a++) t.data.data[a].class = "nochoose";
				i.setData({
					photoframes: t.data.data
				}), console.log(i.data.photoframes);
			}
		});
	},
	chosePhotoFrame: function(t) {
		console.log("chosePhotoFrame"), console.log(t);
		for(var s = this.data.photoframes.length, i = 0; i < s; i++) t.target.id === this.data.photoframes[i].id ? this.data.photoFramePic.top !== this.data.photoframes[i].moban_up_url ? (this.data.photoFramePic.top = this.data.photoframes[i].moban_up_url,
			this.data.photoFramePic.bottom = this.data.photoframes[i].moban_down_url, this.data.photoFramearr[0].img_url = this.data.photoframes[i].moban_up_url,
			this.data.photoFramearr[1].img_url = this.data.photoframes[i].moban_down_url, this.data.photoframes[i].class = "choose") : (this.data.photoFramePic.top = "",
			this.data.photoFramePic.bottom = "", this.data.photoFramearr[0].img_url = "", this.data.photoFramearr[1].img_url = "",
			this.data.photoframes[i].class = "nochoose") : this.data.photoframes[i].class = "nochoose";
		this.setData({
			photoFramePic: this.data.photoFramePic,
			photoframes: this.data.photoframes
		});
	},
	choseFilter: function(t) {
		console.log("choseFilter");
		for(var s = this.data.filters.length, i = 0; i < s; i++) t.target.id === this.data.filters[i].id ? "chosefilterdiv" !== this.data.filters[i].filterdiv && (this.data.filters[i].filterdiv = "chosefilterdiv",
			k = this.data.filters[i].name, this.data.filters[i].chose = this.data.filters[i].ispic,
			this.data.uploadContent.filter = this.data.filters[i].id) : "chosefilterdiv" === this.data.filters[i].filterdiv && (this.data.filters[i].filterdiv = "filterdiv",
			this.data.filters[i].chose = this.data.filters[i].nopic);
		this.setData({
			filters: this.data.filters,
			uploadContent: this.data.uploadContent
		});
	},
	paster: function(t) {
		var i = this;
		console.log("paster");
		var a = this;
		this.setData({
			showoption: "none",
			showpaster: "flex"
		}), wx.request({
			url: s.default.sticker_type,
			method: "POST",
			header: {
				"content-type": "application/x-www-form-urlencoded",
				"auth-token": wx.getStorageSync("loginSessionKey")
			},
			success: function(t) {
				var s = t.data;
				n = s.data.length;
				for(var i = 0; i < n; i++) 0 === i ? (s.data[i].chosethispaster = "chosethispaster",
					a.data.nowpasterId = s.data[i].id) : s.data[i].chosethispaster = "none", a.data.pasterId.push(s.data[i].id);
				a.setData({
					pasters_type: s.data,
					pasters: s.data[0].children,
					nowpasterId: a.data.nowpasterId
				});
			},
			complete: function() {
				i.data.loading_num--, 0 == i.data.loading_num && wx.hideLoading();
			}
		});
	},
	music: function(t) {
		var i = this;
		console.log("music"), this.setData({
			showoption: "none",
			showmusiclist: "none",
			showmusic: "flex"
		}), wx.request({
			url: s.default.music_type,
			method: "POST",
			header: {
				"content-type": "application/x-www-form-urlencoded",
				"auth-token": wx.getStorageSync("loginSessionKey")
			},
			success: function(t) {
				console.log(t);
				for(var s = t.data.data.length, a = 0; a < s; a++) t.data.data[a].pic = t.data.data[a].no_music_type_icon;
				i.data.musics = t.data.data, i.setData({
					musics: i.data.musics
				});
			},
			complete: function() {
				console.log("查询音效分类！");
			}
		});
	},
	chosePasterPic: function(t) {
		console.log("chosePasterPic"), console.log(this.data.movableviewNum), I = "none",
			this.setPasterHidden();
		for(var s = "../../assets/images/2null2@2x.png", i = t.currentTarget.id, a = this.data.pasters.length, e = 0; e < a; e++) this.data.pasters[e].id === i && (s = this.data.pasters[e].pics);
		if(m > 2) wx.showToast({
			title: "只能添加三个贴纸",
			duration: 1e3
		});
		else {
			m++, console.log(m);
			for(var o = this.data.movableviewNum.length, n = 0; n < o; n++) {
				if("none" === this.data.movableviewNum[n].show) {
					console.log("我变了"), this.data.movableviewNum[n].show = "flex", this.data.movableviewNum[n].pic = s;
					break;
				}
				console.log("我执行了一次");
			}
			this.setData({
				movableviewNum: this.data.movableviewNum
			});
		}
	},
	setPasterHidden: function() {
		console.log("setPasterHidden");
		var t = this;
		t.data.hiddenpaster = "flex";
		var s = setTimeout(function() {
			t.setData({
				hiddenpaster: I
			}), clearTimeout(s);
		}, 2e3);
		t.setData({
			hiddenpaster: t.data.hiddenpaster
		});
	},
	chosePaster: function(t) {
		console.log("chosePaster");
		for(var s = t.currentTarget.id, i = s.substring(s.length - 1), a = 0; a < n; a++) this.data.pasterId[a] === i ? (this.data.pasters_type[a].chosethispaster = "chosethispaster",
			this.data.pasters = this.data.pasters_type[a].children) : this.data.pasters_type[a].chosethispaster = "none";
		this.setData({
			pasters_type: this.data.pasters_type,
			pasters: this.data.pasters,
			nowpasterId: i,
			pasterbegin: 0
		});
	},
	pickMusic: function(t) {
		console.log("pickMusic"), console.log(t);
		t.currentTarget.id;
		var s = this.data.showmusiclists.length,
			i = this.data.musiclists.length;
		if(f || _)
			if(t.currentTarget.id === v.who) this.data.showmusiclists[v.id].leftimg = w.playimg,
				F.pause(), f = !1;
			else
				for(var a = 0; a < s; a++) t.currentTarget.id === this.data.showmusiclists[a].id ? (F.src = this.data.showmusiclists[a].music_url,
					this.data.showmusiclists[a].leftimg = w.pauseimg, v.who = t.currentTarget.id, v.id = a,
					F.play()) : this.data.showmusiclists[a].leftimg = w.playimg;
		else {
			for(var e = 0; e < s; e++) t.currentTarget.id === this.data.showmusiclists[e].id && (F.src = this.data.showmusiclists[e].music_url,
				this.data.showmusiclists[e].leftimg = w.pauseimg, v.who = t.currentTarget.id, v.id = e);
			F.play(), f = !0;
		}
		if(_) {
			for(var o = 0; o < s; o++) {
				if(this.data.showmusiclists[o].id === t.currentTarget.id && this.data.showmusiclists[o].rightimg === w.cancelimg) {
					y = !0;
					break;
				}
				y = !1;
			}
			for(var n = 0; n < i; n++) this.data.musiclists[n][0].music_type_id === b && this.data.musiclists[n].forEach(function(t) {
				t.rightimg === w.cancelimg && (t.rightimg = w.addimg);
			});
			if(y) console.log("是同一首歌"), _ = !1, b = -1, V.src = "https://nomusic.mp3", console.log(V.src),
				z = "", this.data.uploadContent.audio_id = "", this.data.uploadContent.audio_url = "",
				this.setData({
					uploadContent: this.data.uploadContent
				});
			else {
				console.log("不是同一首歌");
				for(var l = 0; l < s; l++)
					if(t.currentTarget.id === this.data.showmusiclists[l].id) {
						console.log("选他1"), V.src = this.data.showmusiclists[l].music_url, z = this.data.showmusiclists[l].music_name,
							this.data.uploadContent.audio_url = this.data.showmusiclists[l].music_url, this.data.uploadContent.audio_id = this.data.showmusiclists[l].id,
							this.data.showmusiclists[l].rightimg = w.cancelimg;
						for(var d = 0; d < i; d++) this.data.musiclists[d][0].music_type_id === x.new.type_id && (this.data.musiclists[d][l].rightimg = w.cancelimg);
					} else console.log("我的兄弟1");
				x.new.id = t.currentTarget.id, b = x.new.type_id, _ = !0;
			}
		} else {
			for(var h = 0; h < s; h++)
				if(t.currentTarget.id === this.data.showmusiclists[h].id) {
					console.log("选他"), V.src = this.data.showmusiclists[h].music_url, z = this.data.showmusiclists[h].music_name,
						this.data.uploadContent.audio_url = this.data.showmusiclists[h].music_url, this.data.uploadContent.audio_id = this.data.showmusiclists[h].id,
						this.data.showmusiclists[h].rightimg = w.cancelimg;
					for(var c = 0; c < i; c++) this.data.musiclists[c][0].music_type_id === x.new.type_id && (this.data.musiclists[c][h].rightimg = w.cancelimg);
				} else console.log("我的兄弟");
			x.new.id = t.currentTarget.id, b = x.new.type_id, _ = !0;
		}
		console.log(x), console.log(this.data.showmusiclists), console.log(this.data.musiclists),
			console.log(this.data.uploadContent), this.setData({
				uploadContent: this.data.uploadContent,
				showmusiclists: this.data.showmusiclists,
				musiclists: this.data.musiclists
			});
	},
	playmusic: function(t) {
		console.log("playmusic"), console.log(t);
		var s = this.data.showmusiclists.length;
		if(f)
			if(t.currentTarget.id === v.who) this.data.showmusiclists[v.id].leftimg = w.playimg,
				F.pause(), f = !1;
			else
				for(var i = 0; i < s; i++) t.currentTarget.id === "left" + this.data.showmusiclists[i].id ? (F.src = this.data.showmusiclists[i].music_url,
					this.data.showmusiclists[i].leftimg = w.pauseimg, v.who = t.currentTarget.id, v.id = i,
					F.play()) : this.data.showmusiclists[i].leftimg = w.playimg;
		else {
			for(var a = 0; a < s; a++) t.currentTarget.id === "left" + this.data.showmusiclists[a].id && (F.src = this.data.showmusiclists[a].music_url,
				this.data.showmusiclists[a].leftimg = w.pauseimg, v.who = t.currentTarget.id, v.id = a);
			F.play(), f = !0;
		}
		this.setData({
			showmusiclists: this.data.showmusiclists
		});
	},
	addmusic: function(t) {
		console.log("addmusic");
		t.currentTarget.id;
		var s = this.data.showmusiclists.length,
			i = this.data.musiclists.length;
		if(_) {
			for(var a = 0; a < s; a++) {
				if("right" + this.data.showmusiclists[a].id === t.currentTarget.id && this.data.showmusiclists[a].rightimg === w.cancelimg) {
					y = !0;
					break;
				}
				y = !1, console.log(this.data.showmusiclists[a].id), console.log(t.currentTarget.id),
					console.log(y);
			}
			for(var e = 0; e < i; e++) this.data.musiclists[e][0].music_type_id === b && this.data.musiclists[e].forEach(function(t) {
				t.rightimg === w.cancelimg && (t.rightimg = w.addimg);
			});
			if(y) console.log("是同一首歌"), _ = !1, b = -1, V.src = "https://nomusic.mp3", console.log(V.src),
				z = "", this.data.uploadContent.audio_id = "", this.data.uploadContent.audio_url = "",
				this.setData({
					uploadContent: this.data.uploadContent
				});
			else {
				console.log("不是同一首歌");
				for(var o = 0; o < s; o++)
					if(t.currentTarget.id === "right" + this.data.showmusiclists[o].id) {
						console.log("选他1"), V.src = this.data.showmusiclists[o].music_url, z = this.data.showmusiclists[o].music_name,
							this.data.uploadContent.audio_url = this.data.showmusiclists[o].music_url, this.data.uploadContent.audio_id = this.data.showmusiclists[o].id,
							this.data.showmusiclists[o].rightimg = w.cancelimg;
						for(var n = 0; n < i; n++) this.data.musiclists[n][0].music_type_id === x.new.type_id && (this.data.musiclists[n][o].rightimg = w.cancelimg);
					} else console.log("我的兄弟1");
				x.new.id = t.currentTarget.id, b = x.new.type_id, _ = !0;
			}
		} else {
			for(var l = 0; l < s; l++)
				if(t.currentTarget.id === "right" + this.data.showmusiclists[l].id) {
					console.log("选他"), V.src = this.data.showmusiclists[l].music_url, z = this.data.showmusiclists[l].music_name,
						this.data.uploadContent.audio_url = this.data.showmusiclists[l].music_url, this.data.uploadContent.audio_id = this.data.showmusiclists[l].id,
						this.data.showmusiclists[l].rightimg = w.cancelimg;
					for(var d = 0; d < i; d++) this.data.musiclists[d][0].music_type_id === x.new.type_id && (this.data.musiclists[d][l].rightimg = w.cancelimg);
				} else console.log("我的兄弟");
			x.new.id = t.currentTarget.id, b = x.new.type_id, _ = !0;
		}
		console.log(x), console.log(this.data.showmusiclists), console.log(this.data.musiclists),
			console.log(this.data.uploadContent), this.setData({
				uploadContent: this.data.uploadContent,
				showmusiclists: this.data.showmusiclists,
				musiclists: this.data.musiclists
			});
	},
	choseMusic: function(t) {
		var i = this;
		console.log("choseMusic"), console.log(t.currentTarget.id), f = !1, F.stop();
		var a = this.data.musiclists.length;
		x.old = x.new;
		var e = {
			type_id: 0,
			id: 0
		};
		e.type_id = t.currentTarget.id, x.new = e;
		var o = {
			id: 0,
			content: ""
		};
		if(T.indexOf(t.currentTarget.id) < 0) T.push(t.currentTarget.id), wx.request({
			url: s.default.music,
			method: "POST",
			header: {
				"content-type": "application/x-www-form-urlencoded",
				"auth-token": wx.getStorageSync("loginSessionKey")
			},
			data: {
				music_id: t.currentTarget.id,
				page: 1
			},
			success: function(s) {
				if(console.log(s), 0 === s.data.data.length) wx.showToast({
					title: "没有该类型的音乐",
					duration: 2e3
				}), i.data.musiclists.push([]), i.data.showmusiclist = "none", o.content = "no";
				else {
					i.data.musiclists.push(s.data.data);
					for(var a = i.data.musiclists.length, e = 0; e < a; e++) t.currentTarget.id === i.data.musiclists[e][0].music_type_id && (i.data.showmusiclists = i.data.musiclists[e]);
					for(var n = i.data.showmusiclists.length, l = 0; l < n; l++) i.data.showmusiclists[l].leftimg = w.playimg,
						i.data.showmusiclists[l].rightimg = w.addimg;
					for(var d = i.data.musics.length, h = 0; h < d; h++) t.currentTarget.id === i.data.musics[h].id ? i.data.musics[h].pic = i.data.musics[h].music_type_icon : i.data.musics[h].pic = i.data.musics[h].no_music_type_icon;
					i.data.showmusiclist = "flex", o.content = "yes", i.setData({
						showmusiclists: i.data.showmusiclists,
						showmusiclist: i.data.showmusiclist,
						musiclists: i.data.musiclists,
						musics: i.data.musics,
						musicbegin: 0
					});
				}
				p.id = t.currentTarget.id, o.id = t.currentTarget.id, g.push(o), console.log(g);
			},
			complete: function() {
				console.log("查询音效！");
			}
		});
		else {
			console.log("已存在");
			for(var n = g.length, l = 0; l < n; l++) t.currentTarget.id === g[l].id && ("yes" === g[l].content ? p.id === t.currentTarget.id ? "none" === this.data.showmusiclist ? (console.log("111"),
				this.data.showmusiclist = "flex", this.data.showmusiclists = this.data.musiclists[l],
				console.log(this.data.musiclists[l]), console.log(g)) : (console.log("222"), this.data.showmusiclist = "none",
				console.log(g)) : (console.log("555"), this.data.showmusiclists = this.data.musiclists[l],
				this.data.showmusiclist = "flex") : this.data.showmusiclist = "none");
			for(var d = this.data.musics.length, h = 0; h < d; h++) t.currentTarget.id === this.data.musics[h].id && "flex" === this.data.showmusiclist ? this.data.musics[h].pic = this.data.musics[h].music_type_icon : this.data.musics[h].pic = this.data.musics[h].no_music_type_icon;
			for(var c = 0; c < a; c++) this.data.musiclists[c].forEach(function(t) {
				t.leftimg === w.pauseimg && (t.leftimg = w.playimg);
			});
			p.id = t.currentTarget.id, console.log(this.data.showmusiclists), this.setData({
				showmusiclists: this.data.showmusiclists,
				showmusiclist: this.data.showmusiclist,
				musiclists: this.data.musiclists,
				musics: this.data.musics,
				musicbegin: 0
			});
		}
	},
	uploadContent: function(t) {
		console.log("uploadContent");
		var i = this;
		this.videoContext1.pause(), V.pause(), "" === this.data.uploadContent.video_desc && (this.data.uploadContent.video_desc = a + "的原创"), -1 === this.data.uploadContent.join_sub || -1 === this.data.uploadContent.join_sub_id ? wx.showToast({
			title: "未选择话题！",
			icon: "none",
			duration: 1e3
		}) : (console.log("that.data.uploadContent"), console.log(i.data.uploadContent),
			i.setData({
				showovercover: "flex"
			}), wx.showLoading({
				title: "视频上传中…",
				mask: !0
			}), wx.request({
				url: s.default.upload_submit,
				method: "POST",
				header: {
					"content-type": "application/x-www-form-urlencoded",
					"auth-token": wx.getStorageSync("loginSessionKey")
				},
				data: this.data.uploadContent,
				success: function(t) {
					wx.hideLoading(), wx.showLoading({
						title: "视频上传合成中……",
						mask: !0
					});
					var a = 1,
						e = setInterval(function() {
							a++;
							var o = t.data;
							console.log(o.data), console.log(o.code), a > 13 ? (wx.hideLoading(), clearInterval(e),
								wx.showToast({
									title: "合成视频超时！",
									icon: "fail",
									duration: 1500,
									mask: !0
								}), i.setData({
									showsubmission: "flex",
									compose_success: !1
								})) : o.data || 0 !== o.code ? o.data && 0 === o.code ? wx.request({
								url: s.default.get_submit,
								method: "POST",
								header: {
									"content-type": "application/x-www-form-urlencoded",
									"auth-token": wx.getStorageSync("loginSessionKey")
								},
								data: {
									job_id: t.data.data.job_id,
									move_name: t.data.data.move_name,
									video_url: t.data.data.video_url
								},
								success: function(t) {
									console.log(t), console.log(wx.getStorageSync("loginSessionKey")), 0 === t.data.code ? (console.log(t),
										wx.hideLoading(), clearInterval(e), i.setData({
											showsubmission: "flex",
											compose_success: !0
										}), i.data.uploadContent = {
											video_url: "",
											filter: "none",
											video_desc: "",
											join_sub_id: -1,
											join_sub: -1,
											audio_url: "",
											audio_id: "",
											tiezhi_arr: [{
												img_url: "",
												width: 0,
												height: 0,
												x: 0,
												y: 0
											}, {
												img_url: "",
												width: 0,
												height: 0,
												x: 0,
												y: 0
											}, {
												img_url: "",
												width: 0,
												height: 0,
												x: 0,
												y: 0
											}],
											xiangkuan_arr: []
										}, V.src = "https://nomusic.mp3", F.src = "https://nomusic.mp3") : -2 === t.data.code && (clearInterval(e),
										i.setData({
											showsubmission: "flex",
											compose_success: !1
										}));
								},
								complete: function() {
									console.log("我又发了一次");
								}
							}) : (console.log(t.msg), wx.hideLoading(), clearInterval(e), i.setData({
								showsubmission: "flex",
								compose_success: !1
							})) : (console.log("sss"), wx.hideLoading(), clearInterval(e), i.setData({
								showsubmission: "flex",
								compose_success: !0
							})), console.log(F.src), console.log(V.src), i.setData({
								uploadContent: i.data.uploadContent
							});
						}, 3e3);
				}
			}));
	},
	pauseThis: function(t) {
		console.log("pauseThis"), S = !0, C ? (this.videoContext1.pause(), V.pause(), this.setData({
			showpause: "flex"
		}), C = !1) : console.log("还没有播放！");
	},
	playThis: function(t) {
		console.log("playThis"), console.log(F.src), console.log(V.src), this.videoContext1.play(),
			V.play(), S = !1, C = !0, this.setData({
				showpause: "none"
			});
	},
	choseTopic: function(t) {
		console.log("choseTopic"), N = !0, this.videoContext1.pause(), V.pause(), this.setData({
			showVideosPic: "none",
			showtextcontent: "none",
			showtopictype: "flex",
			showsure: "none"
		});
	},
	choseThisTopic: function(t) {
		console.log("choseThisTopic"), console.log(t);
		for(var s = this.data.topics.length, i = 0; i < s; i++)
			if(console.log("q"), N && this.data.topics[i].pic === D.yes) {
				this.data.topics[i].pic = D.no, this.data.topics[i].class = "notTopic";
				break;
			}
		for(var a = 0; a < s; a++)
			if(t.currentTarget.id === this.data.topics[a].id) {
				this.data.topics[a].pic = D.yes, this.data.topics[a].class = "thisTopic", this.data.topic = this.data.topics[a].sub_title,
					this.data.uploadContent.join_sub_id = this.data.topics[a].sub_type, this.data.uploadContent.join_sub = this.data.topics[a].id,
					N = !0;
				break;
			}
		this.setData({
			topic: this.data.topic,
			topics: this.data.topics,
			showVideosPic: "flex",
			showtextcontent: "block",
			showtopictype: "none",
			showsure: "flex",
			showpause: "flex",
			isShowTopic: !1
		});
	},
	bindTextAreaBlur: function(t) {
		console.log("bindTextAreaBlur"), this.data.uploadContent.video_desc = t.detail.value,
			this.setData({
				uploadContent: this.data.uploadContent
			});
	},
	bindTextAreaInput: function(t) {
		console.log("bindTextAreaInput"), 30 === t.detail.cursor && wx.showToast({
			title: "最多输入30个字!",
			icon: "none",
			duration: 1500,
			mask: !0
		});
	},
	videoend: function(t) {
		console.log("videoend"), this.videoContext1.play(), V.stop(), V.play();
	},
	cancelUploadContent: function(t) {
		console.log("cancelUploadContent"), console.log(F.src), console.log(V.src), S = !0,
			this.videoContext1.seek(0), this.videoContext1.pause(), V.stop(), this.setData({
				showwrappers: "visible",
				showpause: "flex",
				wrappers_width: "100%",
				wrappers_height: "100%"
			});
	},
	videoAutoPlay: function(t) {
		console.log("videoAutoPlay"), S ? this.videoContext1.pause() : this.videoContext1.play();
	},
	successBackHome: function(t) {
		console.log("successBackHome"), this.setData({
			showovercover: "none",
			showsubmission: "none"
		}), wx.navigateBack({
			delta: 1
		});
	},
	checkProgress: function(t) {
		console.log("checkProgress"), this.setData({
			showovercover: "none",
			showsubmission: "none"
		}), wx.switchTab({
			url: "/pages/user/user"
		});
	},
	returnSubmit: function(t) {
		console.log("returnSubmit"), this.setData({
			showovercover: "none",
			compose_success: !0,
			showsubmission: "none",
			showpause: "flex"
		});
	},
	pasterSwiperStart: function(t) {
		console.log("pasterSwiperStart"), P = t.changedTouches[0].pageX;
	},
	pasterSwiperEnd: function(t) {
		console.log("pasterSwiperEnd"), console.log(t);
		var i = this;
		wx.createSelectorQuery().select("#pasterId").fields({
			properties: ["current"]
		}, function(a) {
			console.log(a), t.changedTouches[0].pageX - P < 100 && a.current === i.data.pasters.length - 5 && i.data.pastersrequest.indexOf(i.data.nowpasterId + a.current) < 0 && i.data.pasters.length % 10 == 0 && wx.request({
				url: s.default.sticker,
				method: "POST",
				header: {
					"content-type": "application/x-www-form-urlencoded",
					"auth-token": wx.getStorageSync("loginSessionKey")
				},
				data: {
					sticker_id: i.data.nowpasterId,
					page: Math.floor((a.current + 5) / 10) + 1
				},
				success: function(t) {
					var s = t.data;
					if(console.log(s.data), s.count > 0) {
						console.log(i.data.pasters_type), console.log(i.data.nowpasterId);
						for(var a = i.data.pasters_type.length, e = 0, o = 0; o < a; o++)
							if(console.log(i.data.pasters_type[o].id),
								i.data.nowpasterId === i.data.pasters_type[o].id) {
								e = o;
								break;
							}
						for(var n = 0; n < s.count; n++) i.data.pasters_type[e].children.push(s.data[n]);
						console.log(i.data.pasters_type[e].children), i.data.pasters = i.data.pasters_type[e].children,
							i.setData({
								pasters_type: i.data.pasters_type,
								pasters: i.data.pasters
							});
					} else console.log("没有了");
				},
				complete: function() {
					i.data.pastersrequest.push(i.data.nowpasterId + a.current), i.setData({
						pastersrequest: i.data.pastersrequest
					}), console.log(i.data.pastersrequest);
				}
			}), console.log(t.changedTouches[0].pageX), console.log(P);
		}).exec();
	},
	startRotate: function(t) {
		console.log("startRotate"), I = "flex", this.setPasterHidden();
	},
	moveRotate: function(t) {
		console.log("moveRotate");
		for(var s = t.target.id, i = 0; i < m; i++) s === "rotate" + this.data.movableviewNum[i].id && (r.x = t.changedTouches[0].pageX,
			r.y = t.changedTouches[0].pageY, u.x = r.x - this.data.movableviewNum[i].x - this.data.movableviewNum[i].width / 2 - (l - this.data.picsize.width) / 2,
			u.y = r.y - this.data.movableviewNum[i].y - this.data.movableviewNum[i].height / 2 - this.data.oldCoordinatey,
			this.data.movableviewNum[i].rotate = this.getAngle(u));
		this.setData({
			movableviewNum: this.data.movableviewNum
		});
	},
	endRotate: function(t) {
		console.log("endRotate"), I = "none", this.setPasterHidden();
	},
	getAngle: function(t) {
		console.log("getAngle");
		var s = Math.round(180 * Math.atan(Math.abs(t.y) / Math.abs(t.x)) / Math.PI);
		return t.x > 0 && t.y < 0 ? (console.log("第一象限"), 45 - s) : t.x < 0 && t.y < 0 ? (console.log("第二象限"), -135 + s) : t.x < 0 && t.y > 0 ? (console.log("第三象限"), 225 - s) : t.x > 0 && t.y > 0 ? (console.log("第四象限"),
			s + 45) : 0 === t.x && t.y < 0 ? (console.log("y正半轴"), -45) : 0 === t.x && t.y > 0 ? (console.log("y负半轴"),
			135) : t.x > 0 && 0 === t.y ? (console.log("x正半轴"), 45) : t.x < 0 && 0 === t.y ? (console.log("x负半轴"),
			225) : void 0;
	},
	goBack: function(t) {
		console.log(getCurrentPages()), 1 === getCurrentPages().length ? wx.switchTab({
			url: "/pages/index/index"
		}) : wx.navigateBack({
			delta: 1
		});
	},
	hiddenTopic: function(t) {
		console.log("hiddenTopic"), this.setData({
			showVideosPic: "flex",
			showtextcontent: "block",
			showtopictype: "none",
			showsure: "flex",
			showpause: "flex",
			isShowTopic: !1
		});
	}
});