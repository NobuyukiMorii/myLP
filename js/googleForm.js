function sendGform(){

	var flg	= true;
	var alertInputBgColor = '#f8d548';
	var valueEmail = "";
	var checkEmail = true;

	// お名前チェック
	if (document.getElementById('name').value == "" || document.getElementById('name').value == null)  {
		flg = false;
		document.getElementById('name').style.backgroundColor = alertInputBgColor;
		document.getElementById("AlertName").innerText = "※入力して下さい";
	}

	// メールチェック
	if (document.getElementById('email').value == "" || document.getElementById('email').value == null)  {
		flg = false;
		document.getElementById('email').style.backgroundColor = alertInputBgColor;
		document.getElementById("AlertEmail").innerText = "※入力して下さい";
	} else {
		// メールアドレスの形式をチェック
		valueEmail = document.getElementById('email').value;
		checkEmail = chkRegEmail(valueEmail);
		if ( checkEmail == false ){
			flg = false;
			document.getElementById('email').style.backgroundColor = alertInputBgColor;
			document.getElementById("AlertEmail").innerText = "※メールアドレスを正しく入力して下さい";
		}
	}

	// メッセージチェック
	if (document.getElementById('message').value == "" || document.getElementById('message').value == null)  {
		flg = false;
		document.getElementById('message').style.backgroundColor = alertInputBgColor;
		document.getElementById("AlertMessage").innerText = "※入力して下さい";
	}

	// どれかが失敗した時の処理
	if ( flg == false) { return; } 

	// 成功時の処理
	document.myForm.submit();
	document.getElementById('formWrapper').style.display = 'none';
	document.getElementById('thxMessage').style.display = 'block';
	
}

/**
 * [関数名] chkRegEmail
 * [機　能] 正規表現によるメールアドレス（E-mail）チェック
 * [引　数]
 * @param str 入力された文字列
 * [返り値]
 * @return true(E-mail形式である場合) | false(E-mail形式でない場合)
*/
function chkRegEmail(str){
    /* E-mail形式の正規表現パターン */
    /* @が含まれていて、最後が .(ドット)でないなら正しいとする */
	var Seiki=/[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i;

    /* 入力された値がパターンにマッチするか調べる */
    if(str!=""){
        if(str.match(Seiki)){
            return true;
        }else{
            return false;
        }
    }else{
        /* 何も入力されていない場合はアラート表示 */
        return false;
    }
}