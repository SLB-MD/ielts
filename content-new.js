// ============================================================
//  content-new.js — LÁT CẮT NGƯỜI MỚI VIẾT LẠI CHO BẢN MỚI
//  Nạp SAU content.js. Chỉ ghi đè đúng các lát cắt dưới đây.
//  Mọi nội dung tự soạn 100%, tiếng Việt đơn giản, ví dụ trước.
//  Gỡ file này là về lại nội dung cũ.
// ============================================================

// ---------- 1. BỘ 26 CHỮ CÁI (vocab set 69) — sửa A1-A7 ----------
(function () {
  if (typeof CONTENT === "undefined") return;
  var letters = [
    { w: "A", ipa: "/eɪ/", vi: "Chữ A - tên chữ đọc gần giống 'ây', viết thường là a.", col: "A - apple: quả táo", ex: "A is for apple.", exv: "A là chữ đầu của từ apple (quả táo).", vid: "KGZFmW3uPJE", ex2: "A - ant: con kiến", tip: "Chữ A giống một cái thang hình tam giác có một thanh ngang ở giữa.", kind: "vowel", ngrp: "ei", snd: "Tên chữ đọc gần giống 'ây'. Nhưng trong từ apple, chữ A đọc là 'a' ngắn — nghe kỹ: 'a-pồ-l' (đọc rõ âm l cuối), không phải 'ây-pồ'." },
    { w: "B", ipa: "/biː/", vi: "Chữ B - tên chữ đọc gần giống 'bi', viết thường là b.", col: "B - ball: quả bóng", ex: "B is for ball.", exv: "B là chữ đầu của từ ball (quả bóng).", vid: "f1bcER1Zzak", ex2: "B - book: quyển sách", tip: "Chữ B có hai cái bụng tròn xếp chồng lên nhau, tròn như hai quả bóng ball.", kind: "consonant", ngrp: "ii", snd: "Tên chữ đọc gần giống 'bi'. Nhưng trong từ ball, chữ B đọc là /b/ — nghe kỹ: 'bôl', không phải 'bi-ôl'." },
    { w: "C", ipa: "/siː/", vi: "Chữ C - tên chữ đọc gần giống 'xi', viết thường là c.", col: "C - cat: con mèo", ex: "C is for cat.", exv: "C là chữ đầu của từ cat (con mèo).", vid: "SNgUoinyQUU", ex2: "C - cake: cái bánh", tip: "Chữ C giống vầng trăng khuyết đang mở miệng về phía phải.", kind: "consonant", ngrp: "ii", snd: "Tên chữ đọc gần giống 'xi'. Nhưng trong từ cat, chữ C đọc là /k/ — nghe kỹ: 'cát', không phải 'xi-át'." },
    { w: "D", ipa: "/diː/", vi: "Chữ D - tên chữ đọc gần giống 'đi', viết thường là d.", col: "D - dog: con chó", ex: "D is for dog.", exv: "D là chữ đầu của từ dog (con chó).", vid: "SizYpeJL_UE", ex2: "D - door: cánh cửa", tip: "Chữ D giống cánh cửa cong: một nét thẳng đứng và một cái bụng to.", kind: "consonant", ngrp: "ii", snd: "Tên chữ đọc gần giống 'đi'. Nhưng trong từ dog, chữ D đọc là /d/ — nghe kỹ: 'đóc', không phải 'đi-óc'." },
    { w: "E", ipa: "/iː/", vi: "Chữ E - tên chữ đọc gần giống 'i', viết thường là e.", col: "E - egg: quả trứng", ex: "E is for egg.", exv: "E là chữ đầu của từ egg (quả trứng).", vid: "BMLtpWCdBeY", ex2: "E - elephant: con voi", tip: "Chữ E giống cái lược có ba răng chĩa ra phía phải.", kind: "vowel", ngrp: "ii", snd: "Tên chữ đọc gần giống 'i'. Nhưng trong từ egg, chữ E đọc là /e/ — nghe kỹ: 'éc', không phải 'i-éc'." },
    { w: "F", ipa: "/ef/", vi: "Chữ F - tên chữ đọc gần giống 'ép', viết thường là f.", col: "F - fish: con cá", ex: "F is for fish.", exv: "F là chữ đầu của từ fish (con cá).", vid: "LWMED_3Nvig", ex2: "F - frog: con ếch", tip: "Chữ F giống chữ E bị rụng nét ngang dưới cùng, chỉ còn hai nét ngang.", kind: "consonant", ngrp: "e", snd: "Tên chữ đọc gần giống 'ép'. Nhưng trong từ fish, chữ F đọc là /f/ — nghe kỹ: 'fish', cuối từ thổi hơi 'sh', không phải 't'." },
    { w: "G", ipa: "/dʒiː/", vi: "Chữ G - tên chữ đọc gần giống 'gi', viết thường là g.", col: "G - girl: cô gái", ex: "G is for girl.", exv: "G là chữ đầu của từ girl (cô gái).", vid: "39prtfpkRkU", ex2: "G - goat: con dê", tip: "Chữ G giống chữ C có thêm một nét ngang nhỏ chui vào trong như cái móc.", kind: "consonant", ngrp: "ii", snd: "Tên chữ đọc gần giống 'gi'. Nhưng trong từ girl, chữ G đọc là /dʒ/ — nghe kỹ: 'gơn-l' (đọc rõ âm l cuối), không phải 'gi-ơn'.", note: "Ở miền Bắc, chữ 'gi' tiếng Việt đọc là /z/, khác âm /dʒ/ của chữ G tiếng Anh — nghe nút loa để phân biệt." },
    { w: "H", ipa: "/eɪtʃ/", vi: "Chữ H - tên chữ đọc gần giống 'ếch', viết thường là h.", col: "H - hat: cái mũ", ex: "H is for hat.", exv: "H là chữ đầu của từ hat (cái mũ).", vid: "PUI5-AphjMg", ex2: "H - hand: bàn tay", tip: "Chữ H giống hai người đứng song song, nắm tay nhau bằng một nét ngang ở giữa.", kind: "consonant", ngrp: "ei", snd: "Tên chữ đọc gần giống 'ếch'. Nhưng trong từ hat, chữ H đọc là /h/ — nghe kỹ: 'hát', không phải 'ếch-át'." },
    { w: "I", ipa: "/aɪ/", vi: "Chữ I - tên chữ đọc gần giống 'ai', viết thường là i.", col: "I - ice: nước đá", ex: "I is for ice.", exv: "I là chữ đầu của từ ice (nước đá).", vid: "b_gJVJvOA3Q", ex2: "I - insect: con côn trùng", tip: "Chữ I chỉ là một nét thẳng đơn giản; viết thường thì có thêm một dấu chấm ở trên đầu.", kind: "vowel", ngrp: "ai", snd: "Tên chữ đọc gần giống 'ai'. Nhưng trong từ insect, chữ I đọc là /ɪ/ ngắn — nghe kỹ: 'in-séc-t' (đọc rõ âm t cuối), không phải 'ai-in-séc'." },
    { w: "J", ipa: "/dʒeɪ/", vi: "Chữ J - tên chữ đọc gần giống 'giây', viết thường là j.", col: "J - juice: nước ép", ex: "J is for juice.", exv: "J là chữ đầu của từ juice (nước ép).", vid: "8wNIYNyG37g", ex2: "J - jacket: cái áo khoác", tip: "Chữ J giống cái móc câu cong lên ở cuối; viết thường cũng có dấu chấm ở trên đầu.", kind: "consonant", ngrp: "ei", snd: "Tên chữ đọc gần giống 'giây'. Nhưng trong từ juice, chữ J đọc là /dʒ/ — nghe kỹ: 'giu' rồi xì 's' ở cuối, không phải 'giây-ut'." },
    { w: "K", ipa: "/keɪ/", vi: "Chữ K - tên chữ đọc gần giống 'cây', viết thường là k.", col: "K - kite: cái diều", ex: "K is for kite.", exv: "K là chữ đầu của từ kite (cái diều).", vid: "jdI2ad0lNpA", ex2: "K - key: cái chìa khóa", tip: "Chữ K giống một người đứng thẳng, giơ một tay lên và đá một chân ra.", kind: "consonant", ngrp: "ei", snd: "Tên chữ đọc gần giống 'cây'. Nhưng trong từ kite, chữ K đọc là /k/ — nghe kỹ: 'cai-t' (đọc rõ âm t cuối), không phải 'cây-ai'." },
    { w: "L", ipa: "/el/", vi: "Chữ L - tên chữ đọc gần giống 'eo', viết thường là l.", col: "L - lion: con sư tử", ex: "L is for lion.", exv: "L là chữ đầu của từ lion (con sư tử).", vid: "F4BgJ_SAgZ8", ex2: "L - leg: cái chân", tip: "Chữ L giống góc nhà: một nét đứng rồi một nét nằm ở dưới chân.", kind: "consonant", ngrp: "e", snd: "Tên chữ đọc gần giống 'eo'. Nhưng trong từ lion, chữ L đọc là /l/ — nghe kỹ: 'lai-ơn', không phải 'eo-ai-ơn'." },
    { w: "M", ipa: "/em/", vi: "Chữ M - tên chữ đọc gần giống 'em', viết thường là m.", col: "M - milk: sữa", ex: "M is for milk.", exv: "M là chữ đầu của từ milk (sữa).", vid: "WFMI-cV9sq8", ex2: "M - moon: mặt trăng", tip: "Chữ M giống hai ngọn núi đứng sát cạnh nhau.", kind: "consonant", ngrp: "e", snd: "Tên chữ đọc gần giống 'em'. Nhưng trong từ milk, chữ M đọc là /m/ — nghe kỹ: 'miức', không phải 'em-iức'." },
    { w: "N", ipa: "/en/", vi: "Chữ N - tên chữ đọc gần giống 'en', viết thường là n.", col: "N - nose: cái mũi", ex: "N is for nose.", exv: "N là chữ đầu của từ nose (cái mũi).", vid: "xZx53RedAZ0", ex2: "N - night: ban đêm", tip: "Chữ N giống chữ M bị thiếu một chân: hai nét đứng nối nhau bằng một nét chéo.", kind: "consonant", ngrp: "e", snd: "Tên chữ đọc gần giống 'en'. Nhưng trong từ nose, chữ N đọc là /n/ — nghe kỹ: 'nâu-z' (cuối từ là âm z rung nhẹ), không phải 'en-âu'." },
    { w: "O", ipa: "/əʊ/", vi: "Chữ O - tên chữ đọc gần giống 'âu', viết thường là o.", col: "O - orange: quả cam", ex: "O is for orange.", exv: "O là chữ đầu của từ orange (quả cam).", vid: "RWbvHZBmrqk", ex2: "O - owl: con cú mèo", tip: "Chữ O tròn xoe như quả cam orange và như cái miệng đang đọc 'âu'.", kind: "vowel", ngrp: "ou", snd: "Tên chữ đọc gần giống 'âu'. Nhưng trong từ orange, chữ O đọc là /ɒ/ — nghe kỹ: 'o-rin-gi' (cuối từ có âm 'gi' nhẹ), không phải 'âu-rinh'." },
    { w: "P", ipa: "/piː/", vi: "Chữ P - tên chữ đọc gần giống 'pi', viết thường là p.", col: "P - pig: con lợn", ex: "P is for pig.", exv: "P là chữ đầu của từ pig (con lợn).", vid: "14hXRz94jRQ", ex2: "P - pen: cái bút", tip: "Chữ P giống lá cờ trên cột: một nét đứng và một cái bụng tròn ở phía trên.", kind: "consonant", ngrp: "ii", snd: "Tên chữ đọc gần giống 'pi'. Nhưng trong từ pig, chữ P đọc là /p/ — nghe kỹ: 'píc', không phải 'pi-íc'." },
    { w: "Q", ipa: "/kjuː/", vi: "Chữ Q - tên chữ đọc gần giống 'kiu', viết thường là q.", col: "Q - queen: nữ hoàng", ex: "Q is for queen.", exv: "Q là chữ đầu của từ queen (nữ hoàng).", vid: "L987a64I2cY", ex2: "Q - question: câu hỏi", tip: "Chữ Q giống chữ O có thêm một cái đuôi nhỏ ở góc dưới bên phải.", kind: "consonant", ngrp: "juu", snd: "Tên chữ đọc gần giống 'kiu'. Nhưng trong từ queen, chữ Q đọc là /kw/ — nghe kỹ: 'quin', không phải 'kiu-in'." },
    { w: "R", ipa: "/ɑːr/", vi: "Chữ R - tên chữ đọc gần giống 'a' dài, có âm r ở cuối, viết thường là r.", col: "R - rabbit: con thỏ", ex: "R is for rabbit.", exv: "R là chữ đầu của từ rabbit (con thỏ).", vid: "W5z941Xx2fM", ex2: "R - red: màu đỏ", tip: "Chữ R giống chữ P có thêm một cái chân đá ra phía trước.", kind: "consonant", ngrp: "aa", snd: "Tên chữ đọc là /ɑːr/ — gần giống 'a' dài rồi cong lưỡi cho âm r. Nhưng trong từ rabbit, chữ R đọc là /r/ — nghe kỹ: 'ra-bít', không phải 'a-ra-bít'." },
    { w: "S", ipa: "/es/", vi: "Chữ S - tên chữ đọc gần giống 'ét', viết thường là s.", col: "S - sun: mặt trời", ex: "S is for sun.", exv: "S là chữ đầu của từ sun (mặt trời).", vid: "IaFlt1TjM-k", ex2: "S - star: ngôi sao", tip: "Chữ S cong cong như con rắn đang bò, đọc lên nghe 'xì xì' như tiếng rắn.", kind: "consonant", ngrp: "e", snd: "Tên chữ đọc gần giống 'ét'. Nhưng trong từ sun, chữ S đọc là /s/ — nghe kỹ: 'săn', không phải 'ét-ăn'." },
    { w: "T", ipa: "/tiː/", vi: "Chữ T - tên chữ đọc gần giống 'ti', viết thường là t.", col: "T - tree: cái cây", ex: "T is for tree.", exv: "T là chữ đầu của từ tree (cái cây).", vid: "1yl9p--gElU", ex2: "T - table: cái bàn", tip: "Chữ T giống cái cột có mái ngang trên đầu.", kind: "consonant", ngrp: "ii", snd: "Tên chữ đọc gần giống 'ti'. Nhưng trong từ tree, chữ T đọc là /t/ — nghe kỹ: 'tri', không phải 'ti-ri'." },
    { w: "U", ipa: "/juː/", vi: "Chữ U - tên chữ đọc gần giống 'iu', viết thường là u.", col: "U - umbrella: cái ô", ex: "U is for umbrella.", exv: "U là chữ đầu của từ umbrella (cái ô).", vid: "IF59Xs60uRM", ex2: "U - uncle: chú, bác trai", tip: "Chữ U giống cái cốc có hai thành cao và đáy cong, đang chờ rót nước.", kind: "vowel", ngrp: "juu", snd: "Tên chữ đọc gần giống 'iu'. Nhưng trong từ umbrella, chữ U đọc là /ʌ/ — nghe kỹ: 'ăm-bre-lơ', không phải 'iu-bre-lơ'." },
    { w: "V", ipa: "/viː/", vi: "Chữ V - tên chữ đọc gần giống 'vi', viết thường là v.", col: "V - van: xe tải nhỏ", ex: "V is for van.", exv: "V là chữ đầu của từ van (xe tải nhỏ).", vid: "yZjEtwr8Q4o", ex2: "V - violin: cây đàn vĩ cầm", tip: "Chữ V là hai nét chéo gặp nhau ở một điểm nhọn phía dưới.", kind: "consonant", ngrp: "ii", snd: "Tên chữ đọc gần giống 'vi'. Nhưng trong từ van, chữ V đọc là /v/ — nghe kỹ: 'van' với âm a mở rộng (giữa a và e), không phải 'vi-an'." },
    { w: "W", ipa: "/ˈdʌbljuː/", vi: "Chữ W - tên chữ đọc gần giống 'đắp-biu', viết thường là w.", col: "W - water: nước", ex: "W is for water.", exv: "W là chữ đầu của từ water (nước).", vid: "mQZ-c3_EDj4", ex2: "W - window: cửa sổ", tip: "Chữ W là hai chữ V đứng cạnh nhau, nhìn như hai thung lũng liền nhau.", kind: "consonant", ngrp: "juu", snd: "Tên chữ đọc gần giống 'đắp-biu'. Nhưng trong từ water, chữ W đọc là /w/ — nghe kỹ: 'wo-tơ' (môi tròn chu ra rồi mở), không phải 'đắp-biu-o-tơ'." },
    { w: "X", ipa: "/eks/", vi: "Chữ X - tên chữ đọc gần giống 'ếch-x', viết thường là x.", col: "X - box: cái hộp", ex: "X is for box.", exv: "X là chữ CUỐI của từ box (cái hộp).", vid: "3AQUDbEhTm8", ex2: "X - fox: con cáo", tip: "Chữ X là hai nét chéo bắt chéo nhau như dấu nhân.", kind: "consonant", ngrp: "e", snd: "Chữ X thường đứng ở CUỐI từ: box đọc là 'bốc-x', fox cũng vậy — X không đứng đầu hai từ này." },
    { w: "Y", ipa: "/waɪ/", vi: "Chữ Y - tên chữ đọc gần giống 'oai', viết thường là y.", col: "Y - yellow: màu vàng", ex: "Y is for yellow.", exv: "Y là chữ đầu của từ yellow (màu vàng).", vid: "Wa_9FdUyrJ0", ex2: "Y - yo-yo: đồ chơi yo-yo", tip: "Chữ Y giống cái chạc cây: hai nhánh ở trên chụm lại thành một thân ở dưới.", kind: "consonant", ngrp: "ai", snd: "Tên chữ đọc gần giống 'oai'. Nhưng trong từ yellow, chữ Y đọc là /j/ — nghe kỹ: âm đầu như âm 'y' trong từ 'yes', rồi 'lô', không phải 'oai-e-lô'.", note: "Chữ Y đặc biệt: lúc là phụ âm (yellow), lúc là nguyên âm (happy) — lên chặng sau sẽ gặp." },
    { w: "Z", ipa: "/zɛd/", vi: "Chữ Z - tên chữ đọc gần giống 'dét', viết thường là z.", col: "Z - zoo: vườn thú", ex: "Z is for zoo.", exv: "Z là chữ đầu của từ zoo (vườn thú).", vid: "IDeUZy_iNT4", ex2: "Z - zebra: con ngựa vằn", tip: "Chữ Z đi theo đường zíc zắc: ngang, chéo xuống, rồi ngang. Cách đọc tên chữ: 'zee' (kiểu Mỹ) / 'zed' (kiểu Anh, dùng trong IELTS) — web này ưu tiên 'zed'.", kind: "consonant", ngrp: "e", snd: "Tên chữ đọc là 'zed' (kiểu Anh). Nhưng trong từ zoo, chữ Z đọc là /z/ — nghe kỹ: 'zu', không phải 'dét-u'." }
  ];
  CONTENT.vocab[69].cards = letters;
})();

// ---------- 2. BỘ 20 TỪ LỚP HỌC (vocab set 24) — sửa B1-B4 ----------
(function () {
  if (typeof CONTENT === "undefined") return;
  var s = CONTENT.vocab[24];
  s.topic = "Từ vựng lớp học đầu tiên";
  s.theme = "Từ vựng lớp học đầu tiên - First Classroom Words";
  var fix = {
    "letter": { ipa: "/ˈletə/" },
    "answer": { ipa: "/ˈɑːnsə/" },
    "say": { ex: "Say hello to your teacher.", exv: "Hãy chào thầy cô giáo của bạn." },
    "listen": { ex: "Listen to your teacher, please.", exv: "Hãy nghe thầy cô giáo của bạn nhé." },
    "repeat": { ex: "Please repeat after me: hello.", exv: "Hãy nhắc lại theo tôi: hello." },
    "practice": { ex: "We practice English every day.", exv: "Chúng ta luyện tập tiếng Anh mỗi ngày." },
    "sound": { ex: "Listen! What sound is that?", exv: "Hãy nghe! Đó là âm gì?" }
  };
  s.cards.forEach(function (c) { if (fix[c.w]) Object.assign(c, fix[c.w]); });
})();

// ---------- 3. NHÃN CHƯƠNG BAND 0 (D2) + NHÃN NGHE (E) ----------
var RB_VIDEO_BAND0 = { title: "Alphabet Song", channel: "BBC Super Movers", label: "Dành cho người mới bắt đầu", embed: "https://www.youtube-nocookie.com/embed/jYeMpUdufNk", note: "Học bảng chữ cái qua bài hát vận động vui nhộn — bước đầu tiên cho người mới bắt đầu." };
// E: các mục nghe chào hỏi Band 0 (listening #96, #97, #98) không còn mang nhãn "Section 1".
var RB_LISTEN_LABELS = { 96: "Nghe chậm: chào hỏi", 97: "Nghe chậm: chào hỏi", 98: "Nghe chậm: chào hỏi" };

// ---------- 4. BA TRẠM NGỮ PHÁP SIÊ NHỎ BAND 0 (D1) ----------
// Khuôn trạm: ví dụ trước — quy tắc sau — mẹo hình ảnh — khối Làm mẫu — 8 câu luyện có giải thích.
var RB_NEW_GRAMMAR = [
  {
    fam: "Câu nền tảng đầu tiên", level: "Band 0", name: "Tôi là... (I am...)",
    hook: "Muốn giới thiệu mình, chỉ cần hai chữ: I am — rồi thêm tên, nghề, hoặc cảm xúc.",
    explain: "Nghe hai câu này trước: 'I am Nam.' (Tôi là Nam.) 'I am a student.' (Tôi là học sinh.) Quy tắc rất ngắn: I am + tên / nghề / tính từ. Chữ 'am' chỉ đi với 'I' — một mình 'I' dùng 'am', không dùng 'is' hay 'are'.",
    examples: ["I am Nam.", "I am a student.", "I am happy."],
    tip: "Hãy tưởng tượng chữ 'am' như cái bóng chỉ đi với 'I' — I và am luôn đi một cặp, không đi với ai khác.",
    model: "Cô giáo hỏi: Tell me about you. Bạn đáp: I am Nam. I am a student. I am happy today.",
    modelVi: "Cô giáo hỏi: Hãy kể về bạn. Bạn đáp: Tôi là Nam. Tôi là học sinh. Hôm nay tôi vui.",
    quiz: [
      { q: "___ Nam.", o: ["I am", "I is", "I are"], a: 0, why: "Chủ ngữ I luôn đi với am: I am Nam." },
      { q: "I ___ a teacher.", o: ["am", "is", "are"], a: 0, why: "I đi với am, không dùng is/are." },
      { q: "I ___ happy today.", o: ["am", "is", "are"], a: 0, why: "I am + tính từ: I am happy." },
      { q: "Chọn câu đúng:", o: ["I am Linh.", "I is Linh.", "I are Linh."], a: 0, why: "Chỉ có I am là đúng." },
      { q: "I ___ a student.", o: ["am", "is", "be"], a: 0, why: "I + am + nghề: I am a student." },
      { q: "___ Anna.", o: ["I am", "I be", "I is"], a: 0, why: "Giới thiệu tên: I am Anna." },
      { q: "I am ___. (điền nghề)", o: ["a doctor", "doctoring", "doctors"], a: 0, why: "Sau am là danh từ nghề có a: a doctor." },
      { q: "Câu nào sai?", o: ["I is happy.", "I am happy.", "I am a student."], a: 0, why: "I is là sai — I luôn đi với am." }
    ]
  },
  {
    fam: "Câu nền tảng đầu tiên", level: "Band 0", name: "Đây là... (This is...)",
    hook: "Muốn chỉ một đồ vật hay một người, chỉ cần: This is — rồi thêm tên đồ vật.",
    explain: "Nghe hai câu này trước: 'This is a book.' (Đây là một quyển sách.) 'This is my friend, Anna.' (Đây là bạn tôi, Anna.) Quy tắc: This is + một đồ vật / một người ở gần mình. 'This' nghĩa là 'cái này / người này' — thứ ở gần, chỉ tay tới được.",
    examples: ["This is a book.", "This is my friend, Anna.", "This is my school."],
    tip: "Hãy tưởng tượng tay bạn đang chỉ vào đồ vật ở ngay trước mặt — thứ ở gần mới dùng This.",
    model: "Bạn chỉ quyển sách: This is a book. Bạn giới thiệu bạn mình: This is my friend, Anna.",
    modelVi: "Bạn chỉ quyển sách: Đây là một quyển sách. Bạn giới thiệu bạn mình: Đây là bạn tôi, Anna.",
    quiz: [
      { q: "___ a pen.", o: ["This is", "This are", "This be"], a: 0, why: "This is + đồ vật số ít." },
      { q: "This is ___ friend, Lan.", o: ["my", "me", "I"], a: 0, why: "my + người: my friend." },
      { q: "Muốn giới thiệu quyển sách, nói:", o: ["This is a book.", "This are a book.", "This is book."], a: 0, why: "This is + a + danh từ số ít." },
      { q: "This is a school. 'This' ở đây nghĩa là:", o: ["cái này", "cái kia ở xa", "những cái này"], a: 0, why: "This = cái này, thứ ở gần." },
      { q: "___ my school.", o: ["This is", "This are", "These is"], a: 0, why: "This is + nơi chốn số ít." },
      { q: "This is ___ apple.", o: ["an", "a", "the"], a: 0, why: "apple bắt đầu bằng nguyên âm nên dùng an." },
      { q: "Chọn câu đúng:", o: ["This is my teacher.", "This are my teacher.", "This is my teachers."], a: 0, why: "This is + my + danh từ số ít." },
      { q: "Câu nào sai?", o: ["This are a cat.", "This is a cat.", "This is my cat."], a: 0, why: "This luôn đi với is, không đi với are." }
    ]
  },
  {
    fam: "Câu nền tảng đầu tiên", level: "Band 0", name: "Tôi tên là... (My name is...)",
    hook: "Câu đầu tiên khi làm quen: My name is — rồi thêm tên của bạn.",
    explain: "Nghe hai câu này trước: 'My name is Linh.' (Tôi tên là Linh.) 'My name is Nam. Nice to meet you!' (Tôi tên là Nam. Rất vui được gặp bạn!) Quy tắc: My name is + tên. 'My' nghĩa là 'của tôi' — my name = tên của tôi. Nói xong tên, thêm 'Nice to meet you!' cho lịch sự.",
    examples: ["My name is Linh.", "My name is Nam. Nice to meet you!", "Hello! My name is Anna."],
    tip: "Hãy tưởng tượng 'My name is' như một tấm bảng tên bạn đeo trước ngực — đọc lên là người ta biết tên bạn.",
    model: "A: Hello! What is your name? B: My name is Linh. Nice to meet you!",
    modelVi: "A: Xin chào! Bạn tên là gì? B: Tôi tên là Linh. Rất vui được gặp bạn!",
    quiz: [
      { q: "___ Linh.", o: ["My name is", "My name are", "My name be"], a: 0, why: "My name is + tên." },
      { q: "'My' trong 'My name' nghĩa là:", o: ["của tôi", "của bạn", "của anh ấy"], a: 0, why: "My = của tôi; my name = tên của tôi." },
      { q: "Sau khi nói tên, câu lịch sự nên nói thêm là:", o: ["Nice to meet you!", "Goodbye!", "Thank you!"], a: 0, why: "Nice to meet you = Rất vui được gặp bạn, dùng ngay khi làm quen." },
      { q: "Chọn câu đúng:", o: ["My name is Lan.", "My name are Lan.", "I name is Lan."], a: 0, why: "Chỉ có My name is là đúng." },
      { q: "Hello! ___ Anna.", o: ["My name is", "My name are", "I name"], a: 0, why: "Chào xong thì giới thiệu tên: My name is Anna." },
      { q: "A: What is your name? B: ___", o: ["My name is Nam.", "I name Nam.", "Name is Nam."], a: 0, why: "Trả lời tên: My name is Nam." },
      { q: "'Nice to meet you!' dùng khi nào?", o: ["Lần đầu gặp ai đó", "Khi chia tay", "Khi cảm ơn"], a: 0, why: "Dùng ngay khi làm quen, lần đầu gặp." },
      { q: "Câu nào sai?", o: ["My name are Linh.", "My name is Linh.", "Hello! My name is Linh."], a: 0, why: "My name đi với is, không đi với are." }
    ]
  }
];

// ---------- 5. BÀI KIỂM TRA CUỐI CHƯƠNG 1 (D3) ----------
// Không hỏi bằng ký hiệu IPA trần — hỏi bằng từ ví dụ. Hai phần, mỗi phần phải đạt từ 50% trở lên.
var RB_CH1_TEST = {
  title: "Bài kiểm tra cuối chương 1",
  parts: [{ name: "Chữ cái", idx: [0, 1, 3, 5, 7] }, { name: "Âm và chào hỏi", idx: [2, 4, 6] }],
  questions: [
    { q: "Chữ nào đứng sau chữ G trong bảng chữ cái?", o: ["H", "F", "K", "Z"], a: 0, why: "Bảng chữ cái: ... F, G, H, I ... — sau G là H." },
    { q: "Tên chữ H đọc gần giống gì?", o: ["ếch", "hát", "hi", "hồ"], a: 0, why: "Tên chữ H đọc gần giống 'ếch' — nghe nút loa mới là chuẩn." },
    { q: "Từ nào đọc giống âm trong 'see': sea hay cat?", o: ["sea", "cat", "dog", "sun"], a: 0, why: "sea đọc là /siː/, giống âm trong see; cat đọc là /kæt/, khác âm." },
    { q: "Chữ X thường đứng ở đâu trong từ?", o: ["Cuối từ (box, fox)", "Đầu từ", "Giữa từ", "Không có trong từ"], a: 0, why: "X thường ở cuối từ: box, fox." },
    { q: "Khi gặp người mới, câu chào nào đúng nhất?", o: ["Hello! My name is...", "Goodbye!", "Thank you!", "Sorry!"], a: 0, why: "Gặp người mới: chào Hello rồi giới thiệu tên." },
    { q: "Chữ nào là nguyên âm?", o: ["E", "B", "T", "S"], a: 0, why: "5 chữ thường được tính là nguyên âm: A, E, I, O, U (chữ Y đôi khi cũng đóng vai trò nguyên âm) — E là một trong số đó." },
    { q: "'Thank you' nghĩa là gì?", o: ["Cảm ơn bạn", "Xin chào", "Tạm biệt", "Xin lỗi"], a: 0, why: "'Thank you' nghĩa là 'Cảm ơn bạn' — câu nói lịch sự dùng rất nhiều mỗi ngày." },
    { q: "Tên chữ Z đọc theo kiểu Anh là gì?", o: ["zed", "zee", "zet", "zi"], a: 0, why: "Kiểu Anh đọc là 'zed' (dùng trong IELTS); 'zee' là kiểu Mỹ." }
  ]
};

// ---------- 6. ÔN PHÂN BIỆT NHÓM TÊN CHỮ (bước ôn riêng sau A-Z) ----------
var RB_AZ_GROUPS = [
  { key: "ei", vn: "ây", ipa: "/eɪ/", letters: ["A", "H", "J", "K"] },
  { key: "ii", vn: "i dài", ipa: "/iː/", letters: ["B", "C", "D", "E", "G", "P", "T", "V"] },
  { key: "e", vn: "e", ipa: "/e/", letters: ["F", "L", "M", "N", "S", "X", "Z"] },
  { key: "ai", vn: "ai", ipa: "/aɪ/", letters: ["I", "Y"] },
  { key: "ou", vn: "âu", ipa: "/əʊ/", letters: ["O"] },
  { key: "juu", vn: "iu", ipa: "/juː/", letters: ["Q", "U", "W"] },
  { key: "aa", vn: "a dài", ipa: "/ɑː/", letters: ["R"] }
];
var RB_AZ_QUIZ = [
  { q: "Chữ B cùng nhóm tên với chữ nào?", o: ["D (đi)", "M (em)", "Q (kiu)"], a: 0, why: "B đọc gần giống 'bi', D đọc gần giống 'đi' — cùng nhóm tên 'i dài'." },
  { q: "Chữ M cùng nhóm tên với chữ nào?", o: ["S (ét)", "K (cây)", "A (ây)"], a: 0, why: "M đọc gần giống 'em', S đọc gần giống 'ét' — cùng nhóm tên 'e'." },
  { q: "Chữ Q cùng nhóm tên với chữ nào?", o: ["U (iu)", "T (ti)", "Y (oai)"], a: 0, why: "Q đọc gần giống 'kiu', U đọc gần giống 'iu' — cùng nhóm tên 'iu'." }
];

// ---------- 7. PHÁT ÂM: BẢNG 44 ÂM THEO PHÂN LOẠI MỚI + ĐỢT 1 ----------
// Phân loại MỚI sau kiểm chứng: ə = hay lệch, ʃ = khó, ʌ giữ hay lệch (đợt 2).
// Thành phần: quen 23, hay lệch 15, khó 6 = 44. Đợt = đúng phân loại (đợt 1 = quen, đợt 2 = hay lệch, đợt 3 = khó).
var RB_PH_DIFF_NEW = {
  quen: ["i:", "e", "ɑ:", "ɔ:", "u:", "eɪ", "aɪ", "aʊ", "ɔɪ", "m", "n", "ŋ", "p", "b", "t", "d", "k", "ɡ", "f", "s", "h", "l", "j"],
  lech: ["ɪ", "ʊ", "ʌ", "ɒ", "ɪə", "eə", "ʊə", "əʊ", "ə", "v", "z", "tʃ", "dʒ", "r", "w"],
  kho: ["æ", "ɜ:", "θ", "ð", "ʒ", "ʃ"]
};
var RB_PH_WAVES = {
  1: ["m", "n", "p", "b", "f", "s", "h", "l", "t", "d", "k", "ɡ", "ŋ", "j", "i:", "e", "ɑ:", "ɔ:", "u:", "eɪ", "aɪ", "aʊ", "ɔɪ"],
  2: ["ɪ", "ʊ", "ʌ", "ɒ", "ɪə", "eə", "ʊə", "əʊ", "ə", "v", "z", "tʃ", "dʒ", "r", "w"],
  3: ["æ", "ɜ:", "θ", "ð", "ʒ", "ʃ"]
};
// Dữ liệu đợt 1: ký hiệu, từ ví dụ, nghĩa, lời giải thích bằng lời thường, câu mẫu,
// mốc đoạn video BBC (PH_SEG, gắn theo ký hiệu âm) và tham số khẩu hình (dùng cho mouthSVG).
// Lời giải thích f/j/k/ɡ/ŋ là bản viết lại đã kiểm chứng; các âm còn lại giữ lời giải thích cũ đã tốt.
var RB_PH1 = [
  { s: "m", w: "man", vi: "người đàn ông", ex: "Hai môi mím lại, hơi đi qua mũi, có rung. Giống âm m tiếng Việt.", sen: "The man is my father.", senVi: "Người đàn ông đó là bố tôi.", seg: [3506, 3625], h: .4, f: .5, r: 0, o: .05, tip: .1, teeth: 0 },
  { s: "n", w: "no", vi: "không", ex: "Đầu lưỡi chạm nướu trên, hơi đi qua mũi. Giống âm n tiếng Việt.", sen: "No, thank you.", senVi: "Không, cảm ơn bạn.", seg: [3625, 3750], h: .5, f: .8, r: 0, o: .2, tip: .85, teeth: 1 },
  { s: "p", w: "pen", vi: "cái bút", ex: "Hai môi mím chặt rồi bật mở đẩy hơi ra. Âm không rung dây thanh.", sen: "This is my pen.", senVi: "Đây là bút của tôi.", seg: [1723, 1860], h: .4, f: .5, r: 0, o: .1, tip: .1, teeth: 0 },
  { s: "b", w: "bag", vi: "cái túi", ex: "Giống âm p nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "My bag is red.", senVi: "Túi của tôi màu đỏ.", seg: [1860, 1994], h: .4, f: .5, r: 0, o: .1, tip: .1, teeth: 0 },
  { s: "f", w: "fish", vi: "con cá", ex: "Tiếng Việt đã có âm này: chữ 'ph' trong 'phở' chính là /f/. Răng trên chạm nhẹ vào môi dưới, thổi hơi qua khe hẹp. Chỉ cần chú ý bật rõ âm cuối trong tiếng Anh (ví dụ 'life' phải nghe rõ /f/ cuối từ — tiếng Việt thường nuốt âm cuối).", sen: "I like fish.", senVi: "Tôi thích cá.", seg: [2684, 2780], h: .4, f: .7, r: 0, o: .15, tip: .3, teeth: 1 },
  { s: "s", w: "see", vi: "nhìn thấy", ex: "Đầu lưỡi gần nướu trên, hai hàm răng gần khép, thổi hơi xì dài và mảnh.", sen: "I see a cat.", senVi: "Tôi nhìn thấy một con mèo.", seg: [3113, 3209], h: .6, f: .8, r: 0, o: .15, tip: .7, teeth: 1 },
  { s: "h", w: "hat", vi: "cái mũ", ex: "Miệng mở theo hình của nguyên âm sau nó, đẩy hơi từ cổ họng ra nhẹ nhàng như thở dài.", sen: "This is my hat.", senVi: "Đây là mũ của tôi.", seg: [3879, 3945], h: .4, f: .5, r: 0, o: .5, tip: .1, teeth: 0 },
  { s: "l", w: "leg", vi: "cái chân", ex: "Đầu lưỡi chạm nướu trên, hơi đi qua hai bên lưỡi. Giống âm l tiếng Việt khi ở đầu từ.", sen: "I have two legs.", senVi: "Tôi có hai chân.", seg: [3945, 4160], h: .5, f: .8, r: 0, o: .25, tip: .85, teeth: 1 },
  { s: "t", w: "ten", vi: "số mười", ex: "Đầu lưỡi chạm vào nướu sau răng trên rồi bật ra kèm hơi mạnh.", sen: "I am ten years old.", senVi: "Tôi mười tuổi.", seg: [1994, 2124], h: .5, f: .8, r: 0, o: .25, tip: .85, teeth: 1 },
  { s: "d", w: "dog", vi: "con chó", ex: "Giống âm t nhưng có rung cổ họng.", sen: "The dog is big.", senVi: "Con chó to.", seg: [2124, 2249], h: .5, f: .8, r: 0, o: .25, tip: .85, teeth: 1 },
  { s: "k", w: "key", vi: "chìa khóa", ex: "Phần vòm miệng mềm ở phía trong cùng nâng lên chặn hơi rồi bật ra. Miệng mở vừa.", sen: "This is a key.", senVi: "Đây là một chiếc chìa khóa.", seg: [2459, 2579], h: .45, f: .15, r: 0, o: .4, tip: 0, teeth: 0 },
  { s: "ɡ", w: "go", vi: "đi", ex: "Giống âm k nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung. Phần vòm miệng mềm ở phía trong cùng nâng lên chặn hơi rồi bật ra.", sen: "I go to school.", senVi: "Tôi đi học.", seg: [2579, 2684], h: .45, f: .15, r: 0, o: .4, tip: 0, teeth: 0 },
  { s: "ŋ", w: "sing", vi: "hát", ex: "Phần vòm miệng mềm ở phía trong cùng nâng lên chặn hơi, hơi đi qua mũi. Là âm ng ở cuối từ, đừng thêm g phía sau.", sen: "I sing a song.", senVi: "Tôi hát một bài hát.", seg: [3750, 3879], h: .45, f: .15, r: 0, o: .3, tip: 0, teeth: 0 },
  { s: "j", w: "yes", vi: "vâng", ex: "Giống âm 'i' đọc thật nhanh rồi trượt sang âm sau. Lưỡi nâng cao ra trước rồi trượt nhanh sang nguyên âm sau.", sen: "Yes, I am ready.", senVi: "Vâng, tôi sẵn sàng.", seg: [4490, null], h: .85, f: .9, r: 0, o: .25, tip: .25, teeth: 0 },
  { s: "i:", w: "see", vi: "nhìn thấy", ex: "Môi dẹt và kéo sang hai bên như đang cười. Lưỡi cao và đưa ra trước, đầu lưỡi chạm nhẹ răng dưới.", sen: "I see a bird.", senVi: "Tôi nhìn thấy một con chim.", seg: [0, 131], h: .95, f: .95, r: 0, o: .18, tip: .3, teeth: 0 },
  { s: "e", w: "bed", vi: "cái giường", ex: "Miệng mở vừa, môi thả lỏng. Lưỡi ở giữa, đầu lưỡi chạm răng dưới. Âm ngắn.", sen: "The bed is soft.", senVi: "Chiếc giường mềm.", seg: [345, 455], h: .55, f: .8, r: 0, o: .45, tip: .25, teeth: 0 },
  { s: "ɑ:", w: "car", vi: "xe hơi", ex: "Miệng mở to, lưỡi thấp và lùi hẳn về sau. Âm dài, nghe như tiếng a kéo dài từ cổ họng.", sen: "My father has a car.", senVi: "Bố tôi có một chiếc xe hơi.", seg: [957, 996], h: .1, f: .1, r: 0, o: .9, tip: 0, teeth: 0 },
  { s: "ɔ:", w: "horse", vi: "con ngựa", ex: "Môi tròn vừa, lưỡi lùi về sau và hơi nâng lên. Âm dài.", sen: "The horse is white.", senVi: "Con ngựa màu trắng.", seg: [750, 800], h: .4, f: .15, r: .55, o: .5, tip: 0, teeth: 0 },
  { s: "u:", w: "food", vi: "thức ăn", ex: "Môi tròn và chu mạnh ra trước như thổi nến. Lưỡi cao và lùi hẳn về sau. Âm dài.", sen: "I like this food.", senVi: "Tôi thích món ăn này.", seg: [292, 345], h: .92, f: .08, r: 1, o: .22, tip: 0, teeth: 0 },
  { s: "eɪ", w: "day", vi: "ngày", ex: "Bắt đầu như âm e rồi trượt nhẹ lên âm ɪ. Môi hơi dẹt dần khi trượt.", sen: "Today is a good day.", senVi: "Hôm nay là một ngày đẹp.", seg: [1103, 1205], h: .6, f: .85, r: 0, o: .4, tip: .25, teeth: 0 },
  { s: "aɪ", w: "night", vi: "ban đêm", ex: "Bắt đầu như âm a (miệng mở to) rồi trượt lên âm ɪ (miệng khép và dẹt lại).", sen: "Good night!", senVi: "Chúc ngủ ngon!", seg: [1526, 1586], h: .3, f: .6, r: 0, o: .7, tip: .2, teeth: 0 },
  { s: "aʊ", w: "now", vi: "bây giờ", ex: "Bắt đầu như âm a rồi trượt về âm ʊ, môi tròn lại và miệng khép dần.", sen: "I am ready now.", senVi: "Bây giờ tôi đã sẵn sàng.", seg: [1586, 1723], h: .35, f: .35, r: .5, o: .65, tip: .05, teeth: 0 },
  { s: "ɔɪ", w: "boy", vi: "cậu bé", ex: "Bắt đầu như âm ɔ (môi hơi tròn) rồi trượt lên âm ɪ (môi dẹt ra).", sen: "The boy is happy.", senVi: "Cậu bé vui vẻ.", seg: [1259, 1313], h: .45, f: .5, r: .3, o: .5, tip: .1, teeth: 0 }
];
// ---------- 11b. GIAI ĐOẠN 1.6: BÀI HỌC ĐỦ 44 ÂM (đợt 2/3, dữ kiện cũ) ----------
// ex lấy từ mô tả khẩu hình của web cũ, đã chuẩn hóa: không nói "giống" khi chỉ
// gần giống (trừ cặp rung/không rung cùng cách đặt miệng, ghi rõ "cách đặt miệng
// giống"); ʌ/ə/ʃ dùng đúng bản đã kiểm chứng trong RB_PH_EXPLAIN_LATER.
var RB_PH2 = [
  { s: "ɪ", w: "ship", vi: "con tàu", ex: "Giống âm i: nhưng ngắn và thả lỏng hơn. Miệng mở hơi rộng hơn một chút, lưỡi thấp hơn một chút.", sen: "The ship is big.", senVi: "Con tàu lớn.", seg: [131, 251], h: .8, f: .85, r: 0, o: .3, tip: .25, teeth: 0 },
  { s: "ʊ", w: "book", vi: "quyển sách", ex: "Môi tròn nhẹ và hơi chu ra, lưỡi lùi về sau, ở giữa cao. Âm ngắn và thả lỏng.", sen: "This is my book.", senVi: "Đây là quyển sách của tôi.", seg: [251, 292], h: .65, f: .2, r: .6, o: .3, tip: 0, teeth: 0 },
  { s: "ʌ", w: "cup", vi: "cái cốc", ex: "Âm này tiếng Việt không có; nghe gần giống âm 'ă' nhưng miệng mở khác và lưỡi đặt khác — nghe nút loa mới là chuẩn, chữ 'ă' chỉ là điểm tựa ban đầu. Miệng mở vừa, môi thả lỏng, lưỡi ở giữa và hơi lùi, âm ngắn.", sen: "My cup is red.", senVi: "Cái cốc của tôi màu đỏ.", seg: [846, 957], h: .35, f: .4, r: 0, o: .55, tip: .15, teeth: 0 },
  { s: "ɒ", w: "hot", vi: "nóng", ex: "Môi hơi tròn nhẹ, miệng mở rộng, lưỡi thấp và lùi về sau. Âm ngắn.", sen: "It is hot today.", senVi: "Hôm nay trời nóng.", seg: [996, 1036], h: .12, f: .15, r: .35, o: .75, tip: 0, teeth: 0 },
  { s: "ɪə", w: "here", vi: "ở đây", ex: "Bắt đầu như âm ɪ rồi trượt nhẹ về âm ə ở giữa miệng. Lưỡi hạ dần.", sen: "Come here, please.", senVi: "Đến đây nào.", seg: [1036, 1103], h: .65, f: .6, r: 0, o: .35, tip: .15, teeth: 0 },
  { s: "eə", w: "hair", vi: "tóc", ex: "Bắt đầu như âm e rồi trượt về âm ə. Miệng mở dần một chút.", sen: "Her hair is long.", senVi: "Tóc của cô ấy dài.", seg: [1423, 1526], h: .5, f: .6, r: 0, o: .45, tip: .15, teeth: 0 },
  { s: "ʊə", w: "sure", vi: "chắc chắn", ex: "Bắt đầu như âm ʊ (môi hơi tròn) rồi trượt về âm ə, môi thả lỏng dần.", sen: "I am sure.", senVi: "Tôi chắc chắn.", seg: [1205, 1259], h: .6, f: .35, r: .3, o: .35, tip: .05, teeth: 0 },
  { s: "əʊ", w: "go", vi: "đi", ex: "Bắt đầu ở giữa miệng rồi trượt về sau, môi tròn dần lên như âm ʊ.", sen: "Let's go home.", senVi: "Đi về nhà thôi.", seg: [1313, 1423], h: .6, f: .3, r: .5, o: .35, tip: .05, teeth: 0 },
  { s: "ə", w: "about", vi: "về", ex: "Âm chỉ xuất hiện ở vần đọc lướt, không nhấn mạnh — khác với âm ơ đầy đủ của tiếng Việt. Miệng gần như thả lỏng hoàn toàn, lưỡi ở giữa. Ví dụ âm đầu của 'about' đọc lướt, không đọc rõ thành 'ơ-bao'.", sen: "Tell me about you.", senVi: "Kể cho tôi nghe về bạn.", seg: [455, 696], h: .5, f: .5, r: 0, o: .35, tip: .1, teeth: 0 },
  { s: "v", w: "van", vi: "xe tải nhỏ", ex: "Cách đặt miệng giống âm f, nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "The van is blue.", senVi: "Chiếc xe tải nhỏ màu xanh dương.", seg: [2780, 2970], h: .4, f: .7, r: 0, o: .15, tip: .3, teeth: 1 },
  { s: "z", w: "zoo", vi: "sở thú", ex: "Cách đặt miệng giống âm s, nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "We go to the zoo.", senVi: "Chúng tôi đi sở thú.", seg: [3209, 3305], h: .6, f: .8, r: 0, o: .15, tip: .7, teeth: 1 },
  { s: "tʃ", w: "chair", vi: "cái ghế", ex: "Đầu lưỡi chạm nướu trên như âm t rồi thả hơi xì ra như âm ʃ nối tiếp, môi hơi chu.", sen: "This chair is new.", senVi: "Chiếc ghế này mới.", seg: [2249, 2354], h: .55, f: .7, r: .35, o: .3, tip: .8, teeth: 1 },
  { s: "dʒ", w: "job", vi: "công việc", ex: "Cách đặt miệng giống âm tʃ, nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "I like my job.", senVi: "Tôi thích công việc của tôi.", seg: [2354, 2459], h: .55, f: .7, r: .35, o: .3, tip: .8, teeth: 1 },
  { s: "r", w: "red", vi: "màu đỏ", ex: "Đầu lưỡi cong lên và lùi vào giữa, không chạm vào đâu cả, môi hơi tròn. Không rung lưỡi và không đọc như chữ r giọng Hà Nội (âm /z/).", sen: "The pen is red.", senVi: "Cây bút màu đỏ.", seg: [4160, 4367], h: .55, f: .55, r: .4, o: .3, tip: .5, teeth: 0 },
  { s: "w", w: "water", vi: "nước", ex: "Môi tròn và chu mạnh như âm u: rồi mở nhanh sang nguyên âm sau. Bắt đầu bằng môi, không phải răng.", sen: "I drink water.", senVi: "Tôi uống nước.", seg: [4367, 4490], h: .7, f: .2, r: .9, o: .25, tip: 0, teeth: 0 },
  { s: "æ", w: "cat", vi: "con mèo", ex: "Miệng mở khá rộng, hàm hạ xuống. Lưỡi thấp và ra trước. Đây là âm giữa a và e.", sen: "The cat is black.", senVi: "Con mèo màu đen.", seg: [800, 846], h: .25, f: .85, r: 0, o: .8, tip: .2, teeth: 0 },
  { s: "ɜ:", w: "bird", vi: "con chim", ex: "Môi thả lỏng, lưỡi ở giữa miệng không chạm đâu cả. Âm dài, nghe như ơ kéo dài.", sen: "The bird can sing.", senVi: "Con chim biết hót.", seg: [696, 750], h: .55, f: .5, r: .1, o: .4, tip: .1, teeth: 0 },
  { s: "θ", w: "think", vi: "nghĩ", ex: "Đầu lưỡi đặt giữa hai hàm răng, thò ra một chút, thổi hơi qua. Người Việt hay đọc thành âm 'th' kiểu tiếng Việt hoặc âm t.", sen: "I think so.", senVi: "Tôi nghĩ vậy.", seg: [2970, 3041], h: .4, f: .95, r: 0, o: .2, tip: 1, teeth: 1 },
  { s: "ð", w: "this", vi: "cái này", ex: "Cách đặt miệng giống âm θ (lưỡi giữa hai răng), nhưng có rung cổ họng: đặt tay lên cổ sẽ thấy rung.", sen: "This pen is mine.", senVi: "Cây bút này là của tôi.", seg: [3041, 3113], h: .4, f: .95, r: 0, o: .2, tip: 1, teeth: 1 },
  { s: "ʒ", w: "television", vi: "ti vi", ex: "Cách đặt miệng giống âm ʃ, nhưng có rung cổ họng. Âm này ít gặp, hay ở giữa từ.", sen: "I watch television.", senVi: "Tôi xem ti vi.", seg: [3462, 3506], h: .6, f: .6, r: .45, o: .25, tip: .55, teeth: 0 },
  { s: "ʃ", w: "she", vi: "cô ấy", ex: "Âm này tiếng Việt chuẩn không có; người miền Nam nghe chữ 's' của mình gần giống âm này, nhưng để đọc đúng 'she' thì lưỡi phải đặt sau lợi trên và thổi hẹp hơn. Lưỡi nâng ở giữa, môi hơi chu ra, thổi hơi xì tròn và mềm hơn âm s.", sen: "She is my friend.", senVi: "Cô ấy là bạn của tôi.", seg: [3305, 3462], h: .6, f: .6, r: .45, o: .25, tip: .55, teeth: 0 }
];
// Lời giải thích đã kiểm chứng cho các âm đợt 2/3 (nay đã đưa vào trường ex của RB_PH2; giữ lại để đối chiếu).
var RB_PH_EXPLAIN_LATER = {
  "ʌ": "Âm này tiếng Việt không có; nghe gần giống âm 'ă' nhưng miệng mở khác và lưỡi đặt khác — nghe nút loa mới là chuẩn, chữ 'ă' chỉ là điểm tựa ban đầu. Miệng mở vừa, môi thả lỏng, lưỡi ở giữa và hơi lùi, âm ngắn.",
  "ə": "Âm chỉ xuất hiện ở vần đọc lướt, không nhấn mạnh — khác với âm ơ đầy đủ của tiếng Việt. Miệng gần như thả lỏng hoàn toàn, lưỡi ở giữa. Ví dụ âm đầu của 'about' đọc lướt, không đọc rõ thành 'ơ-bao'.",
  "ʃ": "Âm này tiếng Việt chuẩn không có; người miền Nam nghe chữ 's' của mình gần giống âm này, nhưng để đọc đúng 'ship' thì lưỡi phải đặt sau lợi trên và thổi hẹp hơn. Lưỡi nâng ở giữa, môi hơi chu ra, thổi hơi xì tròn và mềm hơn âm s."
};
// Độ mở hàm tương đối do trang tự gán (thang 0-4) + âm đích của nguyên âm đôi (dùng cho hình trượt).
var RB_PH_JAW = { "i:": 1, "ɪ": 1.5, "e": 2, "æ": 3.5, "ɑ:": 4, "ɒ": 3.5, "ɔ:": 2.5, "ʊ": 1.5, "u:": 1, "ʌ": 2.5, "ɜ:": 2, "ə": 1.5, "eɪ": 2, "aɪ": 3.5, "ɔɪ": 2.5, "əʊ": 1.5, "aʊ": 3.5, "ɪə": 1.5, "eə": 2, "ʊə": 1.5, "p": 0.5, "b": 0.5, "t": 1, "d": 1, "k": 1.5, "ɡ": 1.5, "tʃ": 1.5, "dʒ": 1.5, "f": 0.5, "v": 0.5, "θ": 1, "ð": 1, "s": 0.5, "z": 0.5, "ʃ": 1, "ʒ": 1, "h": 2, "m": 0.5, "n": 1, "ŋ": 1.5, "l": 1, "r": 1.5, "w": 1, "j": 0.5 };
var RB_PH_GLIDE = { "eɪ": "ɪ", "aɪ": "ɪ", "ɔɪ": "ɪ", "əʊ": "ʊ", "aʊ": "ʊ", "ɪə": "ə", "eə": "ə", "ʊə": "ə" };
var RB_PH_TARGETS = {
  "ɪ": { s: "ɪ", w: "ship", h: .8, f: .85, r: 0, o: .3, tip: .25, teeth: 0 },
  "ʊ": { s: "ʊ", w: "book", h: .65, f: .2, r: .6, o: .3, tip: 0, teeth: 0 },
  "ə": { s: "ə", w: "about", h: .5, f: .5, r: 0, o: .35, tip: .1, teeth: 0 }
};
// Từ ví dụ cho toàn bảng 44 âm (bài học đủ 44 âm từ giai đoạn 1.6).
var RB_PH_ALL_EXAMPLES = { "i:": "see", "ɪ": "ship", "e": "bed", "æ": "cat", "ɑ:": "car", "ɒ": "hot", "ɔ:": "horse", "ʊ": "book", "u:": "food", "ʌ": "cup", "ɜ:": "bird", "ə": "about", "eɪ": "day", "aɪ": "night", "ɔɪ": "boy", "əʊ": "go", "aʊ": "now", "ɪə": "here", "eə": "hair", "ʊə": "sure", "p": "pen", "b": "bag", "t": "ten", "d": "dog", "tʃ": "chair", "dʒ": "job", "k": "key", "ɡ": "go", "f": "fish", "v": "van", "θ": "think", "ð": "this", "s": "see", "z": "zoo", "ʃ": "she", "ʒ": "television", "h": "hat", "m": "man", "n": "no", "ŋ": "sing", "l": "leg", "r": "red", "w": "water", "j": "yes" };

// ---------- 8. LỊCH ÔN, XP, THANG ĐIỂM, GHI CHÚ ----------
var RB_INTERVALS = [1, 3, 7, 14, 30];
var RB_SCHEDULE_TEXT = "1-3-7-14-30 ngày (chuẩn nội bộ của web)";
var RB_XP_RULES = [
  { what: "Học xong một bài", xp: 10 },
  { what: "Làm lại một bài đã xong", xp: 5 },
  { what: "Gõ câu lần đầu", xp: 20 },
  { what: "Luyện viết lần đầu", xp: 20 },
  { what: "Ôn một mục đến hạn", xp: 1 },
  { what: "Điểm danh mỗi ngày", xp: 5 },
  { what: "Chuỗi 7 ngày", xp: 50 },
  { what: "Chuỗi 30 ngày", xp: 150 },
  { what: "Chuỗi 100 ngày", xp: 400 }
];
var RB_XP_LEVELS = [0, 50, 120, 220, 350, 520, 750, 1050, 1450, 2000];
var RB_XP_LEVEL_STEP = 700;
var RB_BAND_TABLE = {
  reading: [[39, 9.0], [37, 8.5], [35, 8.0], [33, 7.5], [30, 7.0], [27, 6.5], [23, 6.0], [19, 5.5], [15, 5.0], [13, 4.5], [10, 4.0], [8, 3.5], [6, 3.0], [4, 2.5], [0, 2.0]],
  listening: [[39, 9.0], [37, 8.5], [35, 8.0], [32, 7.5], [30, 7.0], [26, 6.5], [23, 6.0], [19, 5.5], [16, 5.0], [13, 4.5], [10, 4.0], [8, 3.5], [6, 3.0], [4, 2.5], [0, 2.0]]
};
var RB_BAND_NOTE = "Band ước lượng để tham khảo - IELTS không công bố bảng quy đổi cố định. Điểm neo tham khảo: Đọc 15/40 = 5,0; Nghe 16/40 = 5,0 (theo Teacher's Book Mindset Level 1, Cambridge).";
var RB_GLOSSARY = [
  { t: "Nấc nhớ", d: "Mỗi thẻ từ có 5 nấc nhớ, đúng thì lên nấc, đủ 5 nấc là thuộc hẳn." },
  { t: "Sổ lỗi sai", d: "Nơi gom mọi câu bạn làm sai để ôn lại sau, tới khi sửa xong mới thôi." },
  { t: "Chặng", d: "Một chặng là một đoạn đường học; bạn có thể học theo thứ tự hoặc nhảy tới chặng khác, bước nào bỏ qua sẽ gom vào 'Đã bỏ qua'." },
  { t: "Ôn giãn cách", d: "Ôn giãn cách là ôn lại đúng lúc sắp quên, các lần ôn cách nhau xa dần: 1-3-7-14-30 ngày (chuẩn nội bộ của web)." },
  { t: "IPA", d: "IPA là bảng ký hiệu phiên âm quốc tế: mỗi âm tiếng Anh có một ký hiệu riêng, viết giữa hai dấu gạch chéo như /i:/. Nhìn phiên âm là biết cách đọc một từ, kể cả từ bạn chưa gặp bao giờ." },
  { t: "Band", d: "Band là thang điểm của IELTS, từ 0 đến 9. Band càng cao nghĩa là tiếng Anh càng tốt." }
];

// ---------- 9. ĐƯỜNG DÂY AI (giữ nguyên hợp đồng, chưa gọi khi chưa đăng nhập) ----------
var RB_AI = {
  tutor: { fn: "ai-tutor", model: "gemini-3.5-flash", needsJwt: true, label: "Gia sư AI (đã hoạt động, cần đăng nhập để dùng)" },
  pronounce: { fn: "pronounce", req: ["audioBase64", "mimeType", "referenceText"], res: ["score", "transcript", "words", "issues", "modelUsed"], needsJwt: true }
};

// ---------- 10. LỘ TRÌNH CHƯƠNG 1 (thứ tự HIỂN THỊ) ----------
// Hàng kiểm tra cuối chương đứng ở vị trí 80% (sau 8 bước học), hàng cuối là trò chơi.
// Cổng mở khi học xong 8/9 bước học (mốc 80% — chuẩn nội bộ của web, không phải chuẩn IELTS).
var RB_CH1_STEPS = [
  { id: "letters", kind: "vocab", setIdx: 69, deckNo: 1, title: "Học xong: đọc đúng tên 26 chữ cái và phân biệt tên chữ với âm chữ", type: "Từ vựng · Thẻ chữ", mins: 10 },
  { id: "azreview", kind: "az", title: "Học xong: phân biệt các nhóm tên chữ (ây, i dài, e, ai, âu, iu, a dài)", type: "Ôn tập · Nhóm tên chữ", mins: 5 },
  { id: "classroom", kind: "vocab", setIdx: 24, deckNo: 2, title: "Học xong: hiểu và nói 20 từ dùng trong lớp học", type: "Từ vựng · Từ lớp học", mins: 8 },
  { id: "video", kind: "video", title: "Học xong: hát theo bài hát bảng chữ cái", type: "Xem video", mins: 5 },
  { id: "gram0", kind: "grammar", gIdx: 0, title: "Học xong: tự giới thiệu 'Tôi là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "gram1", kind: "grammar", gIdx: 1, title: "Học xong: chỉ đồ vật và giới thiệu người 'Đây là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "gram2", kind: "grammar", gIdx: 2, title: "Học xong: nói tên mình 'Tôi tên là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "pron1", kind: "pron", wave: 1, title: "Học xong: đọc đúng 44 âm tiếng Anh", type: "Phát âm · 44 âm", mins: 15 },
  { id: "test", kind: "test", title: "Bài kiểm tra cuối chương 1", type: "Đánh giá", mins: 10 },
  { id: "game", kind: "game", title: "Học xong: nhớ chữ cái qua trò chơi nối chữ với từ", type: "Chơi để nhớ", mins: 5 }
];
var RB_CH1_GATE_NEED = 8;
var RB_CH1_GUIDEBOOK = {
  goal: "Học xong chương này, bạn đọc đúng tên 26 chữ cái, phân biệt được tên chữ với âm chữ, hiểu 20 từ dùng trong lớp học và nói được 3 câu đầu tiên: I am..., This is..., My name is...",
  grammar: ["Tôi là... (I am...)", "Đây là... (This is...)", "Tôi tên là... (My name is...)"],
  phrases: ["Hello! (Xin chào!)", "My name is... (Tôi tên là...)", "Thank you! (Cảm ơn bạn!)", "Nice to meet you! (Rất vui được gặp bạn!)"],
  mistakes: ["Đọc tên chữ thay cho âm chữ (apple thành 'ây-pồ')", "Tưởng X đứng đầu từ box (X thường ở cuối từ)", "Nuốt âm cuối của từ tiếng Anh (life thiếu /f/)"]
};

// ---------- 11. GIAI ĐOẠN 1.5: cụm từ, cặp phân biệt, vùng đích gương ----------
// Cụm từ tự soạn cho 23 âm đợt 1 (bước 4 của bài phát âm).
var RB_PH_PHRASES = {
  "m": { ph: "a tall man", vi: "một người đàn ông cao" },
  "n": { ph: "No, thanks", vi: "Không, cảm ơn" },
  "p": { ph: "my pen", vi: "cái bút của tôi" },
  "b": { ph: "a big bag", vi: "một cái túi to" },
  "f": { ph: "a big fish", vi: "một con cá to" },
  "s": { ph: "I see", vi: "Tôi nhìn thấy" },
  "h": { ph: "my hat", vi: "cái mũ của tôi" },
  "l": { ph: "my leg", vi: "chân của tôi" },
  "t": { ph: "ten books", vi: "mười quyển sách" },
  "d": { ph: "my dog", vi: "con chó của tôi" },
  "k": { ph: "my key", vi: "chìa khóa của tôi" },
  "ɡ": { ph: "Let's go", vi: "Đi thôi" },
  "ŋ": { ph: "sing a song", vi: "hát một bài hát" },
  "j": { ph: "yes, please", vi: "vâng, làm ơn" },
  "i:": { ph: "I see", vi: "Tôi nhìn thấy" },
  "e": { ph: "my bed", vi: "giường của tôi" },
  "ɑ:": { ph: "my car", vi: "xe của tôi" },
  "ɔ:": { ph: "a horse", vi: "một con ngựa" },
  "u:": { ph: "good food", vi: "món ăn ngon" },
  "eɪ": { ph: "a good day", vi: "một ngày tốt lành" },
  "aɪ": { ph: "good night", vi: "chúc ngủ ngon" },
  "aʊ": { ph: "right now", vi: "ngay bây giờ" },
  "ɔɪ": { ph: "a good boy", vi: "một cậu bé ngoan" },
  "ɪ": { ph: "a big ship", vi: "một con tàu lớn" },
  "ʊ": { ph: "my book", vi: "quyển sách của tôi" },
  "ʌ": { ph: "a cup", vi: "một cái cốc" },
  "ɒ": { ph: "a hot day", vi: "một ngày nóng" },
  "ɪə": { ph: "come here", vi: "đến đây" },
  "eə": { ph: "my hair", vi: "tóc của tôi" },
  "ʊə": { ph: "I am sure", vi: "tôi chắc chắn" },
  "əʊ": { ph: "let's go", vi: "đi thôi" },
  "ə": { ph: "about me", vi: "về tôi" },
  "v": { ph: "my van", vi: "xe tải nhỏ của tôi" },
  "z": { ph: "the zoo", vi: "sở thú" },
  "tʃ": { ph: "my chair", vi: "ghế của tôi" },
  "dʒ": { ph: "my job", vi: "công việc của tôi" },
  "r": { ph: "a red pen", vi: "một cây bút đỏ" },
  "w": { ph: "cold water", vi: "nước lạnh" },
  "æ": { ph: "a black cat", vi: "một con mèo đen" },
  "ɜ:": { ph: "a bird", vi: "một con chim" },
  "θ": { ph: "I think", vi: "tôi nghĩ" },
  "ð": { ph: "this book", vi: "quyển sách này" },
  "ʒ": { ph: "on television", vi: "trên ti vi" },
  "ʃ": { ph: "fresh fish", vi: "cá tươi" }
};
// Cặp phân biệt bước 6: a = từ chứa âm đích, b = từ chứa âm đối chiếu.
// minimal=true: cặp tối thiểu thật (chỉ khác nhau ở âm đích); false: cặp hay nhầm.
var RB_PH_PAIRS = {
  "m": { a: "sum", b: "sun", partner: "n", minimal: true },
  "n": { a: "sun", b: "sum", partner: "m", minimal: true },
  "p": { a: "pat", b: "bat", partner: "b", minimal: true },
  "b": { a: "bat", b: "pat", partner: "p", minimal: true },
  "f": { a: "fan", b: "van", partner: "v", minimal: true },
  "s": { a: "sip", b: "zip", partner: "z", minimal: true },
  "h": { a: "hat", b: "at", partner: "không có /h/", minimal: false },
  "l": { a: "light", b: "right", partner: "r", minimal: true },
  "t": { a: "ten", b: "den", partner: "d", minimal: true },
  "d": { a: "den", b: "ten", partner: "t", minimal: true },
  "k": { a: "coat", b: "goat", partner: "ɡ", minimal: true },
  "ɡ": { a: "goat", b: "coat", partner: "k", minimal: true },
  "ŋ": { a: "sing", b: "sin", partner: "n", minimal: true },
  "j": { a: "yam", b: "jam", partner: "dʒ", minimal: true },
  "i:": { a: "sheep", b: "ship", partner: "ɪ", minimal: true },
  "e": { a: "bed", b: "bad", partner: "æ", minimal: true },
  "ɑ:": { a: "car", b: "core", partner: "ɔ:", minimal: true },
  "ɔ:": { a: "saw", b: "so", partner: "əʊ", minimal: false },
  "u:": { a: "fool", b: "full", partner: "ʊ", minimal: true },
  "eɪ": { a: "day", b: "die", partner: "aɪ", minimal: true },
  "aɪ": { a: "tie", b: "toy", partner: "ɔɪ", minimal: true },
  "aʊ": { a: "now", b: "know", partner: "əʊ", minimal: true },
  "ɔɪ": { a: "boy", b: "buy", partner: "aɪ", minimal: true },
  "ɪ": { a: "ship", b: "sheep", partner: "i:", minimal: true },
  "ʊ": { a: "pull", b: "pool", partner: "u:", minimal: true },
  "ʌ": { a: "cup", b: "cap", partner: "æ", minimal: true },
  "ɒ": { a: "hot", b: "hat", partner: "æ", minimal: true },
  "ɪə": { a: "here", b: "hair", partner: "eə", minimal: true },
  "eə": { a: "hair", b: "here", partner: "ɪə", minimal: true },
  "ʊə": { a: "sure", b: "shore", partner: "ɔ:", minimal: false },
  "əʊ": { a: "boat", b: "bought", partner: "ɔ:", minimal: true },
  "ə": { a: "about", b: "cat", partner: "không có /ə/", minimal: false },
  "v": { a: "van", b: "fan", partner: "f", minimal: true },
  "z": { a: "zip", b: "sip", partner: "s", minimal: true },
  "tʃ": { a: "chair", b: "share", partner: "ʃ", minimal: true },
  "dʒ": { a: "jam", b: "yam", partner: "j", minimal: true },
  "r": { a: "red", b: "led", partner: "l", minimal: true },
  "w": { a: "west", b: "vest", partner: "v", minimal: true },
  "æ": { a: "cat", b: "cut", partner: "ʌ", minimal: true },
  "ɜ:": { a: "bird", b: "bed", partner: "e", minimal: true },
  "θ": { a: "think", b: "sink", partner: "s", minimal: true },
  "ð": { a: "they", b: "day", partner: "d", minimal: true },
  "ʒ": { a: "television", b: "telephone", partner: "không có /ʒ/", minimal: false },
  "ʃ": { a: "she", b: "see", partner: "s", minimal: true }
};
// Bảng vùng đích gương — port từ code cũ của trang (r/s/o: [thấp, cao] hoặc null).
// Độ chính xác nhận diện trên mặt thật CHƯA đo; giao diện gương ghi rõ điều này.
var RB_MIRROR_TARGETS = {
  "i:": { r: null, s: [0.5, 1], o: [0, 0.4], hint: "Môi dẹt và kéo sang hai bên như đang cười, miệng gần như khép." },
  "ɪ": { r: null, s: [0.3, 0.9], o: [0, 0.5], hint: "Môi hơi dẹt, thả lỏng hơn âm i:, miệng mở nhỏ." },
  "e": { r: null, s: [0.1, 0.65], o: [0.1, 0.55], hint: "Miệng mở vừa, môi thả lỏng." },
  "æ": { r: null, s: [0.15, 0.8], o: [0.55, 1], hint: "Hàm hạ xuống, miệng mở khá rộng." },
  "ɑ:": { r: [0, 0.45], s: null, o: [0.6, 1], hint: "Miệng mở to, lưỡi lùi hẳn về sau." },
  "ɒ": { r: [0.15, 0.75], s: null, o: [0.45, 1], hint: "Miệng mở rộng, môi hơi tròn nhẹ." },
  "ɔ:": { r: [0.4, 1], s: null, o: [0.2, 0.7], hint: "Môi tròn vừa, miệng mở vừa." },
  "ʊ": { r: [0.45, 1], s: null, o: [0, 0.4], hint: "Môi tròn nhẹ và hơi chu ra, miệng mở nhỏ." },
  "u:": { r: [0.6, 1], s: null, o: [0, 0.35], hint: "Môi tròn và chu mạnh ra trước như thổi nến." },
  "ʌ": { r: null, s: null, o: [0.25, 0.7], hint: "Miệng mở vừa, môi thả lỏng." },
  "ɜ:": { r: [0, 0.5], s: null, o: [0.15, 0.55], hint: "Môi thả lỏng, miệng mở nhỏ tới vừa." },
  "ə": { r: [0, 0.5], s: [0, 0.6], o: [0.03, 0.45], hint: "Miệng thả lỏng gần như hoàn toàn, chỉ mở rất nhẹ." },
  "eɪ": { r: null, s: [0.3, 0.9], o: [0.05, 0.5], hint: "Môi hơi dẹt dần khi trượt âm." },
  "aɪ": { r: null, s: null, o: [0.4, 1], hint: "Mở to ở đầu âm rồi khép và dẹt dần về cuối." },
  "ɔɪ": { r: [0.25, 0.85], s: null, o: [0.15, 0.6], hint: "Môi hơi tròn ở đầu rồi dẹt ra." },
  "əʊ": { r: [0.3, 0.9], s: null, o: [0.03, 0.45], hint: "Môi tròn dần về cuối âm, miệng mở nhỏ." },
  "aʊ": { r: [0.25, 0.9], s: null, o: [0.25, 0.85], hint: "Miệng mở ở đầu rồi tròn môi và khép dần." },
  "ɪə": { r: null, s: [0.25, 0.8], o: [0.03, 0.45], hint: "Môi hơi dẹt, miệng mở nhỏ và thả lỏng dần." },
  "eə": { r: null, s: [0.1, 0.7], o: [0.15, 0.6], hint: "Miệng mở vừa và thả lỏng dần." },
  "ʊə": { r: [0.3, 0.85], s: null, o: [0.03, 0.45], hint: "Môi hơi tròn ở đầu rồi thả lỏng dần." },
  "p": { r: null, s: null, o: [0, 0.1], hint: "Mím chặt hai môi rồi bật mở đẩy hơi ra." },
  "b": { r: null, s: null, o: [0, 0.1], hint: "Mím chặt hai môi rồi bật mở, kèm rung cổ họng." },
  "t": { r: null, s: null, o: [0.03, 0.4], hint: "Miệng mở nhỏ, đầu lưỡi chạm nướu trên - phần lưỡi camera không thấy, hãy tự soi." },
  "d": { r: null, s: null, o: [0.03, 0.4], hint: "Miệng mở nhỏ, đầu lưỡi chạm nướu trên - phần lưỡi camera không thấy, hãy tự soi." },
  "k": { r: null, s: null, o: [0.15, 0.6], hint: "Miệng mở vừa, cuống lưỡi nâng ở phía sau." },
  "ɡ": { r: null, s: null, o: [0.15, 0.6], hint: "Miệng mở vừa, cuống lưỡi nâng ở phía sau, kèm rung cổ họng." },
  "tʃ": { r: [0.2, 0.8], s: null, o: [0.03, 0.4], hint: "Môi hơi chu ra, miệng mở nhỏ." },
  "dʒ": { r: [0.2, 0.8], s: null, o: [0.03, 0.4], hint: "Môi hơi chu ra, miệng mở nhỏ, kèm rung cổ họng." },
  "f": { r: null, s: null, o: null, hint: "Răng trên chạm nhẹ vào môi dưới - điểm này camera khó chấm tự động, hãy tự soi gương: thấy răng chạm môi dưới là đúng." },
  "v": { r: null, s: null, o: null, hint: "Răng trên chạm nhẹ vào môi dưới, kèm rung cổ họng - hãy tự soi gương để đối chiếu." },
  "θ": { r: null, s: null, o: null, hint: "Thè đầu lưỡi ra giữa hai hàm răng - hãy tự soi trong gương, thấy đầu lưỡi lộ ra một chút là đúng." },
  "ð": { r: null, s: null, o: null, hint: "Thè đầu lưỡi ra giữa hai hàm răng, kèm rung cổ họng - hãy tự soi trong gương để đối chiếu." },
  "s": { r: null, s: [0.15, 0.7], o: [0, 0.25], hint: "Hai hàm răng gần khép, miệng mở rất ít, môi hơi dẹt." },
  "z": { r: null, s: [0.15, 0.7], o: [0, 0.25], hint: "Hai hàm răng gần khép, miệng mở rất ít, kèm rung cổ họng." },
  "ʃ": { r: [0.2, 0.8], s: null, o: [0.03, 0.4], hint: "Môi hơi chu ra, thổi hơi xì tròn và mềm." },
  "ʒ": { r: [0.2, 0.8], s: null, o: [0.03, 0.4], hint: "Môi hơi chu ra như âm ʃ, kèm rung cổ họng." },
  "h": { r: null, s: null, o: [0.2, 0.7], hint: "Miệng mở theo nguyên âm đi sau, đẩy hơi nhẹ từ cổ họng." },
  "m": { r: null, s: null, o: [0, 0.1], hint: "Hai môi mím lại, hơi đi qua mũi." },
  "n": { r: null, s: null, o: [0.03, 0.4], hint: "Miệng mở nhỏ, đầu lưỡi chạm nướu trên - phần lưỡi camera không thấy, hãy tự soi." },
  "ŋ": { r: null, s: null, o: [0.1, 0.5], hint: "Miệng mở nhỏ tới vừa, cuống lưỡi nâng chặn phía sau." },
  "l": { r: null, s: null, o: [0.03, 0.4], hint: "Miệng mở nhỏ, đầu lưỡi chạm nướu trên - phần lưỡi camera không thấy, hãy tự soi." },
  "r": { r: [0.2, 0.75], s: null, o: [0.03, 0.45], hint: "Môi hơi tròn, đầu lưỡi cong lên và không chạm vào đâu cả - tự soi lưỡi trong gương." },
  "w": { r: [0.6, 1], s: null, o: [0, 0.4], hint: "Môi tròn và chu mạnh như sắp nói âm u: rồi mở nhanh." },
  "j": { r: null, s: [0.3, 0.85], o: [0.03, 0.4], hint: "Môi hơi dẹt như sắp nói âm i:, miệng mở nhỏ." }
};
