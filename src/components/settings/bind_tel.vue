<style scoped="scoped" lang="less">
    .bt {
        background-color: #f9fbff;
    }

    .title {
        width: 100%;
        background-color: #FAFAFA;
        height: 60px;
        box-shadow: rgba(0, 0, 0, .5) 0 -1px 10px;
        margin-bottom: 26px;
        .w800 {
            line-height: 60px;
            font-size: 20px;
            font-weight: 500;
            color: #4D4D4D;
        }
    }

    input {
        &::placeholder {
            /*font-size: 12px;*/
            color: #9B9B9B;
            font-weight: 300;
        }
    }

    .w500 {
        padding-bottom: 200px;
        .telType {
            margin-bottom: 12px;
            p {
                font-size: 12px;
                color: #717171;
                letter-spacing: 0.86px;
                margin-bottom: 8px;
            }
            input {
                width: 100%;
                height: 46px;
                border: none;
                padding-left: 20px;
                padding-right: 52px;
            }
            .a {
                position: relative;
            }
            i {
                color: #3D96FF;
                cursor: pointer;
                font-size: 12px;
                letter-spacing: 0.86px;
                position: absolute;
                z-index: 1;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                padding: 10px;
            }
            .a1 {
                position: relative;
                .extra {
                    position: absolute;
                    width: 100%;
                    z-index: 2;
                    background-color: #fff;
                    .none {
                        height: 108px;
                        text-align: center;
                        line-height: 108px;
                        color: #999999;
                        font-weight: 300;
                        font-size: 14px;
                    }
                    .exist {
                        width: 100%;
                        ul {
                            width: 100%;
                            li {
                                color: #9B9B9B;
                                font-size: 12px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                width: 100%;
                                padding-left: 20px;
                                padding-right: 20px;
                                line-height: 36px;
                                cursor: pointer;
                                span {
                                    color: #333333;
                                }
                                &:hover {
                                    background-color: #f9f9f9;
                                }
                            }
                        }
                    }
                    .use-new {
                        display: block;
                        width: 100%;
                        text-align: center;
                        font-size: 12px;
                        color: #3D96FF;
                        height: 40px;
                        line-height: 40px;
                        border-top: 1px solid #FAFAFA;
                        img {
                            width: 22px;
                            margin-right: 6px;
                        }
                    }
                }
            }
        }
        .tel {
            margin-bottom: 12px;
            input {
                width: 100%;
                height: 46px;
                border: none;
                padding-left: 20px;
                padding-right: 52px;
                &::placeholder {
                    font-size: 14px;
                    font-weight: 300;
                    color: #999999;
                }
            }
        }
        .yzm {
            margin-bottom: 20px;
            position: relative;
            p {
                margin-bottom: 20px;
                color: #999999;
                font-size: 14px;
                span {
                    color: #4D4D4D;
                }
            }
            input {
                width: 100%;
                border: none;
                height: 46px;
                padding: 0 20px;
                &::placeholder {
                    font-size: 14px;
                    font-weight: 300;
                    color: #999999;
                }
            }
            a {
                display: inline-block;
                padding: 7px 12px;
                border: 1px solid #9B9B9B;
                color: #9B9B9B;
                font-size: 12px;
                border-radius: 15px;
                position: absolute;
                right: 17px;
                top: 50%;
                transform: translateY(-50%);
                &.active {
                    border: 1px solid #3D96FF;
                    color: #3D96FF;

                }
            }
        }
        .webInfo {
            margin-top: 14px;
            text-align: center;
            font-size: 12px;
            color: #999999;
            vertical-align: middle;
            img {
                vertical-align: middle;
            }
        }
        .tips {
            text-align: center;
            color: #FF3636;
            font-size: 12px;
            margin-top: 15px;
        }
        .confirm {
            margin-top: 40px;
            a {
                display: block;
                width: 100%;
                text-align: center;
                height: 40px;
                line-height: 40px;
                color: #fff;
                font-family: 'PingFang HK', '微软雅黑';
                font-size: 14px;
                background-color: #9B9B9B;
                border-radius: 2px;
            }
            &.active {
                a {
                    background-color: #3D96FF;
                }
            }
        }

    }
</style>

<template>
    <div class="bt">
        <div class="title" v-if="!fromChange">
            <div class="w800">
                绑定手机号
            </div>
        </div>
        <div class="w500">

            <div class="telType">
                <div class="a a1">
                    <p v-if="fromChange">新手机号</p>
                    <input @blur="testGjdm" placeholder="请输入国际编码，当前默认为+86（中国）" @input="showExtra=false" type="text"
                           v-model="telType"/>
                    <!--<i class="glyphicon glyphicon-triangle-bottom" @click="toggleExtra"></i>-->
                    <!--<div class="extra" v-if="showExtra">-->
                    <!--<div class="exist">-->
                    <!--<ul>-->
                    <!--<li @click="chooseAddress('中国(+86)')">-->
                    <!--中国(+86)-->
                    <!--</li>-->
                    <!--<li @click="chooseAddress('中国(+86)')">-->
                    <!--中国(+86)-->
                    <!--</li>-->
                    <!--<li @click="chooseAddress('日本(+88)')">-->
                    <!--日本(+88)-->
                    <!--</li>-->
                    <!--</ul>-->
                    <!--</div>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="tel">
                <input @blur="validateTel" type="text" v-model="telIpt" placeholder="请输入手机号">
            </div>
            <div class="yzm">
                <input v-model="yzmIpt" placeholder="请输入验证码" type="text" @input="testYzm" @blur="testYzm">
                <a v-show="!canSendYzm">重新发送 {{left_time}}</a>
                <a @click="sendYmz" href="javascript:;" class="active" v-show="canSendYzm">发送验证码</a>
            </div>
            <div class="webInfo" v-if="!fromChange">
                <img src="../../assets/img/gth.png" alt="" width="14">
                为保障账户安全，请绑定手机号以便找回密码
            </div>
            <div class="tips" v-show="yzmTip.length!==0||telTip.length!==0">
                {{yzmTip + telTip}}
            </div>
            <div class="confirm active" v-if="canSub">
                <a @click="sub" href="javascript:;">确定</a>
            </div>
            <div class="confirm" v-if="!canSub">
                <a>确定</a>
            </div>
            <div class="webInfo" v-if="fromChange">
                <img src="../../assets/img/gth.png" alt="" width="14">
                为保障账户安全，请绑定手机号以便找回密码
            </div>
        </div>
        <model :model_info="modelInfo"></model>
    </div>
</template>

<script>
    import t from '../../assets/js/tools';
    import model from '../tips'

    export default {
        name: 'app',
        data() {
            return {
                fromChange: false,
                telType: '',
                telTypePre: '+86',
                showExtra: false,
                left_time: 60,
                canSendYzm: 1,
                canSub: false,
                telFlag: 0,
                telIpt: '',
                telTip: '',
                telTypeTip: '',
                yzmIpt: '',
                yzmTip: '',
                yzmFlag: false,
                crArr: {
                    376: 'AD',
                    971: 'AE',
                    93: 'AF',
                    1268: 'AG',
                    1264: 'AI',
                    355: 'AL',
                    374: 'AM',
                    599: 'AN',
                    244: 'AO',
                    672: 'AQ',
                    54: 'AR',
                    1684: 'AS',
                    43: 'AT',
                    61: 'AU',
                    297: 'AW',
                    994: 'AZ',
                    387: 'BA',
                    1246: 'BB',
                    880: 'BD',
                    32: 'BE',
                    226: 'BF',
                    359: 'BG',
                    973: 'BH',
                    257: 'BI',
                    229: 'BJ',
                    590: 'BL',
                    1441: 'BM',
                    673: 'BN',
                    591: 'BO',
                    55: 'BR',
                    1242: 'BS',
                    975: 'BT',
                    267: 'BW',
                    375: 'BY',
                    501: 'BZ',
                    1: 'CA',
                    61: 'CC',
                    243: 'CD',
                    236: 'CF',
                    242: 'CG',
                    41: 'CH',
                    225: 'CI',
                    682: 'CK',
                    56: 'CL',
                    237: 'CM',
                    86: 'CN',
                    57: 'CO',
                    506: 'CR',
                    53: 'CU',
                    238: 'CV',
                    61: 'CX',
                    357: 'CY',
                    420: 'CZ',
                    49: 'DE',
                    253: 'DJ',
                    45: 'DK',
                    1767: 'DM',
                    1809: 'DO',
                    213: 'DZ',
                    593: 'EC',
                    372: 'EE',
                    20: 'EG',
                    291: 'ER',
                    34: 'ES',
                    251: 'ET',
                    358: 'FI',
                    679: 'FJ',
                    500: 'FK',
                    691: 'FM',
                    298: 'FO',
                    33: 'FR',
                    241: 'GA',
                    44: 'GB',
                    1473: 'GD',
                    995: 'GE',
                    233: 'GH',
                    350: 'GI',
                    299: 'GL',
                    220: 'GM',
                    224: 'GN',
                    240: 'GQ',
                    30: 'GR',
                    502: 'GT',
                    1671: 'GU',
                    245: 'GW',
                    592: 'GY',
                    852: 'HK',
                    504: 'HN',
                    385: 'HR',
                    509: 'HT',
                    36: 'HU',
                    62: 'ID',
                    353: 'IE',
                    972: 'IL',
                    44: 'IM',
                    91: 'IN',
                    964: 'IQ',
                    98: 'IR',
                    354: 'IS',
                    39: 'IT',
                    1876: 'JM',
                    962: 'JO',
                    81: 'JP',
                    254: 'KE',
                    996: 'KG',
                    855: 'KH',
                    686: 'KI',
                    269: 'KM',
                    1869: 'KN',
                    850: 'KP',
                    82: 'KR',
                    965: 'KW',
                    1345: 'KY',
                    7: 'KZ',
                    856: 'LA',
                    961: 'LB',
                    1758: 'LC',
                    423: 'LI',
                    94: 'LK',
                    231: 'LR',
                    266: 'LS',
                    370: 'LT',
                    352: 'LU',
                    371: 'LV',
                    218: 'LY',
                    212: 'MA',
                    377: 'MC',
                    373: 'MD',
                    382: 'ME',
                    1599: 'MF',
                    261: 'MG',
                    692: 'MH',
                    389: 'MK',
                    223: 'ML',
                    95: 'MM',
                    976: 'MN',
                    853: 'MO',
                    1670: 'MP',
                    222: 'MR',
                    1664: 'MS',
                    356: 'MT',
                    230: 'MU',
                    960: 'MV',
                    265: 'MW',
                    52: 'MX',
                    60: 'MY',
                    258: 'MZ',
                    264: 'NA',
                    687: 'NC',
                    227: 'NE',
                    234: 'NG',
                    505: 'NI',
                    31: 'NL',
                    47: 'NO',
                    977: 'NP',
                    674: 'NR',
                    683: 'NU',
                    64: 'NZ',
                    968: 'OM',
                    507: 'PA',
                    51: 'PE',
                    689: 'PF',
                    675: 'PG',
                    63: 'PH',
                    92: 'PK',
                    48: 'PL',
                    508: 'PM',
                    870: 'PN',
                    1: 'PR',
                    351: 'PT',
                    680: 'PW',
                    595: 'PY',
                    974: 'QA',
                    40: 'RO',
                    381: 'RS',
                    7: 'RU',
                    250: 'RW',
                    966: 'SA',
                    677: 'SB',
                    248: 'SC',
                    249: 'SD',
                    46: 'SE',
                    65: 'SG',
                    290: 'SH',
                    386: 'SI',
                    421: 'SK',
                    232: 'SL',
                    378: 'SM',
                    221: 'SN',
                    252: 'SO',
                    597: 'SR',
                    239: 'ST',
                    503: 'SV',
                    963: 'SY',
                    268: 'SZ',
                    1649: 'TC',
                    235: 'TD',
                    228: 'TG',
                    66: 'TH',
                    992: 'TJ',
                    690: 'TK',
                    670: 'TL',
                    993: 'TM',
                    216: 'TN',
                    676: 'TO',
                    90: 'TR',
                    1868: 'TT',
                    688: 'TV',
                    886: 'TW',
                    255: 'TZ',
                    380: 'UA',
                    256: 'UG',
                    1: 'US',
                    598: 'UY',
                    998: 'UZ',
                    379: 'VA',
                    1784: 'VC',
                    58: 'VE',
                    1284: 'VG',
                    1340: 'VI',
                    84: 'VN',
                    678: 'VU',
                    681: 'WF',
                    685: 'WS',
                    967: 'YE',
                    262: 'YT',
                    27: 'ZA',
                    260: 'ZM',
                    263: 'ZW',
                    44: 'JE'
                },
                modelInfo: {
                    tips: '绑定手机号成功',
                    id: 'bind_model',
                    man: 1
                }
            }
        },
        methods: {
            // 显示或者隐藏额外地址
            toggleExtra: function () {
                if (this.showExtra) {
                    this.showExtra = false;
                } else {
                    this.showExtra = true;
                }
            },
//            chooseAddress: function (telType) {
//                this.telType = telType;
//                this.showExtra = false;
//            },
            // 发送验证码
            sendYmz: function () {
                var _this = this;
                if (_this.validateTel() && _this.testGjdm()) {
                    let code = _this.telType || _this.telTypePre;
                    let country = _this.crArr[+code];
                    let mobile = _this.telIpt;
                    t.get('users/bind/mobile', {code, country, mobile},
                        function (data) {
                            if (data.body.error_code) {
                                if (data.body.error_code === 10622) {
                                    _this.telTip = '手机号已存在'
                                } else {
                                    _this.telTip = '服务器繁忙'
                                }
                            }
                        }
                    );
                    this.canSendYzm = false;
                    let timer = setInterval(() => {
                        this.left_time--;
                        if (this.left_time === 0) {
                            this.canSendYzm = true;
                            this.left_time = 60;
                            clearInterval(timer)
                        }
                    }, 1000)
                }
            },
            // 校验验证码
            validateTel: function () {
                let tel = this.telIpt;
                // 至少包含字母、符号或数字中的两项
                // 长度超过16位
                this.telTip = '';
                if (/^\d{6,}$/.test(tel)) {
                    this.telTip = '';
                    this.telFlag = 1;
                    return true;
                } else {
                    this.telTip = '请输入正确的手机号码。';
                    this.telFlag = 0;
                    return false;
                }
            },
            testYzm: function () {
                if (this.yzmIpt.length !== 0) {
                    this.yzmTip = '';
                    this.yzmFlag = true;
                } else {
                    this.yzmTip = '';
                    this.yzmFlag = false;
                    this.yzmTip = '验证码不能为空。'
                }
            },
            sub: function () {
                let _this = this;
                let code = _this.telType || _this.telTypePre;
                let country = _this.crArr[+code];
                let mobile = _this.telIpt;
                let verify_code = _this.yzmIpt;
                t._post('users/bind/mobile', {code, country, mobile, verify_code}, function (data) {
                    console.log(data);
                    if (data.body.error_code === 10619) {
                        _this.yzmTip = '验证码不正确';
                    }
                    if (!data.body.error_code) {
                        _this.bindSuccess();
                    }
                })
            },
            // 校验国际代码
            testGjdm: function () {
                this.telTypeTip = '';
                if (this.telType === '') {
                    return true;
                }
                if (this.telType !== '') {
                    if (!this.crArr[this.telType]) {
                        this.telTip = '请输入正确的国际编码。';
                        return false;
                    } else {
                        this.telTip = '';
                        return true;
                    }
                }
            },
            // 绑定成功的回调函数
            bindSuccess: function () {
                $('#bind_model').modal('show');
                setTimeout(function () {
                    $('#bind_model').modal('hide');
                }, 2000);
                setTimeout(function () {
                    location.href = '/#/en/home';
                }, 3000);
            }
        },
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        created() {
            this.fromChange = this.change ? this.change : false;
        },
        props: ['change'],
        components: {model},
        watch: {
            telFlag: function () {
                if (this.telFlag && this.yzmFlag) {
                    this.canSub = true;
                } else {
                    this.canSub = false;
                }
            },
            yzmFlag: function () {
                if (this.telFlag && this.yzmFlag) {
                    this.canSub = true;
                } else {
                    this.canSub = false;
                }
            }
        }
    }
</script>