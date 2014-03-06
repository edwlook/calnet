'use strict';

var request = require('request').defaults({jar: true});

function CasClient(options) {
  if (!options || !options.username || !options.password) {
    throw new Error('Username or password not supplied.');
  }
  this.username = options.username;
  this.password = options.password;
}

CasClient.prototype.login = function(callback) {
  var url = 'https://auth.berkeley.edu/cas/login';
  request.post(url, {
    form: {
      username: this.username,
      password: this.password,
      lt: '_cNoOpConversation id_krO0ABXNyAGFvcmcuc3ByaW5nZnJhbWV3b3JrLndlYmZsb3cuZXhlY3V0aW9uLnJlcG9zaXRvcnkuY29udGludWF0aW9uLlNlcmlhbGl6ZWRGbG93RXhlY3V0aW9uQ29udGludWF0aW9uPMZQHZQEyycMAAB4cgBXb3JnLnNwcmluZ2ZyYW1ld29yay53ZWJmbG93LmV4ZWN1dGlvbi5yZXBvc2l0b3J5LmNvbnRpbnVhdGlvbi5GbG93RXhlY3V0aW9uQ29udGludWF0aW9ujvgpwtO1430CAAB4cHoAAAQAAAAKVR-LCAAAAAAAAAClWX1sFMcVH_swYIPhjLGxIVBKIXzmjMNHQo9C7bMNh86EYkLSOiSMd8d3i_d2ltk5-0iVhPxBVKkhbVJoRdSIVFFJVSE1rdQ2In9QmtL8QaEtKlWaKmr-adUobaW2qiJVTdv3Zj_vbvEZxRLDzpuZ33vzvmbm3cW_kiZHkB1c5FOOLQwrPy5okU1xMZGaYmPjJp9KMStvWCxlFG0zNQSEwTLTStLgVhYoXfe3OR9cuHJ6PiFlW5JWk8Pke7ylgLz4GJ2kKZhupnKGNcH0nOHI-etHjuw7-qVVCVw0NYsQ0gBT77sTIUaY43gi5FddvKk_tvGGEuE4eZI0ghyTBpvKoSxDXBTrgvs7ikKPSCpLztjVz0396ZX3NjcCuCCb41A0LhjIVyo6KVxjaDk6xkymDwLp8g9az-9L5282koYcmaVxnUnSlkOd9JjUyveMFLiQaUC-tw5y35gjBdVkBPtZ_dCeR1567UMUzYYtLlSqRtiUgi0M39e-9eg7B4H3CGmapGaJAaNkOGt_qTjGxDMXzy6fd-a9LysYkgCgz0ynKyWTxk2TaUpjOa5Rs09KYYyVJBum9rpdhceTDx9_KoFbbqH-iCPJQnfj6Aw9MDGtpG4LHWQvdQpAb5rzzpU3O4_-OkEah0iLyak-BBvnIkuaZUEwp8BNvWzv_izBv_lTc6FNwr8mSeY4TEwaGgNHnKcJpjNLGtR0gEs_bukYdYx8SqNOipZkAQc1qvaAW9UMm5qpBwHBgi0foI4D29YzIcqzW19pWrnh9I8aSWOOzLW9CZIsippTotLSMF7ygNAfu8q2DSK1aSUhAAw98oGxY6A_HOwGvUxRYWU4nzDYYbRSoBVlpX7OTUat6yvFyVvf_PffwJpf8K1pE0k6YRcTTO4RFMS08odUL6vb5bKD8EnVttdoC2JkV5yZAdjQXa30G5Y-WEZtYq9GeJBy050g3HX97QuXul_bqEKhdQyGYNlB5pRMKQm4kcj3VEH1hFA9_dH5GDDtoYYCFr_66BO7lqbv-pkbrJEZhwqCT9Exk936-ba1O6Zev5Ygs3KkSaNgJkk6IhYMZoIRWyFaqWEOQz6gedeSo6TFkVSbOASxCCtXjFYY3x8YNFkRdAUQi52SbYPPOixUBERCMhIJmBDTbuJab5eEj-kFcg1m49CGnTs_WrXDDVdCdoIdlk2zgDZfffHu7e-eaiSzshBNkETdsM-RBTrTTIoaz5jgzWp_4Lnjhsn2-54LEVxkssD1_aEvQ7ZulWR9HdsPUEnRaEyAg4edFIoqSXOeyUEhuHD5bgKHfFKSe6ZLPNTNN-iAfeoTcMOOh7vAsAzlo1XgZ_DjXmy2SHoAAAQAsoRZTkmwcNpg2eZgIX92wx-js5vBRUq2OkbU-P_gT5I1TslKCTaOaTC1h1lMUMn0YaWrPk0Di3OxZTNE_WzDmuQTzMcmGyVZF107AOk8TzF0KxfjySbJJ6cbVntG3HSwz0cl6QqdwefhLoWk6H7UriOaJNunU77KzwOGY1OpFVyUrNoXWHdpLD2GySmI8xlYeBgi3PBNnIz0fN_RuXsFCZX6E0l6Z4DsH6I-eHslwcOfw6rQX5Dxx3PV3aTPsrhEL_DhF1dRApXkAuh0HcF9aLXe3TWc7CB4BSEG-FydaKoAxhQE0RR2YgDBs2LTfRXgYbh34S0IkuOC4NtXLBjOkkwEmJchFmaA6eG1RLGaWAXSb2a2XUiMlmN4ySPsxGx3u4y_7FUBDjDN8C-LIOKiin4A-_lwx_gxis0j2BwJN4Afj2FztEoQ_BjDRvu4UBN1grxGSXgOejvriqH6ZgVHnARzBEmoU5K1M-CDd22IZvwv0JQZCHtdkr6ZPggOsuNwa5IZMKvgJv7HytJNoCtuO-ZJPw_uhBY1K3ZAvlUnU1VEj6ehZKR3B5ZvbMYPCxsObg23CxHKcQU_jmMjsDkRDHxffow3G1waa2iBxCGPNyTZVv_VBNknBPOPrY5qkqfs2SYtWVohYPGEJLtnxAKvUZD4FCvPonuppZt4_iypJXrs2gqqGxkPOH9bzuRJCJyLk5ri6jmQ4theSfC4dbjcPE5ZzE_gWNGMfLvoS-G7xWRSMfPPpCjDJbVEj2lrBdOA2WbpPnnqMRtBD2Ehqqe_Pp3aEhl_avoJvlldIXzuiYnbn2oBd__SwMSISwGvrKF5-C0694cCHmvx42vYnFFXghH36ReEVfr2CTyQYcinBiJ0VJP8e6UtOF68qvTc8C_8OIfNixC8Ot_DwjRoQPbB1eWAX0FKO7UXmoBfMtILQrAjgLiOH-exebligDjeaRw-aXFfePlNjdBxFqPcpbH0Wp4NqyTpQWhqU5gI2BIu9RZ1H_59tm16r-YhwwQPyBSoAYfpsvgBT3tJwwuGAe4OBvu4gR8XsHlVkrl69TC48RaUxbAcm01IAUIUi3Be42YzpgEpO2uNc3izMaqrQoS7XpKV04z6QvncaiI153GNc51xF-IBS2MHmPDcwefaHUcOVPzdgMEH4a6x-U6cOipXvO_db2KNAkeOpVOhPySobTNxmJqTcB51x5FjbuWXZwLtnZvV0FFyzGtki6fIauhI-QUybF-010_xRd5ZQ4sR_ClJNtQVfC93fKk7a2gxoHlJNsaBTuJ8J6XeiwcZnkUeakc1KUYPee-5fBtQ902X43kPsr2SECNl0Qv_abc-qO4AHmZXDLUWuGHNbbavcctiWHoAAAJahEtl-AkuWXBALKro16aTxBHvju8jqukqE_b2qlzY23vAza34sFlcRfGvmF76jb5zd9dHlVzj5mq3m3F3APkpuDi0V04MhP9loI6qsJO8CBpxH8MWJM99WXjQ6DaH9Lb6IcgQCJqMED3pE6JkBZL_WUZLsG5ygluo-xGI8FtHkLvDymgmqLc6qx-0ilw3xg28huNb7T8L1_T-8C_PJd0SswkUBFhXFmRTfYCQ3t1PTl579MMVCqZBg3CJ1KjCaW7Rtj1E7hOCnkA5yk_fXH7uLfpSgjRkySzHeJyp-hRR9X1SRqH-UIa199crGjJqgUkgY8kTFVW_V58_u-y5ddd-oSScDffkPJ5r0fKrW5jE6uDOOkz8-1QsI61l-VuXhjZ80S0jbp0hVAWEvPqVt9e-8O6tRqwzzmaqyqTMkiOLi249McN1BvcJh0Mkgt9sq1cBHY5Zls6RFq42HanYJcOa45DBTL2q8j7ClIZin8sx23IrZIeen_1y2z9az6jid4sFhxvTD1BZ8FguDCmqABn8yOFyRFIafx4iwc8UynfUQPK_G376RvMzy11tJ8PRwyrh_O4bT4yeTH-vIUESWdKmYSQa8kTW0oQqb2bJfOYWOjO8ZMlRMs_rYskRQnw0xj2UW-JfSfgT3Gj0Jnz1xsPnk8560y-xttjBn1tUT3g-Dbv5dL0yKBun4A9xxms9-ft_vnk683fXn8Fi44aKki63GPw-Np21v5CA_S4NnDr79dd_vNX9_Ww-yuIV-N0465b1o6yyuB_-zIHr15fLdrlc_j_kWLPwHRwAAAF4',
      _eventId: 'submit'
    }
  }, function (error, res, body) {
    if (!error && res.statusCode == 200) {
      console.log('Logged in.');
      return callback(null, body);
    } else {
      return callback('Error logging in: ' + error);
    }
  });
};

CasClient.prototype.logout = function(callback) {
  var url = 'https://auth.berkeley.edu/cas/logout';
  request.get(url, function (error, res, body) {
    if (!error && res.statusCode == 200) {
      console.log('Logged out.');
      return callback(null, body);
    } else {
      return callback('Error logging out: ' + error);
    }
  });
};

CasClient.prototype.get = function(url, callback) {
  if (!url) return callback('No url specified.');
  request({
    url: url,
    method: 'GET',
    rejectUnauthorized: false
  }, function (error, res, body) {
    if (!error && res.statusCode == 200) {
      return callback(null, body);
    } else {
      return callback('Error requesting "' + url + '": ' + error);
    }
  });
};

module.exports = CasClient;
