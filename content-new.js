// ============================================================
//  content-new.js — LÁT CẮT NGƯỜI MỚI VIẾT LẠI CHO BẢN MỚI
//  Nạp SAU content.js. Chỉ ghi đè đúng các lát cắt dưới đây.
//  Mọi nội dung tự soạn 100%, tiếng Việt đơn giản, ví dụ trước.
//  Gỡ file này là về lại nội dung cũ.
// ============================================================

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
// E: các mục nghe chậm chào hỏi Band 0 — khóa là CHỈ SỐ 0-based trong CONTENT.listening,
// tức mục đếm từ 1 là #97 (Chào hỏi buổi sáng), #98 (Giới thiệu tên), #108 (Tạm biệt).
// Mục #99 (Hỏi tuổi, Band 2.0) KHÔNG thuộc nhóm này. Nhóm này dùng để tách riêng
// 3 mục nghe chậm chào hỏi khỏi nhóm Section 1 ở tab Luyện tập.
var RB_LISTEN_LABELS = { 96: "Nghe chậm: chào hỏi", 97: "Nghe chậm: chào hỏi", 107: "Nghe chậm: chào hỏi" };

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
  parts: [{ name: "Âm và câu nói hàng ngày", idx: [0, 1, 3, 5, 7] }, { name: "Âm và chào hỏi", idx: [2, 4, 6] }],
  questions: [
    { q: "Từ nào có âm giống âm trong từ 'ship'?", o: ["fish", "sheep", "cat", "sun"], a: 0, why: "fish và ship đều có âm 'i' ngắn, nghe giống nhau; sheep có âm 'i' dài, nghe khác." },
    { q: "Bạn gặp một người bạn mới, câu nào đúng nhất để chào và giới thiệu tên?", o: ["Hello! My name is Linh.", "Goodbye!", "Thank you!", "Sorry!"], a: 0, why: "Gặp người mới: chào Hello rồi giới thiệu tên bằng My name is..." },
    { q: "Từ nào đọc giống âm trong 'see': sea hay cat?", o: ["sea", "cat", "dog", "sun"], a: 0, why: "sea đọc là /siː/, giống âm trong see; cat đọc là /kæt/, khác âm." },
    { q: "Bạn muốn nói 'Tôi là học sinh', câu nào đúng?", o: ["I am a student.", "I is a student.", "I are a student.", "I be a student."], a: 0, why: "I luôn đi với am: I am a student." },
    { q: "Khi gặp người mới, câu chào nào đúng nhất?", o: ["Hello! My name is...", "Goodbye!", "Thank you!", "Sorry!"], a: 0, why: "Gặp người mới: chào Hello rồi giới thiệu tên." },
    { q: "Từ nào có âm giống âm trong từ 'book'?", o: ["good", "food", "cat", "sun"], a: 0, why: "good và book đều có âm 'u' ngắn, nghe giống nhau; food có âm 'u' dài, nghe khác." },
    { q: "'Thank you' nghĩa là gì?", o: ["Cảm ơn bạn", "Xin chào", "Tạm biệt", "Xin lỗi"], a: 0, why: "'Thank you' nghĩa là 'Cảm ơn bạn' — câu nói lịch sự dùng rất nhiều mỗi ngày." },
    { q: "Sau khi giới thiệu tên, câu lịch sự nên nói thêm là gì?", o: ["Nice to meet you!", "Goodbye!", "Thank you!", "Sorry!"], a: 0, why: "Nice to meet you! nghĩa là 'Rất vui được gặp bạn', nói ngay khi làm quen." }
  ]
};

// ---------- 7. PHÁT ÂM: BẢNG 44 ÂM THEO PHÂN LOẠI MỚI + ĐỢT 1 ----------
var RB_PH_WAVES = {
  1: ["m", "n", "p", "b", "f", "s", "h", "l", "t", "d", "k", "ɡ", "ŋ", "j", "i:", "e", "ɑ:", "ɔ:", "u:", "eɪ", "aɪ", "aʊ", "ɔɪ"],
  2: ["ɪ", "ʊ", "ʌ", "ɒ", "ɪə", "eə", "ʊə", "əʊ", "ə", "v", "z", "tʃ", "dʒ", "r", "w"],
  3: ["æ", "ɜ:", "θ", "ð", "ʒ", "ʃ"]
};
// Dữ liệu đợt 1: ký hiệu, từ ví dụ, nghĩa, lời giải thích bằng lời thường, câu mẫu,
// mốc đoạn video BBC (PH_SEG, gắn theo ký hiệu âm) và tham số khẩu hình cũ (hình vẽ đã bỏ, chỉ giữ để đối chiếu).
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
  { s: "j", w: "yes", vi: "vâng", ex: "Gần giống âm 'i' đọc thật nhanh rồi trượt sang âm sau. Lưỡi nâng cao ra trước rồi trượt nhanh sang nguyên âm sau.", sen: "Yes, I am ready.", senVi: "Vâng, tôi sẵn sàng.", seg: [4490, null], h: .85, f: .9, r: 0, o: .25, tip: .25, teeth: 0 },
  { s: "i:", w: "see", vi: "nhìn thấy", ex: "Môi dẹt và kéo sang hai bên như đang cười. Lưỡi cao và đưa ra trước, đầu lưỡi chạm nhẹ răng dưới.", sen: "I see a bird.", senVi: "Tôi nhìn thấy một con chim.", seg: [0, 131], h: .95, f: .95, r: 0, o: .18, tip: .3, teeth: 0 },
  { s: "e", w: "bed", vi: "cái giường", ex: "Miệng mở vừa, môi thả lỏng. Lưỡi ở giữa, đầu lưỡi chạm răng dưới. Âm ngắn.", sen: "The bed is soft.", senVi: "Chiếc giường mềm.", seg: [345, 455], h: .55, f: .8, r: 0, o: .45, tip: .25, teeth: 0 },
  { s: "ɑ:", w: "car", vi: "xe hơi", ex: "Miệng mở to, lưỡi thấp và lùi hẳn về sau. Âm dài, nghe như tiếng a kéo dài từ cổ họng.", sen: "My father has a car.", senVi: "Bố tôi có một chiếc xe hơi.", seg: [957, 996], h: .1, f: .1, r: 0, o: .9, tip: 0, teeth: 0 },
  { s: "ɔ:", w: "horse", vi: "con ngựa", ex: "Âm dài hơn ɒ. Môi tròn vừa, lưỡi lùi về sau và hơi nâng lên. Âm dài.", sen: "The horse is white.", senVi: "Con ngựa màu trắng.", seg: [750, 800], h: .4, f: .15, r: .55, o: .5, tip: 0, teeth: 0 },
  { s: "u:", w: "food", vi: "thức ăn", ex: "Môi tròn và chu mạnh ra trước như thổi nến. Lưỡi cao và lùi hẳn về sau. Âm dài.", sen: "I like this food.", senVi: "Tôi thích món ăn này.", seg: [292, 345], h: .92, f: .08, r: 1, o: .22, tip: 0, teeth: 0 },
  { s: "eɪ", w: "day", vi: "ngày", ex: "Bắt đầu như âm e rồi trượt nhẹ lên âm ɪ. Môi hơi dẹt dần khi trượt.", sen: "Today is a good day.", senVi: "Hôm nay là một ngày đẹp.", seg: [1103, 1205], h: .6, f: .85, r: 0, o: .4, tip: .25, teeth: 0 },
  { s: "aɪ", w: "night", vi: "ban đêm", ex: "Bắt đầu như âm a (miệng mở to) rồi trượt lên âm ɪ (miệng khép và dẹt lại).", sen: "Good night!", senVi: "Chúc ngủ ngon!", seg: [1526, 1586], h: .3, f: .6, r: 0, o: .7, tip: .2, teeth: 0 },
  { s: "aʊ", w: "now", vi: "bây giờ", ex: "Bắt đầu như âm a rồi trượt về âm ʊ, môi tròn lại và miệng khép dần.", sen: "I am ready now.", senVi: "Bây giờ tôi đã sẵn sàng.", seg: [1586, 1723], h: .35, f: .35, r: .5, o: .65, tip: .05, teeth: 0 },
  { s: "ɔɪ", w: "boy", vi: "cậu bé", ex: "Bắt đầu như âm ɔ (môi hơi tròn) rồi trượt lên âm ɪ (môi dẹt ra).", sen: "The boy is happy.", senVi: "Cậu bé vui vẻ.", seg: [1259, 1313], h: .45, f: .5, r: .3, o: .5, tip: .1, teeth: 0 }
];
// ---------- 11b. GIAI ĐOẠN 1.6: BÀI HỌC ĐỦ 44 ÂM (đợt 2/3, dữ kiện cũ) ----------
// ex lấy từ mô tả khẩu hình của web cũ, đã chuẩn hóa: không nói "giống" khi chỉ
// gần giống (trừ cặp rung/không rung cùng cách đặt miệng, ghi rõ "cách đặt miệng
// giống"); ʌ/ə/ʃ dùng đúng bản đã kiểm chứng trong trường ex của RB_PH2.
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
// Độ mở hàm tương đối do trang tự gán (thang 0-4) + âm đích của nguyên âm đôi (dùng cho hình trượt).
var RB_PH_JAW = { "i:": 1, "ɪ": 1.5, "e": 2, "æ": 3.5, "ɑ:": 4, "ɒ": 3.5, "ɔ:": 2.5, "ʊ": 1.5, "u:": 1, "ʌ": 2.5, "ɜ:": 2, "ə": 1.5, "eɪ": 2, "aɪ": 3.5, "ɔɪ": 2.5, "əʊ": 1.5, "aʊ": 3.5, "ɪə": 1.5, "eə": 2, "ʊə": 1.5, "p": 0.5, "b": 0.5, "t": 1, "d": 1, "k": 1.5, "ɡ": 1.5, "tʃ": 1.5, "dʒ": 1.5, "f": 0.5, "v": 0.5, "θ": 1, "ð": 1, "s": 0.5, "z": 0.5, "ʃ": 1, "ʒ": 1, "h": 2, "m": 0.5, "n": 1, "ŋ": 1.5, "l": 1, "r": 1.5, "w": 1, "j": 0.5 };
var RB_PH_GLIDE = { "eɪ": "ɪ", "aɪ": "ɪ", "ɔɪ": "ɪ", "əʊ": "ʊ", "aʊ": "ʊ", "ɪə": "ə", "eə": "ə", "ʊə": "ə" };
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
  { what: "Kết thúc một phiên trò chuyện với AI", xp: 10 },
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
// Hàng kiểm tra cuối chương đứng sau 4 bước học.
// Cổng mở khi học xong 4/5 bước học (mốc 80% — chuẩn nội bộ của web, không phải chuẩn IELTS).
var RB_CH1_STEPS = [
  { id: "classroom", kind: "vocab", setIdx: 24, deckNo: 2, title: "Học xong: hiểu và nói 20 từ dùng trong lớp học", type: "Từ vựng · Từ lớp học", mins: 8 },
  { id: "gram0", kind: "grammar", gIdx: 0, title: "Học xong: tự giới thiệu 'Tôi là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "gram1", kind: "grammar", gIdx: 1, title: "Học xong: chỉ đồ vật và giới thiệu người 'Đây là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "gram2", kind: "grammar", gIdx: 2, title: "Học xong: nói tên mình 'Tôi tên là...'", type: "Ngữ pháp · Câu đầu tiên", mins: 6 },
  { id: "pron1", kind: "pron", wave: 1, title: "Học xong: đọc đúng 44 âm tiếng Anh", type: "Phát âm · 44 âm", mins: 15 },
  { id: "test", kind: "test", title: "Bài kiểm tra cuối chương 1", type: "Đánh giá", mins: 10 },
];
var RB_CH1_GATE_NEED = 4; /* 80% của 5 bước học còn lại (làm tròn lên) sau khi bỏ 2 bước chữ cái video/game */
var RB_CH1_GUIDEBOOK = {
  goal: "Học xong chương này, bạn hiểu 20 từ dùng trong lớp học, nói được 3 câu đầu tiên: I am..., This is..., My name is..., và đọc đúng 44 âm tiếng Anh theo đợt khó.",
  grammar: ["Tôi là... (I am...)", "Đây là... (This is...)", "Tôi tên là... (My name is...)"],
  phrases: ["Hello! (Xin chào!)", "My name is... (Tôi tên là...)", "Thank you! (Cảm ơn bạn!)", "Nice to meet you! (Rất vui được gặp bạn!)"],
  mistakes: ["Đọc âm dài thành âm ngắn (ship thành sheep do /ɪ/ và /i:/ lẫn nhau)", "Nuốt âm cuối của từ tiếng Anh (life thiếu /f/)", "Đọc /r/ rung như r tiếng Việt"]
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
  "t": { a: "to", b: "do", partner: "d", minimal: true },
  "d": { a: "do", b: "to", partner: "t", minimal: true },
  "k": { a: "coat", b: "goat", partner: "ɡ", minimal: true },
  "ɡ": { a: "goat", b: "coat", partner: "k", minimal: true },
  "ŋ": { a: "sing", b: "sin", partner: "n", minimal: true },
  "j": { a: "yam", b: "jam", partner: "dʒ", minimal: true },
  "i:": { a: "sheep", b: "ship", partner: "ɪ", minimal: true },
  "e": { a: "bed", b: "bad", partner: "æ", minimal: true },
  "ɑ:": { a: "car", b: "core", partner: "ɔ:", minimal: true },
  "ɔ:": { a: "saw", b: "so", partner: "əʊ", minimal: true },
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

// ---------- 12. GIAI ĐOẠN 2: ghi chú độ khó, khu loại âm, lý do cặp, âm đầu chữ cái ----------
// Ghi chú 3 nhóm độ khó — nguyên văn web cũ (báo cáo rà soát 6.2), nhóm khó sửa
// câu đầu thành 6 âm gồm /ʃ/. Cảnh báo âm cuối giữ nguyên.
var RB_PH_DIFF_NOTES = {
  quen: { t: "Dễ - âm quen với người Việt", d: "Các âm này tiếng Việt có âm gần giống nên học nhanh. Chỉ cần chú ý độ dài hơi (âm dài như /i:/, /u:/, /ɑ:/ phải kéo dài hơn hẳn âm ngắn) và vị trí lưỡi là nghe đã rõ ràng." },
  lech: { t: "Vừa - âm hay đọc lệch", d: "Các âm này có một âm quen gần giống trong tiếng Việt nên rất dễ bị đọc trượt sang âm quen: /ɪ/ hay thành /i:/ (ship thành sheep), /ʊ/ hay thành /u:/, /əʊ/ hay thành 'ô', /r/ hay rung như r tiếng Việt. Nghe kỹ điểm khác nhau của từng cặp rồi mới đọc theo." },
  kho: { t: "Khó - âm khó và âm cuối", d: "Đây là các âm tiếng Việt chuẩn không có (/θ/, /ð/, /æ/, /ɜ:/, /ʒ/, /ʃ/) - phải học khẩu hình mới hẳn, đừng cố tìm âm Việt thay thế. Riêng chuyện ÂM CUỐI: người Việt còn hay 'nuốt' âm cuối của từ (đọc 'cat' thiếu /t/, 'bus' thiếu /s/, 'watched' thiếu /t/) làm người nghe không hiểu hoặc hiểu sai thì - khi luyện các âm phụ âm, hãy bật hẳn âm cuối ra rồi dừng một nhịp mới sang từ tiếp theo." }
};
// Khu loại âm — đúng định nghĩa web cũ (báo cáo 6.1). Đợt khó vẫn là thứ tự học chính;
// chế độ này chỉ là cách xem thứ hai, không đổi thứ tự học.
var RB_PH_TYPE_GROUPS = [
  { key: "mono", t: "Nguyên âm đơn (12 âm)", d: "các âm ngắn gọn rung từ cổ họng", list: ["i:", "ɪ", "e", "æ", "ɑ:", "ɒ", "ɔ:", "ʊ", "u:", "ʌ", "ɜ:", "ə"] },
  { key: "di", t: "Nguyên âm đôi (8 âm)", d: "âm trượt từ âm này sang âm khác", list: ["eɪ", "aɪ", "ɔɪ", "əʊ", "aʊ", "ɪə", "eə", "ʊə"] },
  { key: "cons", t: "Phụ âm (24 âm)", d: "được tạo khi môi, răng và lưỡi chặn luồng hơi", list: ["p", "b", "t", "d", "k", "ɡ", "tʃ", "dʒ", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "h", "m", "n", "ŋ", "l", "r", "w", "j"] }
];
// Lý do riêng cho 4 cặp không tối thiểu thật (báo cáo 6.6) — hiển thị ở bước 6
// thay cho câu chung chung cũ.
var RB_PH_PAIR_REASONS = {
  "h": "Âm /h/ không có cặp đối lập rung/không rung — bài này chỉ luyện nhận diện có hay không có /h/ ở đầu từ.",
  "ʊə": "Từ sure và shore ngày nay nhiều người Anh đọc giống hệt nhau (/ʃɔː/) nên không còn là cặp tối thiểu thật — bài này chỉ luyện nghe âm /ʊə/ trong sure.",
  "ə": "Hai từ này khác nhau nhiều âm, không phải cặp tối thiểu — bài này chỉ luyện nhận diện âm /ə/ đọc lướt trong about.",
  "ʒ": "Hai từ này khác nhau nhiều âm, không phải cặp tối thiểu — bài này chỉ luyện nhận diện âm /ʒ/ trong television."
};
// ---------- 13. GIAI ĐOẠN 2 (a20): BẢN ĐỒ 13 CHƯƠNG ----------
// Mục tiêu và năng lực làm được tự soạn theo chuẩn IELTS từng band, không sao chép.
// Chương chưa dựng xong ghi "sắp mở" — không bịa nội dung bài học bên trong.
var RB_CHAPTER_MAP = [
  { band: "Band 0", title: "Chào hỏi và 44 âm", status: "open", goal: "Hiểu 20 từ lớp học, nói được 3 câu I am... / This is... / My name is..., đọc đúng 44 âm tiếng Anh theo đợt khó.", can: ["Chào hỏi và giới thiệu tên", "Hiểu 20 từ lớp học", "Đọc đúng 44 âm tiếng Anh"] },
  { band: "Band 2,0", title: "Câu đơn giản và từ quen thuộc", status: "open", goal: "Hiểu và nói những câu rất đơn giản về bản thân và những việc quen thuộc hằng ngày.", can: ["Nói câu đơn về tên, tuổi, nơi ở", "Hiểu câu hỏi đơn giản khi nói chậm và rõ"] },
  { band: "Band 2,5", title: "Nói về bản thân và gia đình", status: "open", goal: "Kể ngắn gọn về gia đình, bạn bè và thói quen hằng ngày bằng câu đơn nối nhau.", can: ["Giới thiệu gia đình bằng vài câu đơn", "Nói về việc mình làm mỗi ngày"] },
  { band: "Band 3,0", title: "Giao tiếp đơn giản hằng ngày", status: "open", goal: "Xoay xở trong các tình huống quen thuộc: mua đồ, hỏi đường, hỏi giờ.", can: ["Hỏi và trả lời về giá cả, giờ giấc", "Hiểu biển báo và thông báo ngắn"] },
  { band: "Band 3,5", title: "Mô tả người và việc quen thuộc", status: "open", goal: "Mô tả người, đồ vật và nơi chốn quen thuộc bằng câu đơn và câu ghép đơn giản.", can: ["Mô tả ngoại hình và tính cách đơn giản", "Kể lại một việc đã làm hôm qua"] },
  { band: "Band 4,0", title: "Giao tiếp cơ bản trong đời sống", status: "open", goal: "Giao tiếp được ở mức cơ bản trong học tập và đời sống, dù còn ngập ngừng và sai nhiều.", can: ["Trao đổi thông tin cơ bản qua lại", "Viết đoạn ngắn về chủ đề quen thuộc"] },
  { band: "Band 4,5", title: "Đọc - nghe đoạn ngắn, viết đoạn ngắn", status: "open", goal: "Đọc hiểu đoạn văn ngắn, nghe hiểu ý chính của đoạn hội thoại chậm, viết đoạn văn có mở - thân - kết đơn giản.", can: ["Tìm ý chính trong đoạn ngắn", "Viết đoạn văn 5-7 câu đúng chủ đề"] },
  { band: "Band 5,0", title: "Giao tiếp công việc và học tập cơ bản", status: "open", goal: "Dùng tiếng Anh ở mức đủ cho giao tiếp hằng ngày và học tập cơ bản, còn sai nhưng người nghe vẫn hiểu.", can: ["Trình bày quan điểm đơn giản có lý do", "Đọc hiểu bài văn ngắn và trả lời câu hỏi"] },
  { band: "Band 5,5", title: "Trình bày ý kiến, viết bài ngắn", status: "open", goal: "Trình bày ý kiến có lý do và ví dụ, viết bài ngắn có cấu trúc rõ ràng.", can: ["Nói liền mạch 1-2 phút về chủ đề quen thuộc", "Viết bài Task 2 ngắn có luận điểm"] },
  { band: "Band 6,0", title: "Giao tiếp tự tin trong học tập và công việc", status: "open", goal: "Dùng tiếng Anh tự tin trong hầu hết tình huống học tập và công việc, dù còn sai ở câu phức tạp.", can: ["Thảo luận và tranh luận ở mức cơ bản", "Đọc hiểu bài dài và tóm tắt ý chính"] },
  { band: "Band 6,5", title: "Lập luận và viết bài có cấu trúc", status: "open", goal: "Lập luận có chiều sâu, dùng từ nối và câu phức tương đối chính xác.", can: ["Viết bài Task 2 có phản biện và kết luận", "Nói Part 3 có mở rộng ý"] },
  { band: "Band 7,0", title: "Dùng tiếng Anh linh hoạt, chính xác", status: "open", goal: "Dùng tiếng Anh linh hoạt trong học thuật và công việc, sai sót hiếm và không cản trở giao tiếp.", can: ["Dùng từ ngữ ít phổ biến đúng ngữ cảnh", "Viết bài có giọng văn phù hợp"] },
  { band: "Band 7,5+", title: "Gần như người bản địa trong học thuật và công việc", status: "open", goal: "Giao tiếp gần như trôi chảy, hiểu cả hàm ý và sắc thái trong văn bản và hội thoại phức tạp.", can: ["Hiểu hàm ý và giọng điệu trong bài khó", "Viết và nói có phong cách riêng, chính xác cao"] }
];

// ---------- DON LON XON (25/10/2026): BUOC LO TRINH CHANG 2-13 TU KHO CO SAN ----------
// Moi buoc la mot bai kho co san, xep theo chang (band) cua chinh bai do.
// Thứ tự trong chương: Từ vựng -> Ngữ pháp -> Đọc -> Nghe ngắn -> Nghe dài ->
// Nói -> Nhập vai -> Viết -> Luyện viết -> Gõ câu. Bộ từ chưa gắn band (16 bộ)
// không vào chương nào — vẫn mở được ở tab Luyện tập, mục "Chưa xếp band".
// Bài kiểm tra cuối chương chỉ có ở chương 1; các chương sau chưa có.
function typingModeOfLevel(lv) {
  lv = lv || "";
  if (lv.indexOf("6.0") >= 0 || lv.indexOf("6.5") >= 0 || lv.indexOf("7.") >= 0) return "nangcao";
  if (lv.indexOf("5.0") >= 0 || lv.indexOf("5.5") >= 0) return "coban";
  return "nentang";
}
var RB_CH_STEP_TYPES = ["Từ vựng", "Ngữ pháp", "Đọc", "Nghe ngắn", "Nghe dài", "Nói", "Nhập vai", "Viết", "Luyện viết", "Gõ câu"];
var RB_CH_STEPS_CACHE = null;
function rbBuildChSteps() {
  var out = {};
  if (typeof CONTENT === "undefined") return out;
  var bands = ["Band 2,0", "Band 2,5", "Band 3,0", "Band 3,5", "Band 4,0", "Band 4,5",
               "Band 5,0", "Band 5,5", "Band 6,0", "Band 6,5", "Band 7,0", "Band 7,5+"];
  bands.forEach(function (b) { out[b] = []; });
  function add(band, title, type, lesson, doneKey) {
    // Kho ghi band kieu "Band 2.0" (cham), ban do chuong ghi "Band 2,0" (phay):
    // chuan hoa ve dang phay de khop chuong.
    band = String(band || "").replace(".", ",");
    if (out[band]) out[band].push({ title: title, type: type, lesson: lesson, doneKey: doneKey });
  }
  (CONTENT.vocab || []).forEach(function (s, i) {
    if (s.band) add(s.band, s.topic + " (" + s.cards.length + " từ)", "Từ vựng",
      { type: "vocab", setIdx: i }, "vocabPos:" + i);
  });
  (CONTENT.grammar || []).forEach(function (g, i) {
    if (g.level) add(g.level, g.name, "Ngữ pháp",
      { type: "skillGramOld", idx: i, skillKey: "gramOld:" + i, title: g.name }, "gramOld:" + i);
  });
  (CONTENT.reading || []).forEach(function (r, i) {
    if (r.level) add(r.level, r.title, "Đọc", { type: "skillRead", idx: i }, "read:" + i);
  });
  (CONTENT.listening || []).forEach(function (r, i) {
    if (r.band) add(r.band, r.topic, "Nghe ngắn", { type: "skillListen", idx: i }, "listen:" + i);
  });
  (CONTENT.listeningPlus || []).forEach(function (r, i) {
    if (r.band) add(r.band, r.section + " — " + r.topic, "Nghe dài",
      { type: "skillListenLong", idx: i }, "listenLong:" + i);
  });
  (CONTENT.speaking || []).forEach(function (s, i) {
    if (s.band) add(s.band, s.topic, "Nói", { type: "skillSpeak", idx: i }, "speak:" + i);
  });
  (CONTENT.roleplay || []).forEach(function (r, i) {
    if (r.band) add(r.band, r.title, "Nhập vai", { type: "skillRoleplay", idx: i }, "roleplay:" + i);
  });
  (CONTENT.writing || []).forEach(function (w, i) {
    if (w.band) add(w.band, w.title, "Viết", { type: "skillWrite", idx: i }, "write:" + i);
  });
  (CONTENT.writingDrills || []).forEach(function (d, i) {
    if (d.band) add(d.band, d.title, "Luyện viết", { type: "skillDrill", idx: i }, "drill:" + i);
  });
  var modeLists = { nentang: [], coban: [], nangcao: [] };
  (CONTENT.typing || []).forEach(function (s, gi) {
    modeLists[typingModeOfLevel(s.level)].push({ gi: gi, s: s });
  });
  Object.keys(modeLists).forEach(function (m) {
    modeLists[m].forEach(function (it, j) {
      add(it.s.level, it.s.title, "Gõ câu",
        { type: "skillTyping", mode: m, setIdx: j }, "typing:" + m + ":" + j);
    });
  });
  return out;
}
function rbChSteps(band) {
  if (!RB_CH_STEPS_CACHE) RB_CH_STEPS_CACHE = rbBuildChSteps();
  return RB_CH_STEPS_CACHE[band] || [];
}
function rbChMissing(band) {
  var have = {};
  rbChSteps(band).forEach(function (st) { have[st.type] = true; });
  return RB_CH_STEP_TYPES.filter(function (t) { return !have[t]; });
}
function rbStepDone(st) {
  if (!st) return false;
  try {
    if (st.doneKey.indexOf("vocabPos:") === 0) {
      var vi = +st.doneKey.split(":")[1];
      var set = CONTENT.vocab[vi];
      return !!set && (state.pos["vocab:" + vi] || 0) >= set.cards.length;
    }
    if (st.doneKey.indexOf("typing:") === 0) {
      return !!(state.skillDone && (state.skillDone[st.doneKey] || state.skillDone["typing:" + st.lesson.setIdx]));
    }
    return !!(state.skillDone && state.skillDone[st.doneKey]);
  } catch (e) { return false; }
}
function rbFirstUndoneStep(band) {
  var steps = rbChSteps(band);
  for (var i = 0; i < steps.length; i++) if (!rbStepDone(steps[i])) return steps[i];
  return steps[0] || null;
}
function rbFirstUndoneAcrossBands() {
  var bands = ["Band 2,0", "Band 2,5", "Band 3,0", "Band 3,5", "Band 4,0", "Band 4,5",
               "Band 5,0", "Band 5,5", "Band 6,0", "Band 6,5", "Band 7,0", "Band 7,5+"];
  for (var i = 0; i < bands.length; i++) {
    var steps = rbChSteps(bands[i]);
    for (var j = 0; j < steps.length; j++) if (!rbStepDone(steps[j])) return steps[j];
  }
  return null;
}

// ---------- CHAT LOC (GĐ2, a17): So tay chang cho 12 chuong sau ----------
// Nội dung tự soạn tổng quát theo mục tiêu từng chương (RB_CHAPTER_MAP),
// không chép sách hay đề thi. Chương 1 dùng RB_CH1_GUIDEBOOK sẵn có.
var CL_GUIDEBOOKS = {
  "Band 2,0": { grammar: ["Câu đơn với to be và have got", "Thì hiện tại đơn cho thói quen", "Mạo từ a/an/the cơ bản"], phrases: ["I live in... (Tôi sống ở...)", "I like... (Tôi thích...)", "Can you help me? (Bạn giúp tôi được không?)"], mistakes: ["Quên thêm -s cho ngôi thứ ba số ít (he go thành he goes)", "Dùng sai a/an trước nguyên âm", "Bỏ mạo từ the trước danh từ đã xác định"] },
  "Band 2,5": { grammar: ["Thì hiện tại tiếp diễn", "Câu so sánh hơn với -er và more", "Từ nối and/but/because"], phrases: ["I am doing... (Tôi đang...)", "My family has... (Gia đình tôi có...)", "I usually... (Tôi thường...)"], mistakes: ["Nhầm thì hiện tại đơn với tiếp diễn", "So sánh hơn thiếu than", "Dùng very thay vì so sánh khi cần"] },
  "Band 3,0": { grammar: ["Thì quá khứ đơn", "Câu hỏi với Wh- và Yes/No", "Giới từ chỉ nơi chốn và thời gian"], phrases: ["How much is it? (Cái này bao nhiêu tiền?)", "Where is...? (... ở đâu?)", "What time is it? (Mấy giờ rồi?)"], mistakes: ["Quên đổi động từ sang quá khứ", "Đặt sai vị trí giới từ chỉ nơi chốn", "Hỏi giờ bằng cấu trúc tiếng Việt dịch sang"] },
  "Band 3,5": { grammar: ["Thì hiện tại hoàn thành cơ bản", "Câu ghép với and/but/so", "Tính từ so sánh nhất"], phrases: ["He is taller than me. (Anh ấy cao hơn tôi.)", "I went there yesterday. (Hôm qua tôi đã tới đó.)", "This is the best one. (Đây là cái tốt nhất.)"], mistakes: ["Nhầm quá khứ đơn với hiện tại hoàn thành", "So sánh nhất thiếu the", "Câu ghép thiếu từ nối nên ý rời rạc"] },
  "Band 4,0": { grammar: ["Thì quá khứ tiếp diễn", "Câu điều kiện loại 1", "Động từ khuyết thiếu can/could/should"], phrases: ["If it rains, I will stay home. (Nếu trời mưa, tôi sẽ ở nhà.)", "You should try this. (Bạn nên thử cái này.)", "I was reading when you called. (Tôi đang đọc thì bạn gọi.)"], mistakes: ["Dùng will trong cả hai vế câu điều kiện", "Nhầm could (quá khứ/khả năng) với can", "Quá khứ tiếp diễn thiếu was/were"] },
  "Band 4,5": { grammar: ["Câu bị động cơ bản", "Mệnh đề quan hệ who/which/that", "Từ nối đoạn văn firstly/finally"], phrases: ["This book was written in 2020. (Cuốn sách này được viết năm 2020.)", "The man who helped me... (Người đàn ông đã giúp tôi...)", "Firstly,... Finally,... (Trước hết,... Cuối cùng,...)"], mistakes: ["Bị động thiếu be + phân từ 2", "Mệnh đề quan hệ thiếu đại từ hoặc thừa chủ ngữ", "Đoạn văn không có từ nối nên ý nhảy lung tung"] },
  "Band 5,0": { grammar: ["Thì hiện tại hoàn thành tiếp diễn", "Câu điều kiện loại 2", "Cụm động từ thường gặp"], phrases: ["If I had time, I would travel. (Nếu tôi có thời gian, tôi sẽ đi du lịch.)", "I have been learning English for a year. (Tôi học tiếng Anh được một năm rồi.)", "I agree with you. (Tôi đồng ý với bạn.)"], mistakes: ["Điều kiện loại 2 dùng would ở cả hai vế", "Nhầm hiện tại hoàn thành với hoàn thành tiếp diễn", "Cụm động từ tách sai vị trí tân ngữ"] },
  "Band 5,5": { grammar: ["Câu gián tiếp cơ bản", "Mệnh đề nhượng bộ although/despite", "Từ học thuật cho Task 2"], phrases: ["She said she was busy. (Cô ấy nói cô ấy bận.)", "Although it was hard, I finished it. (Dù khó, tôi vẫn làm xong.)", "In my opinion,... (Theo ý kiến của tôi,...)"], mistakes: ["Câu gián tiếp quên lùi thì", "Although đi với but trong cùng một câu", "Dùng từ nói chuyện thường ngày trong bài viết học thuật"] },
  "Band 6,0": { grammar: ["Câu phức với mệnh đề danh từ", "Đảo ngữ nhẹ với Not only", "Collocation cho chủ đề học thuật"], phrases: ["What surprises me is that... (Điều làm tôi ngạc nhiên là...)", "Not only is it useful, but it is also cheap. (Nó không chỉ hữu ích mà còn rẻ.)", "There is strong evidence that... (Có bằng chứng mạnh rằng...)"], mistakes: ["Mệnh đề danh từ giữ nguyên thứ tự câu hỏi", "Đảo ngữ thiếu trợ động từ", "Collocation dịch từng từ từ tiếng Việt"] },
  "Band 6,5": { grammar: ["Câu điều kiện hỗn hợp", "Mệnh đề phân từ rút gọn", "Từ nối lập luận however/nevertheless"], phrases: ["If I had studied harder, I would have a better job now. (Nếu trước đây tôi học chăm hơn, giờ tôi đã có việc tốt hơn.)", "However, this view ignores... (Tuy nhiên, quan điểm này bỏ qua...)", "Having finished the report, she went home. (Làm xong báo cáo, cô ấy về nhà.)"], mistakes: ["Điều kiện hỗn hợp trộn sai thì hai vế", "Phân từ rút gọn sai chủ ngữ", "However đặt sai vị trí làm câu khó đọc"] },
  "Band 7,0": { grammar: ["Câu nhấn mạnh với cleft", "Câu giả định với wish/if only", "Giọng văn học thuật và trang trọng"], phrases: ["It was practice that made the difference. (Chính luyện tập đã tạo ra khác biệt.)", "I wish I had started earlier. (Ước gì tôi đã bắt đầu sớm hơn.)", "It is widely believed that... (Người ta tin rộng rãi rằng...)"], mistakes: ["Câu nhấn mạnh sai cấu trúc it was... that...", "Wish + quá khứ đơn dùng cho ước ở hiện tại bị nhầm với quá khứ", "Giọng văn lúc trang trọng lúc xuồng xã trong cùng một bài"] },
  "Band 7,5+": { grammar: ["Câu phức nhiều tầng", "Sắc thái từ đồng nghĩa", "Phong cách viết và nói riêng"], phrases: ["What matters most is not speed but accuracy. (Điều quan trọng nhất không phải tốc độ mà là độ chính xác.)", "On the whole, the benefits outweigh the drawbacks. (Nhìn chung, lợi ích lớn hơn hạn chế.)", "This raises a deeper question: ... (Điều này đặt ra một câu hỏi sâu hơn: ...)"], mistakes: ["Câu nhiều tầng làm người đọc lạc mất ý chính", "Từ đồng nghĩa dùng sai sắc thái trang trọng", "Cố dùng từ khó khiến câu gượng gạo"] }
};


// ---------- 14. LUYỆN TẬP THI (4 kỹ năng riêng + buổi thi kết thúc đợt) ----------
// Tiêu chí chấm Nói/Viết: tên 4 tiêu chí là tiêu chí chính thức của IELTS;
// mô tả từng mức Band 5/6/7 dưới đây do web tự viết bằng tiếng Việt đơn giản.
// Tự đánh giá: người học tự chọn mức cho từng tiêu chí, web chỉ tính trung bình,
// không tự nhận là điểm thi thật — luôn ghi rõ "Tự đánh giá".
var RB_SPEAK_CRITERIA = [
  { key: "flu", name: "Nói trôi chảy và mạch lạc", d5: "Nói còn ngắt quãng nhiều, ý nối nhau chưa trơn nhưng người nghe vẫn hiểu ý chính.", d6: "Nói khá liền mạch, có lúc ngập ngừng khi tìm từ nhưng ý vẫn nối nhau được.", d7: "Nói trôi chảy, ít ngập ngừng, ý nối nhau tự nhiên, chỉ khựng lại đôi chỗ khi diễn đạt ý khó." },
  { key: "lex", name: "Từ vựng", d5: "Dùng được từ quen thuộc cho chủ đề quen thuộc, đôi khi dùng từ chưa đúng chỗ hoặc lặp từ.", d6: "Dùng được từ cho nhiều chủ đề, có paraphrase đơn giản, đôi khi chọn từ chưa thật chính xác.", d7: "Dùng từ đa dạng và khá chính xác, có từ ít phổ biến dùng đúng chỗ, paraphrase linh hoạt." },
  { key: "gram", name: "Ngữ pháp", d5: "Dùng được câu đơn và vài câu ghép, còn sai nhiều ở câu phức nhưng ý vẫn hiểu được.", d6: "Dùng được câu đơn và câu phức, có sai sót nhưng ít làm người nghe hiểu nhầm.", d7: "Dùng câu phức tương đối chính xác, sai sót hiếm và không cản trở người nghe." },
  { key: "pron", name: "Phát âm", d5: "Phát âm đủ rõ để hiểu dù còn lệch nhiều âm, người nghe phải tập trung mới theo kịp.", d6: "Phát âm khá rõ, có trọng âm và ngữ điệu cơ bản, thỉnh thoảng lệch âm nhưng vẫn hiểu được.", d7: "Phát âm rõ và tự nhiên, trọng âm và ngữ điệu tốt, chỉ lệch nhẹ ở vài âm khó." }
];
var RB_WRITE_CRITERIA = [
  { key: "task", name: "Trả lời đúng yêu cầu đề", d5: "Trả lời được ý chính của đề nhưng còn thiếu ý hoặc lạc ý ở vài chỗ.", d6: "Trả lời đủ các ý chính của đề, có lập trường và lý do, đôi chỗ chưa triển khai sâu.", d7: "Trả lời đầy đủ và sâu các ý của đề, lập trường rõ, lý do và ví dụ thuyết phục." },
  { key: "coh", name: "Mạch lạc và liên kết", d5: "Bài có mở - thân - kết nhưng ý nối nhau còn rời rạc, từ nối dùng còn đơn điệu.", d6: "Bài có bố cục rõ, ý nối nhau khá trơn bằng từ nối và từ thay thế, đôi chỗ còn gượng.", d7: "Bài mạch lạc, ý nối nhau tự nhiên, dùng từ nối và từ thay thế đa dạng và đúng chỗ." },
  { key: "lex", name: "Từ vựng", d5: "Dùng được từ cho chủ đề quen thuộc, còn lặp từ và sai chính tả ở vài chỗ.", d6: "Dùng từ đa dạng hơn, có paraphrase và collocation đơn giản, sai sót ít.", d7: "Dùng từ chính xác và đa dạng, có từ học thuật dùng đúng chỗ, chính tả gần như không sai." },
  { key: "gram", name: "Ngữ pháp và câu", d5: "Dùng được câu đơn và vài câu phức, còn sai nhiều nhưng ý vẫn hiểu được.", d6: "Dùng được câu phức và cấu trúc đa dạng, có sai sót nhưng không làm lệch ý.", d7: "Câu đa dạng và chính xác, sai sót hiếm, dấu câu đúng." }
];
// Đọc số band từ nhãn "Band 6.0"/"Band 7.5+" để lọc bài theo chặng thi thử.
function bandNumOf(label) {
  var m = String(label || "").match(/([0-9]+(?:[.,][0-9]+)?)/);
  if (!m) return null;
  return parseFloat(m[1].replace(",", "."));
}
function bandSortVal(label) { var n = bandNumOf(label); return n === null ? 99 : n; }
// Đếm thật từ kho cũ (không ghi số mẫu): dùng để hiển thị ở tab Luyện tập.
function skillCounts() {
  var readQs = 0, lpQs = 0;
  (CONTENT.reading || []).forEach(function (r) { readQs += (r.questions || []).length; });
  (CONTENT.listeningPlus || []).forEach(function (r) { lpQs += (r.questions || []).length; });
  return {
    readingItems: (CONTENT.reading || []).length, readingQs: readQs,
    listenSingles: (CONTENT.listening || []).length,
    listenLongItems: (CONTENT.listeningPlus || []).length, listenLongQs: lpQs,
    speakP1: (CONTENT.speaking || []).filter(function (s) { return s.partNum === 1; }).length,
    speakP2: (CONTENT.speaking || []).filter(function (s) { return s.partNum === 2; }).length,
    speakP3: (CONTENT.speaking || []).filter(function (s) { return s.partNum === 3; }).length,
    speakTotal: (CONTENT.speaking || []).length, roleplay: (CONTENT.roleplay || []).length,
    writeT1: (CONTENT.writing || []).filter(function (w) { return w.type === "Task 1"; }).length,
    writeT2: (CONTENT.writing || []).filter(function (w) { return w.type === "Task 2"; }).length,
    writeMail: (CONTENT.writing || []).filter(function (w) { return w.type !== "Task 1" && w.type !== "Task 2"; }).length,
    writeTotal: (CONTENT.writing || []).length, writeDrills: (CONTENT.writingDrills || []).length
  };
}


/* ============ NỘI DUNG MỚI — ĐỢT NỘI DUNG CHUẨN 26/10/2026 ============
   Tự soạn, append vào cuối mảng (không chèn giữa, không splice) để giữ nguyên
   chỉ số cũ và tiến trình theo chỉ số. Căn cứ: nhóm 2-4 trong THU-TU-VIET.md. */
CONTENT.listeningPlus.push.apply(CONTENT.listeningPlus, [{"section":"Section 1","band":"Band 2.0","topic":"Đăng ký lớp học tiếng Anh buổi tối","text":"A: Good morning, Sun Language Centre. How can I help you? B: Good morning. I would like to join an evening English class, please. A: We have two evening classes. The Monday and Wednesday class is for beginners, and the Tuesday and Thursday class is for elementary students. B: I am a beginner, so the Monday and Wednesday class sounds good. What time does it start? A: It starts at 7 o'clock in the evening and finishes at 9 o'clock. Each lesson lasts two hours. B: How much does the course cost? A: The course costs 1200000 dong for ten lessons, and the book costs 150000 dong. B: That is fine. My name is Thu Ha, and my phone number is 0912345678. A: Thank you, Thu Ha. Please come to Room 5 on Monday evening and bring your book and a notebook. B: Thank you very much. I will see you on Monday.","questions":[{"type":"MC","q":"Which class does Thu Ha choose?","o":["The Tuesday and Thursday class","The Monday and Wednesday class","The Saturday morning class","The Sunday class"],"a":1,"why":"Thu Ha chọn lớp thứ Hai và thứ Tư vì cô ấy là người mới bắt đầu và lớp đó dành cho người mới bắt đầu."},{"type":"MC","q":"What time does the class finish?","o":["At 8 o'clock","At 10 o'clock","At 7 o'clock","At 9 o'clock"],"a":3,"why":"Lớp học kết thúc lúc 9 giờ tối vì nhân viên nói lớp bắt đầu lúc 7 giờ và kết thúc lúc 9 giờ."},{"type":"COMP","q":"The course costs ___ dong for ten lessons.","answer":"1200000","why":"Khóa học có giá 1200000 đồng cho mười buổi vì nhân viên báo giá này khi Thu Ha hỏi học phí."},{"type":"TF","q":"Thu Ha must bring her book and a notebook to Room 5.","o":["True","False"],"a":0,"why":"Câu này đúng vì nhân viên dặn Thu Ha đến phòng 5 vào tối thứ Hai và mang theo sách cùng vở."},{"type":"SA","q":"What is Thu Ha's phone number?","answer":"0912345678","why":"Số điện thoại của Thu Ha là 0912345678 vì cô ấy đọc số này khi đăng ký."}]},{"section":"Section 1","band":"Band 2.0","topic":"Hỏi đường đến thư viện thành phố","text":"A: Excuse me, can you help me, please? I want to go to the city library. B: Of course. Go straight along this street for about ten minutes. A: Do I turn left or right at the traffic lights? B: Turn left at the traffic lights, and then walk past the post office. A: Is the library near the post office? B: No, it is a little further. After the post office, turn right into Green Street. The library is on your left, next to the small park. A: How long does it take to walk there? B: It takes about fifteen minutes from here. A: Thank you. Is the library open on Sunday? B: Yes, it is open from 8 o'clock in the morning to 5 o'clock in the afternoon on Sunday. A: That is very helpful. Thank you so much. B: You are welcome. Have a nice day.","questions":[{"type":"MC","q":"Where does the visitor want to go?","o":["The post office","The small park","The city library","The bus station"],"a":2,"why":"Người khách muốn đến thư viện thành phố vì câu đầu tiên anh ấy hỏi đường đến thư viện."},{"type":"MATCH","q":"Which street is the library on?","o":["Green Street","Park Street","Main Street"],"a":0,"why":"Thư viện nằm trên đường Green vì người chỉ đường nói rẽ phải vào đường Green rồi thư viện ở bên trái."},{"type":"MC","q":"How long does it take to walk to the library?","o":["About five minutes","About ten minutes","About fifteen minutes","About twenty minutes"],"a":2,"why":"Đi bộ tới thư viện mất khoảng mười lăm phút vì người chỉ đường nói rõ thời gian này."},{"type":"COMP","q":"On Sunday, the library is open from 8 o'clock in the morning to ___ o'clock in the afternoon.","answer":"5","why":"Chủ nhật thư viện mở cửa đến 5 giờ chiều vì người chỉ đường nói giờ mở cửa ngày Chủ nhật."},{"type":"TF","q":"The visitor must turn right at the traffic lights.","o":["True","False"],"a":1,"why":"Câu này sai vì người chỉ đường dặn rẽ trái ở đèn giao thông, không phải rẽ phải."}]},{"section":"Section 1","band":"Band 2.5","topic":"Mua vé tàu đi thăm bạn","text":"A: Good afternoon. I would like two train tickets to River Town, please. B: Certainly. When do you want to travel? A: On Saturday morning, please. B: There is a train at 8:20 and another at 10:40. Which one do you prefer? A: The 8:20 train, please. We want to arrive early. B: The 8:20 train arrives at 11:05, and a return ticket costs 240000 dong per person. A: That is fine. Can we sit near the window? B: Yes, I can book two window seats in carriage 3. A: Thank you. Do we need to bring anything for the journey? B: Please bring your tickets and your identity cards. The train leaves from platform 2. A: Platform 2, carriage 3, window seats. Thank you very much. B: You are welcome. Have a pleasant journey.","questions":[{"type":"MC","q":"Which train does the customer choose?","o":["The 7:20 train","The 10:40 train","The 11:05 train","The 8:20 train"],"a":3,"why":"Khách chọn chuyến tàu 8 giờ 20 vì anh ấy muốn đến sớm và chọn chuyến này khi nhân viên đưa ra hai lựa chọn."},{"type":"MC","q":"How much is a return ticket per person?","o":["120000 dong","200000 dong","240000 dong","340000 dong"],"a":2,"why":"Vé khứ hồi giá 240000 đồng một người vì nhân viên báo giá này cho chuyến tàu 8 giờ 20."},{"type":"MATCH","q":"Which carriage are the seats in?","o":["Carriage 2","Carriage 3","Carriage 5"],"a":1,"why":"Ghế ngồi ở toa số 3 vì nhân viên nói đặt hai ghế cửa sổ ở toa 3."},{"type":"COMP","q":"The train leaves from platform ___.","answer":"2","why":"Tàu khởi hành từ sân ga số 2 vì nhân viên dặn khách điều này ở cuối đoạn hội thoại."},{"type":"TF","q":"The customers must bring their tickets and identity cards.","o":["True","False"],"a":0,"why":"Câu này đúng vì nhân viên dặn khách mang theo vé và giấy tờ tùy thân cho chuyến đi."}]},{"section":"Section 1","band":"Band 2.5","topic":"Hỏi giờ làm việc của bưu điện trung tâm","text":"A: Excuse me, what time does the central post office open? B: It opens at 7:30 in the morning from Monday to Friday. A: And what time does it close? B: It closes at 6 o'clock in the evening on weekdays. A: Is it open on Saturday? B: Yes, on Saturday it opens at 8 o'clock and closes at 12 o'clock at noon. A: I see. Is it open on Sunday? B: No, I am afraid it is closed on Sunday. A: I want to send a parcel to my sister. How much does it cost? B: A small parcel costs 45000 dong, and a large parcel costs 90000 dong. A: Thank you. Can I buy stamps here as well? B: Yes, you can buy stamps at counter 4, next to the main door. A: Thank you for your help. B: You are welcome.","questions":[{"type":"MC","q":"What time does the post office open on weekdays?","o":["At 7 o'clock","At 7:30","At 8 o'clock","At 9 o'clock"],"a":1,"why":"Bưu điện mở cửa lúc 7 giờ 30 các ngày trong tuần vì nhân viên nói rõ giờ mở cửa từ thứ Hai đến thứ Sáu."},{"type":"MATCH","q":"When does the post office close on Saturday?","o":["At 12 o'clock at noon","At 5 o'clock","At 6 o'clock"],"a":0,"why":"Thứ Bảy bưu điện đóng cửa lúc 12 giờ trưa vì nhân viên nói giờ làm việc thứ Bảy là từ 8 giờ đến 12 giờ."},{"type":"MC","q":"How much does a large parcel cost to send?","o":["90000 dong","45000 dong","60000 dong","120000 dong"],"a":0,"why":"Gửi bưu kiện lớn tốn 90000 đồng vì nhân viên báo giá bưu kiện nhỏ là 45000 đồng và bưu kiện lớn là 90000 đồng."},{"type":"COMP","q":"You can buy stamps at counter ___.","answer":"4","why":"Bạn có thể mua tem ở quầy số 4 vì nhân viên chỉ quầy 4 nằm cạnh cửa chính."},{"type":"TF","q":"The post office is open on Sunday.","o":["True","False"],"a":1,"why":"Câu này sai vì nhân viên nói bưu điện đóng cửa vào Chủ nhật."}]},{"section":"Section 2","band":"Band 3.0","topic":"Thông báo ở trường về ngày hội thể thao","text":"Good morning, students. I have an important announcement about our school sports day. The sports day will take place on Friday the 20th of June in the school stadium. All students from class 6 to class 9 will take part in the event. There will be running races, football matches and a long jump competition. Students should arrive at school at 7:30 in the morning and wear their sports clothes and trainers. Please bring a bottle of water and a hat, because the weather may be hot. Lunch will be provided in the school canteen at 12 o'clock. Parents are welcome to come and watch the competitions from 9 o'clock. If you want to join the football team, please give your name to Mr Tuan in Room 12 before Wednesday. We hope everyone will have a fun and healthy day.","questions":[{"type":"MC","q":"When will the sports day take place?","o":["On Wednesday the 20th of June","On Saturday the 20th of June","On Friday the 12th of June","On Friday the 20th of June"],"a":3,"why":"Ngày hội thể thao diễn ra vào thứ Sáu ngày 20 tháng 6 vì thông báo nêu rõ ngày này."},{"type":"MC","q":"What should students bring?","o":["A book and a pen","A bottle of water and a hat","A football and a racket","A camera and a phone"],"a":1,"why":"Học sinh nên mang theo một chai nước và một chiếc mũ vì thông báo dặn mang hai thứ này do trời có thể nóng."},{"type":"MATCH","q":"Who should students give their name to for the football team?","o":["Mr Tuan","Mrs Hoa","Mr Nam"],"a":0,"why":"Học sinh muốn vào đội bóng phải đưa tên cho thầy Tuan vì thông báo nói rõ tên thầy Tuan."},{"type":"COMP","q":"Lunch will be provided in the school canteen at ___ o'clock.","answer":"12","why":"Bữa trưa được phục vụ ở căng tin trường lúc 12 giờ vì thông báo nêu giờ ăn trưa này."},{"type":"TF","q":"Parents can come and watch the competitions from 9 o'clock.","o":["True","False"],"a":0,"why":"Câu này đúng vì thông báo mời phụ huynh đến xem các cuộc thi từ 9 giờ."}]},{"section":"Section 2","band":"Band 3.0","topic":"Hướng dẫn tham quan vườn thực vật","text":"Welcome to Green Garden, our city botanical garden. The garden opens at 8 o'clock in the morning and closes at 5:30 in the afternoon. Your visit today has three parts. First, we will walk through the flower garden, where you can see more than 200 kinds of flowers. Next, we will visit the tall tree area, where some trees are over 100 years old. Finally, we will stop at the lake, where you can take photos and rest under the trees. Please stay on the paths and do not pick the flowers. You can buy drinks and snacks at the small cafe near the main gate. The entrance ticket costs 30000 dong for adults and is free for children under 6 years old. Our guides wear green hats, so please follow them. Thank you, and enjoy your visit to Green Garden.","questions":[{"type":"MC","q":"What is the first part of the visit?","o":["The lake","The tall tree area","The flower garden","The small cafe"],"a":2,"why":"Phần đầu tiên của chuyến tham quan là vườn hoa vì hướng dẫn viên nói trước tiên đoàn sẽ đi qua vườn hoa."},{"type":"MATCH","q":"Where can visitors buy drinks and snacks?","o":["At the lake","In the tall tree area","At the small cafe near the main gate"],"a":2,"why":"Du khách có thể mua đồ uống và đồ ăn nhẹ ở quán cà phê nhỏ gần cổng chính vì hướng dẫn viên nói rõ địa điểm này."},{"type":"MC","q":"How much is an entrance ticket for an adult?","o":["20000 dong","50000 dong","It is free","30000 dong"],"a":3,"why":"Vé vào cửa cho người lớn giá 30000 đồng vì hướng dẫn viên báo giá vé người lớn và miễn phí cho trẻ dưới 6 tuổi."},{"type":"COMP","q":"The guides wear ___ hats.","answer":"green","why":"Hướng dẫn viên đội mũ màu xanh lá vì hướng dẫn viên nói du khách hãy đi theo những người đội mũ xanh lá."},{"type":"TF","q":"Visitors can pick the flowers in the garden.","o":["True","False"],"a":1,"why":"Câu này sai vì hướng dẫn viên dặn du khách đi trên lối đi và không được hái hoa."}]},{"section":"Section 2","band":"Band 3.5","topic":"Bản tin khu phố về ngày dọn dẹp công viên","text":"Hello, everyone. This is the weekly news for Rose Neighbourhood. Next Saturday, we will have a big clean-up day in Rose Park. The clean-up starts at 8 o'clock in the morning and finishes at 11 o'clock. Volunteers will collect rubbish, paint the benches and plant 50 new flowers near the main gate. The neighbourhood committee will provide gloves, bags and drinking water for all volunteers. Children can join with their parents and help plant flowers in the small garden area. After the clean-up, there will be a free lunch in the park for all volunteers at 12 o'clock. If you want to join, please write your name on the list at the community house before Thursday evening. Last year, 80 people joined the clean-up day, and this year we hope even more neighbours will take part. Thank you for helping to keep our park clean and beautiful.","questions":[{"type":"MC","q":"When does the clean-up day start?","o":["At 7 o'clock","At 9 o'clock","At 11 o'clock","At 8 o'clock"],"a":3,"why":"Ngày dọn dẹp bắt đầu lúc 8 giờ sáng vì bản tin nêu giờ bắt đầu là 8 giờ và kết thúc lúc 11 giờ."},{"type":"MC","q":"What will volunteers plant near the main gate?","o":["50 new flowers","50 new trees","80 new flowers","20 new benches"],"a":0,"why":"Tình nguyện viên sẽ trồng 50 bông hoa mới gần cổng chính vì bản tin nêu con số và địa điểm này."},{"type":"MATCH","q":"Where should people write their name to join?","o":["At the park gate","At the community house","At the school"],"a":1,"why":"Người muốn tham gia phải ghi tên vào danh sách tại nhà cộng đồng vì bản tin dặn đăng ký ở đó trước tối thứ Năm."},{"type":"COMP","q":"Last year, ___ people joined the clean-up day.","answer":"80","why":"Năm ngoái có 80 người tham gia ngày dọn dẹp vì bản tin nhắc lại con số của năm trước."},{"type":"TF","q":"Volunteers will have a free lunch in the park at 12 o'clock.","o":["True","False"],"a":0,"why":"Câu này đúng vì bản tin nói sau khi dọn dẹp sẽ có bữa trưa miễn phí trong công viên lúc 12 giờ."}]},{"section":"Section 2","band":"Band 3.5","topic":"Giới thiệu câu lạc bộ bóng bàn","text":"Welcome to the Blue Table Tennis Club. Our club meets every Tuesday and Friday evening in the community sports hall on Sun Street. Beginners are welcome, and our coaches will teach you the basic skills step by step. Each meeting starts at 6:30 in the evening with a warm-up, and then members play friendly matches for one hour. The club has 12 tables, so everyone can play without waiting too long. The monthly fee is 100000 dong, and this includes the use of bats and balls. Members under 18 years old pay only 60000 dong a month. Twice a year, the club organises a small tournament, and the winners receive medals and small gifts. If you want to join, please come to the sports hall on Friday evening and speak to Coach Minh. We look forward to meeting you.","questions":[{"type":"MC","q":"When does the club meet?","o":["Every Monday and Wednesday","Every Tuesday and Friday","Every Saturday and Sunday","Every Friday only"],"a":1,"why":"Câu lạc bộ gặp nhau vào tối thứ Ba và thứ Sáu vì phần giới thiệu nêu rõ hai buổi này."},{"type":"MATCH","q":"Who should new members speak to on Friday evening?","o":["Coach Lan","Coach Minh","Coach Tuan"],"a":1,"why":"Người mới muốn tham gia nên gặp huấn luyện viên Minh vào tối thứ Sáu vì phần giới thiệu nói rõ tên huấn luyện viên Minh."},{"type":"MC","q":"How much is the monthly fee for members under 18?","o":["60000 dong","100000 dong","120000 dong","It is free"],"a":0,"why":"Hội viên dưới 18 tuổi chỉ đóng 60000 đồng một tháng vì phần giới thiệu nêu mức phí riêng cho nhóm tuổi này."},{"type":"COMP","q":"The club has ___ tables.","answer":"12","why":"Câu lạc bộ có 12 bàn vì phần giới thiệu nêu số bàn để mọi người đều có thể chơi mà không phải chờ lâu."},{"type":"TF","q":"The club organises a tournament twice a year.","o":["True","False"],"a":0,"why":"Câu này đúng vì phần giới thiệu nói câu lạc bộ tổ chức một giải đấu nhỏ hai lần một năm."}]},{"section":"Section 2","band":"Band 4.0","topic":"Phỏng vấn việc làm thêm tại quán cà phê","text":"A: Good morning. Thank you for coming to the interview for the part-time job at Moon Cafe. B: Good morning. Thank you for inviting me. A: Can you tell me about your experience? B: I worked at a small bakery for six months last year. I served customers, made coffee and cleaned the tables. A: That sounds useful. When can you work? B: I can work on Saturday and Sunday mornings, and on Friday evenings. I study at college from Monday to Thursday. A: Our cafe opens at 7 o'clock in the morning. Can you start at 7:30 on Saturdays? B: Yes, I can. I live near the cafe, so I can arrive early. A: The job pays 35000 dong an hour, and you will work about 12 hours a week. B: That sounds good to me. A: One more question. How do you deal with a difficult customer? B: I stay calm, listen carefully and try to solve the problem politely. A: Thank you. We will call you on Monday with our decision.","questions":[{"type":"MC","q":"Where did the candidate work last year?","o":["At a restaurant","At a small bakery","At a bookshop","At a hotel"],"a":1,"why":"Ứng viên từng làm việc ở một tiệm bánh nhỏ sáu tháng năm ngoái vì anh ấy kể kinh nghiệm này khi được hỏi."},{"type":"MC","q":"When can the candidate work?","o":["From Monday to Thursday","Every evening","Only on Mondays","On Saturday and Sunday mornings and Friday evenings"],"a":3,"why":"Ứng viên có thể làm việc vào sáng thứ Bảy, sáng Chủ nhật và tối thứ Sáu vì anh ấy học ở trường từ thứ Hai đến thứ Năm."},{"type":"MATCH","q":"How does the candidate deal with a difficult customer?","o":["He argues with the customer","He calls the police","He stays calm and listens carefully"],"a":2,"why":"Ứng viên xử lý khách khó tính bằng cách giữ bình tĩnh, lắng nghe cẩn thận và cố gắng giải quyết vấn đề một cách lịch sự."},{"type":"COMP","q":"The job pays ___ dong an hour.","answer":"35000","why":"Công việc trả lương 35000 đồng một giờ vì người phỏng vấn báo mức lương này."},{"type":"TF","q":"The candidate will work about 12 hours a week.","o":["True","False"],"a":0,"why":"Câu này đúng vì người phỏng vấn nói ứng viên sẽ làm việc khoảng 12 giờ mỗi tuần."}]},{"section":"Section 2","band":"Band 4.0","topic":"Tư vấn sức khỏe về ăn uống lành mạnh","text":"Good afternoon, everyone. Today I would like to talk about healthy eating. Many people eat too much fast food and drink too many sweet drinks, and this can lead to weight gain and tiredness. A healthy diet does not mean you must stop eating your favourite foods completely. It means you should eat more vegetables, fruit and whole grains, and eat less fried food, salt and sugar. Try to drink at least six glasses of water a day, and eat three regular meals instead of skipping breakfast. Cooking at home is also a good idea, because you can control the amount of oil and salt in your food. Finally, remember that small changes can make a big difference. For example, if you replace one sweet drink a day with water, you will feel better after a few weeks. Thank you for listening, and please ask me if you have any questions.","questions":[{"type":"MC","q":"What problem can too much fast food cause?","o":["Better sleep","Stronger muscles","Better memory","Weight gain and tiredness"],"a":3,"why":"Ăn quá nhiều đồ ăn nhanh có thể gây tăng cân và mệt mỏi vì bài tư vấn nêu hai hậu quả này."},{"type":"MATCH","q":"What should people eat more of?","o":["Fried food and salt","Vegetables, fruit and whole grains","Sweet drinks"],"a":1,"why":"Mọi người nên ăn nhiều rau, trái cây và ngũ cốc nguyên hạt hơn vì bài tư vấn khuyên ăn nhiều nhóm thực phẩm này."},{"type":"MC","q":"Why is cooking at home a good idea?","o":["Because it is always cheaper","Because you can control the amount of oil and salt","Because it takes less time","Because restaurants are closed"],"a":1,"why":"Nấu ăn ở nhà là ý hay vì bạn có thể kiểm soát lượng dầu và muối trong món ăn."},{"type":"COMP","q":"Try to drink at least ___ glasses of water a day.","answer":"six|6","why":"Bạn nên cố gắng uống ít nhất sáu ly nước mỗi ngày vì bài tư vấn nêu con số này."},{"type":"TF","q":"A healthy diet means you must stop eating your favourite foods completely.","o":["True","False"],"a":1,"why":"Câu này sai vì bài tư vấn nói chế độ ăn lành mạnh không có nghĩa là phải ngừng hẳn các món ăn yêu thích."}]},{"section":"Section 3","band":"Band 4.5","topic":"Thảo luận nhóm làm bài tập về môi trường","text":"A: Let us plan our group project about the environment. Our topic is reducing plastic waste at school. B: Good idea. First, we need to collect information. I can make a short survey for students in our class. A: That is helpful. How many questions will the survey have? B: I think ten questions is enough. We can ask students how often they use plastic bags and plastic bottles. A: And I will interview our teacher, Mrs Lan, about the school recycling programme. B: Great. What about the presentation? A: I suggest we divide it into three parts: the problem, our survey results and our solutions. B: I agree. I can prepare the slides about the solutions, such as using cloth bags and refillable bottles. A: Good. Our deadline is Friday next week, and we will meet again on Wednesday afternoon in the library to check our work. B: Perfect. Let us start today.","questions":[{"type":"MC","q":"What is the group project about?","o":["Saving water at home","Reducing plastic waste at school","Planting trees in the park","Cleaning the beach"],"a":1,"why":"Dự án nhóm nói về việc giảm rác thải nhựa ở trường vì người nói nêu chủ đề này ngay đầu buổi thảo luận."},{"type":"MATCH","q":"Who will the group interview?","o":["Mrs Lan","Mr Tuan","Mrs Hoa"],"a":0,"why":"Nhóm sẽ phỏng vấn cô Lan về chương trình tái chế của trường vì thành viên nhóm nói rõ tên cô Lan."},{"type":"MC","q":"How many questions will the survey have?","o":["Ten questions","Eight questions","Five questions","Twenty questions"],"a":0,"why":"Bản khảo sát sẽ có mười câu hỏi vì thành viên nhóm nói mười câu hỏi là đủ."},{"type":"COMP","q":"The group will meet again on Wednesday afternoon in the ___.","answer":"library","why":"Nhóm sẽ gặp lại nhau vào chiều thứ Tư ở thư viện vì buổi thảo luận nêu cả ngày và địa điểm gặp lại."},{"type":"TF","q":"The deadline for the project is Friday next week.","o":["True","False"],"a":0,"why":"Câu này đúng vì nhóm nói hạn chót là thứ Sáu tuần tới."}]},{"section":"Section 3","band":"Band 4.5","topic":"Nói chuyện với gia sư về bài luận","text":"A: Good afternoon, Miss Hoa. I need some help with my essay about city life. B: Of course, Nam. What is the problem? A: I have written the introduction, but I do not know how to organise the main part. B: Let us look at your plan. A good essay usually has three main paragraphs: advantages, disadvantages and your opinion. A: I see. My first paragraph is about the advantages, such as good jobs and public transport. B: That is a good start. For the disadvantages, you could write about traffic jams, air pollution and high living costs. A: Yes, those are important points. How long should the essay be? B: About 300 words. Your introduction should be short, about 50 words, and your conclusion should summarise your main ideas. A: Thank you. I will rewrite the second paragraph tonight and bring it to our next meeting on Thursday. B: Excellent. Remember to check your spelling and grammar before you hand it in.","questions":[{"type":"MC","q":"What is Nam's essay about?","o":["Village life","City life","School life","Family life"],"a":1,"why":"Bài luận của Nam nói về cuộc sống thành phố vì Nam nói rõ chủ đề này khi nhờ gia sư giúp."},{"type":"MC","q":"How many main paragraphs should a good essay have?","o":["Two paragraphs","Three paragraphs","Four paragraphs","Five paragraphs"],"a":1,"why":"Một bài luận hay thường có ba đoạn chính vì gia sư liệt kê ba đoạn: ưu điểm, nhược điểm và ý kiến của bạn."},{"type":"MATCH","q":"Which disadvantage does the tutor suggest?","o":["Good jobs","Traffic jams","Public transport"],"a":1,"why":"Gia sư gợi ý viết về tắc đường như một nhược điểm, cùng với ô nhiễm không khí và chi phí sinh hoạt cao."},{"type":"COMP","q":"The essay should be about ___ words long.","answer":"300","why":"Bài luận nên dài khoảng 300 từ vì gia sư nói rõ độ dài này khi Nam hỏi."},{"type":"TF","q":"Nam will bring his rewritten paragraph to the next meeting on Thursday.","o":["True","False"],"a":0,"why":"Câu này đúng vì Nam nói sẽ viết lại đoạn thứ hai tối nay và mang đến buổi gặp tiếp theo vào thứ Năm."}]}]);
CONTENT.listening.push.apply(CONTENT.listening, [{"section":"Section 4","topic":"Năng lượng mặt trời","text":"In the small town of Sunfield, a new solar farm with 12000 panels now provides electricity for nearly 4000 homes throughout the year.","band":"Band 6.5"},{"section":"Section 4","topic":"Năng lượng mặt trời","text":"Researchers at Northfield University found that solar panels work best when they face south and are cleaned twice a year.","band":"Band 6.5"},{"section":"Section 4","topic":"Năng lượng mặt trời","text":"The cost of a home solar system in the study fell from 18000 dollars in 2015 to 9000 dollars in 2024, which encouraged many families to install one.","band":"Band 6.5"},{"section":"Section 4","topic":"Năng lượng mặt trời","text":"During cloudy weeks, the farm stores extra energy in large batteries, so local schools and hospitals still receive power at night.","band":"Band 6.5"},{"section":"Section 4","topic":"Giấc ngủ và trí nhớ","text":"In a study of 240 students, those who slept for eight hours remembered 30 percent more new words the next morning than those who slept for five hours.","band":"Band 6.5"},{"section":"Section 4","topic":"Giấc ngủ và trí nhớ","text":"Dr Elena Marsh explains that deep sleep helps the brain move short term memories into long term storage, especially during the first half of the night.","band":"Band 6.5"},{"section":"Section 4","topic":"Giấc ngủ và trí nhớ","text":"Students who reviewed their notes in the evening and then slept well performed better on a test of 60 questions than students who stayed up late.","band":"Band 6.5"},{"section":"Section 4","topic":"Giấc ngủ và trí nhớ","text":"The researchers advise learners to avoid bright screens for one hour before bed, because screen light can delay sleep by about 45 minutes.","band":"Band 6.5"},{"section":"Section 4","topic":"Kinh tế tuần hoàn","text":"The circular economy aims to keep products in use for as long as possible, so a phone designed in Greenport can now be repaired 12 times instead of being thrown away.","band":"Band 7.0"},{"section":"Section 4","topic":"Kinh tế tuần hoàn","text":"Professor Alan Reed argues that recycling alone is not enough, because nearly 40 percent of materials are lost when products are badly designed.","band":"Band 7.0"},{"section":"Section 4","topic":"Kinh tế tuần hoàn","text":"In the city of Harlow, a sharing library lends out 800 tools, from drills to sewing machines, which has reduced new purchases by a third in two years.","band":"Band 7.0"},{"section":"Section 4","topic":"Kinh tế tuần hoàn","text":"Companies that rent clothes instead of selling them must design stronger fabrics, since each jacket may be worn by 20 different customers.","band":"Band 7.0"},{"section":"Section 4","topic":"Ngôn ngữ và tư duy","text":"Linguist Dr Sara Kim studied 150 bilingual children in Seoul and found that switching between two languages can improve attention and problem solving.","band":"Band 7.0"},{"section":"Section 4","topic":"Ngôn ngữ và tư duy","text":"Some languages require speakers to state how they know a fact, for example whether they saw it themselves or heard it from another person.","band":"Band 7.0"},{"section":"Section 4","topic":"Ngôn ngữ và tư duy","text":"In one experiment, adults who learned 40 new words for colours became faster at telling apart shades that had previously looked identical to them.","band":"Band 7.0"},{"section":"Section 4","topic":"Ngôn ngữ và tư duy","text":"However, researchers warn that language shapes thought only in limited ways, because speakers of different languages still share most basic concepts.","band":"Band 7.0"},{"section":"Section 4","topic":"Trí tuệ nhân tạo trong y tế","text":"At Central Hospital, an artificial intelligence system now checks 5000 chest scans a month and flags possible problems for doctors to review within 24 hours.","band":"Band 7.5+"},{"section":"Section 4","topic":"Trí tuệ nhân tạo trong y tế","text":"Dr James Owen stresses that the system supports, rather than replaces, doctors, because a final diagnosis still requires clinical judgement and patient history.","band":"Band 7.5+"},{"section":"Section 4","topic":"Trí tuệ nhân tạo trong y tế","text":"A trial involving 18 clinics showed that the tool reduced missed cases by 22 percent, but it also produced false alarms in about 8 percent of healthy scans.","band":"Band 7.5+"},{"section":"Section 4","topic":"Trí tuệ nhân tạo trong y tế","text":"Ethical guidelines now require hospitals to explain to patients when artificial intelligence has assisted in their care, and to protect medical data with strict controls.","band":"Band 7.5+"},{"section":"Section 4","topic":"Biến đổi khí hậu và nông nghiệp","text":"Farmers in the Delta Valley have shifted rice planting two weeks earlier, after average spring temperatures rose by 1.5 degrees Celsius over 30 years.","band":"Band 7.5+"},{"section":"Section 4","topic":"Biến đổi khí hậu và nông nghiệp","text":"New drought resistant varieties developed at Riverland Institute yielded 25 percent more grain than older varieties during a dry season in 2023.","band":"Band 7.5+"},{"section":"Section 4","topic":"Biến đổi khí hậu và nông nghiệp","text":"However, heavier rainfall has also increased soil erosion, so many farms now plant cover crops to protect fields between harvests.","band":"Band 7.5+"},{"section":"Section 4","topic":"Biến đổi khí hậu và nông nghiệp","text":"Experts argue that small farms need affordable weather forecasts and insurance, because a single failed harvest can affect 600 families in one village.","band":"Band 7.5+"}]);
CONTENT.speaking.push.apply(CONTENT.speaking, [{"partNum":2,"topicStd":"Bản thân và gia đình","part":"Part 2","topic":"Describe a close friend - Mô tả một người bạn thân","band":"Band 4.5","lines":[{"who":"Cue card","en":"Describe a close friend. You should say: who this person is, how you met, what you do together, and explain why this person is important to you.","vi":"Hãy mô tả một người bạn thân. Bạn nên nói: người đó là ai, bạn gặp người đó như thế nào, các bạn cùng làm gì với nhau, và giải thích vì sao người đó quan trọng với bạn."},{"who":"Candidate","en":"I would like to talk about my close friend, Minh Anh.","vi":"Tôi muốn nói về người bạn thân của tôi, Minh Anh."},{"who":"Candidate","en":"We met in our first year at college, when we sat next to each other in an English class.","vi":"Chúng tôi gặp nhau vào năm đầu tiên ở trường cao đẳng, khi ngồi cạnh nhau trong một lớp tiếng Anh."},{"who":"Candidate","en":"She is kind, funny and always ready to help other people.","vi":"Cô ấy tốt bụng, vui tính và luôn sẵn sàng giúp đỡ người khác."},{"who":"Candidate","en":"At weekends, we often study together, cook simple meals and go for a walk in the park.","vi":"Vào cuối tuần, chúng tôi thường học cùng nhau, nấu những bữa ăn đơn giản và đi dạo trong công viên."},{"who":"Candidate","en":"She is important to me because she listens carefully when I have a problem and always gives me honest advice.","vi":"Cô ấy quan trọng với tôi vì cô ấy lắng nghe cẩn thận khi tôi gặp vấn đề và luôn cho tôi lời khuyên chân thành."},{"who":"Candidate","en":"In short, she is not only a good friend, but also like a sister to me.","vi":"Tóm lại, cô ấy không chỉ là một người bạn tốt mà còn giống như một người chị em với tôi."}],"quiz":[{"q":"Cụm 'always ready to help' có nghĩa là gì?","o":["chỉ giúp khi rảnh","luôn sẵn sàng giúp đỡ","luôn muốn được giúp đỡ"],"a":1,"why":"Ready to help nghĩa là sẵn sàng giúp đỡ; always nhấn mạnh là luôn luôn như vậy."},{"q":"Cấu trúc mở bài Part 2 nào được dùng trong bài mẫu?","o":["'I would like to talk about...' + tên người bạn","'In my opinion...'","'First of all, secondly...'"],"a":0,"why":"Câu đầu: 'I would like to talk about my close friend, Minh Anh.' là cách mở bài Part 2 đơn giản và tự nhiên."},{"q":"Từ 'honest advice' gần nghĩa với cụm nào?","o":["lời khuyên vui vẻ","lời khuyên nhanh chóng","lời khuyên chân thành"],"a":2,"why":"Honest = chân thành, thật lòng; advice = lời khuyên."}]},{"partNum":2,"topicStd":"Thức ăn và sức khỏe","part":"Part 2","topic":"Describe your favourite food - Mô tả một món ăn yêu thích","band":"Band 4.5","lines":[{"who":"Cue card","en":"Describe your favourite food. You should say: what the food is, where you usually eat it, who cooks it for you, and explain why you like it so much.","vi":"Hãy mô tả một món ăn yêu thích của bạn. Bạn nên nói: món ăn đó là gì, bạn thường ăn nó ở đâu, ai nấu nó cho bạn, và giải thích vì sao bạn thích nó đến vậy."},{"who":"Candidate","en":"My favourite food is chicken noodle soup, which my mother often cooks at home.","vi":"Món ăn yêu thích của tôi là phở gà, món mà mẹ tôi thường nấu ở nhà."},{"who":"Candidate","en":"It has soft noodles, tasty chicken and a clear, warm soup with spring onions.","vi":"Món này có sợi phở mềm, thịt gà ngon và nước dùng trong, nóng hổi với hành lá."},{"who":"Candidate","en":"We usually eat it together on Sunday mornings, when the whole family is at home.","vi":"Chúng tôi thường ăn món này cùng nhau vào sáng Chủ nhật, khi cả nhà đều ở nhà."},{"who":"Candidate","en":"I like it because it is light, healthy and easy to eat, even when I feel tired.","vi":"Tôi thích món này vì nó nhẹ bụng, tốt cho sức khỏe và dễ ăn, ngay cả khi tôi cảm thấy mệt."},{"who":"Candidate","en":"More than that, the smell of the soup always reminds me of happy family mornings.","vi":"Hơn thế nữa, mùi thơm của bát phở luôn gợi cho tôi nhớ về những buổi sáng gia đình hạnh phúc."},{"who":"Candidate","en":"That is why chicken noodle soup will always be my number one choice.","vi":"Đó là lý do vì sao phở gà sẽ luôn là lựa chọn số một của tôi."}],"quiz":[{"q":"'reminds me of' trong bài mẫu có nghĩa là gì?","o":["gợi cho tôi nhớ về","làm tôi quên đi","khiến tôi lo lắng"],"a":0,"why":"Remind somebody of something nghĩa là gợi cho ai nhớ về điều gì đó."},{"q":"Từ 'tasty' gần nghĩa với từ nào?","o":["salty","spicy","delicious"],"a":2,"why":"Tasty = ngon, gần nghĩa với delicious."},{"q":"Cụm 'my number one choice' thể hiện điều gì?","o":["lựa chọn rẻ nhất","lựa chọn yêu thích nhất","lựa chọn đầu tiên trong ngày"],"a":1,"why":"Number one choice nghĩa là lựa chọn số một, yêu thích nhất."}]},{"partNum":2,"topicStd":"Du lịch và giao thông","part":"Part 2","topic":"Describe a short trip you enjoyed - Mô tả một chuyến đi ngắn bạn thích","band":"Band 4.5","lines":[{"who":"Cue card","en":"Describe a short trip you enjoyed. You should say: where you went, who you went with, what you did there, and explain why you enjoyed it.","vi":"Hãy mô tả một chuyến đi ngắn bạn thích. Bạn nên nói: bạn đã đi đâu, bạn đi cùng ai, bạn đã làm gì ở đó, và giải thích vì sao bạn thích chuyến đi đó."},{"who":"Candidate","en":"I am going to talk about a short trip to a small lakeside town last summer.","vi":"Tôi sẽ nói về một chuyến đi ngắn tới một thị trấn nhỏ bên hồ vào mùa hè năm ngoái."},{"who":"Candidate","en":"I went there with two close friends, and we travelled by bus early in the morning.","vi":"Tôi đi cùng hai người bạn thân, và chúng tôi đi xe buýt từ sáng sớm."},{"who":"Candidate","en":"During the day, we walked around the lake, took many photos and tried local food at a small market.","vi":"Trong ngày, chúng tôi đi dạo quanh hồ, chụp nhiều ảnh và thử đồ ăn địa phương ở một khu chợ nhỏ."},{"who":"Candidate","en":"In the evening, we sat by the lake and watched the sunset together.","vi":"Vào buổi tối, chúng tôi ngồi bên hồ và cùng nhau ngắm hoàng hôn."},{"who":"Candidate","en":"I enjoyed the trip because it was simple and relaxing, and we did not have to hurry at all.","vi":"Tôi thích chuyến đi vì nó đơn giản và thư giãn, và chúng tôi hoàn toàn không phải vội vàng."},{"who":"Candidate","en":"It was a short trip, but it gave us many happy memories.","vi":"Đó là một chuyến đi ngắn, nhưng nó đã cho chúng tôi nhiều kỷ niệm vui vẻ."}],"quiz":[{"q":"Cụm 'did not have to hurry' có nghĩa là gì?","o":["không muốn dừng lại","không phải vội vàng","không được đi nhanh"],"a":1,"why":"Not have to + động từ nghĩa là không cần phải làm gì; hurry = vội vàng."},{"q":"Cấu trúc mở bài nào được dùng trong bài mẫu?","o":["'I am going to talk about...' + chuyến đi","'I disagree with...'","'In conclusion...'"],"a":0,"why":"Câu đầu: 'I am going to talk about a short trip...' là cách mở bài Part 2 chuẩn."},{"q":"Từ 'lakeside' có nghĩa là gì?","o":["trên núi","giữa biển","bên hồ"],"a":2,"why":"Lakeside = ở bên hồ, gần hồ."}]},{"partNum":2,"topicStd":"Học tập và giáo dục","part":"Part 2","topic":"Describe a favourite subject - Mô tả một môn học yêu thích","band":"Band 4.5","lines":[{"who":"Cue card","en":"Describe a favourite subject. You should say: what the subject is, when you studied it, what you learned, and explain why you like it.","vi":"Hãy mô tả một môn học yêu thích. Bạn nên nói: môn học đó là gì, bạn học nó khi nào, bạn đã học được gì, và giải thích vì sao bạn thích nó."},{"who":"Candidate","en":"My favourite subject is English, which I have studied since I was in secondary school.","vi":"Môn học yêu thích của tôi là tiếng Anh, môn mà tôi đã học từ khi còn học trung học cơ sở."},{"who":"Candidate","en":"In class, we learned new words, practised speaking and read short stories.","vi":"Trong lớp, chúng tôi học từ mới, luyện nói và đọc truyện ngắn."},{"who":"Candidate","en":"My teacher was very patient and always encouraged us to speak, even when we made mistakes.","vi":"Cô giáo của tôi rất kiên nhẫn và luôn khuyến khích chúng tôi nói, ngay cả khi chúng tôi mắc lỗi."},{"who":"Candidate","en":"I like English because it helps me watch films, read books and talk to people from other countries.","vi":"Tôi thích tiếng Anh vì nó giúp tôi xem phim, đọc sách và nói chuyện với người từ các nước khác."},{"who":"Candidate","en":"It also gives me more confidence when I travel or work in a team.","vi":"Nó cũng giúp tôi tự tin hơn khi đi du lịch hoặc làm việc nhóm."},{"who":"Candidate","en":"For all these reasons, English is the subject I enjoy most.","vi":"Vì tất cả những lý do này, tiếng Anh là môn học tôi thích nhất."}],"quiz":[{"q":"'encouraged us to speak' có nghĩa là gì?","o":["bắt chúng tôi im lặng","cấm chúng tôi nói","khuyến khích chúng tôi nói"],"a":2,"why":"Encourage somebody to do something nghĩa là khuyến khích ai làm gì đó."},{"q":"Từ 'patient' trong bài mẫu có nghĩa là gì?","o":["vui vẻ","kiên nhẫn","nghiêm khắc"],"a":1,"why":"Patient = kiên nhẫn, bình tĩnh khi chờ đợi hoặc giúp đỡ người khác."},{"q":"Cụm kết bài nào được dùng trong bài mẫu?","o":["'For all these reasons, ...'","'On the other hand, ...'","'I have no idea.'"],"a":0,"why":"Câu cuối: 'For all these reasons, English is the subject I enjoy most.' tổng kết các lý do đã nêu."}]},{"partNum":3,"topicStd":"Học tập và giáo dục","part":"Part 3","topic":"Online Learning - Học trực tuyến","band":"Band 5.5","lines":[{"who":"Examiner","en":"Do you think online learning is as good as learning in a classroom?","vi":"Bạn có nghĩ học trực tuyến tốt như học trong lớp học không?"},{"who":"Candidate","en":"In some ways, yes. Online lessons are flexible, so students can study at home and watch a lesson again if they do not understand it. For example, my friend watched a grammar lesson three times before her test. However, classroom learning is better for discussion, because students can ask questions and talk to each other more easily.","vi":"Ở một số mặt thì có. Bài học trực tuyến linh hoạt, nên học sinh có thể học ở nhà và xem lại bài học nếu chưa hiểu. Ví dụ, bạn tôi đã xem một bài ngữ pháp ba lần trước bài kiểm tra. Tuy nhiên, học trong lớp tốt hơn cho việc thảo luận, vì học sinh có thể đặt câu hỏi và nói chuyện với nhau dễ dàng hơn."},{"who":"Examiner","en":"What problems do students face when they study online?","vi":"Học sinh gặp những khó khăn gì khi học trực tuyến?"},{"who":"Candidate","en":"The biggest problem is probably distraction. At home, it is easy to check a phone or watch a video instead of studying. Another problem is poor internet connection, especially in the countryside. For instance, one of my classmates often lost connection during an important lesson, so she missed part of the teacher's explanation.","vi":"Vấn đề lớn nhất có lẽ là sự xao nhãng. Ở nhà, rất dễ kiểm tra điện thoại hoặc xem video thay vì học. Một vấn đề khác là kết nối mạng kém, đặc biệt ở nông thôn. Ví dụ, một bạn cùng lớp của tôi thường bị mất kết nối trong một bài học quan trọng, nên bạn ấy bỏ lỡ một phần lời giải thích của giáo viên."},{"who":"Examiner","en":"How can schools help students learn better online?","vi":"Trường học có thể giúp học sinh học trực tuyến tốt hơn bằng cách nào?"},{"who":"Candidate","en":"Schools can make lessons shorter and more interactive, with quizzes and group tasks instead of long lectures. They can also train teachers to use online tools well and give students clear schedules. I think this would help students stay focused and feel less lonely, because they would still work with their classmates, even from home.","vi":"Trường học có thể làm cho bài học ngắn hơn và tương tác nhiều hơn, với các bài kiểm tra nhanh và nhiệm vụ nhóm thay vì các bài giảng dài. Trường cũng có thể đào tạo giáo viên sử dụng tốt các công cụ trực tuyến và đưa ra thời khóa biểu rõ ràng cho học sinh. Tôi nghĩ điều này sẽ giúp học sinh tập trung và cảm thấy bớt cô đơn, vì các em vẫn làm việc cùng bạn cùng lớp, ngay cả khi ở nhà."}],"quiz":[{"q":"'flexible' trong bài mẫu có nghĩa là gì?","o":["đắt đỏ","linh hoạt","khó khăn"],"a":1,"why":"Flexible = linh hoạt, có thể thay đổi cho phù hợp."},{"q":"Từ 'distraction' gần nghĩa với từ nào?","o":["sự tập trung","sự tự tin","sự xao nhãng"],"a":2,"why":"Distraction = sự xao nhãng, thứ làm bạn mất tập trung."},{"q":"Cụm 'more interactive' có nghĩa là gì?","o":["tương tác nhiều hơn","dài hơn","khó hơn"],"a":0,"why":"Interactive = có sự tương tác; more interactive = tương tác nhiều hơn."}]},{"partNum":3,"topicStd":"Du lịch và giao thông","part":"Part 3","topic":"City Transport - Giao thông thành phố","band":"Band 5.5","lines":[{"who":"Examiner","en":"Why is traffic so bad in many large cities?","vi":"Vì sao giao thông lại tệ ở nhiều thành phố lớn?"},{"who":"Candidate","en":"The main reason is that too many people use private cars. As cities grow, more families buy cars, but roads do not grow at the same speed. For example, in my city, the morning rush hour can last for two hours, and buses also get stuck in the same traffic.","vi":"Lý do chính là quá nhiều người dùng ô tô riêng. Khi thành phố phát triển, nhiều gia đình mua ô tô hơn, nhưng đường sá không mở rộng với tốc độ tương tự. Ví dụ, ở thành phố của tôi, giờ cao điểm buổi sáng có thể kéo dài hai tiếng, và xe buýt cũng bị kẹt trong cùng dòng xe đó."},{"who":"Examiner","en":"What can cities do to reduce traffic problems?","vi":"Các thành phố có thể làm gì để giảm vấn đề giao thông?"},{"who":"Candidate","en":"Cities should improve public transport first, so that buses and trains are fast, cheap and comfortable. If people trust public transport, they will leave their cars at home. In addition, cities can build safe cycle lanes and encourage people to walk for short trips, which is also good for health.","vi":"Các thành phố nên cải thiện giao thông công cộng trước tiên, để xe buýt và tàu nhanh, rẻ và thoải mái. Nếu mọi người tin tưởng giao thông công cộng, họ sẽ để ô tô ở nhà. Ngoài ra, thành phố có thể xây làn đường xe đạp an toàn và khuyến khích mọi người đi bộ cho những chuyến đi ngắn, điều này cũng tốt cho sức khỏe."},{"who":"Examiner","en":"Do you think people will use cars less in the future?","vi":"Bạn có nghĩ mọi người sẽ dùng ô tô ít hơn trong tương lai không?"},{"who":"Candidate","en":"I think so, but only slowly. Young people in big cities already prefer to use ride-sharing apps or public transport, because owning a car is expensive. However, in smaller towns, cars will probably remain important, because buses run less often and distances are longer.","vi":"Tôi nghĩ vậy, nhưng chỉ từ từ thôi. Người trẻ ở các thành phố lớn đã thích dùng ứng dụng gọi xe chung hoặc giao thông công cộng hơn, vì sở hữu ô tô rất tốn kém. Tuy nhiên, ở các thị trấn nhỏ hơn, ô tô có lẽ vẫn quan trọng, vì xe buýt chạy ít hơn và khoảng cách xa hơn."}],"quiz":[{"q":"'rush hour' có nghĩa là gì?","o":["giờ đóng cửa","giờ cao điểm","giờ nghỉ trưa"],"a":1,"why":"Rush hour = giờ cao điểm, khi nhiều người cùng di chuyển."},{"q":"Cụm 'get stuck in traffic' có nghĩa là gì?","o":["bị kẹt xe","đi nhanh qua phố","tránh được tắc đường"],"a":0,"why":"Get stuck in traffic nghĩa là bị kẹt trong dòng xe, không di chuyển được."},{"q":"Từ 'encourage' trong bài mẫu có nghĩa là gì?","o":["cấm đoán","phạt","khuyến khích"],"a":2,"why":"Encourage = khuyến khích, động viên ai làm gì."}]},{"partNum":3,"topicStd":"Sở thích và giải trí","part":"Part 3","topic":"Reading Books - Đọc sách","band":"Band 5.5","lines":[{"who":"Examiner","en":"Do young people read less than they did in the past?","vi":"Người trẻ ngày nay có đọc ít hơn trước đây không?"},{"who":"Candidate","en":"Yes, I think they read fewer paper books, mainly because phones and short videos take up a lot of their free time. For example, many of my friends spend two hours a day on social media, but they rarely finish a whole book. On the other hand, they still read a lot of short texts online every day, just in a different form.","vi":"Có, tôi nghĩ họ đọc ít sách giấy hơn, chủ yếu vì điện thoại và video ngắn chiếm nhiều thời gian rảnh của họ. Ví dụ, nhiều bạn của tôi dành hai tiếng mỗi ngày trên mạng xã hội, nhưng hiếm khi đọc xong một cuốn sách. Mặt khác, họ vẫn đọc rất nhiều văn bản ngắn trên mạng mỗi ngày, chỉ là dưới một hình thức khác."},{"who":"Examiner","en":"What are the benefits of reading books?","vi":"Đọc sách có những lợi ích gì?"},{"who":"Candidate","en":"Reading helps people learn new words, understand other lives and think more deeply. A good novel, for instance, can teach you about history or human feelings in a way that a short video cannot. Reading also improves concentration, because you need to follow a long story from start to finish.","vi":"Đọc sách giúp mọi người học từ mới, hiểu về cuộc sống của người khác và suy nghĩ sâu sắc hơn. Một cuốn tiểu thuyết hay, ví dụ, có thể dạy bạn về lịch sử hoặc cảm xúc con người theo cách mà một video ngắn không làm được. Đọc sách cũng cải thiện sự tập trung, vì bạn cần theo dõi một câu chuyện dài từ đầu đến cuối."},{"who":"Examiner","en":"How can parents encourage children to read more?","vi":"Cha mẹ có thể khuyến khích trẻ đọc nhiều hơn bằng cách nào?"},{"who":"Candidate","en":"Parents should read with their children from a young age and let them choose books they enjoy, not only school books. If reading feels like fun, not homework, children are more likely to keep the habit. Libraries can help too, by organising storytelling events and reading clubs for young readers.","vi":"Cha mẹ nên đọc cùng con từ khi còn nhỏ và để trẻ chọn những cuốn sách chúng thích, không chỉ sách giáo khoa. Nếu việc đọc giống như niềm vui chứ không phải bài tập về nhà, trẻ có nhiều khả năng duy trì thói quen này hơn. Thư viện cũng có thể giúp, bằng cách tổ chức các buổi kể chuyện và câu lạc bộ đọc sách cho độc giả trẻ."}],"quiz":[{"q":"'take up a lot of time' có nghĩa là gì?","o":["tiết kiệm thời gian","rút ngắn thời gian","chiếm nhiều thời gian"],"a":2,"why":"Take up time nghĩa là chiếm, tốn thời gian."},{"q":"Từ 'concentration' có nghĩa là gì?","o":["sự tập trung","sự sáng tạo","sự kiên nhẫn"],"a":0,"why":"Concentration = sự tập trung, khả năng chú ý vào một việc."},{"q":"Cụm 'keep the habit' có nghĩa là gì?","o":["bắt đầu thói quen mới","duy trì thói quen","bỏ thói quen"],"a":1,"why":"Keep the habit nghĩa là giữ, duy trì một thói quen."}]},{"partNum":3,"topicStd":"Xã hội và văn hóa","part":"Part 3","topic":"Teamwork - Làm việc nhóm","band":"Band 5.5","lines":[{"who":"Examiner","en":"Why is teamwork important at school and at work?","vi":"Vì sao làm việc nhóm lại quan trọng ở trường học và nơi làm việc?"},{"who":"Candidate","en":"Teamwork is important because most big tasks are too difficult for one person alone. When people work together, they can share ideas and use each other's strengths. For example, in a school project, one student may be good at research, while another is good at presenting, so the final result is better than any single person could produce.","vi":"Làm việc nhóm quan trọng vì hầu hết các nhiệm vụ lớn đều quá khó đối với một người. Khi mọi người làm việc cùng nhau, họ có thể chia sẻ ý tưởng và tận dụng điểm mạnh của nhau. Ví dụ, trong một dự án ở trường, một học sinh có thể giỏi nghiên cứu, trong khi một bạn khác giỏi thuyết trình, nên kết quả cuối cùng tốt hơn bất kỳ cá nhân nào có thể làm được."},{"who":"Examiner","en":"What problems can happen when people work in a team?","vi":"Những vấn đề gì có thể xảy ra khi mọi người làm việc nhóm?"},{"who":"Candidate","en":"A common problem is that some members do very little work, while others do almost everything. This can cause arguments and stress. Another problem is poor communication: if the team does not agree on who does what, tasks may be repeated or forgotten. For instance, in my class, two groups once prepared the same slides because nobody had divided the work clearly.","vi":"Một vấn đề thường gặp là một số thành viên làm rất ít việc, trong khi những người khác làm gần như mọi thứ. Điều này có thể gây tranh cãi và căng thẳng. Một vấn đề khác là giao tiếp kém: nếu nhóm không thống nhất ai làm gì, nhiệm vụ có thể bị trùng lặp hoặc bị quên. Ví dụ, trong lớp tôi, hai nhóm từng chuẩn bị cùng một bộ slide vì không ai phân công rõ ràng."},{"who":"Examiner","en":"How can a team work well together?","vi":"Một nhóm có thể làm việc tốt cùng nhau bằng cách nào?"},{"who":"Candidate","en":"A good team needs a clear plan, fair division of work and regular meetings to check progress. The leader should listen to everyone, not just give orders. I also think members should respect different opinions, because a quiet member may have the best idea, even if they speak less than others.","vi":"Một nhóm tốt cần một kế hoạch rõ ràng, phân công công việc công bằng và các cuộc họp thường xuyên để kiểm tra tiến độ. Người lãnh đạo nên lắng nghe mọi người, không chỉ ra lệnh. Tôi cũng nghĩ các thành viên nên tôn trọng ý kiến khác nhau, vì một thành viên ít nói có thể có ý tưởng hay nhất, ngay cả khi họ nói ít hơn những người khác."}],"quiz":[{"q":"'use each other's strengths' có nghĩa là gì?","o":["tận dụng điểm mạnh của nhau","che giấu điểm yếu của nhau","thi xem ai mạnh hơn"],"a":0,"why":"Strengths = điểm mạnh; use each other's strengths = tận dụng điểm mạnh của nhau."},{"q":"Từ 'division of work' có nghĩa là gì?","o":["sự tranh cãi trong nhóm","sự nghỉ ngơi","sự phân công công việc"],"a":2,"why":"Division of work = sự phân chia, phân công công việc."},{"q":"Cụm 'give orders' có nghĩa là gì?","o":["đặt câu hỏi","ra lệnh","xin lời khuyên"],"a":1,"why":"Give orders nghĩa là ra lệnh, chỉ thị cho người khác làm gì."}]}]);
CONTENT.writing.push.apply(CONTENT.writing, [{"wtype":"Đoạn văn ngắn","type":"Đoạn văn ngắn","band":"Band 2.0","title":"Giới thiệu bản thân","prompt":"Write a short paragraph (5-7 sentences) about yourself. Say your name, your age, where you live, what you like, and what you want to do in the future.","dataDesc":"Tình huống: một học sinh tự giới thiệu bản thân bằng những câu đơn giản. Dàn ý: câu đầu nói tên, câu tiếp theo nói tuổi, sau đó nói nơi sống, sở thích, việc học ở trường, và cuối cùng nói ước mơ trong tương lai.","model":"My name is Minh. I am twelve years old. I live in a small town with my family. I like football and reading books. I go to school every day and I like English best. In the future, I want to be a teacher.","analysis":"Cấu trúc mở-thân-kết: mở bài là hai câu giới thiệu tên và tuổi; thân bài nói nơi sống, sở thích và việc học ở trường; kết bài là ước mơ trong tương lai. Điểm ngôn ngữ đáng học: (1) mẫu câu My name is... và I am ... years old để giới thiệu; (2) động từ like đi với danh từ (like football) ở thì hiện tại đơn; (3) mẫu câu want to be... để nói ước mơ nghề nghiệp.","phrases":[{"en":"My name is Minh.","vi":"Tên mình là Minh."},{"en":"I am twelve years old.","vi":"Mình mười hai tuổi."},{"en":"I live in a small town.","vi":"Mình sống ở một thị trấn nhỏ."},{"en":"I like football and reading books.","vi":"Mình thích bóng đá và đọc sách."},{"en":"I want to be a teacher.","vi":"Mình muốn trở thành giáo viên."}]},{"wtype":"Đoạn văn ngắn","type":"Đoạn văn ngắn","band":"Band 2.0","title":"Gia đình tôi","prompt":"Write a short paragraph (5-7 sentences) about your family. Say how many people there are, who they are, what they do, and how you feel about your family.","dataDesc":"Tình huống: một học sinh giới thiệu gia đình mình gồm bốn người. Dàn ý: câu đầu nói số người trong gia đình, câu tiếp theo kể tên các thành viên, sau đó nói nghề nghiệp của bố mẹ và sở thích của em gái, cuối cùng nói tình cảm với gia đình.","model":"My family has four people. They are my father, my mother, my little sister and me. My father is a driver and my mother is a cook. My sister is six years old and she likes dolls. We eat dinner together every evening. I love my family very much.","analysis":"Cấu trúc mở-thân-kết: mở bài nêu số người trong gia đình; thân bài giới thiệu từng thành viên, nghề nghiệp và sở thích; kết bài bày tỏ tình cảm. Điểm ngôn ngữ đáng học: (1) mẫu câu My family has... để nói gia đình có bao nhiêu người; (2) cách liệt kê thành viên bằng and; (3) thì hiện tại đơn để nói thói quen (We eat dinner together every evening).","phrases":[{"en":"My family has four people.","vi":"Gia đình mình có bốn người."},{"en":"My father is a driver.","vi":"Bố mình là tài xế."},{"en":"My sister is six years old.","vi":"Em gái mình sáu tuổi."},{"en":"We eat dinner together every evening.","vi":"Chúng mình ăn tối cùng nhau mỗi buổi tối."},{"en":"I love my family very much.","vi":"Mình yêu gia đình mình rất nhiều."}]},{"wtype":"Đoạn văn ngắn","type":"Đoạn văn ngắn","band":"Band 2.5","title":"Thói quen mỗi ngày","prompt":"Write a short paragraph (5-7 sentences) about your daily routine. Say what time you get up, what you do in the morning, in the afternoon and in the evening, and what time you go to bed.","dataDesc":"Tình huống: một học sinh kể thói quen một ngày bình thường của mình theo trình tự thời gian. Dàn ý: buổi sáng thức dậy, vệ sinh cá nhân, ăn sáng và đi học; buổi chiều làm bài tập và chơi thể thao; buổi tối đọc sách rồi đi ngủ.","model":"I get up at six o'clock every morning. First, I brush my teeth and wash my face. Then I eat breakfast with my mother. I go to school by bike at seven o'clock. In the afternoon, I do my homework and play football with my friends. In the evening, I read a book for thirty minutes. I go to bed at half past nine.","analysis":"Cấu trúc mở-thân-kết: mở bài là giờ thức dậy; thân bài kể các việc theo trình tự sáng - chiều - tối; kết bài là giờ đi ngủ, khép lại một ngày. Điểm ngôn ngữ đáng học: (1) các từ nối trình tự First, Then; (2) cách nói giờ: at six o'clock, at half past nine; (3) cụm chỉ phương tiện đi lại go to school by bike và cụm chỉ thời gian in the afternoon, in the evening.","phrases":[{"en":"I get up at six o'clock.","vi":"Mình thức dậy lúc sáu giờ."},{"en":"First, I brush my teeth.","vi":"Đầu tiên, mình đánh răng."},{"en":"I go to school by bike.","vi":"Mình đi học bằng xe đạp."},{"en":"In the afternoon, I do my homework.","vi":"Vào buổi chiều, mình làm bài tập."},{"en":"I go to bed at half past nine.","vi":"Mình đi ngủ lúc chín giờ rưỡi."}]},{"wtype":"Đoạn văn ngắn","type":"Đoạn văn ngắn","band":"Band 2.5","title":"Căn phòng yêu thích","prompt":"Write a short paragraph (5-7 sentences) about your favourite room. Say which room it is, what it looks like, what is in it, what you do there, and why you like it.","dataDesc":"Tình huống: một học sinh tả căn phòng mình thích nhất là phòng ngủ. Dàn ý: câu đầu nêu tên căn phòng, sau đó tả phòng nhỏ nhưng sạch và sáng, kể đồ đạc trong phòng, nói việc mình làm ở đó, cuối cùng giải thích vì sao thích căn phòng này.","model":"My favourite room is my bedroom. It is small but clean and bright. There is a bed, a desk and a bookshelf in my room. I put my books and toys on the shelf. I do my homework at my desk every day. I like my room because it is quiet and I can read there.","analysis":"Cấu trúc mở-thân-kết: mở bài nêu căn phòng yêu thích; thân bài tả hình dáng, đồ đạc và việc làm trong phòng; kết bài giải thích lý do yêu thích. Điểm ngôn ngữ đáng học: (1) mẫu câu There is... để kể đồ vật trong phòng; (2) cặp tính từ đối lập small but clean; (3) mệnh đề lý do với because (I like my room because it is quiet).","phrases":[{"en":"My favourite room is my bedroom.","vi":"Căn phòng yêu thích của mình là phòng ngủ."},{"en":"It is small but clean and bright.","vi":"Nó nhỏ nhưng sạch sẽ và sáng sủa."},{"en":"There is a bed, a desk and a bookshelf.","vi":"Có một chiếc giường, một cái bàn và một giá sách."},{"en":"I do my homework at my desk.","vi":"Mình làm bài tập ở bàn học."},{"en":"I like my room because it is quiet.","vi":"Mình thích phòng mình vì nó yên tĩnh."}]},{"wtype":"Thư và email","type":"Thư cảm ơn","band":"Band 3.0","title":"Thư cảm ơn bạn đã tặng quà","prompt":"Your friend gave you a birthday present. Write a letter to your friend (100-130 words). In your letter: thank your friend for the present, say what you like about it, say how you will use it, and invite your friend to visit you soon.","dataDesc":"Tình huống: bạn Hoa nhận được một cuốn sổ tay màu xanh làm quà sinh nhật từ bạn Lan và viết thư cảm ơn. Dàn ý: mở đầu cảm ơn chung; đoạn giữa nói rõ món quà là gì, thích điểm nào và sẽ dùng ra sao; đoạn cuối cảm ơn lần nữa và mời bạn đến nhà chơi vào chiều Chủ nhật.","model":"Dear Lan,\n\nThank you so much for your lovely birthday gift. I opened the box yesterday, and I was very happy to see a beautiful blue notebook inside.\n\nI really like it because the cover is soft and the paper is very good for writing. I will use it for my English lessons and write new words in it every day. You know me so well, and I am very lucky to have a friend like you.\n\nThank you again for thinking of me on my birthday. I hope we can meet soon and have a nice chat together. Please come to my house this Sunday afternoon for some cake and tea.\n\nBest wishes,\nHoa","analysis":"Cấu trúc mở-thân-kết: mở bài cảm ơn và nói đã nhận quà; thân bài tả món quà, điểm thích nhất và cách sẽ dùng; kết bài cảm ơn lần nữa và đưa lời mời cụ thể. Điểm ngôn ngữ đáng học: (1) mẫu mở thư cảm ơn Thank you so much for...; (2) thì quá khứ đơn để kể việc đã nhận quà (I opened the box yesterday); (3) thì tương lai đơn will để nói dự định dùng quà (I will use it for my English lessons).","phrases":[{"en":"Thank you so much for your lovely birthday gift.","vi":"Cảm ơn bạn rất nhiều vì món quà sinh nhật đáng yêu."},{"en":"I was very happy to see...","vi":"Mình đã rất vui khi thấy..."},{"en":"I really like it because...","vi":"Mình thực sự thích nó vì..."},{"en":"I will use it for my English lessons.","vi":"Mình sẽ dùng nó cho các bài học tiếng Anh."},{"en":"Please come to my house this Sunday afternoon.","vi":"Bạn hãy đến nhà mình vào chiều Chủ nhật này nhé."}]},{"wtype":"Thư và email","type":"Thư mời","band":"Band 3.0","title":"Thư mời bạn dự sinh nhật","prompt":"You are going to have a birthday party. Write a letter to your friend (100-130 words). In your letter: invite your friend to the party, say when and where the party will be, say what you will do at the party, and ask your friend to reply soon.","dataDesc":"Tình huống: bạn Nam mời bạn Minh dự tiệc sinh nhật tại nhà vào chiều thứ Bảy. Dàn ý: mở đầu hỏi thăm và đưa lời mời; đoạn giữa nói rõ thời gian, địa điểm, các hoạt động và đồ ăn trong tiệc; đoạn cuối nhờ bạn trả lời sớm để chuẩn bị đủ đồ.","model":"Dear Minh,\n\nHow are you? I hope you are well. I am writing to invite you to my birthday party next Saturday afternoon, and I really hope you can come.\n\nThe party will start at three o'clock at my house. We will eat birthday cake, drink fruit juice and play fun games together. My mother will cook some noodles and my father will take photos of us. It will be a happy day, and I want to share it with you.\n\nPlease tell me before Thursday if you can come, so I can prepare enough food for everyone. You can bring your brother if you want. I am looking forward to seeing you soon.\n\nBest wishes,\nNam","analysis":"Cấu trúc mở-thân-kết: mở bài hỏi thăm và đưa lời mời; thân bài nói thời gian, địa điểm và hoạt động trong tiệc; kết bài nhờ bạn trả lời sớm. Điểm ngôn ngữ đáng học: (1) mẫu mở thư mời I am writing to invite you to...; (2) thì tương lai đơn will để nói kế hoạch trong tiệc (We will eat birthday cake); (3) mẫu câu nhờ trả lời Please tell me before Thursday if you can come.","phrases":[{"en":"I am writing to invite you to my birthday party.","vi":"Mình viết thư này để mời bạn dự tiệc sinh nhật của mình."},{"en":"I really hope you can come.","vi":"Mình thực sự hy vọng bạn có thể đến."},{"en":"The party will start at three o'clock.","vi":"Bữa tiệc sẽ bắt đầu lúc ba giờ."},{"en":"We will play fun games together.","vi":"Chúng mình sẽ cùng chơi các trò chơi vui nhộn."},{"en":"I am looking forward to seeing you soon.","vi":"Mình rất mong sớm gặp bạn."}]},{"wtype":"Thư và email","type":"Thư xin lỗi","band":"Band 3.5","title":"Thư xin lỗi vì đến muộn","prompt":"You arrived late for your friend's party last weekend. Write a letter to your friend (100-130 words). In your letter: say sorry for being late, explain why you were late, say how you felt, and suggest meeting again to make it up to your friend.","dataDesc":"Tình huống: bạn Linh đến muộn 40 phút trong tiệc của bạn Mai vì xe buýt bị kẹt xe. Dàn ý: mở đầu xin lỗi thẳng thắn; đoạn giữa giải thích lý do đến muộn và cảm xúc lúc đó; đoạn cuối đề nghị gặp lại vào cuối tuần để bù đắp.","model":"Dear Mai,\n\nI am writing to say sorry for arriving late for your party last Sunday. I know you waited for me, and I feel really sorry about it.\n\nMy bus stopped for a long time because there was a traffic jam near the bridge, so I arrived forty minutes late. When I walked in, everyone was already eating, and I felt very embarrassed. I should have left home earlier, and I will be more careful next time.\n\nPlease let me make it up to you. Are you free this Saturday afternoon? I would like to invite you for a drink at the small cafe near your house. I hope you can forgive me.\n\nBest wishes,\nLinh","analysis":"Cấu trúc mở-thân-kết: mở bài xin lỗi trực tiếp; thân bài giải thích lý do bằng because và so, kèm cảm xúc và bài học rút ra; kết bài đề nghị gặp lại để bù đắp. Điểm ngôn ngữ đáng học: (1) mẫu xin lỗi I am writing to say sorry for...; (2) liên từ because và so để nối lý do và kết quả; (3) mẫu câu đề nghị bù đắp Please let me make it up to you và câu hỏi mời Are you free...?","phrases":[{"en":"I am writing to say sorry for arriving late.","vi":"Mình viết thư này để xin lỗi vì đã đến muộn."},{"en":"There was a traffic jam near the bridge.","vi":"Có một vụ kẹt xe gần cây cầu."},{"en":"I felt very embarrassed.","vi":"Mình cảm thấy rất xấu hổ."},{"en":"I should have left home earlier.","vi":"Lẽ ra mình nên rời khỏi nhà sớm hơn."},{"en":"Please let me make it up to you.","vi":"Hãy để mình bù đắp cho bạn nhé."}]},{"wtype":"Thư và email","type":"Thư yêu cầu","band":"Band 3.5","title":"Thư yêu cầu đổi lịch học","prompt":"You want to change the time of your English class. Write a letter to your teacher (100-130 words). In your letter: explain why you need to change the class time, say which new time you would like, ask if it is possible, and thank your teacher.","dataDesc":"Tình huống: học sinh An muốn đổi lớp tiếng Anh từ chiều thứ Ba sang chiều thứ Năm vì trùng lịch học thêm môn Toán. Dàn ý: mở đầu nêu yêu cầu một cách lịch sự; đoạn giữa giải thích lý do và đề xuất thời gian mới cụ thể; đoạn cuối hỏi ý kiến giáo viên và cảm ơn.","model":"Dear Ms Thu,\n\nI am writing to ask if I can change the time of my English class. At the moment, my class is on Tuesday afternoon, but I have a problem with this time.\n\nMy maths class has moved to Tuesday afternoon, so I cannot attend both classes. Would it be possible to move my English class to Thursday afternoon instead? I am free from two o'clock to four o'clock on Thursday, and that time is good for me.\n\nI really enjoy your lessons, and I do not want to miss any of them. Please let me know if the new time is possible. Thank you very much for your help.\n\nYours sincerely,\nAn","analysis":"Cấu trúc mở-thân-kết: mở bài nêu yêu cầu lịch sự; thân bài giải thích lý do trùng lịch và đề xuất thời gian mới cụ thể; kết bài bày tỏ mong muốn tiếp tục học và cảm ơn. Điểm ngôn ngữ đáng học: (1) mẫu yêu cầu lịch sự I am writing to ask if I can... và Would it be possible to...?; (2) liên từ so để nối lý do và hệ quả; (3) cách kết thư trang trọng Yours sincerely khi viết cho giáo viên.","phrases":[{"en":"I am writing to ask if I can change...","vi":"Em viết thư này để hỏi xem em có thể đổi... không."},{"en":"I have a problem with this time.","vi":"Em gặp khó khăn với thời gian này."},{"en":"Would it be possible to move... to Thursday afternoon?","vi":"Liệu có thể chuyển... sang chiều thứ Năm không?"},{"en":"I am free from two o'clock to four o'clock.","vi":"Em rảnh từ hai giờ đến bốn giờ."},{"en":"Please let me know if the new time is possible.","vi":"Cô làm ơn cho em biết thời gian mới có được không."}]},{"wtype":"Đoạn văn ngắn","type":"Đoạn văn ngắn","band":"Band 4.0","title":"Thành phố tôi sống","prompt":"Write a short paragraph (5-7 sentences) about the town or city where you live. Describe what it looks like, what people can do there, and whether you like living there.","dataDesc":"Tình huống: một học sinh tả thị trấn nhỏ nơi mình sống, với chợ, công viên và dòng sông. Dàn ý: mở bài giới thiệu thị trấn và vị trí chung; thân bài tả cảnh quan, chợ và hoạt động của người dân; kết bài khẳng định thích sống ở đó vì yên bình và thân thiện.","model":"I live in a small town called Green Valley, which is about one hour from the nearest big city.\n\nThe town has a quiet market, a green park and a small river. In the morning, people buy fresh vegetables at the market, and in the afternoon, children play football in the park. At weekends, many families walk along the river and enjoy the fresh air.\n\nI like living here because life is peaceful and the people are friendly. Green Valley may be small, but it is a wonderful home for me.","analysis":"Cấu trúc mở-thân-kết rõ ràng: mở bài giới thiệu tên và vị trí thị trấn; thân bài tả chợ, công viên, sông và hoạt động của người dân theo thời gian trong ngày; kết bài nêu lý do yêu thích và đánh giá chung. Điểm ngôn ngữ đáng học: (1) mệnh đề quan hệ which để bổ sung thông tin về thị trấn; (2) cặp trạng ngữ thời gian In the morning, At weekends giúp bài có trình tự; (3) mẫu câu đánh giá ... may be small, but it is...","phrases":[{"en":"I live in a small town called Green Valley.","vi":"Mình sống ở một thị trấn nhỏ tên là Green Valley."},{"en":"In the morning, people buy fresh vegetables at the market.","vi":"Vào buổi sáng, mọi người mua rau tươi ở chợ."},{"en":"At weekends, many families walk along the river.","vi":"Vào cuối tuần, nhiều gia đình đi dạo dọc bờ sông."},{"en":"Life is peaceful and the people are friendly.","vi":"Cuộc sống yên bình và mọi người thân thiện."},{"en":"It is a wonderful home for me.","vi":"Nó là một mái nhà tuyệt vời đối với mình."}]},{"wtype":"Đoạn văn ngắn","type":"Đoạn văn ngắn","band":"Band 4.0","title":"Một ngày đáng nhớ","prompt":"Write a short paragraph (5-7 sentences) about a memorable day in your life. Say when it was, what happened, who was with you, and why you will never forget it.","dataDesc":"Tình huống: một học sinh kể ngày đi cắm trại cùng lớp và lần đầu tiên tự nấu ăn ngoài trời. Dàn ý: mở bài nêu thời điểm và dịp; thân bài kể hành trình, hoạt động và sự cố nhỏ vui vẻ; kết bài giải thích vì sao ngày đó đáng nhớ.","model":"Last summer, my class went on a camping trip to a hill near our town, and it was one of the best days of my life.\n\nWe left school early in the morning and reached the hill after two hours on the bus. There, we put up tents, cooked rice over a small fire and played games together. Although it started to rain in the afternoon, we sang songs inside the tents and laughed a lot.\n\nI will never forget that day because I learned to work in a team and I felt very close to my classmates.","analysis":"Cấu trúc mở-thân-kết rõ ràng: mở bài nêu thời điểm, dịp và đánh giá chung; thân bài kể hành trình theo trình tự và xử lý tình huống trời mưa; kết bài nêu bài học và cảm xúc. Điểm ngôn ngữ đáng học: (1) thì quá khứ đơn để kể chuyện (went, left, reached); (2) liên từ Although để nối ý đối lập (trời mưa nhưng vẫn vui); (3) mẫu câu I will never forget that day because... để kết bài có cảm xúc.","phrases":[{"en":"Last summer, my class went on a camping trip.","vi":"Mùa hè năm ngoái, lớp mình đã đi cắm trại."},{"en":"We reached the hill after two hours on the bus.","vi":"Chúng mình đến ngọn đồi sau hai giờ đi xe buýt."},{"en":"We put up tents and cooked rice over a small fire.","vi":"Chúng mình dựng lều và nấu cơm trên một đống lửa nhỏ."},{"en":"Although it started to rain, we sang songs.","vi":"Mặc dù trời bắt đầu mưa, chúng mình vẫn hát."},{"en":"I will never forget that day.","vi":"Mình sẽ không bao giờ quên ngày hôm đó."}]},{"wtype":"Đoạn văn ngắn","type":"Đoạn văn ngắn","band":"Band 4.5","title":"Lợi ích của việc đọc sách","prompt":"Write a short paragraph (5-7 sentences) about the benefits of reading books. Give two or three benefits and explain each one briefly with an example.","dataDesc":"Tình huống: một học sinh viết đoạn văn thuyết phục bạn bè đọc sách nhiều hơn. Dàn ý: mở bài nêu quan điểm chung; thân bài đưa ba lợi ích là mở rộng từ vựng, hiểu biết về thế giới và thư giãn, mỗi lợi ích kèm một ví dụ ngắn; kết bài khuyên mọi người dành thời gian đọc mỗi ngày.","model":"Reading books brings many benefits to students, and it is one of the best habits we can build.\n\nFirst, reading helps us learn new words, because we see them again and again in real stories. Second, books open the door to the world: a book about the sea, for example, can teach us about fish, ships and sailors. Finally, reading is also a good way to relax after a long day at school.\n\nFor these reasons, I think everyone should read for at least twenty minutes every day.","analysis":"Cấu trúc mở-thân-kết rõ ràng: mở bài nêu quan điểm; thân bài liệt kê ba lợi ích theo thứ tự First, Second, Finally, mỗi lợi ích có giải thích hoặc ví dụ; kết bài đưa lời khuyên. Điểm ngôn ngữ đáng học: (1) từ nối liệt kê First, Second, Finally; (2) mệnh đề lý do với because; (3) cụm kết luận For these reasons để tổng kết các ý trước đó.","phrases":[{"en":"Reading books brings many benefits.","vi":"Đọc sách mang lại nhiều lợi ích."},{"en":"It is one of the best habits we can build.","vi":"Đó là một trong những thói quen tốt nhất chúng ta có thể xây dựng."},{"en":"Reading helps us learn new words.","vi":"Đọc sách giúp chúng ta học từ mới."},{"en":"Books open the door to the world.","vi":"Sách mở ra cánh cửa đến với thế giới."},{"en":"For these reasons, I think everyone should...","vi":"Vì những lý do này, mình nghĩ mọi người nên..."}]},{"wtype":"Đoạn văn ngắn","type":"Đoạn văn ngắn","band":"Band 4.5","title":"Vì sao nên tập thể dục","prompt":"Write a short paragraph (5-7 sentences) explaining why people should do exercise. Give two or three reasons and explain each one briefly.","dataDesc":"Tình huống: một học sinh viết đoạn văn giải thích vì sao mọi người nên tập thể dục đều đặn. Dàn ý: mở bài nêu quan điểm chung; thân bài đưa ba lý do là khỏe mạnh hơn, ngủ ngon hơn và vui vẻ hơn, mỗi lý do có giải thích ngắn; kết bài khuyên chọn một môn thể thao phù hợp và tập mỗi ngày.","model":"Doing exercise every day is very important for our health, and everyone should try to stay active.\n\nFirst, exercise makes our body stronger, so we get sick less often. Second, people who move a lot usually sleep better at night, because their body feels tired in a healthy way. Finally, exercise can also make us happier, since playing a sport with friends is great fun.\n\nIn short, we should choose a sport we enjoy and practise it for a short time every day.","analysis":"Cấu trúc mở-thân-kết rõ ràng: mở bài nêu quan điểm; thân bài liệt kê ba lý do theo thứ tự First, Second, Finally, mỗi lý do có giải thích bằng so, because hoặc since; kết bài đưa lời khuyên ngắn gọn. Điểm ngôn ngữ đáng học: (1) từ nối liệt kê và cụm kết luận In short; (2) ba cách nói lý do: so, because, since; (3) mẫu câu khuyên should choose... và practise it every day.","phrases":[{"en":"Doing exercise every day is very important.","vi":"Tập thể dục mỗi ngày rất quan trọng."},{"en":"Exercise makes our body stronger.","vi":"Tập thể dục làm cơ thể chúng ta khỏe hơn."},{"en":"We get sick less often.","vi":"Chúng ta ít bị ốm hơn."},{"en":"People who move a lot usually sleep better.","vi":"Những người vận động nhiều thường ngủ ngon hơn."},{"en":"In short, we should choose a sport we enjoy.","vi":"Tóm lại, chúng ta nên chọn một môn thể thao mình yêu thích."}]},{"wtype":"Biểu đồ đường","type":"Task 1","band":"Band 5.0","title":"Biểu đồ đường: khách thăm công viên Green Valley","prompt":"The line graph below shows the number of people who visited Green Valley Park from 2019 to 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.","dataDesc":"Biểu đồ đường, số liệu tự bịa về công viên của thị trấn tưởng tượng Green Valley, đơn vị lượt khách. Năm 2019: 8.000 lượt. Năm 2020: giảm mạnh xuống 5.000 lượt, mức thấp nhất của cả giai đoạn. Năm 2021: tăng lên 6.500 lượt, tăng 1.500 so với năm trước. Năm 2022: tăng mạnh lên 11.000 lượt. Năm 2023: đạt 14.500 lượt, mức cao nhất, gần gấp ba lần năm 2020 và cao hơn năm 2019 là 6.500 lượt. Xu hướng chính: giảm mạnh năm 2020 rồi tăng liên tục trong ba năm sau.","model":"The line graph shows the number of people who visited Green Valley Park, in the imaginary town of Green Valley, from 2019 to 2023.\n\nOverall, visitor numbers fell sharply in 2020, but then rose every year and reached their highest point in 2023.\n\nIn 2019, the park welcomed 8,000 visitors. In the following year, this figure dropped sharply to 5,000, the lowest point in the whole period.\n\nFrom 2021 onwards, however, the trend changed completely. Visitor numbers climbed to 6,500 in 2021, an increase of 1,500 compared with the previous year. The number then rose strongly to 11,000 in 2022, and the growth continued in 2023, when the park recorded 14,500 visitors. This final figure was almost three times the number in 2020 and 6,500 higher than the figure in 2019, showing a clear recovery after the fall in 2020 and a steady rise in the last three years of the period.","analysis":"Cấu trúc mở-thân-kết chuẩn Task 1: đoạn 1 paraphrase đề bài; đoạn 2 overview nêu xu hướng chung cùng điểm cao nhất và thấp nhất; đoạn 3 mô tả hai năm đầu có xu hướng giảm; đoạn 4 mô tả giai đoạn tăng với số chênh lệch. Điểm ngôn ngữ đáng học: (1) cụm overview Overall và the trend changed để đánh dấu điểm đảo chiều; (2) động từ tả xu hướng dropped sharply, climbed, rose strongly; (3) cách so sánh kèm số chênh lệch an increase of 1,500 và 6,500 higher than thay vì chỉ lặp lại số gốc.","phrases":[{"en":"The line graph shows the number of people who visited...","vi":"Biểu đồ đường cho thấy số người đã thăm..."},{"en":"Visitor numbers fell sharply.","vi":"Số lượt khách đã giảm mạnh."},{"en":"The lowest point in the whole period","vi":"Mức thấp nhất của cả giai đoạn"},{"en":"An increase of 1,500 compared with the previous year","vi":"Mức tăng 1.500 lượt so với năm trước"},{"en":"Almost three times the number in 2020","vi":"Gần gấp ba lần con số năm 2020"}]},{"wtype":"Biểu đồ cột","type":"Task 1","band":"Band 5.0","title":"Biểu đồ cột: cây xanh trồng mới ở Lake Town","prompt":"The bar chart below shows the number of new trees planted in Lake Town from 2019 to 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.","dataDesc":"Biểu đồ cột, số liệu tự bịa về thị trấn tưởng tượng Lake Town, đơn vị cây trồng mới mỗi năm. Năm 2019: 120 cây. Năm 2020: tăng lên 180 cây. Năm 2021: giảm xuống 150 cây. Năm 2022: tăng mạnh lên 240 cây. Năm 2023: đạt 300 cây, mức cao nhất, gấp hai lần năm 2021 và cao hơn năm 2019 là 180 cây. Xu hướng chính: tăng chung trong cả giai đoạn, chỉ giảm nhẹ vào năm 2021.","model":"The bar chart shows the number of new trees planted in the imaginary town of Lake Town from 2019 to 2023.\n\nOverall, the number of trees planted rose over the whole period, with only one small fall in 2021, and it reached its highest point in 2023.\n\nIn 2019, people in Lake Town planted 120 new trees. In the following year, this figure rose to 180, an increase of 60 trees. In 2021, however, the number fell slightly to 150 trees.\n\nFrom 2022 onwards, planting grew quickly again. The number jumped to 240 trees in 2022 and then reached 300 trees in 2023, the highest figure of the period. This final figure was twice the number in 2021 and 180 trees higher than the figure in 2019, showing that the town planted more and more trees over time, apart from the small drop in 2021. Together, the last two years accounted for 540 trees, more than half of the five-year total.","analysis":"Cấu trúc mở-thân-kết chuẩn Task 1: đoạn 1 paraphrase đề bài; đoạn 2 overview nêu xu hướng tăng chung, điểm giảm duy nhất và điểm cao nhất; đoạn 3 mô tả ba năm đầu; đoạn 4 mô tả hai năm cuối với so sánh. Điểm ngôn ngữ đáng học: (1) cụm overview với only one small fall để nêu ngoại lệ; (2) động từ tả xu hướng rose, fell slightly, jumped; (3) cách so sánh gấp bội twice the number in 2021 và số chênh lệch 180 trees higher than.","phrases":[{"en":"The bar chart shows the number of new trees planted.","vi":"Biểu đồ cột cho thấy số cây mới được trồng."},{"en":"The number fell slightly to 150 trees.","vi":"Con số giảm nhẹ xuống 150 cây."},{"en":"An increase of 60 trees","vi":"Mức tăng 60 cây"},{"en":"The number jumped to 240 trees.","vi":"Con số tăng vọt lên 240 cây."},{"en":"Twice the number in 2021","vi":"Gấp đôi con số năm 2021"}]},{"wtype":"Ý kiến","type":"Task 2","band":"Band 5.5","title":"Ý kiến: trẻ em nên học ngoại ngữ từ tiểu học","prompt":"Some people think that children should start learning a foreign language in primary school. Others think it is better to start later. To what extent do you agree or disagree? Give reasons for your answer and include any relevant examples from your own knowledge or experience.","dataDesc":"Dàn ý gợi ý: Mở bài - paraphrase đề bài + lập trường đồng ý nên học sớm. Thân 1: trẻ nhỏ tiếp thu âm và từ mới dễ hơn, ít ngại nói sai. Thân 2: học sớm giúp xây nền tảng vững, lên cấp cao học dễ hơn; phản bác lo ngại quá tải bằng cách học qua trò chơi, bài hát. Kết bài - nhắc lại lập trường: học sớm có lợi nếu cách học nhẹ nhàng, vui vẻ.","model":"Learning a foreign language at a young age is a topic that many parents and teachers discuss. In my opinion, children should start learning a foreign language in primary school, because the benefits of an early start are clear.\n\nFirst, young children learn sounds and new words more easily than older students. They are not afraid of making mistakes, so they speak more and remember words through songs and games. For example, a six-year-old child can learn the names of colours and animals in English very quickly, simply by singing and playing with friends. They also learn to enjoy other cultures early, which makes them more open and curious when they grow up.\n\nSecond, an early start gives children a strong base for later learning. If they already know basic words and simple sentences, they will find secondary school lessons much easier. Some people worry that young children will feel overloaded, but this problem can be avoided if lessons are short, fun and full of pictures and stories rather than long grammar rules. Teachers can also use short lessons of twenty minutes, so children do not feel tired or bored.\n\nIn conclusion, although starting later is also possible, I believe that learning a foreign language in primary school is better. With playful lessons, children can enjoy the language and build a solid foundation for the future. Starting early does not mean pushing children hard; it means letting them play with a new language while their minds are most open.","analysis":"Cấu trúc mở-thân-kết chuẩn Task 2 dạng ý kiến: mở bài paraphrase đề bài và nêu lập trường rõ ràng; thân bài có hai lý do, mỗi lý do có giải thích và ví dụ, kèm một ý phản bác được hóa giải; kết bài nhắc lại lập trường. Điểm ngôn ngữ đáng học: (1) mẫu nêu ý kiến In my opinion và I believe that; (2) từ nối liệt kê First, Second; (3) cách đưa ví dụ For example và cách phản bác Some people worry that... but this problem can be avoided if...","phrases":[{"en":"In my opinion, children should start...","vi":"Theo ý kiến của mình, trẻ em nên bắt đầu..."},{"en":"They are not afraid of making mistakes.","vi":"Các em không sợ mắc lỗi."},{"en":"An early start gives children a strong base.","vi":"Bắt đầu sớm giúp trẻ có nền tảng vững chắc."},{"en":"Some people worry that...","vi":"Một số người lo rằng..."},{"en":"Build a solid foundation for the future","vi":"Xây dựng nền tảng vững chắc cho tương lai"}]},{"wtype":"Ưu và nhược điểm","type":"Task 2","band":"Band 5.5","title":"Ưu và nhược điểm: mua sắm trực tuyến","prompt":"Many people now buy clothes and food online instead of going to shops. Do the advantages of this development outweigh the disadvantages? Give reasons for your answer and include any relevant examples from your own knowledge or experience.","dataDesc":"Dàn ý gợi ý: Mở bài - paraphrase + lập trường (lợi thế nhỉnh hơn). Thân 1 (lợi thế): tiện lợi, tiết kiệm thời gian đi lại, nhiều lựa chọn và dễ so sánh giá. Thân 2 (bất lợi): không thử được đồ, chất lượng có thể khác ảnh, chờ giao hàng; nhưng có thể khắc phục bằng chính sách đổi trả và đọc đánh giá. Kết bài - nhắc lập trường: mua sắm trực tuyến tiện hơn nếu người mua cẩn thận.","model":"Buying clothes and food online has become very popular in recent years. Although this trend has some disadvantages, I believe its advantages are greater, especially when shoppers are careful.\n\nThe main advantage of online shopping is convenience. People can order food or clothes from home at any time, without travelling to a shop or waiting in a queue. They can also compare prices from many sellers in a few minutes and choose the cheapest option. For busy workers and parents, this saves a lot of time every week. Online shops are also open day and night, so people can buy a birthday gift at midnight or order food when they are too busy to cook.\n\nHowever, there are also real disadvantages. Shoppers cannot try on clothes before buying them, so the size or colour may not be suitable. In addition, the quality of a product sometimes looks different from its photos, and customers must wait for delivery. A wrong size can also waste time, because the buyer must wait for a replacement to arrive. That said, these problems can be reduced: shoppers can read reviews from other buyers, and many shops allow customers to return products for free.\n\nIn conclusion, although online shopping has some risks, its convenience, wide choice and time savings are more important. For this reason, I think the advantages outweigh the disadvantages. As long as buyers check sizes, read reviews and choose shops with clear return rules, the benefits are clear.","analysis":"Cấu trúc mở-thân-kết chuẩn Task 2 dạng ưu-nhược điểm có outweigh: mở bài nêu lập trường bên thắng; thân 1 nêu lợi thế với giải thích và ví dụ; thân 2 thừa nhận bất lợi thật rồi hóa giải một phần bằng giải pháp; kết bài nhắc lại lập trường. Điểm ngôn ngữ đáng học: (1) mẫu nêu lập trường I believe its advantages are greater; (2) cụm chuyển ý However và That said; (3) mẫu kết luận For this reason, I think the advantages outweigh the disadvantages.","phrases":[{"en":"Do the advantages outweigh the disadvantages?","vi":"Lợi thế có vượt trội hơn bất lợi không?"},{"en":"The main advantage is convenience.","vi":"Lợi thế chính là sự tiện lợi."},{"en":"Without travelling to a shop or waiting in a queue","vi":"Không cần đi đến cửa hàng hay xếp hàng chờ đợi"},{"en":"Shoppers cannot try on clothes before buying them.","vi":"Người mua không thể thử quần áo trước khi mua."},{"en":"These problems can be reduced.","vi":"Những vấn đề này có thể được giảm bớt."}]},{"wtype":"Nguyên nhân và giải pháp","type":"Task 2","band":"Band 6.0","title":"Nguyên nhân và giải pháp: người trẻ rời quê lên thành phố","prompt":"In many small towns, a large number of young people move to big cities and do not return. What are the causes of this problem, and what solutions can you suggest? Give reasons for your answer and include any relevant examples from your own knowledge or experience.","dataDesc":"Dàn ý gợi ý: Mở bài - paraphrase hiện tượng người trẻ rời thị trấn nhỏ. Thân 1 (nguyên nhân): ít việc làm tốt và ít trường đại học, đời sống giải trí hạn chế, muốn trải nghiệm mới. Thân 2 (giải pháp): tạo việc làm địa phương và hỗ trợ khởi nghiệp, cải thiện trường học, bệnh viện và giao thông, quảng bá du lịch và sản phẩm địa phương. Kết bài - tóm tắt: cần cả việc làm và chất lượng sống thì người trẻ mới ở lại.","model":"In many small towns, young people leave for big cities after finishing school, and most of them never come back. This trend causes serious problems for small towns, and it is important to understand its causes and find practical solutions.\n\nThere are several reasons for this movement. The main reason is the lack of good jobs: small towns often have few factories and offices, so young people cannot find work that matches their skills. In addition, there are fewer universities, hospitals and entertainment activities, which makes city life seem more attractive. Many young people also want new experiences and the chance to meet people from different places. In some towns, even the local cinema or sports centre has closed, so there is little for young people to do at weekends.\n\nTo solve this problem, local governments should create more jobs by supporting small businesses and encouraging new companies to open in small towns. At the same time, schools, hospitals and public transport should be improved, so that daily life becomes more comfortable. Towns can also develop local tourism and sell their special products online, which brings money and creates work for young people. Better internet and transport links can also help, because young people can work online or travel to a nearby city without moving away for good.\n\nIn conclusion, young people leave small towns mainly because of limited jobs and services, but better job opportunities and a higher quality of life can encourage them to stay or return.","analysis":"Cấu trúc mở-thân-kết chuẩn Task 2 dạng nguyên nhân-giải pháp: mở bài paraphrase hiện tượng và nêu mục đích bài; thân 1 liệt kê nguyên nhân theo mức độ (main reason, In addition, also); thân 2 đưa giải pháp tương ứng từng nhóm nguyên nhân; kết bài tóm tắt cả hai phần. Điểm ngôn ngữ đáng học: (1) mẫu mở bài dạng causes-solutions it is important to understand its causes and find practical solutions; (2) cụm nêu nguyên nhân chính The main reason is the lack of...; (3) mẫu đề xuất giải pháp local governments should... và To solve this problem.","phrases":[{"en":"Young people leave for big cities after finishing school.","vi":"Người trẻ rời quê lên thành phố lớn sau khi học xong."},{"en":"The main reason is the lack of good jobs.","vi":"Lý do chính là thiếu việc làm tốt."},{"en":"Which makes city life seem more attractive","vi":"Điều này khiến cuộc sống thành phố có vẻ hấp dẫn hơn"},{"en":"To solve this problem, local governments should...","vi":"Để giải quyết vấn đề này, chính quyền địa phương nên..."},{"en":"Encourage them to stay or return","vi":"Khuyến khích họ ở lại hoặc quay về"}]},{"wtype":"Thảo luận hai chiều","type":"Task 2","band":"Band 6.0","title":"Thảo luận hai chiều: bằng đại học hay kinh nghiệm làm việc","prompt":"Some people think that a university degree is necessary for a good job, while others think that work experience and practical skills are more important. Discuss both views and give your own opinion. Give reasons for your answer and include any relevant examples from your own knowledge or experience.","dataDesc":"Dàn ý gợi ý: Mở bài - paraphrase hai quan điểm, chưa nêu ý kiến riêng vội. Thân 1 (ủng hộ bằng cấp): bằng chứng minh kiến thức hệ thống, nhiều nghề bắt buộc có bằng, nhà tuyển dụng dùng bằng để sàng lọc. Thân 2 (ủng hộ kinh nghiệm): kỹ năng thực tế, thái độ làm việc và khả năng giải quyết vấn đề chỉ có qua làm thật; nhiều người thành công nhờ tay nghề. Kết bài - ý kiến riêng: kết hợp cả hai là tốt nhất, bằng mở cửa, kinh nghiệm giữ chân.","model":"Getting a good job is a goal for most young people, but there is disagreement about what matters most: a university degree or practical experience. This essay will discuss both views before giving my own opinion.\n\nOn the one hand, many people believe that a university degree is necessary. A degree shows that a person has studied a subject in depth and can think in an organised way. Moreover, some jobs, such as doctors and engineers, legally require a degree, and employers often use it as the first way to choose between many applicants. It also gives graduates time to practise thinking, writing and research, which are useful in many different jobs.\n\nOn the other hand, others argue that work experience and practical skills are more important. A person who has worked in a real shop, office or workshop knows how to solve problems, work in a team and deal with customers, and these skills cannot be learned only from books. For example, a skilled cook or electrician can earn a good living through experience and a strong reputation, even without a degree. Employers often value workers who can stay calm under pressure, and that confidence usually comes from real experience.\n\nIn my opinion, the best path combines both. A degree can open the door to an interview, but experience and practical skills decide whether a person succeeds in the job. Therefore, students should study hard and also gain real work experience whenever possible.","analysis":"Cấu trúc mở-thân-kết chuẩn Task 2 dạng thảo luận hai chiều: mở bài paraphrase hai quan điểm và hứa thảo luận trước khi nêu ý kiến; thân 1 trình bày quan điểm ủng hộ bằng cấp; thân 2 trình bày quan điểm ủng hộ kinh nghiệm, mỗi bên có lý do và ví dụ; kết bài nêu ý kiến riêng dung hòa cả hai. Điểm ngôn ngữ đáng học: (1) cặp chuyển ý On the one hand / On the other hand; (2) mẫu mở bài This essay will discuss both views before giving my own opinion; (3) mẫu kết luận dung hòa the best path combines both và Therefore.","phrases":[{"en":"There is disagreement about what matters most.","vi":"Có sự bất đồng về điều gì quan trọng nhất."},{"en":"On the one hand, many people believe that...","vi":"Một mặt, nhiều người tin rằng..."},{"en":"On the other hand, others argue that...","vi":"Mặt khác, những người khác cho rằng..."},{"en":"These skills cannot be learned only from books.","vi":"Những kỹ năng này không thể chỉ học từ sách vở."},{"en":"A degree can open the door to an interview.","vi":"Một tấm bằng có thể mở ra cánh cửa đến buổi phỏng vấn."}]}]);
CONTENT.writingDrills.push.apply(CONTENT.writingDrills, [{"band":"Band 2.0","kind":"combine","title":"Nối câu bằng and: sở thích","prompt":"Nối hai câu thành một câu bằng and. / Combine the sentences with and.","given":"I like apples. / I like bananas.","model":"I like apples and bananas.","note":"Kỹ thuật này giúp nối hai ý thích giống nhau bằng and thành một câu gọn hơn, không cần lặp lại chủ ngữ và động từ."},{"band":"Band 2.0","kind":"combine","title":"Nối câu bằng but: thời tiết","prompt":"Nối hai câu thành một câu bằng but. / Combine the sentences with but.","given":"It is sunny. / It is cold.","model":"It is sunny but cold.","note":"Kỹ thuật này giúp nối hai ý đối lập nhau bằng but trong một câu ngắn, đúng mức cơ bản."},{"band":"Band 2.5","kind":"order","title":"Sắp xếp thành câu giới thiệu tên","prompt":"Sắp xếp các từ thành một câu đúng. / Put the words in the correct order.","given":"name / My / is / Mai","model":"My name is Mai.","note":"Kỹ thuật này bám vào trật tự chủ ngữ, động từ rồi bổ ngữ để xếp câu giới thiệu cơ bản cho đúng."},{"band":"Band 2.5","kind":"order","title":"Sắp xếp thành câu nói về gia đình","prompt":"Sắp xếp các từ thành một câu đúng. / Put the words in the correct order.","given":"sister / have / I / a / little","model":"I have a little sister.","note":"Kỹ thuật này giúp nhớ trật tự chủ ngữ, động từ, mạo từ và danh từ trong câu đơn giản về gia đình."},{"band":"Band 3.0","kind":"combine","title":"Nối câu bằng because: đi học muộn","prompt":"Nối hai câu thành một câu bằng because. / Combine the sentences with because.","given":"He was late for school. / His bike was broken.","model":"He was late for school because his bike was broken.","note":"Kỹ thuật này giúp nối kết quả với lý do bằng because, đặt lý do sau because trong cùng một câu."},{"band":"Band 3.0","kind":"combine","title":"Nối câu bằng so: trời mưa","prompt":"Nối hai câu thành một câu bằng so. / Combine the sentences with so.","given":"It rained yesterday. / We stayed at home.","model":"It rained yesterday, so we stayed at home.","note":"Kỹ thuật này giúp nối nguyên nhân với kết quả bằng so, và nhớ dấu phẩy trước so khi nối hai mệnh đề."},{"band":"Band 3.5","kind":"paraphrase","title":"Viết lại câu bằng từ big thay cho large","prompt":"Viết lại câu giữ nguyên nghĩa, dùng từ big thay cho large. / Paraphrase the sentence using big instead of large.","given":"My school has a large garden.","model":"My school has a big garden.","note":"Kỹ thuật này giúp thay từ đồng nghĩa đơn giản mà vẫn giữ nguyên nghĩa, là bước đầu của viết lại câu."},{"band":"Band 3.5","kind":"paraphrase","title":"Viết lại câu bằng từ happy thay cho glad","prompt":"Viết lại câu giữ nguyên nghĩa, dùng từ happy thay cho glad. / Paraphrase the sentence using happy instead of glad.","given":"I am glad to see you.","model":"I am happy to see you.","note":"Kỹ thuật này giúp thay tính từ đồng nghĩa trong câu cảm xúc mà không làm đổi nghĩa câu gốc."},{"band":"Band 4.0","kind":"combine","title":"Nối câu bằng although: trời mưa vẫn đi dạo","prompt":"Nối hai câu thành một câu bằng although. / Combine the sentences with although.","given":"It was raining. / We went for a walk.","model":"Although it was raining, we went for a walk.","note":"Kỹ thuật này giúp nối hai ý đối lập bằng although đứng đầu câu, và nhớ dấu phẩy sau mệnh đề although."},{"band":"Band 4.0","kind":"combine","title":"Nối câu bằng when: đang đọc sách thì bạn gọi","prompt":"Nối hai câu thành một câu bằng when. / Combine the sentences with when.","given":"I was reading a book. / My friend called me.","model":"I was reading a book when my friend called me.","note":"Kỹ thuật này giúp nối hai hành động xảy ra cùng lúc bằng when, hành động đang diễn ra dùng thì quá khứ tiếp diễn."},{"band":"Band 4.5","kind":"paraphrase","title":"Viết lại câu ghép bằng từ đồng nghĩa","prompt":"Viết lại câu giữ nguyên nghĩa, dùng exhausted thay cho tired và at an early hour thay cho early. / Paraphrase the sentence using exhausted instead of tired and at an early hour instead of early.","given":"She was tired, and she went to bed early.","model":"She was exhausted, and she went to bed at an early hour.","note":"Kỹ thuật này giúp viết lại câu ghép ở mức trung bình bằng cách thay từ đồng nghĩa mạnh hơn mà vẫn giữ cấu trúc và nghĩa gốc."},{"band":"Band 4.5","kind":"paraphrase","title":"Viết lại câu ghép bằng cách đổi trật tự hai vế","prompt":"Viết lại câu ghép giữ nguyên nghĩa bằng cách đổi trật tự hai vế và dùng because. / Paraphrase the sentence by changing the order of the clauses and using because.","given":"He stayed at home because he was ill.","model":"Because he was ill, he stayed at home.","note":"Kỹ thuật này giúp viết lại câu ghép bằng cách đưa mệnh đề lý do lên đầu câu, giúp câu văn linh hoạt hơn mà nghĩa không đổi."}]);
CONTENT.reading.push.apply(CONTENT.reading, [{"topic":"Một ngày ở trường","level":"Band 2.0","title":"Mai's Day at School","text":"My name is Mai. I am nine years old. I go to Green Hill School, a small school near my house. Every morning, I walk to school with my friend Lan. We leave home at seven o'clock and we talk about our lessons on the way.\n\nAt school, I have four lessons in the morning. My favourite lesson is English. My teacher is Miss Hoa. She is kind and funny. In her class, we sing songs, learn new words and read short stories. After English, we have maths and Vietnamese. I like maths, but it is sometimes difficult for me.\n\nAt lunch, I eat rice and vegetables in the school canteen with Lan. Then we play games in the school yard. In the afternoon, we have art and music. I love to draw pictures of my family. School finishes at four o'clock. Then I walk home, do my homework and help my mother cook dinner. I love my school very much.","questions":[{"type":"TFNG","q":"Mai walks to school with Lan every morning.","options":["True","False","Not Given"],"a":0,"why":"Đoạn 1: Mai đi bộ tới trường cùng bạn Lan mỗi buổi sáng → Đúng."},{"type":"TFNG","q":"Mai's favourite lesson is maths.","options":["True","False","Not Given"],"a":1,"why":"Đoạn 2: môn Mai thích nhất là tiếng Anh, không phải toán → Sai."},{"type":"TFNG","q":"The library was built in 1990.","options":["True","False","Not Given"],"a":2,"why":"Bài không nói gì về năm xây trường → Không cho biết."},{"type":"TFNG","q":"Mai eats lunch at home.","options":["True","False","Not Given"],"a":1,"why":"Đoạn 3: Mai ăn trưa ở căng tin trường cùng Lan, không phải ở nhà → Sai."},{"type":"TFNG","q":"School finishes at four o'clock.","options":["True","False","Not Given"],"a":0,"why":"Đoạn 3: trường tan học lúc bốn giờ chiều → Đúng."}],"translation":"Mai chín tuổi, học ở trường Green Hill gần nhà. Mỗi sáng bạn đi bộ tới trường cùng Lan. Buổi sáng bạn học bốn tiết, thích nhất là tiếng Anh với cô Hoa. Buổi trưa bạn ăn ở căng tin, buổi chiều học vẽ và nhạc, bốn giờ tan học rồi về nhà làm bài tập và giúp mẹ nấu cơm.","phrases":[{"en":"walk to school","vi":"đi bộ tới trường"},{"en":"my favourite lesson","vi":"môn học yêu thích của tôi"},{"en":"in the school canteen","vi":"ở căng tin trường"},{"en":"do my homework","vi":"làm bài tập về nhà"},{"en":"love my school very much","vi":"rất yêu trường học của tôi"}]},{"topic":"Chợ địa phương","level":"Band 2.5","title":"A Morning at the Local Market","text":"Every Sunday morning, my mother and I go to the local market in our town. The market is near the river. It opens at six o'clock and closes at eleven o'clock. Many people come here to buy fresh food for the week.\n\nAt the market, there are small stalls in long rows. Mrs Lan sells vegetables. Her tomatoes and cabbages are very fresh. Mr Tuan sells fish. His fish comes from the river every morning. Mrs Hoa sells fruit. Her bananas and oranges are sweet and cheap.\n\nMy mother buys rice, vegetables and fish. She also buys flowers for our house. The sellers are friendly. They often give us a small gift, like a few herbs or a small fruit. We go home at ten o'clock. We are happy because the food is fresh and the prices are good. Before we leave, my mother also buys a bunch of bananas for my grandmother, who lives near our house. The market is noisy and busy, but everyone smiles and talks happily.","questions":[{"type":"SC","q":"Complete the summary. The market opens at ______ and closes at ______.","options":["six o'clock and eleven o'clock","seven o'clock and ten o'clock","six o'clock and ten o'clock","eight o'clock and eleven o'clock"],"a":0,"why":"Đoạn 1: chợ mở cửa lúc sáu giờ và đóng cửa lúc mười một giờ."},{"type":"SC","q":"Complete the summary. Mrs Lan sells ______ and Mr Tuan sells ______.","options":["flowers and rice","vegetables and fish","fruit and flowers","fish and vegetables"],"a":1,"why":"Đoạn 2: bà Lan bán rau, ông Tuấn bán cá."},{"type":"SC","q":"Complete the summary. The market is near the ______ and people buy fresh ______ there.","options":["school and clothes","park and flowers","river and food","station and food"],"a":2,"why":"Đoạn 1: chợ ở gần sông, mọi người tới mua thức ăn tươi."},{"type":"SC","q":"Complete the summary. Mrs Hoa sells ______ and her fruit is sweet and ______.","options":["rice and fresh","vegetables and sweet","fruit and cheap","fish and cheap"],"a":2,"why":"Đoạn 2: bà Hoa bán trái cây, trái cây của bà ngọt và rẻ."},{"type":"SC","q":"Complete the summary. The family goes home at ______ and is happy because the food is fresh and the prices are ______.","options":["nine o'clock and high","ten o'clock and good","eleven o'clock and good","ten o'clock and high"],"a":1,"why":"Đoạn 3: gia đình về nhà lúc mười giờ, vui vì thức ăn tươi và giá tốt."}],"translation":"Sáng chủ nhật nào mẹ và tôi cũng đi chợ địa phương gần sông, chợ mở từ sáu giờ tới mười một giờ. Bà Lan bán rau, ông Tuấn bán cá sông, bà Hoa bán trái cây ngọt và rẻ. Mẹ mua gạo, rau, cá và hoa, người bán còn hay tặng thêm rau thơm, cả nhà về lúc mười giờ rất vui vì đồ tươi và giá tốt.","phrases":[{"en":"local market","vi":"chợ địa phương"},{"en":"fresh food","vi":"thức ăn tươi"},{"en":"small stalls in long rows","vi":"các sạp nhỏ xếp thành dãy dài"},{"en":"sweet and cheap","vi":"ngọt và rẻ"},{"en":"the prices are good","vi":"giá cả tốt"}]},{"topic":"Đọc lướt tìm ý chính","level":"Band 2.5","title":"Skimming: Reading for the Main Idea","text":"Skimming is a fast way of reading. When you skim, you do not read every word. You look for the main idea of a text. This skill is useful when you have little time and you only need the general meaning.\n\nTo skim, first read the title. Then read the first sentence of each paragraph. The first sentence often tells you the main idea. You can also look at pictures, headings and words in bold. Do not stop at new words. Just keep going.\n\nFor example, if you skim a text about a school fair, you can learn quickly that the fair is on Saturday, that students sell food and games, and that the money helps the school library. You do not need to know every small detail.\n\nSkimming does not replace careful reading. When you need details, you must read slowly. But when you only need the main idea, skimming saves time and helps you understand a text quickly.","questions":[{"type":"MC","q":"What is the main idea of the whole text?","options":["Skimming helps you find the main idea quickly","Reading every word is the best way to read","A school fair helps the library","New words are the most important part of reading"],"a":0,"why":"Đây là bài tập đọc lướt: ý chính của toàn bài là đọc lướt giúp nắm ý chính nhanh mà không cần đọc từng từ."},{"type":"MC","q":"What is the main idea of paragraph 1?","options":["Skimming is only for school fairs","Skimming means reading fast for the main idea","Careful reading is slow","Titles are not important"],"a":1,"why":"Đây là bài tập đọc lướt: đoạn 1 giới thiệu đọc lướt là cách đọc nhanh để tìm ý chính khi ít thời gian."},{"type":"MC","q":"What is the main idea of paragraph 2?","options":["New words must be learned first","Pictures are more important than words","How to skim: read the title and first sentences","Bold words should be ignored"],"a":2,"why":"Đây là bài tập đọc lướt: đoạn 2 hướng dẫn các bước đọc lướt — đọc tiêu đề, câu đầu mỗi đoạn, nhìn hình và từ in đậm."},{"type":"MC","q":"What is the main idea of paragraph 3?","options":["The school fair is on Sunday","An example: skimming a text about a school fair","Students must sell food","The library needs money"],"a":1,"why":"Đây là bài tập đọc lướt: đoạn 3 lấy ví dụ đọc lướt một bài về hội chợ trường để nắm nhanh ý chính."},{"type":"MC","q":"What is the main idea of paragraph 4?","options":["Skimming saves time for general meaning, but details need slow reading","Skimming is better than careful reading","You should never read slowly","Details are never important"],"a":0,"why":"Đây là bài tập đọc lướt: đoạn 4 kết luận — đọc lướt tiết kiệm thời gian khi chỉ cần ý chung, còn cần chi tiết thì phải đọc chậm."}],"translation":"Đọc lướt là cách đọc nhanh để nắm ý chính mà không cần đọc từng từ. Cách làm là đọc tiêu đề, câu đầu mỗi đoạn, nhìn hình và từ in đậm, không dừng lại ở từ mới. Ví dụ đọc lướt bài về hội chợ trường sẽ nắm nhanh ngày tổ chức và mục đích gây quỹ. Đọc lướt không thay thế đọc kỹ khi cần chi tiết.","phrases":[{"en":"the main idea","vi":"ý chính"},{"en":"do not read every word","vi":"không đọc từng từ"},{"en":"the first sentence of each paragraph","vi":"câu đầu tiên của mỗi đoạn"},{"en":"do not stop at new words","vi":"đừng dừng lại ở từ mới"},{"en":"saves time","vi":"tiết kiệm thời gian"}]},{"topic":"Thư viện thành phố","level":"Band 3.0","title":"A Visit to the City Library","text":"Last Saturday, my class visited the City Library. It is a big building in the centre of our town. The library opens at eight o'clock in the morning and closes at nine o'clock in the evening. It is open every day except Sunday.\n\nInside, there are thousands of books. There are books for children on the ground floor. There are science books and story books on the first floor. There is also a quiet reading room. In the reading room, people read and study. They must not talk loudly there.\n\nOur teacher showed us how to borrow a book. We need a library card. We can keep a book for two weeks. If we are late, we must pay a small fine. I borrowed a book about animals. I am very happy because I love reading. The librarian is friendly and helps us find the books we want. She also tells us about a reading club that meets every Saturday afternoon for children who love stories. I will go back to the library next Saturday.","questions":[{"type":"TFNG","q":"The library opens at eight o'clock in the morning.","options":["True","False","Not Given"],"a":0,"why":"Đoạn 1: thư viện mở cửa lúc tám giờ sáng → Đúng."},{"type":"TFNG","q":"The library is open on Sunday.","options":["True","False","Not Given"],"a":1,"why":"Đoạn 1: thư viện mở cửa mọi ngày trừ chủ nhật → Sai."},{"type":"TFNG","q":"Children's books are on the first floor.","options":["True","False","Not Given"],"a":1,"why":"Đoạn 2: sách thiếu nhi ở tầng trệt, sách khoa học và truyện mới ở tầng một → Sai."},{"type":"TFNG","q":"Readers can keep a book for three weeks.","options":["True","False","Not Given"],"a":1,"why":"Đoạn 3: mượn sách được giữ hai tuần, không phải ba tuần → Sai."},{"type":"TFNG","q":"The library was built in 1990.","options":["True","False","Not Given"],"a":2,"why":"Bài không nói gì về năm xây thư viện → Không cho biết."}],"translation":"Thứ bảy tuần trước lớp tôi đi thăm Thư viện Thành phố, tòa nhà lớn ở trung tâm thị trấn, mở cửa từ tám giờ sáng tới chín giờ tối mọi ngày trừ chủ nhật. Sách thiếu nhi ở tầng trệt, sách khoa học và truyện ở tầng một, có phòng đọc yên tĩnh. Muốn mượn sách cần thẻ thư viện, giữ được hai tuần, trả muộn phải nộp phạt nhỏ. Tôi đã mượn một cuốn sách về động vật.","phrases":[{"en":"in the centre of our town","vi":"ở trung tâm thị trấn"},{"en":"a quiet reading room","vi":"một phòng đọc yên tĩnh"},{"en":"borrow a book","vi":"mượn một cuốn sách"},{"en":"a library card","vi":"thẻ thư viện"},{"en":"pay a small fine","vi":"nộp một khoản phạt nhỏ"}]},{"topic":"Đọc quét tìm thông tin","level":"Band 3.0","title":"The Town Sports Festival","text":"Our town sports festival is on Saturday, 20 July. It starts at 8 a.m. in Central Park. More than 500 people will take part. Tickets cost 20,000 dong for adults and are free for children under 10.\n\nThe football final starts at 4 p.m. on the main field. The two teams are the Red Stars and the Blue Eagles. The running race for children starts at 9 a.m. near the lake. The winner will receive a gold medal and a new bicycle.\n\nThere are also 12 food stalls near the park gate. Mrs Lan's stall sells rice cakes for 15,000 dong. Mr Tuan's stall sells fruit juice for 10,000 dong. The festival ends at 9 p.m. with a music show. The singer is Mai Anh, a famous singer from our town. Children under 10 also enjoy a painting corner near the lake, where they can draw pictures of their favourite sports. Volunteers from the town youth club help organise the games and guide visitors to the different fields all day. Everyone is welcome.","questions":[{"type":"MC","q":"When is the town sports festival?","options":["12 July","20 July","20 June","2 July"],"a":1,"why":"Đây là bài tập đọc quét: quét ngày tháng ở đoạn 1 sẽ thấy lễ hội vào thứ bảy, 20 July."},{"type":"MC","q":"How much is a ticket for an adult?","options":["10,000 dong","15,000 dong","20,000 dong","Free"],"a":2,"why":"Đây là bài tập đọc quét: quét giá vé ở đoạn 1 sẽ thấy vé người lớn là 20,000 dong, trẻ dưới 10 tuổi miễn phí."},{"type":"MC","q":"What time does the football final start?","options":["8 a.m.","9 a.m.","4 p.m.","9 p.m."],"a":2,"why":"Đây là bài tập đọc quét: quét giờ giấc ở đoạn 2 sẽ thấy trận chung kết bóng đá bắt đầu lúc 4 p.m."},{"type":"MC","q":"Whose stall sells fruit juice for 10,000 dong?","options":["Mrs Lan's stall","Mr Tuan's stall","Mai Anh's stall","The Red Stars' stall"],"a":1,"why":"Đây là bài tập đọc quét: quét tên người bán ở đoạn 3 sẽ thấy sạp của ông Tuấn bán nước trái cây giá 10,000 dong."},{"type":"MC","q":"Who sings at the music show at the end of the festival?","options":["Mrs Lan","Mr Tuan","Mai Anh","The Blue Eagles"],"a":2,"why":"Đây là bài tập đọc quét: quét tên riêng ở đoạn 3 sẽ thấy ca sĩ Mai Anh hát trong chương trình âm nhạc lúc 9 p.m."}],"translation":"Lễ hội thể thao của thị trấn diễn ra thứ bảy 20/7 tại Công viên Trung tâm từ 8 giờ sáng, hơn 500 người tham gia, vé người lớn 20.000 đồng, trẻ dưới 10 tuổi miễn phí. Chung kết bóng đá lúc 4 giờ chiều giữa Red Stars và Blue Eagles, đua chạy trẻ em lúc 9 giờ sáng. Có 12 sạp đồ ăn, lễ hội kết thúc lúc 9 giờ tối bằng chương trình ca nhạc của Mai Anh.","phrases":[{"en":"take part","vi":"tham gia"},{"en":"free for children under 10","vi":"miễn phí cho trẻ dưới 10 tuổi"},{"en":"the football final","vi":"trận chung kết bóng đá"},{"en":"receive a gold medal","vi":"nhận huy chương vàng"},{"en":"everyone is welcome","vi":"mọi người đều được chào đón"}]},{"topic":"Thời tiết và mùa","level":"Band 3.5","title":"Weather and Seasons in Our Town","text":"Our town has four seasons. Spring starts in March. In spring, the weather is warm and flowers bloom everywhere. People like to walk in the park and fly kites.\n\nSummer starts in June. It is hot and sunny, but it often rains in the afternoon. Children swim in the river and eat ice cream. Autumn starts in September. The weather becomes cool and the leaves turn yellow and red.\n\nWinter starts in December. It is cold and dry. Sometimes, the temperature falls to 10 degrees. People wear warm coats and drink hot tea. In our town, people plan their work around the seasons. Farmers plant rice in spring and harvest it in autumn. Fishermen say winter is the best time for fishing because the sea is calm. Students love summer most because school closes for a long holiday and they can play outside all day. I like autumn best because the weather is cool and the sky is clear.","questions":[{"type":"SC","q":"Complete the summary. In spring, the weather is ______ and flowers ______ everywhere.","options":["cold and fall","warm and bloom","hot and bloom","warm and fall"],"a":1,"why":"Đoạn 1: mùa xuân trời ấm và hoa nở khắp nơi."},{"type":"SC","q":"Complete the summary. In summer, it is hot and ______, but it often ______ in the afternoon.","options":["sunny and rains","cool and snows","dry and rains","sunny and snows"],"a":0,"why":"Đoạn 2: mùa hè nóng và nắng, nhưng buổi chiều thường mưa."},{"type":"SC","q":"Complete the summary. In autumn, the weather becomes ______ and the leaves turn ______.","options":["warm and green","hot and yellow","cool and yellow and red","cold and green"],"a":2,"why":"Đoạn 2: mùa thu trời mát dần và lá chuyển sang vàng, đỏ."},{"type":"SC","q":"Complete the summary. In winter, it is cold and ______, and the temperature sometimes falls to ______.","options":["wet and 20 degrees","dry and 10 degrees","dry and 20 degrees","warm and 10 degrees"],"a":1,"why":"Đoạn 3: mùa đông lạnh và khô, có lúc nhiệt độ xuống tới 10 độ."},{"type":"SC","q":"Complete the summary. The writer likes ______ best because the weather is cool and the sky is ______.","options":["spring and cloudy","summer and clear","autumn and clear","winter and clear"],"a":2,"why":"Đoạn 3: tác giả thích nhất mùa thu vì trời mát và bầu trời trong xanh."}],"translation":"Thị trấn tôi có bốn mùa: xuân bắt đầu tháng 3, trời ấm, hoa nở khắp nơi; hè từ tháng 6, nóng nắng nhưng chiều hay mưa; thu từ tháng 9, trời mát, lá vàng đỏ; đông từ tháng 12, lạnh khô, có lúc xuống 10 độ. Tác giả thích nhất mùa thu vì trời mát và bầu trời trong xanh.","phrases":[{"en":"four seasons","vi":"bốn mùa"},{"en":"flowers bloom everywhere","vi":"hoa nở khắp nơi"},{"en":"it often rains in the afternoon","vi":"buổi chiều thường mưa"},{"en":"the leaves turn yellow and red","vi":"lá chuyển sang vàng và đỏ"},{"en":"the sky is clear","vi":"bầu trời trong xanh"}]},{"topic":"Tiếng ồn và việc học","level":"Band 7.0","title":"How Noise Affects Learning","text":"A. Many schools stand close to busy roads, and their classrooms are never truly quiet. Lorries pass all day, motorbikes stop at traffic lights outside the windows, and the noise comes straight through thin walls. Teachers often raise their voices to be heard, and by the afternoon both teachers and pupils feel tired. For a long time, people accepted this noise as a normal part of city life, but researchers are now asking what it costs children in learning.\n\nB. A study in a large city followed two groups of pupils for one school year. One group learned in classrooms facing a busy road, while the other learned in quiet rooms at the back of the same schools. At the end of the year, the pupils in the noisy rooms scored lower in reading tests, even though the two groups had started at the same level. The researchers concluded that constant traffic noise makes it harder for children to hear new words clearly and to remember them.\n\nC. The problem is not only loud traffic. Inside a school, background talk, chairs moving and phones ringing also break concentration. A short burst of noise may seem harmless, yet it can pull a child's attention away from the teacher at the exact moment when a new idea is explained. When this happens again and again, pupils miss small pieces of information, and the gaps in their understanding slowly grow wider.\n\nD. Fortunately, schools can reduce noise without rebuilding the whole building. Soft materials on walls and ceilings absorb sound, thick curtains and double windows block traffic noise, and quiet corners give pupils a place to read in peace. Some schools also plan noisy activities, such as music and sport, at times when other classes are not taking tests. These simple changes are cheap compared with the cost of a whole school year of poor learning.\n\nE. In the long term, the effects may go beyond test scores. Children who study in noisy rooms for years may develop weaker memory for spoken information, because their brains must work extra hard simply to filter out unwanted sound. For this reason, experts now argue that every school should measure the noise in its classrooms, just as it checks light and air, and treat quiet as a basic condition for learning, not as a luxury.","questions":[{"type":"MINFO","q":"Đoạn nào nêu kết quả nghiên cứu: học sinh học trong phòng ồn đạt điểm đọc thấp hơn?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":1,"why":"Đoạn B trình bày nghiên cứu: nhóm học trong phòng hướng ra đường đông đạt điểm đọc thấp hơn nhóm học phòng yên tĩnh."},{"type":"MINFO","q":"Đoạn nào nêu giải pháp dùng vật liệu mềm hút âm, rèm dày và cửa sổ hai lớp?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":3,"why":"Đoạn D liệt kê các giải pháp: vật liệu mềm trên tường và trần, rèm dày, cửa sổ hai lớp và góc yên tĩnh."},{"type":"MINFO","q":"Đoạn nào nói rằng tiếng ồn trong trường như tiếng nói chuyện, tiếng ghế kéo cũng làm mất tập trung?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":2,"why":"Đoạn C nói vấn đề không chỉ là tiếng giao thông lớn mà còn là tiếng nói chuyện nền, tiếng ghế di chuyển và chuông điện thoại."},{"type":"MINFO","q":"Đoạn nào mô tả các trường học nằm gần đường đông xe?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":0,"why":"Đoạn A mở đầu bằng cảnh nhiều trường nằm sát đường đông xe, tiếng ồn lọt qua tường mỏng."},{"type":"MINFO","q":"Đoạn nào nói về ảnh hưởng lâu dài của tiếng ồn tới trí nhớ thông tin nghe được?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":4,"why":"Đoạn E nói về lâu dài: trẻ học trong phòng ồn nhiều năm có thể có trí nhớ kém hơn với thông tin nghe được."}],"translation":"Nhiều trường học nằm sát đường đông xe nên lớp học không bao giờ thực sự yên tĩnh. Một nghiên cứu cho thấy học sinh lớp ồn đạt điểm đọc thấp hơn vì khó nghe rõ và ghi nhớ từ mới. Tiếng ồn trong trường như tiếng nói chuyện hay ghế kéo cũng làm mất tập trung. Trường có thể giảm ồn bằng vật liệu mềm, rèm dày và cửa sổ hai lớp. Về lâu dài, học trong phòng ồn có thể làm yếu trí nhớ nghe, vì vậy sự yên tĩnh cần được coi là điều kiện cơ bản cho việc học.","phrases":[{"en":"break concentration","vi":"làm mất tập trung"},{"en":"scored lower in reading tests","vi":"đạt điểm thấp hơn trong bài kiểm tra đọc"},{"en":"absorb sound","vi":"hút âm, hấp thụ âm thanh"},{"en":"filter out unwanted sound","vi":"lọc bỏ âm thanh không mong muốn"},{"en":"a basic condition for learning","vi":"một điều kiện cơ bản cho việc học"}]},{"topic":"Phục hồi sông đô thị","level":"Band 7.0","title":"Bringing a City River Back to Life","text":"A. For fifty years, the River Brent ran dark through the city of Norbridge. Factories along its banks poured waste into the water, and the river smelled so bad that people closed their windows when they walked past. Children were told never to swim in it, and the only creatures that seemed to survive were rats on the muddy banks. The river had become a place the city was ashamed of, not a place it enjoyed.\n\nB. In 2015, the city council started a long plan to bring the river back to life. The first step was the hardest: stopping all factory waste from entering the water and cleaning tonnes of rubbish from the riverbed. Engineers repaired old pipes, built new filters and fined any company that broke the rules. Many people doubted the plan, because the river had been dirty for longer than most residents had been alive.\n\nC. Five years later, the change was easy to see. Water tests showed far less pollution, and small fish returned to the shallow parts of the river. Herons and ducks, absent for decades, began to nest along the banks again. In summer, families walked beside the water in the evening, and a few brave teenagers even swam in it. The river was not yet clean enough to drink from, but it was alive again.\n\nD. Local people played a central part in this recovery. Volunteers planted trees along the banks to hold the soil and give shade, and school pupils visited every month to test the water and count birds. Residents also reported pollution quickly, so the council could act before the damage spread. The project leaders say this public help mattered as much as the engineering, because a river that people care about is a river that people protect.\n\nE. The largest lesson of Norbridge is simple: river recovery takes time and needs the whole community. Quick fixes fail, but steady work over many years succeeds. Other cities now visit Norbridge to study its plan, and several have started similar projects on their own dirty rivers. The Brent still needs care, but it proves that a damaged river can recover when a city refuses to give up on it.","questions":[{"type":"MSEND","q":"Theo bài, trước năm 2015, con sông Brent","o":["chảy đen và bốc mùi vì nước thải nhà máy","là nơi bơi lội yêu thích của trẻ em","đã đủ sạch để uống trực tiếp","chưa từng có nhà máy ven bờ"],"options":["chảy đen và bốc mùi vì nước thải nhà máy","là nơi bơi lội yêu thích của trẻ em","đã đủ sạch để uống trực tiếp","chưa từng có nhà máy ven bờ"],"a":0,"why":"Đoạn A: sông chảy đen suốt năm mươi năm, nhà máy đổ thải vào nước và sông bốc mùi."},{"type":"MSEND","q":"Theo bài, bước đầu tiên của kế hoạch phục hồi là","o":["xây thêm nhà máy ven sông","chặn nước thải nhà máy và dọn rác khỏi lòng sông","cấm mọi người đi dạo ven sông","đổ thêm nước sạch vào sông mỗi ngày"],"options":["xây thêm nhà máy ven sông","chặn nước thải nhà máy và dọn rác khỏi lòng sông","cấm mọi người đi dạo ven sông","đổ thêm nước sạch vào sông mỗi ngày"],"a":1,"why":"Đoạn B: bước đầu tiên khó nhất là chặn mọi nước thải nhà máy và dọn hàng tấn rác khỏi lòng sông."},{"type":"MSEND","q":"Theo bài, sau năm năm, dấu hiệu sông hồi sinh là","o":["nước sông uống được ngay","cá nhỏ, diệc và vịt quay lại ven sông","mọi nhà máy đóng cửa vĩnh viễn","không còn ai đi dạo ven sông"],"options":["nước sông uống được ngay","cá nhỏ, diệc và vịt quay lại ven sông","mọi nhà máy đóng cửa vĩnh viễn","không còn ai đi dạo ven sông"],"a":1,"why":"Đoạn C: sau năm năm, xét nghiệm cho thấy ô nhiễm giảm nhiều, cá nhỏ quay lại, diệc và vịt làm tổ ven bờ."},{"type":"MSEND","q":"Theo bài, người dân địa phương giúp dự án bằng cách","o":["trồng cây ven bờ và báo cáo ô nhiễm kịp thời","đóng cửa mọi trường học gần sông","cấm du khách tới thăm sông","tự xây nhà máy lọc nước"],"options":["trồng cây ven bờ và báo cáo ô nhiễm kịp thời","đóng cửa mọi trường học gần sông","cấm du khách tới thăm sông","tự xây nhà máy lọc nước"],"a":0,"why":"Đoạn D: tình nguyện viên trồng cây ven bờ giữ đất, học sinh xét nghiệm nước, người dân báo cáo ô nhiễm nhanh."},{"type":"MSEND","q":"Theo bài, bài học lớn nhất từ Norbridge là","o":["phục hồi sông chỉ cần tiền là đủ","phục hồi sông cần thời gian dài và sự tham gia của cả cộng đồng","sông bẩn không bao giờ hồi phục được","chỉ kỹ sư mới có thể cứu một dòng sông"],"options":["phục hồi sông chỉ cần tiền là đủ","phục hồi sông cần thời gian dài và sự tham gia của cả cộng đồng","sông bẩn không bao giờ hồi phục được","chỉ kỹ sư mới có thể cứu một dòng sông"],"a":1,"why":"Đoạn E: bài học lớn nhất là phục hồi sông cần thời gian và cần cả cộng đồng, cách sửa nhanh sẽ thất bại."}],"translation":"Trong năm mươi năm, sông Brent chảy đen qua thành phố Norbridge vì nước thải nhà máy. Từ 2015, thành phố chặn nước thải, dọn rác lòng sông, sửa ống và lắp bộ lọc. Sau năm năm, ô nhiễm giảm nhiều, cá, diệc và vịt quay lại. Người dân trồng cây ven bờ, xét nghiệm nước và báo cáo ô nhiễm. Bài học lớn nhất: phục hồi sông cần thời gian dài và sự tham gia của cả cộng đồng.","phrases":[{"en":"bring the river back to life","vi":"hồi sinh dòng sông"},{"en":"poured waste into the water","vi":"đổ chất thải vào nước"},{"en":"water tests showed far less pollution","vi":"xét nghiệm nước cho thấy ô nhiễm giảm nhiều"},{"en":"played a central part","vi":"đóng vai trò trung tâm"},{"en":"refuses to give up on it","vi":"không chịu từ bỏ nó"}]},{"topic":"Ong và nông nghiệp","level":"Band 7.0","title":"Bees and the Farms That Need Them","text":"On a warm morning, a single bee may visit hundreds of flowers before it returns to the hive. At each flower, it collects sweet nectar for food and, without knowing it, carries pollen from one flower to another. This movement of pollen is called pollination, and it allows plants to make fruit and seeds. Without pollination, many of the foods we eat every day would simply not exist.\n\nAbout one third of the world's food crops depend on insects for pollination, and bees do most of this work. Apples, almonds, cucumbers and many kinds of berries all need bees to carry pollen between their flowers. Farmers who grow these crops often keep hives at the edges of their fields during the flowering season, so that the bees can reach the flowers easily and the harvest is large and healthy.\n\nYet bees face serious dangers. Strong pesticides can damage a bee's memory, so that it cannot find its way back to the hive after collecting food. When large areas grow only one crop, bees also struggle to find enough different flowers through the year. In some regions, whole hives have disappeared, and farmers have noticed smaller harvests as a direct result.\n\nThe solutions are practical and well known. Farmers can plant flowers that bloom in different seasons, so bees always have food, and they can spray pesticides only in the evening, when bees are inside their hives. They can also leave wild strips of grass and flowers between fields, giving bees safe places to nest and rest.\n\nA healthy hive can visit up to two million flowers in a single day, an amount of work no machine can replace cheaply. Protecting bees is therefore not only about saving a small insect. It is about protecting the food on our tables, the income of farmers and the variety of plants that make our countryside rich and colourful.","questions":[{"type":"TCOMP","q":"Ong giúp cây tạo quả và hạt bằng quá trình ___.","answer":"pollination","why":"Đoạn 1: sự di chuyển phấn hoa này gọi là pollination, nhờ đó cây tạo quả và hạt."},{"type":"TCOMP","q":"Khoảng ___ số cây lương thực trên thế giới phụ thuộc vào côn trùng thụ phấn.","answer":"one third|one-third","why":"Đoạn 2: khoảng one third số cây lương thực thế giới phụ thuộc vào côn trùng thụ phấn."},{"type":"TCOMP","q":"Thuốc trừ sâu mạnh có thể làm hỏng ___ của ong khiến nó không tìm được đường về tổ.","answer":"memory","why":"Đoạn 3: thuốc trừ sâu mạnh có thể làm hỏng memory của ong nên nó không tìm được đường về tổ."},{"type":"TCOMP","q":"Nông dân có thể trồng các loại hoa nở vào các mùa ___ để ong luôn có thức ăn.","answer":"different seasons|different","why":"Đoạn 4: nông dân có thể trồng hoa nở vào different seasons để ong luôn có thức ăn."},{"type":"TCOMP","q":"Một đàn ong khỏe có thể thăm tới ___ bông hoa trong một ngày.","answer":"two million|2 million","why":"Đoạn 5: một đàn ong khỏe có thể thăm tới two million bông hoa trong một ngày."}],"translation":"Ong mang phấn hoa từ bông này sang bông khác, quá trình này gọi là thụ phấn, giúp cây tạo quả và hạt. Khoảng một phần ba cây lương thực thế giới phụ thuộc vào côn trùng thụ phấn, chủ yếu là ong. Nhưng thuốc trừ sâu mạnh làm hỏng trí nhớ của ong, còn vùng trồng độc canh khiến ong thiếu hoa quanh năm. Nông dân có thể trồng hoa nở nhiều mùa khác nhau, phun thuốc vào buổi tối và giữ dải cỏ dại ven ruộng. Một đàn ong khỏe thăm tới hai triệu hoa mỗi ngày.","phrases":[{"en":"pollination","vi":"sự thụ phấn"},{"en":"one third of the world's food crops","vi":"một phần ba số cây lương thực thế giới"},{"en":"damage a bee's memory","vi":"làm hỏng trí nhớ của ong"},{"en":"bloom in different seasons","vi":"nở vào các mùa khác nhau"},{"en":"a healthy hive","vi":"một đàn ong khỏe"}]},{"topic":"Giờ học buổi sáng","level":"Band 7.0","title":"Should Schools Start Later?","text":"Most schools start early in the morning, often before eight o'clock. For young children, this causes few problems. For teenagers, however, early starts clash with biology. During the teenage years, the brain's internal clock shifts later, so teenagers naturally fall asleep late and wake up late. Asking them to learn difficult subjects at seven thirty in the morning is, in the author's view, like asking an adult to take an exam in the middle of the night.\n\nSome schools have tested a later start, moving the first lesson to nine o'clock. The results have encouraged supporters of the idea. In these schools, attendance improved, pupils reported feeling less tired, and average grades rose slightly. Teachers also noticed fewer pupils falling asleep in class and more pupils asking questions. The author presents these trials as strong evidence that a later start helps learning.\n\nNot everyone agrees. Some parents worry that a later start would clash with their working hours and with bus timetables. Sports coaches also complain that afternoon training would be pushed into the evening. These concerns are real, the author admits, but they are practical problems that timetables can solve, not reasons to keep a system that leaves teenagers tired.\n\nTrials in other countries tell a similar story. In one city, moving the start from half past seven to nine o'clock reduced late arrivals by almost half within a single term. Bus companies adjusted their routes, and parents who worried at first soon said mornings at home became calmer. These examples show that the practical problems, while real, are smaller than many people fear.\n\nThe author is clear about the conclusion. Schools should move the first lesson to nine o'clock, even if the change is difficult at first. A timetable that respects the teenage brain, the author argues, will produce healthier pupils, better attendance and stronger learning. Keeping the early start, by contrast, protects adult convenience at the cost of children's education.","questions":[{"type":"YNNG","q":"Theo tác giả, não của thanh thiếu niên tỉnh táo muộn hơn vào buổi sáng.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":0,"why":"Đoạn 1: đồng hồ sinh học của tuổi teen chuyển muộn hơn nên các em ngủ muộn và dậy muộn → Yes."},{"type":"YNNG","q":"Theo tác giả, mọi trường học trên thế giới đã chuyển sang bắt đầu muộn.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn 2: chỉ một số trường thử nghiệm bắt đầu muộn, không phải mọi trường → No."},{"type":"YNNG","q":"Theo tác giả, mọi phụ huynh đều ủng hộ giờ học muộn.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn 3: một số phụ huynh lo giờ học muộn xung đột với giờ làm và lịch xe buýt → không phải mọi phụ huynh ủng hộ → No."},{"type":"YNNG","q":"Theo tác giả, bắt đầu muộn giúp giảm tai nạn giao thông buổi sáng.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":2,"why":"Bài không nhắc gì tới tai nạn giao thông → Không cho biết."},{"type":"YNNG","q":"Theo tác giả, trường học nên chuyển tiết đầu tiên sang chín giờ sáng.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":0,"why":"Đoạn 4: tác giả kết luận rõ ràng rằng trường nên chuyển tiết đầu sang chín giờ → Yes."}],"translation":"Hầu hết trường học bắt đầu trước tám giờ sáng, nhưng đồng hồ sinh học của tuổi teen chuyển muộn hơn nên các em ngủ muộn, dậy muộn. Một số trường thử bắt đầu lúc chín giờ và thấy chuyên cần tăng, học sinh bớt mệt, điểm trung bình tăng nhẹ. Một số phụ huynh và huấn luyện viên lo về giờ làm và lịch tập, nhưng tác giả cho rằng đó là vấn đề thời khóa biểu có thể giải quyết. Kết luận của tác giả: trường nên bắt đầu lúc chín giờ.","phrases":[{"en":"internal clock","vi":"đồng hồ sinh học bên trong"},{"en":"attendance improved","vi":"tình hình chuyên cần cải thiện"},{"en":"falling asleep in class","vi":"ngủ gật trong lớp"},{"en":"clash with their working hours","vi":"xung đột với giờ làm việc của họ"},{"en":"at the cost of children's education","vi":"với cái giá là giáo dục của trẻ em"}]},{"topic":"Giảm rác thải nhựa","level":"Band 7.5+","title":"Three Cities, Three Answers to Plastic Waste","text":"A. Harbour City, a busy port on the southern coast, chose to pay people to return plastic. Under its deposit system, every plastic bottle carries an extra charge of five cents, which shoppers get back when they return the empty bottle to a collection machine. Shops must accept the bottles, and the machines stand in supermarkets, stations and schools. Within two years, the city collected four out of every five bottles sold, and far fewer bottles reached the sea. Critics note that the system needs constant maintenance, but the city council calls it the most effective tool it has ever tried.\n\nB. Lake Town, a quiet town beside a large lake, chose a ban instead of a payment. Since 2021, shops in Lake Town may not give customers single-use plastic bags. Instead, traders sell strong cloth bags at a low price, and many customers now carry their own bags from home. Market traders report that the change was difficult in the first month, when shoppers often forgot their bags, but after one year the number of plastic bags in the lake fell sharply. The town also runs free workshops on repairing old clothes and furniture, hoping that people will throw away less in general.\n\nC. Hill District, a crowded area of a large inland city, chose to start with children. Its schools run a points programme: pupils collect plastic waste from streets and parks, and every full bag earns points that can be exchanged for books and sports equipment. Teachers say the programme teaches responsibility better than any lesson, because children see the waste with their own eyes. The district also funds repair workshops where volunteers fix broken kettles, radios and bicycles for free. Organisers admit the programme alone cannot solve the plastic problem, but they argue that it changes habits for life, which no ban or payment can do on its own.","questions":[{"type":"MF","q":"Which place pays shoppers to return empty plastic bottles?","o":["A","B","C"],"options":["A","B","C"],"a":0,"why":"A là Harbour City, nơi thu thêm năm xu mỗi chai nhựa và trả lại khi khách mang chai rỗng tới máy thu gom."},{"type":"MF","q":"Which place bans shops from giving customers single-use plastic bags?","o":["A","B","C"],"options":["A","B","C"],"a":1,"why":"B là Lake Town, nơi từ 2021 cấm cửa hàng phát túi nhựa dùng một lần."},{"type":"MF","q":"Which place runs a school points programme where pupils exchange collected plastic for books?","o":["A","B","C"],"options":["A","B","C"],"a":2,"why":"C là Hill District, nơi học sinh thu gom rác nhựa đổi điểm lấy sách và đồ thể thao."},{"type":"MF","q":"Which place sells strong cloth bags at a low price to shoppers?","o":["A","B","C"],"options":["A","B","C"],"a":1,"why":"B là Lake Town, nơi thương nhân bán túi vải bền giá rẻ và nhiều khách tự mang túi từ nhà."},{"type":"MF","q":"Which place funds free repair workshops for broken kettles, radios and bicycles?","o":["A","B","C"],"options":["A","B","C"],"a":2,"why":"C là Hill District, nơi tài trợ xưởng sửa chữa miễn phí ấm đun, radio và xe đạp."}],"translation":"Ba địa phương chọn ba cách khác nhau để giảm rác nhựa: Harbour City trả tiền đặt cọc năm xu mỗi chai nhựa và thu lại được bốn trên năm chai; Lake Town cấm túi nhựa dùng một lần từ 2021 và bán túi vải giá rẻ; Hill District cho học sinh thu gom rác nhựa đổi điểm lấy sách và đồ thể thao, đồng thời tài trợ xưởng sửa đồ miễn phí. Mỗi cách đều có điểm mạnh riêng.","phrases":[{"en":"deposit system","vi":"hệ thống đặt cọc"},{"en":"single-use plastic bags","vi":"túi nhựa dùng một lần"},{"en":"strong cloth bags","vi":"túi vải bền"},{"en":"points programme","vi":"chương trình tích điểm"},{"en":"changes habits for life","vi":"thay đổi thói quen suốt đời"}]},{"topic":"Nhà máy điện thủy triều","level":"Band 7.5+","title":"How a Tidal Power Station Works","text":"Twice a day, the sea rises and falls along the coast, pulled by the gravity of the Moon. Engineers have learned to turn this regular movement into electricity. The key structure is a long wall called a barrage, built across the mouth of a bay. Behind the barrage, the water that is held back forms a large reservoir, a kind of artificial lake whose level rises and falls with the tide.\n\nIn the wall of the barrage, there are openings fitted with sluice gates. These gates control the flow of water in and out of the reservoir. When the tide is high, the gates open and seawater rushes into the reservoir. When the tide falls, the gates open again, and the stored water rushes back out to the sea. In both directions, the moving water passes through turbines, large machines with blades that spin as water pushes against them.\n\nEach turbine is connected to generators, machines that turn the spinning movement into electricity. The electricity then travels through cables to a powerhouse on the shore, where it is prepared for the national grid and sent to homes and factories. Unlike wind or sunshine, tides follow a timetable that can be predicted years in advance, so engineers know exactly when the station will produce power.\n\nTidal power has clear limits. Building a barrage is expensive, and it changes the bay for fish and birds that depend on mudflats at low tide. Engineers also study how a barrage changes the flow of sand along the coast, because beaches downstream can lose sand or gain too much of it. Computer models now predict these changes before building begins, and designers adjust the shape of the wall to protect nearby beaches. Such careful planning takes years, but it helps new stations win support from fishing villages and wildlife groups. For this reason, new projects test smaller turbines placed directly on the seabed, without a wall. These seabed turbines disturb wildlife less, but they produce less power than a full barrage station. Engineers must therefore balance clean energy against cost and damage to nature.","questions":[{"type":"DLC","q":"Sơ đồ nhà máy điện thủy triều: nhãn 1 chỉ bức tường dài chắn ngang cửa vịnh. Từ trong bài cho bức tường này là ___.","why":"Bài viết: bức tường dài chắn ngang cửa vịnh gọi là a barrage.","answer":"barrage"},{"type":"DLC","q":"Sơ đồ nhà máy điện thủy triều: nhãn 2 chỉ các máy có cánh quạt quay khi nước đẩy vào. Từ trong bài là ___.","why":"Bài viết: nước chảy qua turbines, các máy lớn có cánh quạt quay khi nước đẩy vào.","answer":"turbines"},{"type":"DLC","q":"Sơ đồ nhà máy điện thủy triều: nhãn 3 chỉ các cửa điều tiết dòng nước vào ra khỏi hồ chứa. Từ trong bài là ___ gates.","why":"Bài viết: các cửa này gọi là sluice gates, điều tiết dòng nước vào ra khỏi hồ chứa.","answer":"sluice"},{"type":"DLC","q":"Sơ đồ nhà máy điện thủy triều: nhãn 4 chỉ các máy biến chuyển động quay thành điện. Từ trong bài là ___.","why":"Bài viết: mỗi turbine nối với generators, các máy biến chuyển động quay thành điện.","answer":"generators"},{"type":"DLC","q":"Sơ đồ nhà máy điện thủy triều: nhãn 5 chỉ vùng nước trữ sau bức tường chắn. Từ trong bài là ___.","why":"Bài viết: nước giữ lại sau bức tường tạo thành một reservoir lớn.","answer":"reservoir"}],"translation":"Ngày hai lần thủy triều lên xuống do lực hút của Mặt Trăng, kỹ sư biến chuyển động này thành điện. Bức tường dài gọi là barrage chắn ngang cửa vịnh, giữ nước tạo thành hồ chứa reservoir. Các cửa sluice gates điều tiết nước vào ra, nước chảy qua turbines làm cánh quạt quay, turbines nối với generators tạo ra điện đưa về powerhouse. Điện thủy triều dự đoán được chính xác nhưng xây barrage đắt và ảnh hưởng tới cá, chim, nên người ta đang thử turbine đặt trực tiếp dưới đáy biển.","phrases":[{"en":"a barrage","vi":"một đập chắn thủy triều"},{"en":"sluice gates","vi":"cửa cống điều tiết"},{"en":"turbines","vi":"tuabin"},{"en":"generators","vi":"máy phát điện"},{"en":"predicted years in advance","vi":"dự đoán trước nhiều năm"}]},{"topic":"Cực quang","level":"Band 7.5+","title":"Why the Sky Glows: The Northern Lights","text":"On a clear winter night in the far north, the sky can suddenly fill with moving curtains of green light. This display, called the northern lights, begins far from Earth, on the Sun. From time to time, the Sun releases a stream of charged particles known as the solar wind. These particles travel through space for two or three days before they reach our planet.\n\nWhen the particles arrive, Earth's magnetic field guides most of them towards the north and south poles. High above the ground, the particles collide with gases in the upper atmosphere. Each collision gives energy to a gas atom, and when the atom calms down again, it releases that energy as light. Different gases produce different colours, which is why the display is rarely a single shade.\n\nThe most common colour is green, produced by oxygen at a height of about 100 kilometres. Higher up, above 200 kilometres, oxygen can produce a rare red glow instead. Nitrogen, another gas in the atmosphere, adds purple and blue edges to the curtains of light. The shapes also change: sometimes the lights form quiet arcs across the sky, and sometimes they dance and ripple like waves.\n\nThe lights are easiest to see on long, dark winter nights, far from city lights and clouds. Travellers who chase the lights often stay for several nights, because one cloudy night can hide even the strongest display. Local guides advise visitors to dress warmly, bring hot drinks and check the forecast after dark. Some guides also teach visitors the old stories of the northern peoples, who once believed the lights were spirits dancing in the sky or swans flying far above the earth. Scientists now use satellites that watch the Sun to predict strong displays a day or two in advance, and travellers plan whole journeys around these forecasts. Yet even with good predictions, seeing the lights is never certain. Clouds, moonlight and the mood of the Sun itself all play a part, which is why a successful sighting feels like a gift rather than a guarantee.","questions":[{"type":"SAQ","q":"What particles from the Sun cause the northern lights?","answer":"charged particles|solar wind","why":"Đoạn 1: Mặt Trời phóng ra dòng charged particles gọi là solar wind, dòng hạt này gây ra cực quang."},{"type":"SAQ","q":"What gas creates the common green light?","answer":"oxygen","why":"Đoạn 3: màu xanh phổ biến nhất do oxygen tạo ra ở độ cao khoảng 100 km."},{"type":"SAQ","q":"At what height does the green light usually appear?","answer":"100 kilometres|100 km","why":"Đoạn 3: ánh sáng xanh do oxygen tạo ra ở độ cao khoảng 100 kilometres."},{"type":"SAQ","q":"In which season are the northern lights easiest to see?","answer":"winter|winter nights","why":"Đoạn 4: cực quang dễ thấy nhất trong những đêm đông dài và tối."},{"type":"SAQ","q":"What do scientists use to predict strong displays?","answer":"satellites","why":"Đoạn 4: các nhà khoa học dùng satellites quan sát Mặt Trời để dự báo những đợt cực quang mạnh."}],"translation":"Vào đêm đông quang đãng ở vùng cực bắc, bầu trời có thể rực lên những dải sáng xanh chuyển động gọi là cực quang. Hiện tượng bắt đầu từ Mặt Trời, nơi phóng ra dòng hạt mang điện gọi là gió Mặt Trời. Từ trường Trái Đất dẫn các hạt về hai cực, chúng va chạm với khí quyển trên cao và phát ra ánh sáng: oxygen tạo màu xanh ở độ cao khoảng 100 km, nitrogen tạo viền tím và xanh dương. Cực quang dễ thấy nhất trong đêm đông dài, xa ánh đèn thành phố, và vệ tinh quan sát Mặt Trời giúp dự báo trước một hai ngày.","phrases":[{"en":"charged particles","vi":"các hạt mang điện"},{"en":"the solar wind","vi":"gió Mặt Trời"},{"en":"collide with gases","vi":"va chạm với các khí"},{"en":"the most common colour is green","vi":"màu phổ biến nhất là xanh lá"},{"en":"a gift rather than a guarantee","vi":"một món quà hơn là điều chắc chắn"}]},{"topic":"Bài tập về nhà","level":"Band 6.5","title":"Is Homework Useful?","text":"Almost every pupil knows the evening routine: school ends, dinner is eaten, and then homework begins. Teachers set homework because they believe practice outside class helps pupils remember what they learned. A short task, such as reading a chapter or solving ten maths problems, can indeed strengthen memory. The author argues that this kind of brief, focused homework is useful, and that most pupils can finish it without stress.\n\nProblems begin when homework grows long. A pupil who spends three hours every evening on assignments has little time left for sport, hobbies or family conversation. Worse, late homework can steal sleep, and tired pupils learn less the next day. Research quoted in the article links very heavy homework loads with higher stress, especially for younger children. The author therefore draws a clear line: short homework helps, but long homework harms.\n\nPupils themselves have mixed feelings. Many say they dislike homework, yet the same pupils often admit that a small task helps them feel ready for the next lesson. What they object to is not practice itself but repetition without purpose: copying the same sentences five times, or solving fifty nearly identical problems. Such tasks, the author agrees, waste time and teach pupils to hate learning.\n\nTeachers also face a difficult choice. If they set no homework, some pupils forget the lesson by the next morning. If they set too much, pupils and parents complain about lost evenings. The best teachers, the author notes, set short tasks and explain clearly why each task matters, so pupils see homework as practice rather than punishment.\n\nThe author's conclusion is practical. Schools should limit homework to about thirty minutes a day for younger pupils and one hour for older pupils, and every task should have a clear purpose that pupils can understand. Teachers should also check homework quickly and discuss common mistakes in class, so that the work leads to learning rather than to tired evenings. Used in this limited, purposeful way, homework is a helpful tool; used without limits, it becomes a burden.","questions":[{"type":"YNNG","q":"Theo tác giả, bài tập ngắn và tập trung giúp học sinh ghi nhớ bài học.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":0,"why":"Đoạn 1: tác giả cho rằng bài tập ngắn, tập trung giúp củng cố trí nhớ → Yes."},{"type":"YNNG","q":"Theo tác giả, mọi học sinh đều thích làm bài tập về nhà.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn 3: nhiều học sinh nói họ không thích bài tập về nhà → không phải mọi học sinh đều thích → No."},{"type":"YNNG","q":"Theo tác giả, bài tập về nhà quá nhiều giúp học sinh ngủ ngon hơn.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn 2: bài tập muộn có thể lấy mất giấc ngủ, học sinh mệt sẽ học kém hơn hôm sau → ngược lại → No."},{"type":"YNNG","q":"Theo tác giả, chính phủ đã cấm bài tập về nhà ở mọi trường học.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":2,"why":"Bài không nhắc gì tới việc chính phủ cấm bài tập về nhà → Không cho biết."},{"type":"YNNG","q":"Theo tác giả, trường học nên giới hạn thời gian làm bài tập về nhà.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":0,"why":"Đoạn 4: tác giả kết luận trường nên giới hạn bài tập khoảng ba mươi phút với học sinh nhỏ và một giờ với học sinh lớn → Yes."}],"translation":"Giáo viên giao bài tập vì tin rằng luyện tập ngoài lớp giúp học sinh ghi nhớ. Bài tập ngắn, tập trung đúng là có ích và ít gây căng thẳng. Nhưng bài tập quá dài lấy mất thời gian thể thao, trò chuyện gia đình và giấc ngủ, gây căng thẳng, nhất là với trẻ nhỏ. Học sinh không ghét luyện tập mà ghét lặp lại vô mục đích. Kết luận của tác giả: trường nên giới hạn bài tập khoảng 30 phút với học sinh nhỏ và một giờ với học sinh lớn, mỗi bài phải có mục đích rõ ràng.","phrases":[{"en":"strengthen memory","vi":"củng cố trí nhớ"},{"en":"steal sleep","vi":"lấy mất giấc ngủ"},{"en":"higher stress","vi":"căng thẳng cao hơn"},{"en":"repetition without purpose","vi":"sự lặp lại vô mục đích"},{"en":"a helpful tool","vi":"một công cụ hữu ích"}]},{"topic":"Ruộng bậc thang","level":"Band 6.5","title":"Rice on the Hills: Terraced Fields","text":"In mountain regions, flat land for farming is rare, yet people have grown rice on steep slopes for thousands of years. Their solution is the terraced field: a series of flat steps cut into steep hillsides, each step like a wide stair in a giant staircase. From a distance, a terraced hillside looks like a green sculpture, but every step is a working field, carefully built and maintained by hand.\n\nEach terrace holds a shallow layer of water, which rice needs in order to grow. Low walls of earth and stone around each step keep the water from running downhill. Farmers open small gaps in the walls to let water flow gently from one terrace to the next, so that the whole hillside shares one slow stream. In the rainy season, the terraces fill naturally; in the dry season, farmers guide water from mountain streams down through the steps.\n\nRice needs the most water while it is growing, and far less once the grains begin to harden. Farmers therefore watch the plants closely and adjust the water level step by step. Too much water can rot the roots, while too little water leaves the plants weak. This careful control is one reason why terraced rice often grows well even on land that looks impossible for farming.\n\nSome terraced fields have been farmed for more than a thousand years, passed from parents to children through many generations. The walls must be repaired after heavy rain, and the steps must be levelled each year before planting. Modern machines cannot climb the narrow steps, so most of the work is still done by hand, with simple tools and great patience.\n\nToday, terraced fields face a new problem: young people leave mountain villages for city jobs, and empty terraces can collapse without care. In some regions, visitors now pay to walk among the terraces, and this tourism income helps families stay and keep the fields alive. The terraces survive, therefore, not only as farms but as living landscapes that connect food, work and beauty.","questions":[{"type":"TCOMP","q":"Ruộng bậc thang là các thửa ruộng phẳng cắt vào ___ dốc.","answer":"steep hillsides|hillsides","why":"Đoạn 1: ruộng bậc thang là dãy bậc phẳng cắt vào steep hillsides."},{"type":"TCOMP","q":"Các bờ thấp quanh mỗi thửa ruộng làm bằng đất và ___ giữ nước không chảy xuống dốc.","answer":"stone","why":"Đoạn 2: bờ thấp bằng earth and stone quanh mỗi bậc giữ nước không chảy xuống dốc."},{"type":"TCOMP","q":"Lúa cần nhiều nước nhất trong giai đoạn cây đang ___.","answer":"growing","why":"Đoạn 3: lúa cần nhiều nước nhất while it is growing."},{"type":"TCOMP","q":"Một số ruộng bậc thang đã được canh tác hơn ___ năm.","answer":"a thousand years|1000 years","why":"Đoạn 4: một số ruộng bậc thang đã được canh tác hơn a thousand years."},{"type":"TCOMP","q":"Vào mùa khô, nông dân dẫn nước từ các ___ trên núi xuống qua các bậc ruộng.","answer":"streams|mountain streams","why":"Đoạn 2: mùa khô, nông dân dẫn nước từ mountain streams xuống qua các bậc ruộng."}],"translation":"Ở vùng núi ít đất phẳng, người ta trồng lúa trên sườn dốc bằng ruộng bậc thang: dãy bậc phẳng cắt vào sườn đồi dốc như cầu thang khổng lồ. Mỗi bậc giữ một lớp nước nông nhờ bờ thấp bằng đất và đá, nước chảy nhẹ từ bậc này sang bậc khác. Lúa cần nhiều nước nhất khi đang lớn, nông dân phải điều chỉnh mực nước từng bậc. Một số ruộng đã canh tác hơn nghìn năm, làm bằng tay vì máy móc không leo được bậc hẹp. Nay giới trẻ rời làng lên thành phố, du lịch thăm ruộng giúp gia đình ở lại giữ ruộng.","phrases":[{"en":"terraced field","vi":"ruộng bậc thang"},{"en":"steep hillsides","vi":"sườn đồi dốc"},{"en":"walls of earth and stone","vi":"bờ bằng đất và đá"},{"en":"while it is growing","vi":"trong khi cây đang lớn"},{"en":"passed from parents to children","vi":"truyền từ cha mẹ sang con cái"}]},{"topic":"Cửa hàng nhỏ","level":"Band 6.5","title":"Why Small Shops Matter","text":"A. On a busy high street, the small shop is easy to overlook. It has no bright national advertising and no huge car park. Yet the shopkeeper often knows regular customers by name, asks after their families and remembers what they usually buy. For older residents who live alone, this daily conversation may be the warmest human contact of the day. A small shop, in this sense, is not only a place to buy things but a small social centre.\n\nB. Small shops also keep money close to home. One survey found that for every 100 dollars spent in a small local shop, about 68 dollars stay in the local area, paying local staff, local suppliers and local taxes. At a large chain store, the same survey found, only about 43 dollars stay local, because most of the profit travels to a distant head office. Supporters of small shops argue that shopping locally is therefore a quiet way of investing in one's own town.\n\nC. When small shops close, the whole street suffers. Empty windows make a high street look uncared for, and fewer shoppers come, which hurts the shops that remain. In some towns, the closure of a single bakery or bookshop has started a slow decline that ended with half the street empty. Residents then must travel further for basic goods, which is hardest for people without a car.\n\nD. Small shops also provide services that large stores rarely offer. Many act as collection points for parcels, sell tickets for local events, or offer advice about products they know well. A shopkeeper who has sold bicycles for twenty years can explain the difference between two models far better than a general assistant in a huge store. This expert, personal service is the main reason many customers stay loyal even when prices are slightly higher.\n\nE. The future of small shops may lie in combining old strengths with new tools. Many now take orders online and deliver by bicycle to nearby homes, keeping the personal touch while matching the convenience of large retailers. If towns protect affordable rents for small traders and customers keep choosing local shops for at least part of their shopping, the high street can remain a lively place where commerce and community meet.","questions":[{"type":"MINFO","q":"Đoạn nào nói rằng tiền chi ở cửa hàng nhỏ phần lớn ở lại địa phương?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":1,"why":"Đoạn B: khảo sát cho thấy cứ 100 đô la chi ở cửa hàng nhỏ thì khoảng 68 đô la ở lại địa phương."},{"type":"MINFO","q":"Đoạn nào nói rằng chủ cửa hàng biết tên khách quen và hỏi thăm gia đình họ?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":0,"why":"Đoạn A: chủ cửa hàng thường biết tên khách quen, hỏi thăm gia đình và nhớ họ hay mua gì."},{"type":"MINFO","q":"Đoạn nào mô tả phố chính trở nên vắng vẻ khi cửa hàng nhỏ đóng cửa?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":2,"why":"Đoạn C: khi cửa hàng nhỏ đóng cửa, cửa sổ trống làm phố trông thiếu chăm sóc và ngày càng ít khách tới."},{"type":"MINFO","q":"Đoạn nào nêu các dịch vụ của cửa hàng nhỏ như nhận bưu kiện và bán vé sự kiện địa phương?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":3,"why":"Đoạn D: nhiều cửa hàng nhỏ làm điểm nhận bưu kiện, bán vé sự kiện địa phương và tư vấn sản phẩm."},{"type":"MINFO","q":"Đoạn nào nói về cách cửa hàng nhỏ kết hợp bán hàng trực tuyến và giao hàng bằng xe đạp?","o":["A","B","C","D","E"],"options":["A","B","C","D","E"],"a":4,"why":"Đoạn E: nhiều cửa hàng nhỏ nay nhận đơn trực tuyến và giao bằng xe đạp tới nhà gần đó."}],"translation":"Cửa hàng nhỏ dễ bị xem nhẹ nhưng chủ cửa hàng thường biết tên khách quen và trò chuyện hằng ngày, trở thành trung tâm xã hội nhỏ. Khảo sát cho thấy cứ 100 đô la chi ở cửa hàng nhỏ thì khoảng 68 đô la ở lại địa phương, cao hơn nhiều so với chuỗi lớn. Khi cửa hàng nhỏ đóng cửa, cả phố vắng dần và người không có xe phải đi xa mua đồ thiết yếu. Cửa hàng nhỏ còn nhận bưu kiện, bán vé sự kiện và tư vấn chuyên sâu. Tương lai của chúng nằm ở việc kết hợp nét riêng với bán hàng trực tuyến và giao hàng bằng xe đạp.","phrases":[{"en":"regular customers by name","vi":"khách quen theo tên"},{"en":"stay in the local area","vi":"ở lại địa phương"},{"en":"the whole street suffers","vi":"cả con phố chịu thiệt"},{"en":"collection points for parcels","vi":"điểm nhận bưu kiện"},{"en":"combining old strengths with new tools","vi":"kết hợp điểm mạnh cũ với công cụ mới"}]},{"topic":"Tình nguyện bảo vệ rùa biển","level":"Band 6.5","title":"Volunteers Who Guard Sea Turtles","text":"A. Every year, between May and September, female sea turtles return to the sandy beach where they were born. They come ashore at night, when the beach is quiet and dark, and dig deep nests in the sand. Each turtle lays more than a hundred eggs, covers them carefully, and then returns to the sea, leaving the eggs to develop alone for about two months. The mother never sees her babies, yet the beach she chose will decide whether they survive.\n\nB. The nests face many dangers. Wild dogs dig them up, bright lights confuse the mother turtles, and careless visitors can crush the sand above the eggs. For this reason, a team of volunteers patrols the beach every night during the nesting season. They mark each new nest with sticks and ropes, guard it from animals, and ask hotels nearby to dim their lights after ten o'clock.\n\nC. The most dangerous journey begins when the baby turtles hatch. Guided only by the moonlight on the sea, the tiny turtles crawl from the nest towards the water. The crawl is short but full of danger: crabs, birds and even strong waves can kill them before they reach safety. Volunteers walk beside the babies, gently guiding them past rubbish and keeping dogs away, but they never carry the turtles, because the crawl itself makes the babies stronger for life in the sea.\n\nD. The project succeeds because local people take part. Fishermen report new nests, schoolchildren help clean the beach, and hotel owners explain the rules to their guests. The project leaders pay local guides to lead small night visits, so that protecting turtles also brings income to the village. When a community earns from conservation, the leaders say, it protects nature with far more energy than any outside team could.\n\nE. Visitors are welcome, but they must follow strict rules. They may watch the turtles only from a distance, they must not use camera flash, and they must keep their voices low. The volunteers explain that one bright flash can send a mother turtle back to the sea without laying her eggs. Most visitors accept the rules gladly, because they understand that a quiet beach tonight means more turtles in the sea tomorrow.","questions":[{"type":"MSEND","q":"Theo bài, rùa biển mẹ lên bờ đẻ trứng","o":["vào ban ngày, khi bãi biển đông người","vào ban đêm, khi bãi biển yên tĩnh và tối","chỉ khi có tình nguyện viên đi cùng","vào mùa đông lạnh giá"],"options":["vào ban ngày, khi bãi biển đông người","vào ban đêm, khi bãi biển yên tĩnh và tối","chỉ khi có tình nguyện viên đi cùng","vào mùa đông lạnh giá"],"a":1,"why":"Đoạn A: rùa mẹ lên bờ vào ban đêm, khi bãi biển yên tĩnh và tối, để đào tổ đẻ trứng."},{"type":"MSEND","q":"Theo bài, tình nguyện viên bảo vệ tổ trứng khỏi","o":["mưa lớn và thủy triều","chó hoang, ánh đèn mạnh và du khách bất cẩn","cá mập và sóng lớn","chính rùa mẹ quay lại tổ"],"options":["mưa lớn và thủy triều","chó hoang, ánh đèn mạnh và du khách bất cẩn","cá mập và sóng lớn","chính rùa mẹ quay lại tổ"],"a":1,"why":"Đoạn B: chó hoang đào tổ, ánh đèn mạnh làm rùa mẹ bối rối, du khách bất cẩn có thể làm vỡ cát trên trứng."},{"type":"MSEND","q":"Theo bài, rùa con gặp nguy hiểm nhất khi","o":["còn nằm trong trứng","bò từ tổ ra biển theo ánh trăng","đã bơi xa khỏi bờ","được tình nguyện viên bế đi"],"options":["còn nằm trong trứng","bò từ tổ ra biển theo ánh trăng","đã bơi xa khỏi bờ","được tình nguyện viên bế đi"],"a":1,"why":"Đoạn C: hành trình nguy hiểm nhất bắt đầu khi rùa con nở và bò từ tổ ra biển theo ánh trăng trên mặt biển."},{"type":"MSEND","q":"Theo bài, dự án thành công vì","o":["chỉ có chuyên gia nước ngoài tham gia","người dân địa phương cùng tham gia và hưởng lợi từ bảo tồn","du khách được phép dùng đèn flash","rùa mẹ ở lại chăm sóc rùa con"],"options":["chỉ có chuyên gia nước ngoài tham gia","người dân địa phương cùng tham gia và hưởng lợi từ bảo tồn","du khách được phép dùng đèn flash","rùa mẹ ở lại chăm sóc rùa con"],"a":1,"why":"Đoạn D: dự án thành công vì người dân địa phương tham gia, và bảo vệ rùa còn mang thu nhập cho làng."},{"type":"MSEND","q":"Theo bài, du khách xem rùa được khuyên","o":["đứng xem từ xa, không dùng đèn flash và nói nhỏ","bế rùa con giúp chúng ra biển nhanh hơn","bật đèn sáng để chụp ảnh đẹp","đào cát tìm tổ trứng"],"options":["đứng xem từ xa, không dùng đèn flash và nói nhỏ","bế rùa con giúp chúng ra biển nhanh hơn","bật đèn sáng để chụp ảnh đẹp","đào cát tìm tổ trứng"],"a":0,"why":"Đoạn E: du khách chỉ được xem từ xa, không dùng đèn flash và phải nói nhỏ."}],"translation":"Từ tháng 5 tới tháng 9 hằng năm, rùa biển mẹ quay về bãi cát nơi mình sinh ra, lên bờ ban đêm đào tổ đẻ hơn một trăm trứng rồi trở lại biển. Tổ trứng đối mặt với chó hoang, ánh đèn mạnh và du khách bất cẩn nên tình nguyện viên tuần tra mỗi đêm, đánh dấu tổ và nhờ khách sạn giảm đèn sau mười giờ. Rùa con nở ra bò về phía biển theo ánh trăng, tình nguyện viên đi bên cạnh hướng dẫn nhưng không bế chúng. Dự án thành công nhờ người dân địa phương tham gia và hưởng lợi, du khách phải xem từ xa, không dùng đèn flash và nói nhỏ.","phrases":[{"en":"come ashore at night","vi":"lên bờ vào ban đêm"},{"en":"patrols the beach every night","vi":"tuần tra bãi biển mỗi đêm"},{"en":"guided only by the moonlight","vi":"chỉ được dẫn đường bởi ánh trăng"},{"en":"local people take part","vi":"người dân địa phương tham gia"},{"en":"from a distance","vi":"từ xa"}]}]);
CONTENT.roleplay.push.apply(CONTENT.roleplay, [{"title":"Buying a Notebook in a Shop - Mua vở ở cửa hàng","setting":"Bạn vào một cửa hàng văn phòng phẩm gần nhà để mua vở và bút cho năm học mới. Bạn hỏi màu sắc, giá tiền và thanh toán lịch sự.","partner":"Nhân viên cửa hàng","goal":"Hỏi được màu và giá, mua đủ vở và bút rồi thanh toán lịch sự.","band":"Band 2.0","chunks":["I want to buy a notebook","I like the blue one","How much is it","I want a pen, too","Thank you very much"],"turns":[{"from":"partner","text":"Hello. Can I help you?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Chào bạn. Tôi muốn mua một quyển vở, làm ơn.","expect":"Hello. I want to buy a notebook, please.","keywords":["hello","want","buy","notebook"],"hint":"Hello. I want to buy...","tip":"Nối âm: want to đọc liền thành một nhịp. Ngữ điệu lên nhẹ ở please để nghe lịch sự.","chunks":["I want to buy a notebook"]},{"from":"partner","text":"We have blue notebooks and red notebooks. Which colour do you like?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Tôi thích quyển màu xanh. Nó bao nhiêu tiền ạ?","expect":"I like the blue one. How much is it?","keywords":["like","blue","how much"],"hint":"I like the blue one....","tip":"Câu hỏi How much lên giọng nhẹ ở cuối. Phát âm blue rõ âm l, không đọc thành bu.","chunks":["How much is it"]},{"from":"partner","text":"It is three dollars. Do you need a pen, too?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Vâng, tôi cũng muốn một cái bút. Cảm ơn bạn rất nhiều.","expect":"Yes, I want a pen, too. Thank you very much.","keywords":["want","pen","thank you"],"hint":"Yes, I want a pen,...","tip":"Ngữ điệu: too lên giọng nhẹ, thank you very much xuống giọng để chốt lời cảm ơn.","chunks":["I want a pen, too","Thank you very much"]}]},{"title":"Asking the Way to the Bus Stop - Hỏi đường ra bến xe buýt","setting":"Bạn đang đi bộ trong một khu phố lạ và cần ra bến xe buýt. Bạn hỏi một người đi đường và xác nhận lại chỉ dẫn trước khi đi.","partner":"Người đi đường","goal":"Hỏi được đường ra bến xe buýt và xác nhận lại chỉ dẫn cho chắc chắn.","band":"Band 2.0","chunks":["Excuse me, where is","Go straight","turn left at the bank","next to the park","Thank you very much"],"turns":[{"from":"partner","text":"Hello. Do you need some help?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Xin lỗi, bến xe buýt ở đâu ạ?","expect":"Excuse me, where is the bus stop, please?","keywords":["excuse me","where is","bus stop"],"hint":"Excuse me, where is...","tip":"Câu hỏi Where lên giọng nhẹ ở cuối. Nối âm: where is đọc liền thành một nhịp.","chunks":["Excuse me, where is"]},{"from":"partner","text":"Go straight, then turn left at the bank. The bus stop is next to the park."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Đi thẳng rồi rẽ trái ở ngân hàng, phải không ạ?","expect":"Go straight and turn left at the bank, right?","keywords":["go straight","turn left","bank"],"hint":"Go straight and...","tip":"Câu hỏi xác nhận right lên giọng ở cuối. Nhấn vào straight và left để người nghe dễ theo.","chunks":["Go straight","turn left at the bank"]},{"from":"partner","text":"Yes, right. It is only five minutes from here."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Cảm ơn bạn rất nhiều. Tạm biệt!","expect":"Thank you very much. Goodbye!","keywords":["thank you","goodbye"],"hint":"Thank you very much....","tip":"Ngữ điệu: thank you very much nói ấm và rõ, goodbye xuống giọng nhẹ để chào tạm biệt.","chunks":["Thank you very much"]}]},{"title":"Ordering Food at a Small Restaurant - Gọi món ở quán ăn nhỏ","setting":"Bạn vào một quán ăn nhỏ buổi tối cùng bạn bè. Nhân viên đưa thực đơn và hỏi bạn muốn ăn, uống gì.","partner":"Nhân viên phục vụ","goal":"Gọi được món ăn, đồ uống và chốt đơn lịch sự.","band":"Band 2.5","chunks":["Good evening","I would like rice and chicken","a glass of orange juice","No, thank you","That is all"],"turns":[{"from":"partner","text":"Good evening. Here is the menu. What would you like?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Chào buổi tối. Tôi muốn cơm và gà, làm ơn.","expect":"Good evening. I would like rice and chicken, please.","keywords":["good evening","would like","rice","chicken"],"hint":"Good evening. I would like...","tip":"Cụm would like đọc mềm và lịch sự hơn want. Nhấn vào rice và chicken để nhân viên nghe rõ món.","chunks":["I would like rice and chicken"]},{"from":"partner","text":"Would you like something to drink?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Vâng, tôi muốn một ly nước cam, làm ơn.","expect":"Yes, I would like a glass of orange juice, please.","keywords":["would like","glass","orange juice"],"hint":"Yes, I would like a glass...","tip":"Phát âm: orange có âm đầu o rõ, juice có âm cuối s nhẹ. Nói cả cụm a glass of orange juice trong một hơi.","chunks":["a glass of orange juice"]},{"from":"partner","text":"Anything else? Our soup today is very good."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Không, cảm ơn. Thế là đủ rồi.","expect":"No, thank you. That is all.","keywords":["thank you","that is all"],"hint":"No, thank you....","tip":"Ngữ điệu: that is all xuống giọng để chốt đơn. Nói No nhẹ nhàng kèm thank you để nghe lịch sự.","chunks":["That is all"]}]},{"title":"Buying a Train Ticket - Mua vé tàu","setting":"Bạn ra ga mua vé tàu đi Hà Nội vào sáng mai. Nhân viên bán vé hỏi điểm đến, loại vé và báo giá.","partner":"Nhân viên bán vé","goal":"Mua được vé tàu khứ hồi đi Hà Nội và thanh toán đúng giá.","band":"Band 3.0","chunks":["I want to go to Hanoi","a return ticket","How much is it","Here is the money","Thank you very much"],"turns":[{"from":"partner","text":"Good morning. Where do you want to go?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Chào buổi sáng. Tôi muốn đi Hà Nội vào sáng mai.","expect":"Good morning. I want to go to Hanoi tomorrow morning.","keywords":["good morning","want","hanoi","tomorrow"],"hint":"Good morning. I want to go...","tip":"Nối âm: want to go đọc liền thành một nhịp. Nhấn vào Hanoi và tomorrow morning để rõ điểm đến và thời gian.","chunks":["I want to go to Hanoi"]},{"from":"partner","text":"The train leaves at eight o'clock. Do you want a single ticket or a return ticket?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Tôi muốn vé khứ hồi. Nó bao nhiêu tiền ạ?","expect":"I want a return ticket. How much is it, please?","keywords":["return ticket","how much"],"hint":"I want a return ticket....","tip":"Phát âm: return nhấn âm hai, ticket nhấn âm đầu. Câu hỏi How much lên giọng nhẹ ở cuối.","chunks":["a return ticket","How much is it"]},{"from":"partner","text":"It is one hundred thousand dong."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Đây là tiền. Cảm ơn bạn rất nhiều.","expect":"Here is the money. Thank you very much.","keywords":["money","thank you"],"hint":"Here is the money....","tip":"Ngữ điệu: here is the money nói rõ ràng, thank you very much xuống giọng để kết thúc giao dịch.","chunks":["Thank you very much"]}]},{"title":"Borrowing a Book at the Library - Mượn sách ở thư viện","setting":"Bạn vào thư viện tìm sách về động vật. Thủ thư chỉ vị trí sách và nhắc thời hạn mượn.","partner":"Thủ thư","goal":"Tìm được sách về động vật, biết thời hạn mượn và hứa trả đúng hạn.","band":"Band 3.0","chunks":["I am looking for a book","about animals","How long can I borrow","I will return it on time","Thank you"],"turns":[{"from":"partner","text":"Hello. Can I help you find a book?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Chào bạn. Tôi đang tìm một cuốn sách về động vật.","expect":"Hello. I am looking for a book about animals.","keywords":["looking for","book","animals"],"hint":"Hello. I am looking for...","tip":"Cụm looking for đọc liền thành một nhịp, âm cuối của looking nối sang for. Nhấn vào book và animals.","chunks":["I am looking for a book"]},{"from":"partner","text":"Animal books are on the second floor, next to the science books."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Tôi có thể mượn cuốn sách này trong bao lâu?","expect":"How long can I borrow this book?","keywords":["how long","borrow","book"],"hint":"How long can I borrow...","tip":"Câu hỏi How long lên giọng nhẹ ở cuối. Phát âm borrow rõ âm r ở giữa, không đọc thành boro.","chunks":["How long can I borrow"]},{"from":"partner","text":"You can keep it for two weeks. Please return it on time."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Cảm ơn bạn. Tôi sẽ trả đúng hạn.","expect":"Thank you. I will return it on time.","keywords":["thank you","return","on time"],"hint":"Thank you. I will return...","tip":"Ngữ điệu: on time xuống giọng để khẳng định lời hứa trả đúng hạn. Nối âm: return it đọc liền.","chunks":["I will return it on time"]}]},{"title":"Booking a Simple Hotel Room - Đặt phòng khách sạn đơn giản","setting":"Bạn gọi điện cho khách sạn Sunrise để đặt một phòng đơn trong hai đêm. Nhân viên lễ tân báo giá, tiện nghi và hỏi tên bạn.","partner":"Nhân viên lễ tân","goal":"Đặt được phòng đơn hai đêm, xác nhận tiện nghi và để lại tên, ngày đến.","band":"Band 3.5","chunks":["I would like to book a single room","for two nights","Does the room have wifi","air conditioning","My name is Linh"],"turns":[{"from":"partner","text":"Good afternoon. Welcome to Sunrise Hotel. How can I help you?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Chào buổi chiều. Tôi muốn đặt một phòng đơn trong hai đêm, làm ơn.","expect":"Good afternoon. I would like to book a single room for two nights, please.","keywords":["good afternoon","book","single room","two nights"],"hint":"Good afternoon. I would like to book...","tip":"Cụm would like to book đọc mềm và liền mạch. Nhấn vào single room và two nights để rõ yêu cầu đặt phòng.","chunks":["I would like to book a single room"]},{"from":"partner","text":"A single room costs 500,000 dong per night, including breakfast."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Phòng có wifi và điều hòa không ạ?","expect":"Does the room have wifi and air conditioning?","keywords":["room","wifi","air conditioning"],"hint":"Does the room have...","tip":"Câu hỏi Yes/No lên giọng ở cuối. Phát âm wifi rõ hai âm tiết, conditioning nhấn âm hai.","chunks":["air conditioning"]},{"from":"partner","text":"Yes, it has both. May I have your name, please?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Tên tôi là Linh. Tôi sẽ đến vào thứ Sáu.","expect":"My name is Linh. I will arrive on Friday.","keywords":["name","linh","arrive","friday"],"hint":"My name is Linh....","tip":"Ngữ điệu: my name is Linh nói rõ từng chữ vì đây là thông tin quan trọng, arrive nhấn âm hai.","chunks":["My name is Linh"]}]},{"title":"Complaining about a Dish - Phàn nàn về món ăn","setting":"Bạn đang ăn tối ở nhà hàng thì phát hiện món ăn quá mặn và đã nguội. Bạn phàn nàn lịch sự với nhân viên phục vụ.","partner":"Nhân viên phục vụ","goal":"Phàn nàn lịch sự về món ăn, nhận món mới và cảm ơn nhân viên.","band":"Band 4.0","chunks":["Excuse me","this dish is too salty","a glass of water","Thank you for your help","I appreciate it"],"turns":[{"from":"partner","text":"Is everything all right with your food?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Xin lỗi, món ăn này quá mặn và đã nguội.","expect":"Excuse me, this dish is too salty and it is cold.","keywords":["excuse me","dish","salty","cold"],"hint":"Excuse me, this dish...","tip":"Giọng điềm tĩnh, không gắt: excuse me nói nhẹ để mở đầu phàn nàn lịch sự. Nhấn vào salty và cold.","chunks":["this dish is too salty"]},{"from":"partner","text":"I am very sorry. I will ask the kitchen to make a new one for you."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Cảm ơn bạn. Tôi cũng muốn thêm một ly nước, làm ơn.","expect":"Thank you. I would also like a glass of water, please.","keywords":["thank you","also","glass of water"],"hint":"Thank you. I would also like...","tip":"Từ also nhấn nhẹ để thêm yêu cầu mà không làm mất mạch câu. Cụm a glass of water đọc liền trong một hơi.","chunks":["a glass of water"]},{"from":"partner","text":"Of course. Your new dish will come in ten minutes."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Cảm ơn bạn đã giúp đỡ. Tôi rất cảm kích.","expect":"Thank you for your help. I appreciate it.","keywords":["thank you","help","appreciate"],"hint":"Thank you for your help....","tip":"Phát âm: appreciate nhấn âm hai, âm cuối t nhẹ. Ngữ điệu xuống ở cuối để lời cảm ơn nghe chân thành.","chunks":["Thank you for your help"]}]},{"title":"Returning a Faulty Shirt - Đổi trả áo bị lỗi","setting":"Bạn mang chiếc áo mới mua hôm qua ra cửa hàng vì một chiếc nút bị hỏng. Nhân viên hỏi hóa đơn và đưa ra hai lựa chọn đổi hoặc hoàn tiền.","partner":"Nhân viên cửa hàng","goal":"Đổi được chiếc áo bị lỗi sang chiếc khác cùng cỡ một cách lịch sự.","band":"Band 4.5","chunks":["exchange this shirt","a button is broken","here is the receipt","I bought it yesterday","in the same size"],"turns":[{"from":"partner","text":"Hello. How can I help you today?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Chào bạn. Tôi muốn đổi chiếc áo này vì một chiếc nút bị hỏng.","expect":"Hello. I would like to exchange this shirt because a button is broken.","keywords":["exchange","shirt","button","broken"],"hint":"Hello. I would like to exchange...","tip":"Phát âm: exchange nhấn âm hai, broken rõ âm cuối n. Nói because chậm một nhịp để tách lý do đổi hàng.","chunks":["exchange this shirt"]},{"from":"partner","text":"Do you have the receipt with you?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Vâng, đây là hóa đơn. Tôi đã mua nó hôm qua.","expect":"Yes, here is the receipt. I bought it yesterday.","keywords":["receipt","bought","yesterday"],"hint":"Yes, here is the receipt....","tip":"Phát âm: receipt có âm p câm, đọc là rơ-siit; bought là dạng quá khứ của buy, âm cuối t rõ.","chunks":["here is the receipt"]},{"from":"partner","text":"You can choose another shirt in the same size, or we can give you a refund."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Tôi muốn đổi sang một chiếc áo khác cùng cỡ, làm ơn.","expect":"I would like another shirt in the same size, please.","keywords":["another shirt","same size"],"hint":"I would like another shirt...","tip":"Cụm in the same size đọc liền thành một nhịp. Ngữ điệu please lên nhẹ để nghe lịch sự.","chunks":["in the same size"]}]},{"title":"A Simple Interview for a Weekend Job - Phỏng vấn việc làm thêm cuối tuần","setting":"Bạn tới phỏng vấn cho một công việc làm thêm cuối tuần tại cửa hàng. Người quản lý hỏi lý do ứng tuyển, thời gian rảnh và mời bạn đặt câu hỏi.","partner":"Người quản lý cửa hàng","goal":"Trả lời rõ ràng, lịch sự về lý do ứng tuyển và thời gian rảnh, rồi hỏi về giờ làm việc.","band":"Band 4.5","chunks":["this weekend job","gain experience","free on both days","I can start this Saturday","What time does the shift start"],"turns":[{"from":"partner","text":"Good morning. Please tell me why you want this weekend job."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Chào buổi sáng. Tôi muốn công việc cuối tuần này vì tôi muốn có kinh nghiệm và trang trải học phí.","expect":"Good morning. I want this weekend job because I want to gain experience and pay for my studies.","keywords":["weekend job","gain experience","studies"],"hint":"Good morning. I want this weekend job...","tip":"Ngữ điệu tự tin: xuống giọng ở cuối câu khẳng định. Nhấn vào experience và studies để lý do nghe thuyết phục.","chunks":["gain experience"]},{"from":"partner","text":"Can you work on both Saturday and Sunday?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Vâng, tôi rảnh cả hai ngày và có thể bắt đầu vào thứ Bảy này.","expect":"Yes, I am free on both days, and I can start this Saturday.","keywords":["free","both days","start","saturday"],"hint":"Yes, I am free on both days,...","tip":"Nghỉ ngắn sau dấu phẩy để tách hai ý: rảnh cả hai ngày và bắt đầu thứ Bảy này. Nhấn vào free và start.","chunks":["free on both days"]},{"from":"partner","text":"Good. Do you have any questions for us?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Ca làm việc bắt đầu lúc mấy giờ ạ?","expect":"What time does the shift start, please?","keywords":["what time","shift","start"],"hint":"What time does the shift...","tip":"Câu hỏi What time lên giọng nhẹ ở cuối. Phát âm shift rõ âm sh đầu, không đọc thành sit.","chunks":["the shift start"]}]},{"title":"Negotiating a Work Contract - Đàm phán hợp đồng công việc","setting":"Bạn nhận được lời mời làm trợ lý marketing và tới gặp giám đốc nhân sự để trao đổi về lương, thời gian thử việc, làm việc từ xa và các điều khoản hợp đồng trước khi ký. Giọng điệu trang trọng, lịch sự.","partner":"Giám đốc nhân sự","goal":"Đàm phán thành công mức lương, thời gian thử việc và làm việc từ xa, chốt các điều khoản ghi rõ trong hợp đồng.","band":"Band 7.5+","chunks":["accept the position in principle","below my expectation","on condition that","written clearly into the contract","look forward to joining your team"],"turns":[{"from":"partner","text":"Thank you for coming in. We are pleased to offer you the position of marketing assistant, starting next month."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Cảm ơn quý công ty đã đưa ra lời mời. Tôi rất vui lòng nhận vị trí này về nguyên tắc, nhưng tôi muốn trao đổi thêm về mức lương và giờ làm việc trước khi ký hợp đồng.","expect":"Thank you very much for the offer. I am delighted to accept the position in principle, but I would like to discuss the salary and working hours before I sign the contract.","keywords":["delighted","accept","in principle","salary","working hours"],"hint":"Thank you very much for the offer....","tip":"Giọng trang trọng: nghỉ ngắn sau dấu phẩy trước but để tách lời cảm ơn và điều kiện đàm phán. Nhấn vào delighted, salary và contract.","chunks":["accept the position in principle"]},{"from":"partner","text":"Of course. We propose a monthly salary of twenty million dong, with a three-month probation period."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Cảm ơn về lời đề nghị, nhưng mức này thấp hơn kỳ vọng của tôi. Với hai năm kinh nghiệm liên quan, tôi đề xuất hai mươi tư triệu đồng và thời gian thử việc hai tháng.","expect":"I appreciate the offer, but that figure is below my expectation. With two years of relevant experience, I would propose twenty-four million dong and a two-month probation period instead.","keywords":["appreciate","below","expectation","relevant experience","probation period"],"hint":"I appreciate the offer, but...","tip":"Giọng điềm tĩnh, không gay gắt: appreciate nói chậm và ấm để mở đầu phản hồi lịch sự. Nhấn vào below, expectation và probation period.","chunks":["below my expectation","a two-month probation period"]},{"from":"partner","text":"We could consider twenty-two million, with a review after six months. What about working hours and remote work?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Tôi có thể chấp nhận hai mươi hai triệu với điều kiện hiệu suất của tôi được đánh giá sau sáu tháng. Tôi cũng đề xuất làm việc từ xa hai ngày một tuần vì phần lớn công việc có thể làm trực tuyến.","expect":"I can accept twenty-two million on condition that my performance is reviewed after six months. I would also propose working remotely two days a week, as much of the work can be done online.","keywords":["accept","on condition","performance","reviewed","remotely"],"hint":"I can accept twenty-two million...","tip":"Ngữ điệu: liệt kê điều kiện bằng giọng đều, nghỉ ngắn sau dấu chấm để tách hai đề xuất. Nhấn vào condition, performance và remotely.","chunks":["on condition that","working remotely"]},{"from":"partner","text":"Remote work two days a week is acceptable, provided you attend Monday meetings in person. Shall we agree on these terms?"},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Tôi đồng ý, với điều kiện mọi điều khoản được ghi rõ trong hợp đồng và bảo hiểm đầy đủ được bao gồm.","expect":"I agree, provided that all these terms are written clearly into the contract and that full insurance is included.","keywords":["agree","provided","terms","contract","insurance"],"hint":"I agree, provided that...","tip":"Phát âm trang trọng: provided nhấn âm hai, insurance nhấn âm hai. Nghỉ ngắn sau dấu phẩy để nhấn mạnh điều kiện chốt.","chunks":["written clearly into the contract"]},{"from":"partner","text":"We will send the revised contract tomorrow. Welcome to the team."},{"from":"learner","prompt":"Lượt của bạn - hãy nói bằng tiếng Anh ý này: Cảm ơn quý công ty. Tôi mong được gia nhập đội ngũ và đóng góp cho công ty.","expect":"Thank you. I look forward to joining your team and contributing to the company.","keywords":["look forward","joining","team","contributing"],"hint":"Thank you. I look forward...","tip":"Ngữ điệu ấm và xuống giọng ở cuối để kết thúc đàm phán tích cực. Cụm look forward to đọc liền, to đọc nhẹ.","chunks":["look forward to joining your team"]}]}]);

// ---------- U7-1. VIET LAI WHY 523 CAU DOC/NGHE (Doc 393 + Nghe dai 130) ----------
// Kho cũ nằm trong content.js (không sửa file đó). content-new.js nạp sau
// content.js nen viet lai why tai day, truoc khi bat ky man nao ve ra.
// Cach viet lai (khong bia du kien moi): moi why moi lay dung bang chung
// của chính câu đó (đoạn trích trong why cũ) + đáp án đúng của chính câu
// đó + quy tắc theo dạng câu, theo chuẩn: ví dụ trước, quy tắc sau,
// tiếng Việt đơn giản, không mũi tên, không thuật ngữ khó.
(function () {
  if (typeof CONTENT === "undefined") return;
  function u7WhyEvidence(oldWhy) {
    if (!oldWhy) return "";
    var m = oldWhy.match(/'([^']{6,})'/) || oldWhy.match(/"([^"]{6,})"/);
    if (m) return m[1];
    return oldWhy.split("\u2192")[0].replace(/^\u0110o\u1ea1n \d+:\s*/, "").replace(/^B\u00e0i vi\u1ebft:\s*/, "").trim();
  }
  function u7WhyAnswer(q) {
    var opts = q.options || q.o;
    if (opts && opts[q.a] !== undefined) return opts[q.a];
    if (typeof q.answer === "string") return q.answer.split("|")[0];
    if (typeof q.a === "string") return q.a;
    return "";
  }
  function u7WhyRule(q) {
    var t = q.type;
    if (t === "TFNG" || t === "TF" || t === "YNNG") {
      var opts = q.options || q.o || [];
      var v = opts[q.a];
      if (v === "True" || v === "Yes") return "C\u00e1ch l\u00e0m: \u0111\u1ed1i chi\u1ebfu t\u1eebng \u00fd trong c\u00e2u h\u1ecfi v\u1edbi \u0111\u00fang c\u00e2u trong b\u00e0i. B\u00e0i n\u00f3i \u0111\u00fang nh\u01b0 v\u1eady th\u00ec c\u00e2u n\u00e0y \u0111\u00fang.";
      if (v === "False" || v === "No") return "C\u00e1ch l\u00e0m: \u0111\u1ed1i chi\u1ebfu t\u1eebng \u00fd trong c\u00e2u h\u1ecfi v\u1edbi \u0111\u00fang c\u00e2u trong b\u00e0i. B\u00e0i n\u00f3i ng\u01b0\u1ee3c l\u1ea1i th\u00ec c\u00e2u n\u00e0y sai.";
      return "C\u00e1ch l\u00e0m: \u0111\u1ecdc k\u1ef9 c\u1ea3 b\u00e0i m\u00e0 kh\u00f4ng th\u1ea5y c\u00e2u n\u00e0o n\u00f3i t\u1edbi \u00fd n\u00e0y th\u00ec \u0111\u00e1p \u00e1n l\u00e0 kh\u00f4ng c\u00f3 th\u00f4ng tin \u2014 \u0111\u1eebng \u0111o\u00e1n \u0111\u00fang hay sai.";
    }
    if (t === "MC" || t === "SC") return "C\u00e1ch l\u00e0m: \u0111\u1ecdc k\u1ef9 c\u00e2u h\u1ecfi r\u1ed3i t\u00ecm \u0111\u00fang c\u00e2u trong b\u00e0i n\u00f3i gi\u1ed1ng \u0111\u00e1p \u00e1n. \u0110\u00e1p \u00e1n nghe quen nh\u01b0ng b\u00e0i kh\u00f4ng n\u00f3i th\u00ec kh\u00f4ng ch\u1ecdn.";
    return "C\u00e1ch l\u00e0m: t\u00ecm \u0111\u00fang ch\u1ed7 trong b\u00e0i n\u00f3i t\u1edbi \u00fd n\u00e0y r\u1ed3i \u0111i\u1ec1n \u0111\u00fang t\u1eeb trong b\u00e0i, \u0111\u1eebng \u0111i\u1ec1n t\u1eeb m\u00ecnh \u0111o\u00e1n.";
  }
  function u7RewriteOneWhy(q) {
    if (!q || q.whyU7) return;
    var oldWhy = q.why || "";
    var ans = u7WhyAnswer(q);
    var opts = q.options || q.o || [];
    if (opts[q.a] === "Not Given") {
      q.whyOrig = oldWhy;
      q.why = "V\u00ed d\u1ee5: \u0111\u1ecdc k\u1ef9 c\u1ea3 b\u00e0i c\u0169ng kh\u00f4ng th\u1ea5y c\u00e2u n\u00e0o n\u00f3i t\u1edbi \u00fd n\u00e0y. V\u00ec v\u1eady \u0111\u00e1p \u00e1n \u201cNot Given\u201d \u0111\u00fang. " + u7WhyRule(q);
      q.whyU7 = true;
      return;
    }
    var ev = u7WhyEvidence(oldWhy);
    if (ev.charAt(ev.length - 1) === ".") ev = ev.slice(0, -1);
    var ex = ev ? "trong b\u00e0i c\u00f3 c\u00e2u \u201c" + ev + "\u201d" : oldWhy;
    q.whyOrig = oldWhy;
    q.why = "V\u00ed d\u1ee5: " + ex + ". V\u00ec v\u1eady \u0111\u00e1p \u00e1n \u201c" + ans + "\u201d \u0111\u00fang. " + u7WhyRule(q);
    q.whyU7 = true;
  }
  (CONTENT.reading || []).forEach(function (b) { (b.questions || []).forEach(u7RewriteOneWhy); });
  (CONTENT.listeningPlus || []).forEach(function (b) { (b.questions || []).forEach(u7RewriteOneWhy); });
})();

// ---------- NOI DUNG MOI THEO NGHIEN CUU SACH (dot 25/10) ----------
// Tự soạn 100%, ví dụ trước - quy tắc sau, tiếng Việt đơn giản.
// Không chép nguyên văn sách, không chép đề thi thật, không sao chép
// hinh/video cua ben thu ba. Moi muc gan dung chang theo RB_CHAPTER_MAP.
// Nhom 1: loi rieng cho nguoi Viet (khoang trong so 1 cua KHOANG-TRONG.md).
var BK_VIET_ERRORS = [
  { band: "Band 0", kind: "Phát âm", title: "Âm /θ/ trong think",
    wrong: "I tink so.", right: "I think so.",
    dist: "I sink so.",
    rule: "Tiếng Việt không có âm /θ/ nên người Việt hay đọc thành /t/. Cách sửa: đặt đầu lưỡi chạm nhẹ giữa hai răng rồi thổi hơi ra, không chạm răng vào nhau như âm /t/." },
  { band: "Band 0", kind: "Phát âm", title: "Bỏ phụ âm cuối",
    wrong: "I like this boo.", right: "I like this book.",
    dist: "I like this books.",
    rule: "Tiếng Việt ít bật phụ âm cuối nên người Việt hay nuốt mất /k/, /t/, /s/ cuối từ. Cách sửa: đọc chậm và cố tình bật rõ phụ âm cuối, dù nghe hơi nặng — người nghe cần phụ âm cuối để phân biệt book với boo." },
  { band: "Band 2,0", kind: "Ngữ pháp", title: "Ngôi thứ ba số ít thiếu -s",
    wrong: "He go to school every day.", right: "He goes to school every day.",
    dist: "He going to school every day.",
    rule: "Chủ ngữ he/she/it ở thì hiện tại đơn thì động từ phải thêm -s hoặc -es. Cách nhớ: chỉ có I/you/we/they giữ nguyên động từ, còn he/she/it thì động từ 'mặc thêm áo -s'." },
  { band: "Band 2,0", kind: "Từ vựng", title: "Bored hay boring?",
    wrong: "I am boring today.", right: "I am bored today.",
    dist: "I am bore today.",
    rule: "Muốn nói 'tôi thấy chán' thì dùng bored (người cảm thấy). Boring dùng cho vật/việc gây ra cảm giác: 'This film is boring.' (Bộ phim này chán.) Nhầm hai từ này là đổi ngược nghĩa: 'I am boring' nghĩa là 'tôi là người gây chán'." },
  { band: "Band 2,5", kind: "Ngữ pháp", title: "Thì tiếp diễn thiếu V-ing",
    wrong: "I am go to school now.", right: "I am going to school now.",
    dist: "I go to school now.",
    rule: "Thì hiện tại tiếp diễn có công thức đủ hai phần: am/is/are + động từ thêm -ing. Thiếu một trong hai phần là câu chưa thành hình: 'I am go' sai vì go chưa thêm -ing." },
  { band: "Band 3,0", kind: "Ngữ pháp", title: "Quá khứ đơn quên đổi dạng động từ",
    wrong: "Yesterday I go to the market.", right: "Yesterday I went to the market.",
    dist: "Yesterday I goed to the market.",
    rule: "Có yesterday (hôm qua) thì động từ phải ở dạng quá khứ. Go là động từ bất quy tắc nên quá khứ là went, không thêm -ed thành goed. Cách sửa: gặp dấu hiệu thời gian quá khứ thì dừng lại đổi dạng động từ trước khi viết tiếp." },
  { band: "Band 3,5", kind: "Ngữ pháp", title: "So sánh hơn dùng thừa more",
    wrong: "She is more taller than me.", right: "She is taller than me.",
    dist: "She is most taller than me.",
    rule: "Tính từ ngắn đã thêm -er thì không dùng thêm more — chỉ chọn một trong hai. More dùng cho tính từ dài (more beautiful), -er dùng cho tính từ ngắn (taller). Dùng cả hai cùng lúc là thừa." },
  { band: "Band 4,0", kind: "Ngữ pháp", title: "Mệnh đề if không dùng will",
    wrong: "If it will rain, I will stay home.", right: "If it rains, I will stay home.",
    dist: "If it rain, I will stay home.",
    rule: "Câu điều kiện loại 1: mệnh đề if dùng thì hiện tại đơn, will chỉ nằm ở mệnh đề chính. Dịch từ tiếng Việt sang dễ mắc lỗi này vì tiếng Việt nói 'nếu trời sẽ mưa' — sang tiếng Anh phải bỏ 'sẽ' ở mệnh đề if." },
  { band: "Band 4,5", kind: "Ngữ pháp", title: "Although đi với but là thừa",
    wrong: "Although it was hard, but I finished it.", right: "Although it was hard, I finished it.",
    dist: "Although it was hard, so I finished it.",
    rule: "Although đã mang nghĩa 'mặc dù' nên không cần thêm but hay so trong cùng một câu. Chọn một: hoặc 'Although..., ...' hoặc 'It was hard, but I finished it.' — không dùng cả hai." },
  { band: "Band 5,0", kind: "Ngữ pháp", title: "Điều kiện loại 2 không dùng would ở mệnh đề if",
    wrong: "If I would have time, I would travel.", right: "If I had time, I would travel.",
    dist: "If I have time, I would travel.",
    rule: "Câu điều kiện loại 2 nói về điều không thật ở hiện tại: mệnh đề if dùng quá khứ đơn (had), mệnh đề chính dùng would + động từ. Would chỉ nằm ở mệnh đề chính, không nằm ở cả hai vế." },
  { band: "Band 6,0", kind: "Từ vựng", title: "Collocation: do homework, không phải make homework",
    wrong: "I must make my homework tonight.", right: "I must do my homework tonight.",
    dist: "I must take my homework tonight.",
    rule: "Tiếng Anh ghép từ theo thói quen (collocation), không dịch từng từ từ tiếng Việt. Homework đi với do, còn make đi với a mistake, a decision, a plan. Cách học: học cả cụm do homework chứ không học từ homework đứng một mình." },
  { band: "Band 6,5", kind: "Ngữ pháp", title: "Mệnh đề phân từ sai chủ ngữ",
    wrong: "Walking home, the rain started.", right: "While I was walking home, it started to rain.",
    dist: "Walking home, I started the rain.",
    rule: "Câu mở đầu bằng Walking home thì chủ ngữ của câu chính phải là người đang đi bộ. Câu sai có chủ ngữ là the rain (cơn mưa) — mưa không đi bộ được. Cách sửa: viết rõ chủ ngữ I ngay từ đầu: 'While I was walking home, ...'." }
];
// Nhóm 2: ví dụ đời sống người Việt (khoảng trống số 8 của KHOANG-TRONG.md).
// Đọc/Nghe: đoạn ngắn + câu hỏi trắc nghiệm. Nói/Viết: đề bài + dàn ý +
// bài mẫu tự soạn để đối chiếu, không chấm điểm (tự luyện).
var BK_LIFE = [
  { band: "Band 2,0", skill: "Đọc", scene: "Chợ", title: "Mua cam ở chợ",
    text: "Lan goes to the market in the morning. She asks: 'How much are these oranges?' The seller says: '30,000 dong a kilo.' Lan says: 'I'll take two kilos, please.'",
    vi: "Buổi sáng Lan đi chợ. Cô hỏi: 'Cam này bao nhiêu tiền?' Người bán nói: '30.000 đồng một cân.' Lan nói: 'Cho tôi hai cân.'",
    qs: [
      { q: "Một cân cam giá bao nhiêu?", o: ["20.000 đồng", "30.000 đồng", "60.000 đồng"], a: 1, why: "Người bán nói '30,000 dong a kilo' — a kilo là một cân." },
      { q: "Lan phải trả tất cả bao nhiêu tiền?", o: ["30.000 đồng", "60.000 đồng", "90.000 đồng"], a: 1, why: "Lan mua hai cân, mỗi cân 30.000 đồng nên tất cả là 60.000 đồng." }
    ] },
  { band: "Band 2,5", skill: "Đọc", scene: "Trường học", title: "Giờ ra chơi ở trường",
    text: "Minh is a student in Hanoi. At break time, he plays football with his friends in the school yard. After school, he goes home and does his homework before dinner.",
    vi: "Minh là học sinh ở Hà Nội. Giờ ra chơi, bạn chơi bóng đá với bạn bè ở sân trường. Sau giờ học, bạn về nhà và làm bài tập trước bữa tối.",
    qs: [
      { q: "Giờ ra chơi Minh làm gì?", o: ["Đọc sách trong lớp", "Chơi bóng đá ở sân trường", "Về nhà ngay"], a: 1, why: "Bài ghi 'he plays football with his friends in the school yard'." },
      { q: "Minh làm bài tập vào lúc nào?", o: ["Trước bữa tối", "Sau bữa tối", "Vào giờ ra chơi"], a: 0, why: "Bài ghi 'he does his homework before dinner' — before dinner là trước bữa tối." }
    ] },
  { band: "Band 3,0", skill: "Đọc", scene: "Bệnh viện", title: "Đi khám ở bệnh viện",
    text: "Mrs. Hoa feels sick, so she goes to the hospital near her house. The doctor asks about her symptoms and checks her temperature. He says she should drink a lot of water and rest for two days.",
    vi: "Bà Hoa thấy mệt nên tới bệnh viện gần nhà. Bác sĩ hỏi về triệu chứng và đo nhiệt độ cho bà. Bác sĩ dặn bà uống nhiều nước và nghỉ ngơi hai ngày.",
    qs: [
      { q: "Bác sĩ làm gì cho bà Hoa?", o: ["Chỉ kê đơn thuốc", "Hỏi triệu chứng và đo nhiệt độ", "Cho bà nhập viện ngay"], a: 1, why: "Bài ghi 'asks about her symptoms and checks her temperature'." },
      { q: "Bác sĩ dặn bà Hoa làm gì?", o: ["Uống nhiều nước và nghỉ hai ngày", "Đi làm ngay hôm sau", "Không uống nước"], a: 0, why: "Bài ghi 'drink a lot of water and rest for two days'." }
    ] },
  { band: "Band 3,5", skill: "Nghe", scene: "Gia đình", title: "Bữa cơm tối nhà Lan",
    text: "In Lan's family, dinner starts at seven o'clock. Her mother cooks rice and fish, her father sets the table, and Lan helps wash the vegetables. After dinner, they talk about their day.",
    vi: "Ở nhà Lan, bữa tối bắt đầu lúc bảy giờ. Mẹ nấu cơm và cá, bố dọn bàn, Lan giúp rửa rau. Sau bữa tối, cả nhà kể cho nhau nghe về một ngày của mình.",
    qs: [
      { q: "Bữa tối nhà Lan bắt đầu lúc mấy giờ?", o: ["Sáu giờ", "Bảy giờ", "Tám giờ"], a: 1, why: "Bài ghi 'dinner starts at seven o'clock'." },
      { q: "Lan giúp việc gì trước bữa tối?", o: ["Nấu cơm", "Dọn bàn", "Rửa rau"], a: 2, why: "Bài ghi 'Lan helps wash the vegetables' — wash the vegetables là rửa rau." }
    ] },
  { band: "Band 4,0", skill: "Nghe", scene: "Trường học", title: "Cô giáo dặn bài tập về nhà",
    text: "Before the class ends, the teacher says: 'Please read pages 20 to 25 and answer questions 1 to 5. Bring your notebooks tomorrow, and don't forget to review the new words.'",
    vi: "Trước khi hết giờ học, cô giáo dặn: 'Các em đọc từ trang 20 đến trang 25 và trả lời câu 1 đến câu 5. Ngày mai mang vở đi, và đừng quên ôn từ mới.'",
    qs: [
      { q: "Học sinh phải đọc tới trang nào?", o: ["Trang 20", "Trang 25", "Trang 15"], a: 1, why: "Cô dặn 'read pages 20 to 25' — từ trang 20 đến trang 25." },
      { q: "Ngày mai học sinh phải mang gì đi học?", o: ["Sách giáo khoa", "Vở ghi", "Bút màu"], a: 1, why: "Cô dặn 'bring your notebooks tomorrow' — notebooks là vở ghi." }
    ] },
  { band: "Band 4,5", skill: "Nói", scene: "Gia đình", title: "Kể về một ngày cuối tuần của gia đình bạn",
    text: "Nói liền mạch khoảng 1 phút: cuối tuần vừa rồi gia đình bạn đã làm gì, ở đâu, và bạn cảm thấy thế nào.",
    vi: "Dàn ý gợi ý: (1) Cuối tuần nhà bạn đi đâu hoặc làm gì ở nhà. (2) Ai tham gia và mỗi người làm gì. (3) Điều bạn thích nhất và vì sao.",
    model: "Last weekend, my family went to my grandmother's house in the countryside. My mother cooked a big lunch, my father fixed the garden gate, and I played with my little cousin. I liked it most because we rarely have time to be together during the week.",
    modelVi: "Cuối tuần vừa rồi, gia đình tôi về nhà bà ngoại ở quê. Mẹ nấu một bữa trưa thịnh soạn, bố sửa cổng vườn, còn tôi chơi với em họ. Tôi thích nhất vì trong tuần cả nhà hiếm khi có thời gian ở bên nhau." },
  { band: "Band 5,0", skill: "Nói", scene: "Bệnh viện", title: "Mô tả lần bạn đi khám bệnh",
    text: "Nói liền mạch khoảng 1-2 phút: lần gần nhất bạn tới bệnh viện hoặc phòng khám, vì sao bạn tới đó, bác sĩ đã làm gì, và bạn học được gì về sức khỏe.",
    vi: "Dàn ý gợi ý: (1) Vì sao bạn tới bệnh viện. (2) Bác sĩ hỏi và kiểm tra những gì. (3) Lời dặn của bác sĩ và điều bạn rút ra.",
    model: "Last month I went to a clinic because I had a fever for two days. The doctor asked about my symptoms, checked my temperature and told me to drink a lot of water and rest. I learned that I should not wait too long before seeing a doctor.",
    modelVi: "Tháng trước tôi tới phòng khám vì sốt hai ngày. Bác sĩ hỏi triệu chứng, đo nhiệt độ và dặn tôi uống nhiều nước và nghỉ ngơi. Tôi rút ra là không nên chần chừ quá lâu mới đi khám." },
  { band: "Band 6,0", skill: "Viết", scene: "Công sở", title: "Viết email xin nghỉ một ngày",
    text: "Viết một email ngắn (khoảng 80-100 từ) cho quản lý của bạn: xin nghỉ một ngày vì lý do gia đình, nói rõ ngày nghỉ, công việc đã bàn giao cho ai, và cảm ơn quản lý.",
    vi: "Dàn ý gợi ý: (1) Mở đầu lịch sự và nêu rõ ngày xin nghỉ. (2) Lý do ngắn gọn, không kể dài. (3) Công việc đã bàn giao và lời cảm ơn.",
    model: "Dear Ms. Lan, I am writing to ask for one day off on Friday, 30 October, because of a family matter. I have finished this week's report and asked Hung to look after my emails while I am away. I will check my messages again on Monday morning. Thank you very much for your understanding. Best regards, Minh.",
    modelVi: "Chị Lan thân mến, Tôi viết email này để xin nghỉ một ngày vào thứ Sáu, ngày 30 tháng 10, vì việc gia đình. Tôi đã làm xong báo cáo tuần này và nhờ Hùng theo dõi email giúp trong lúc tôi vắng mặt. Sáng thứ Hai tôi sẽ kiểm tra lại tin nhắn. Cảm ơn chị rất nhiều vì đã thông cảm. Trân trọng, Minh." }
];
// Nhom 3: sac thai / phong cach, CHI o chang 7,5+ (khoang trong so 10).
// Khong dat muc nay xuong chang thap hon.
var BK_TONE = [
  { title: "get và obtain trong bài viết học thuật",
    formal: "Researchers obtained the data from 200 students.",
    informal: "Researchers got the data from 200 students.",
    note: "Trong bài viết học thuật, obtain trang trọng và chính xác hơn get. Get không sai trong nói chuyện thường ngày, nhưng trong Task 2 nó làm bài nghe xuồng xã.",
    q: { q: "Câu nào hợp với bài viết học thuật hơn?", o: ["Researchers got the data from 200 students.", "Researchers obtained the data from 200 students.", "Researchers took the data from 200 students."], a: 1, why: "Obtain là từ học thuật, hợp giọng văn trang trọng của Task 2; get hợp nói chuyện thường ngày hơn." } },
  { title: "kids và children trong bài viết học thuật",
    formal: "Children learn a second language faster than adults.",
    informal: "Kids learn a second language faster than adults.",
    note: "Kids là từ thân mật dùng khi nói chuyện. Trong bài viết học thuật dùng children — cùng nghĩa nhưng đúng phong cách.",
    q: { q: "Câu nào hợp với bài viết học thuật hơn?", o: ["Kids learn a second language faster than adults.", "Children learn a second language faster than adults.", "Little ones learn a second language faster than adults."], a: 1, why: "Children là từ trung tính, dùng được trong mọi phong cách; kids quá thân mật cho bài viết học thuật." } },
  { title: "a lot of và a considerable number of",
    formal: "A considerable number of students prefer online classes.",
    informal: "A lot of students prefer online classes.",
    note: "A lot of không sai nhưng quá thường ngày. Khi muốn bài nghe học thuật hơn, dùng a considerable number of (với danh từ đếm được) hoặc a significant amount of (với danh từ không đếm được).",
    q: { q: "Câu nào hợp với bài viết học thuật hơn?", o: ["A lot of students prefer online classes.", "A considerable number of students prefer online classes.", "Many many students prefer online classes."], a: 1, why: "A considerable number of là cụm học thuật, giữ nguyên nghĩa 'nhiều' nhưng đúng phong cách Task 2." } },
  { title: "I think và It could be argued that",
    formal: "It could be argued that online learning saves time.",
    informal: "I think online learning saves time.",
    note: "Trong Task 2, 'It could be argued that...' trình bày quan điểm một cách khách quan và học thuật hơn 'I think...'. Dùng I think nhiều lần làm bài nghe như ý kiến cá nhân, không như lập luận.",
    q: { q: "Cách mở đầu nào hợp với đoạn lập luận Task 2 hơn?", o: ["I think online learning saves time.", "It could be argued that online learning saves time.", "In my mind online learning saves time."], a: 1, why: "Cấu trúc không dùng chủ ngữ I làm lập luận nghe khách quan và học thuật hơn." } },
  { title: "but đầu câu và however giữa đoạn",
    formal: "Online classes are flexible. However, they require strong self-discipline.",
    informal: "Online classes are flexible. But they require strong self-discipline.",
    note: "But đứng đầu câu trong văn viết học thuật bị coi là chưa trang trọng. However nối hai câu đối lập một cách trang trọng và rõ ràng hơn.",
    q: { q: "Cách nối nào hợp với bài viết học thuật hơn?", o: ["Online classes are flexible. But they require strong self-discipline.", "Online classes are flexible. However, they require strong self-discipline.", "Online classes are flexible, but however they require strong self-discipline."], a: 1, why: "However là từ nối trang trọng cho văn viết; but đầu câu hợp văn nói hơn." } },
  { title: "say và argue khi trích quan điểm",
    formal: "Critics argue that social media harms teenagers.",
    informal: "Critics say that social media harms teenagers.",
    note: "Say chỉ nghĩa 'nói'. Argue thêm sắc thái 'đưa ra lập luận để bảo vệ quan điểm' — đúng với ngữ cảnh tranh luận trong Task 2. Chọn động từ theo sắc thái, không chỉ theo nghĩa chung.",
    q: { q: "Câu nào diễn đạt đúng sắc thái 'đưa ra lập luận phản đối' hơn?", o: ["Critics say that social media harms teenagers.", "Critics argue that social media harms teenagers.", "Critics tell that social media harms teenagers."], a: 1, why: "Argue mang sắc thái lập luận, còn say chỉ là nói chung chung; tell còn sai cấu trúc ở đây." } }
];
// Nhom 4: doi chieu format thi hien tai thay vi tin sach cu (khoang trong
// so 9). Chi ghi diem da co trong nghien cuu chuan chinh thong 23/10
// (Cambridge/IDP/British Council); khong bia chi tiet format.
var BK_FORMAT = [
  { old: "Sách cũ hay ghi chung chung 'thi Nghe khoảng 30 phút' mà không nói rõ cấu trúc.",
    now: "Nghe chính thức: 4 phần, 40 câu, khoảng 30 phút. Phần 1-2 là hội thoại đời sống hằng ngày, Phần 3-4 là bối cảnh học tập và bài nói học thuật." },
  { old: "Sách cũ có khi tách Đọc thành nhiều section nhỏ không đúng format hiện tại.",
    now: "Đọc Academic chính thức: 3 bài đọc, 40 câu, 60 phút (tính cả thời gian chuyển đáp án, không cộng thêm giờ). Bài lấy từ sách, tạp chí, báo, viết cho người đọc không chuyên về chủ đề học thuật." },
  { old: "Sách cũ có khi dạy Task 1 và Task 2 nặng ngang nhau.",
    now: "Viết chính thức: Task 1 tối thiểu 150 từ (khoảng 20 phút), Task 2 tối thiểu 250 từ (khoảng 40 phút); Task 2 tính nặng gấp đôi Task 1. Mỗi kỹ năng Viết chấm theo 4 tiêu chí, mỗi tiêu chí 25%." },
  { old: "Sách cũ có khi mô tả Nói như một bài phỏng vấn dài duy nhất.",
    now: "Nói chính thức: 3 phần, 11-14 phút. Part 1 hỏi đáp chủ đề quen thuộc (4-5 phút), Part 2 nói 1-2 phút sau 1 phút chuẩn bị, Part 3 thảo luận mở rộng chủ đề Part 2 (4-5 phút)." },
  { old: "Sách cũ hay in bảng 'bao nhiêu phần trăm thì lên bậc' hoặc '200 giờ = 1 band'.",
    now: "Không nhà cung cấp chính thống nào công bố ngưỡng % qua bậc; '200 giờ = 1 band' không phải chuẩn hiện hành. Cambridge tính giờ tích lũy theo cấp CEFR, còn IELTS.org ghi khoảng 3 tháng lên tối đa 0,5 band. Mốc 80% của web này là chuẩn nội bộ, không phải chuẩn IELTS." },
  { old: "Sách cũ viết cho thi giấy, chưa nhắc thi trên máy tính.",
    now: "Hiện nay có cả thi giấy và thi trên máy tính với cùng format 4 kỹ năng; bài thi thử của web này theo format trên nhưng ghi rõ giới hạn kho (phần Đọc của thi thử mới có 15 câu do kho tự soạn hiện tại, không mạo nhận là đề đủ)." }
];

// ---------- GĐ2+GĐ3 CÒN LẠI (25/10/2026): hằng số dùng chung ----------
var RB_GD23_LISTEN_STEPS = [
  { name: "Nghe lấy ý chính", desc: "Nghe một lượt, nắm ý chính, chưa cần hiểu từng từ." },
  { name: "Nghe lấy chi tiết", desc: "Nghe lại, ghi các con số, tên và ý chi tiết." },
  { name: "Đối chiếu đáp án", desc: "Làm câu hỏi rồi đối chiếu với những gì đã nghe." },
  { name: "Nghe lại đoạn khó", desc: "Nghe lại đúng đoạn chưa nghe rõ." },
  { name: "Ôn từ mới", desc: "Ghi lại từ mới trong bài và ôn theo lịch giãn cách." }
];
var RB_GD23_SPEECH_AREAS = ["Phát âm", "Lưu loát", "Từ vựng", "Ngữ pháp", "Mạch lạc"];

// ---------- BỘ TỪ TIẾNG TRUNG LOGISTICS + Y TẾ (25/10/2026, Bùi chốt song ngữ) ----------
// Dữ liệu chờ đợt khung HSK nối dây hiển thị. Nhãn hsk là MỨC ĐẶT CHỦ ĐỀ theo
// tiến trình cấp (đối chiếu cấu trúc/chủ đề trong TONG-HOP-HSK.md); tài liệu tham
// khảo không có bảng từ từng cấp nên đây KHÔNG phải xác nhận từng từ nằm trong
// khung từ vựng HSK 2.0 chính thức — thuật ngữ chuyên ngành được ghi rõ ngoài khung
// trong hskNote từng bộ.
if (typeof CONTENT !== "undefined") { CONTENT.zhVocab = [
  {
   "topic": "Logistics 1 — Chuỗi cung ứng cơ bản",
   "hsk": "HSK4",
   "hskNote": "Mức đặt theo chủ đề công việc/giao thông cấp 4; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Thuật ngữ chuyên ngành (供应链, 经销商) coi là ngoài khung.",
   "cards": [
    {
     "han": "供应链",
     "pinyin": "gōngyìngliàn",
     "vi": "chuỗi cung ứng",
     "col": "管理供应链",
     "ex": "管理好供应链，商店才不会缺货。",
     "exv": "Quản lý tốt chuỗi cung ứng thì cửa hàng mới không thiếu hàng."
    },
    {
     "han": "供应商",
     "pinyin": "gōngyìngshāng",
     "vi": "nhà cung cấp",
     "col": "可靠的供应商",
     "ex": "我们只跟可靠的供应商合作。",
     "exv": "Chúng tôi chỉ hợp tác với nhà cung cấp đáng tin."
    },
    {
     "han": "仓库",
     "pinyin": "cāngkù",
     "vi": "nhà kho",
     "col": "大仓库",
     "ex": "货物放在城外的大仓库里。",
     "exv": "Hàng hóa để trong nhà kho lớn ngoài thành phố."
    },
    {
     "han": "库存",
     "pinyin": "kùcún",
     "vi": "hàng tồn kho",
     "col": "检查库存",
     "ex": "每周五下午检查库存。",
     "exv": "Mỗi chiều thứ Sáu kiểm kê hàng tồn kho."
    },
    {
     "han": "订单",
     "pinyin": "dìngdān",
     "vi": "đơn đặt hàng",
     "col": "下一订单",
     "ex": "请在中午前下一订单。",
     "exv": "Hãy đặt hàng trước buổi trưa."
    },
    {
     "han": "订货",
     "pinyin": "dìnghuò",
     "vi": "đặt hàng (mua hàng)",
     "col": "订货单",
     "ex": "订货单上要写清楚数量。",
     "exv": "Trên đơn đặt hàng phải ghi rõ số lượng."
    },
    {
     "han": "发货",
     "pinyin": "fāhuò",
     "vi": "gửi hàng đi",
     "col": "及时发货",
     "ex": "我们每天及时发货。",
     "exv": "Chúng tôi gửi hàng kịp thời mỗi ngày."
    },
    {
     "han": "到货",
     "pinyin": "dàohuò",
     "vi": "hàng đến",
     "col": "到货通知",
     "ex": "到货以后请马上通知我。",
     "exv": "Hàng đến rồi thì báo ngay cho tôi."
    },
    {
     "han": "缺货",
     "pinyin": "quēhuò",
     "vi": "hết hàng",
     "col": "暂时缺货",
     "ex": "这件衣服暂时缺货。",
     "exv": "Chiếc áo này tạm thời hết hàng."
    },
    {
     "han": "补货",
     "pinyin": "bǔhuò",
     "vi": "bổ sung hàng",
     "col": "及时补货",
     "ex": "货架空了要及时补货。",
     "exv": "Kệ trống thì phải kịp thời bổ sung hàng."
    },
    {
     "han": "送货",
     "pinyin": "sònghuò",
     "vi": "giao hàng",
     "col": "送货上门",
     "ex": "这家店可以送货上门。",
     "exv": "Cửa hàng này có thể giao hàng tận nhà."
    },
    {
     "han": "运输",
     "pinyin": "yùnshū",
     "vi": "vận chuyển",
     "col": "公路运输",
     "ex": "短途用公路运输更便宜。",
     "exv": "Quãng ngắn dùng vận tải đường bộ rẻ hơn."
    },
    {
     "han": "货物",
     "pinyin": "huòwù",
     "vi": "hàng hóa",
     "col": "检查货物",
     "ex": "发货前要检查货物。",
     "exv": "Trước khi gửi hàng phải kiểm tra hàng hóa."
    },
    {
     "han": "顾客",
     "pinyin": "gùkè",
     "vi": "khách hàng",
     "col": "老顾客",
     "ex": "他是我们店的老顾客。",
     "exv": "Anh ấy là khách quen của cửa hàng chúng tôi."
    },
    {
     "han": "需求",
     "pinyin": "xūqiú",
     "vi": "nhu cầu",
     "col": "顾客需求",
     "ex": "冬天对厚衣服的需求很大。",
     "exv": "Mùa đông nhu cầu quần áo dày rất lớn."
    },
    {
     "han": "供应",
     "pinyin": "gōngyìng",
     "vi": "cung cấp",
     "col": "供应不足",
     "ex": "新鲜食品供应不足。",
     "exv": "Thực phẩm tươi cung cấp không đủ."
    },
    {
     "han": "零售",
     "pinyin": "língshòu",
     "vi": "bán lẻ",
     "col": "零售店",
     "ex": "这家零售店卖本地产品。",
     "exv": "Cửa hàng bán lẻ này bán sản phẩm địa phương."
    },
    {
     "han": "批发",
     "pinyin": "pīfā",
     "vi": "bán sỉ",
     "col": "批发市场",
     "ex": "小商店常去批发市场进货。",
     "exv": "Cửa hàng nhỏ thường ra chợ bán sỉ lấy hàng."
    },
    {
     "han": "经销商",
     "pinyin": "jīngxiāoshāng",
     "vi": "nhà phân phối",
     "col": "正式经销商",
     "ex": "她是这个品牌的正式经销商。",
     "exv": "Cô ấy là nhà phân phối chính thức của thương hiệu này."
    },
    {
     "han": "储存",
     "pinyin": "chǔcún",
     "vi": "lưu trữ, cất giữ",
     "col": "储存费用",
     "ex": "货物放太久，储存费用会增加。",
     "exv": "Hàng để quá lâu thì chi phí lưu trữ sẽ tăng."
    }
   ]
  },
  {
   "topic": "Logistics 2 — Kho bãi và đóng gói",
   "hsk": "HSK5",
   "hskNote": "Mức đặt theo chủ đề nghề nghiệp cấp 5; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Thuật ngữ kho bãi chuyên ngành coi là ngoài khung.",
   "cards": [
    {
     "han": "包装",
     "pinyin": "bāozhuāng",
     "vi": "đóng gói, bao bì",
     "col": "结实的包装",
     "ex": "结实的包装可以保护货物。",
     "exv": "Bao bì chắc chắn có thể bảo vệ hàng hóa."
    },
    {
     "han": "装卸",
     "pinyin": "zhuāngxiè",
     "vi": "bốc dỡ",
     "col": "装卸区",
     "ex": "卡车在装卸区等着。",
     "exv": "Xe tải đang chờ ở khu bốc dỡ."
    },
    {
     "han": "托盘",
     "pinyin": "tuōpán",
     "vi": "tấm kê hàng",
     "col": "木托盘",
     "ex": "工人把箱子放在托盘上。",
     "exv": "Công nhân đặt hộp lên tấm kê hàng."
    },
    {
     "han": "集装箱",
     "pinyin": "jízhuāngxiāng",
     "vi": "container",
     "col": "一个集装箱",
     "ex": "一个集装箱能装很多箱子。",
     "exv": "Một container có thể chứa nhiều hộp hàng."
    },
    {
     "han": "货架",
     "pinyin": "huòjià",
     "vi": "kệ hàng",
     "col": "顶层货架",
     "ex": "小箱子放在顶层货架上。",
     "exv": "Hộp nhỏ đặt trên kệ cao nhất."
    },
    {
     "han": "标签",
     "pinyin": "biāoqiān",
     "vi": "nhãn",
     "col": "贴标签",
     "ex": "贴清楚标签，找货才快。",
     "exv": "Dán nhãn rõ ràng thì tìm hàng mới nhanh."
    },
    {
     "han": "条形码",
     "pinyin": "tiáoxíngmǎ",
     "vi": "mã vạch",
     "col": "扫描条形码",
     "ex": "扫描条形码可以查价格。",
     "exv": "Quét mã vạch có thể tra giá."
    },
    {
     "han": "纸箱",
     "pinyin": "zhǐxiāng",
     "vi": "thùng các-tông",
     "col": "一箱书",
     "ex": "我们把书装进纸箱。",
     "exv": "Chúng tôi đóng sách vào thùng các-tông."
    },
    {
     "han": "木箱",
     "pinyin": "mùxiāng",
     "vi": "thùng gỗ",
     "col": "木箱装水果",
     "ex": "水果装在木箱里运走。",
     "exv": "Trái cây đựng trong thùng gỗ rồi chở đi."
    },
    {
     "han": "易碎",
     "pinyin": "yìsuì",
     "vi": "dễ vỡ",
     "col": "易碎物品",
     "ex": "易碎物品要在箱子上写清楚。",
     "exv": "Hàng dễ vỡ phải ghi rõ trên hộp."
    },
    {
     "han": "堆放",
     "pinyin": "duīfàng",
     "vi": "xếp chồng",
     "col": "不要堆放太高",
     "ex": "重箱子不要堆放太高。",
     "exv": "Hộp nặng đừng xếp chồng quá cao."
    },
    {
     "han": "分类",
     "pinyin": "fēnlèi",
     "vi": "phân loại",
     "col": "按城市分类",
     "ex": "工人按城市给包裹分类。",
     "exv": "Công nhân phân loại bưu kiện theo thành phố."
    },
    {
     "han": "入库",
     "pinyin": "rùkù",
     "vi": "nhập kho",
     "col": "办理入库",
     "ex": "新货到了要办理入库。",
     "exv": "Hàng mới đến phải làm thủ tục nhập kho."
    },
    {
     "han": "出库",
     "pinyin": "chūkù",
     "vi": "xuất kho",
     "col": "出库单",
     "ex": "出库要先开出库单。",
     "exv": "Xuất kho phải mở phiếu xuất kho trước."
    },
    {
     "han": "盘点",
     "pinyin": "pándiǎn",
     "vi": "kiểm kê",
     "col": "每月盘点",
     "ex": "仓库每月盘点一次。",
     "exv": "Nhà kho mỗi tháng kiểm kê một lần."
    },
    {
     "han": "保管",
     "pinyin": "bǎoguǎn",
     "vi": "bảo quản",
     "col": "妥善保管",
     "ex": "贵重货物要妥善保管。",
     "exv": "Hàng quý phải bảo quản cẩn thận."
    },
    {
     "han": "货位",
     "pinyin": "huòwèi",
     "vi": "vị trí để hàng",
     "col": "找货位",
     "ex": "按货位找货最快。",
     "exv": "Tìm hàng theo vị trí để hàng là nhanh nhất."
    },
    {
     "han": "叉车",
     "pinyin": "chāchē",
     "vi": "xe nâng",
     "col": "开叉车",
     "ex": "他在仓库里开叉车。",
     "exv": "Anh ấy lái xe nâng trong nhà kho."
    },
    {
     "han": "搬运",
     "pinyin": "bānyùn",
     "vi": "bốc vác, vận chuyển trong kho",
     "col": "搬运工人",
     "ex": "搬运工人每天都很忙。",
     "exv": "Công nhân bốc vác ngày nào cũng bận."
    },
    {
     "han": "称重",
     "pinyin": "chēngzhòng",
     "vi": "cân hàng",
     "col": "称重处",
     "ex": "每个包裹都要经过称重处。",
     "exv": "Mỗi bưu kiện đều phải qua chỗ cân."
    }
   ]
  },
  {
   "topic": "Logistics 3 — Vận chuyển và giao nhận",
   "hsk": "HSK5",
   "hskNote": "Mức đặt theo chủ đề giao thông/nghề nghiệp cấp 5; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Thuật ngữ giao nhận chuyên ngành (清关, 承运人) coi là ngoài khung.",
   "cards": [
    {
     "han": "海关",
     "pinyin": "hǎiguān",
     "vi": "hải quan",
     "col": "海关检查",
     "ex": "每个箱子都要经过海关检查。",
     "exv": "Mỗi hộp hàng đều phải qua kiểm tra hải quan."
    },
    {
     "han": "清关",
     "pinyin": "qīngguān",
     "vi": "thông quan",
     "col": "清关要两天",
     "ex": "清关可能要两天。",
     "exv": "Thông quan có thể mất hai ngày."
    },
    {
     "han": "追踪",
     "pinyin": "zhuīzōng",
     "vi": "theo dõi hành trình",
     "col": "包裹追踪",
     "ex": "包裹追踪能告诉你箱子在哪儿。",
     "exv": "Theo dõi bưu kiện cho biết hộp của bạn đang ở đâu."
    },
    {
     "han": "配送",
     "pinyin": "pèisòng",
     "vi": "phân phối, giao hàng",
     "col": "配送中心",
     "ex": "新的配送中心在港口附近。",
     "exv": "Trung tâm phân phối mới ở gần cảng."
    },
    {
     "han": "路线",
     "pinyin": "lùxiàn",
     "vi": "tuyến đường",
     "col": "配送路线",
     "ex": "司机每天走同一条配送路线。",
     "exv": "Tài xế mỗi ngày đi cùng một tuyến giao hàng."
    },
    {
     "han": "调度",
     "pinyin": "diàodù",
     "vi": "điều phối",
     "col": "车辆调度",
     "ex": "车辆调度要看天气和路况。",
     "exv": "Điều phối xe phải xem thời tiết và tình hình đường."
    },
    {
     "han": "车队",
     "pinyin": "chēduì",
     "vi": "đội xe",
     "col": "一支车队",
     "ex": "公司有一支五十辆卡车的车队。",
     "exv": "Công ty có một đội xe 50 chiếc."
    },
    {
     "han": "承运人",
     "pinyin": "chéngyùnrén",
     "vi": "hãng vận chuyển",
     "col": "可靠的承运人",
     "ex": "急货要找可靠的承运人。",
     "exv": "Hàng gấp phải tìm hãng vận chuyển đáng tin."
    },
    {
     "han": "托运",
     "pinyin": "tuōyùn",
     "vi": "ký gửi vận chuyển",
     "col": "办理托运",
     "ex": "出国前先办理托运。",
     "exv": "Trước khi ra nước ngoài phải làm thủ tục ký gửi."
    },
    {
     "han": "中转",
     "pinyin": "zhōngzhuǎn",
     "vi": "trung chuyển",
     "col": "中转站",
     "ex": "包裹还在中转站。",
     "exv": "Bưu kiện vẫn đang ở trạm trung chuyển."
    },
    {
     "han": "港口",
     "pinyin": "gǎngkǒu",
     "vi": "cảng",
     "col": "繁忙的港口",
     "ex": "这个港口每天处理很多集装箱。",
     "exv": "Cảng này mỗi ngày xử lý nhiều container."
    },
    {
     "han": "码头",
     "pinyin": "mǎtóu",
     "vi": "bến tàu",
     "col": "在码头卸货",
     "ex": "卡车在码头卸货。",
     "exv": "Xe tải dỡ hàng ở bến tàu."
    },
    {
     "han": "航空",
     "pinyin": "hángkōng",
     "vi": "hàng không",
     "col": "航空运输",
     "ex": "航空运输最快，也最贵。",
     "exv": "Vận tải hàng không nhanh nhất, cũng đắt nhất."
    },
    {
     "han": "陆运",
     "pinyin": "lùyùn",
     "vi": "vận tải đường bộ",
     "col": "陆运公司",
     "ex": "陆运公司在城市之间运货。",
     "exv": "Công ty vận tải đường bộ chở hàng giữa các thành phố."
    },
    {
     "han": "海运",
     "pinyin": "hǎiyùn",
     "vi": "vận tải đường biển",
     "col": "走海运",
     "ex": "大批货物一般走海运。",
     "exv": "Hàng số lượng lớn thường đi đường biển."
    },
    {
     "han": "快递",
     "pinyin": "kuàidì",
     "vi": "chuyển phát nhanh",
     "col": "寄快递",
     "ex": "小包裹可以寄快递。",
     "exv": "Bưu kiện nhỏ có thể gửi chuyển phát nhanh."
    },
    {
     "han": "准时",
     "pinyin": "zhǔnshí",
     "vi": "đúng giờ",
     "col": "准时送达",
     "ex": "准时送达让顾客放心。",
     "exv": "Giao đúng giờ làm khách hàng yên tâm."
    },
    {
     "han": "延误",
     "pinyin": "yánwù",
     "vi": "chậm trễ",
     "col": "运输延误",
     "ex": "暴风雨造成了运输延误。",
     "exv": "Bão gây chậm trễ vận chuyển."
    },
    {
     "han": "签收",
     "pinyin": "qiānshōu",
     "vi": "ký nhận",
     "col": "请签收",
     "ex": "收到包裹请签收。",
     "exv": "Nhận bưu kiện xin ký nhận."
    },
    {
     "han": "退货",
     "pinyin": "tuìhuò",
     "vi": "trả hàng",
     "col": "办理退货",
     "ex": "不满意可以办理退货。",
     "exv": "Không hài lòng có thể làm thủ tục trả hàng."
    }
   ]
  },
  {
   "topic": "Logistics 4 — Quản trị logistics",
   "hsk": "HSK6",
   "hskNote": "Mức đặt theo chủ đề nghề nghiệp/kinh tế cấp 6; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Thuật ngữ quản trị chuyên ngành (逆向物流, 准时制, 最后一公里) coi là ngoài khung.",
   "cards": [
    {
     "han": "采购",
     "pinyin": "cǎigòu",
     "vi": "thu mua",
     "col": "采购部",
     "ex": "采购部负责买原材料。",
     "exv": "Bộ phận thu mua phụ trách mua nguyên liệu."
    },
    {
     "han": "外包",
     "pinyin": "wàibāo",
     "vi": "thuê ngoài",
     "col": "物流外包",
     "ex": "小公司常用物流外包。",
     "exv": "Công ty nhỏ thường dùng thuê ngoài logistics."
    },
    {
     "han": "最后一公里",
     "pinyin": "zuìhòu yī gōnglǐ",
     "vi": "giao chặng cuối",
     "col": "最后一公里最贵",
     "ex": "最后一公里的成本最高。",
     "exv": "Chi phí giao chặng cuối là cao nhất."
    },
    {
     "han": "准时制",
     "pinyin": "zhǔnshízhì",
     "vi": "mô hình đúng lúc",
     "col": "准时制生产",
     "ex": "准时制几乎不留多余库存。",
     "exv": "Mô hình đúng lúc gần như không giữ tồn kho thừa."
    },
    {
     "han": "逆向物流",
     "pinyin": "nìxiàng wùliú",
     "vi": "logistics ngược",
     "col": "处理逆向物流",
     "ex": "商店要处理退货的逆向物流。",
     "exv": "Cửa hàng phải xử lý logistics ngược của hàng trả lại."
    },
    {
     "han": "交货期",
     "pinyin": "jiāohuòqī",
     "vi": "thời gian giao hàng",
     "col": "缩短交货期",
     "ex": "缩短交货期能让商店更好计划。",
     "exv": "Rút ngắn thời gian giao hàng giúp cửa hàng lên kế hoạch tốt hơn."
    },
    {
     "han": "履约",
     "pinyin": "lǚyuē",
     "vi": "thực hiện đơn hàng",
     "col": "履约能力",
     "ex": "履约能力强的公司更可靠。",
     "exv": "Công ty thực hiện đơn hàng tốt thì đáng tin hơn."
    },
    {
     "han": "瓶颈",
     "pinyin": "píngjǐng",
     "vi": "điểm nghẽn",
     "col": "港口瓶颈",
     "ex": "港口瓶颈会拖慢所有货物。",
     "exv": "Điểm nghẽn ở cảng làm chậm mọi lô hàng."
    },
    {
     "han": "优化",
     "pinyin": "yōuhuà",
     "vi": "tối ưu hóa",
     "col": "优化路线",
     "ex": "优化路线每天都能省油。",
     "exv": "Tối ưu tuyến đường mỗi ngày đều tiết kiệm nhiên liệu."
    },
    {
     "han": "流程",
     "pinyin": "liúchéng",
     "vi": "quy trình",
     "col": "简化流程",
     "ex": "简化流程可以省下两天时间。",
     "exv": "Đơn giản hóa quy trình có thể tiết kiệm hai ngày."
    },
    {
     "han": "整合",
     "pinyin": "zhěnghé",
     "vi": "tích hợp",
     "col": "数据整合",
     "ex": "数据整合把销售和仓库连起来。",
     "exv": "Tích hợp dữ liệu nối bán hàng với nhà kho."
    },
    {
     "han": "实时",
     "pinyin": "shíshí",
     "vi": "theo thời gian thực",
     "col": "实时追踪",
     "ex": "实时追踪能在地图上看到每辆车。",
     "exv": "Theo dõi thời gian thực có thể thấy mọi xe trên bản đồ."
    },
    {
     "han": "自动化",
     "pinyin": "zìdònghuà",
     "vi": "tự động hóa",
     "col": "仓库自动化",
     "ex": "仓库自动化让分拣更快。",
     "exv": "Tự động hóa kho bãi làm phân loại nhanh hơn."
    },
    {
     "han": "可持续",
     "pinyin": "kě chíxù",
     "vi": "bền vững",
     "col": "可持续发展",
     "ex": "可持续发展要求少用塑料。",
     "exv": "Phát triển bền vững yêu cầu dùng ít nhựa hơn."
    },
    {
     "han": "成本",
     "pinyin": "chéngběn",
     "vi": "chi phí",
     "col": "降低成本",
     "ex": "减少空车能降低成本。",
     "exv": "Giảm chuyến xe rỗng có thể hạ chi phí."
    },
    {
     "han": "效率",
     "pinyin": "xiàolǜ",
     "vi": "hiệu suất",
     "col": "提高效率",
     "ex": "新系统提高了仓库效率。",
     "exv": "Hệ thống mới nâng cao hiệu suất nhà kho."
    },
    {
     "han": "合同",
     "pinyin": "hétong",
     "vi": "hợp đồng",
     "col": "签合同",
     "ex": "第一次发货前要签合同。",
     "exv": "Trước lô hàng đầu tiên phải ký hợp đồng."
    },
    {
     "han": "谈判",
     "pinyin": "tánpàn",
     "vi": "đàm phán",
     "col": "价格谈判",
     "ex": "价格谈判帮我们省了百分之十。",
     "exv": "Đàm phán giá giúp chúng tôi tiết kiệm 10%."
    },
    {
     "han": "评估",
     "pinyin": "pínggū",
     "vi": "đánh giá",
     "col": "评估供应商",
     "ex": "每年都要评估供应商。",
     "exv": "Mỗi năm đều phải đánh giá nhà cung cấp."
    },
    {
     "han": "战略",
     "pinyin": "zhànlüè",
     "vi": "chiến lược",
     "col": "长期战略",
     "ex": "公司需要一个长期战略。",
     "exv": "Công ty cần một chiến lược dài hạn."
    }
   ]
  },
  {
   "topic": "Y tế 1 — Khoa phòng và nhân sự y tế",
   "hsk": "HSK4",
   "hskNote": "Mức đặt theo chủ đề nghề nghiệp/sức khỏe cấp 4; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Tên khoa chuyên ngành coi là ngoài khung.",
   "cards": [
    {
     "han": "科室",
     "pinyin": "kēshì",
     "vi": "khoa, phòng",
     "col": "各科室",
     "ex": "医院有内科、外科等各科室。",
     "exv": "Bệnh viện có các khoa nội, ngoại và nhiều khoa khác."
    },
    {
     "han": "内科",
     "pinyin": "nèikē",
     "vi": "khoa nội",
     "col": "内科医生",
     "ex": "内科医生看感冒、发烧这些病。",
     "exv": "Bác sĩ nội khoa khám cảm cúm, sốt và các bệnh này."
    },
    {
     "han": "外科",
     "pinyin": "wàikē",
     "vi": "khoa ngoại",
     "col": "外科手术",
     "ex": "外科医生每天都要做手术。",
     "exv": "Bác sĩ ngoại khoa mỗi ngày đều phải mổ."
    },
    {
     "han": "儿科",
     "pinyin": "érkē",
     "vi": "khoa nhi",
     "col": "儿科门诊",
     "ex": "孩子生病去儿科门诊。",
     "exv": "Trẻ ốm thì đến phòng khám nhi."
    },
    {
     "han": "心脏科",
     "pinyin": "xīnzàngkē",
     "vi": "khoa tim mạch",
     "col": "心脏科检查",
     "ex": "心脏科检查能发现心脏问题。",
     "exv": "Khám tim mạch có thể phát hiện vấn đề tim."
    },
    {
     "han": "皮肤科",
     "pinyin": "pífūkē",
     "vi": "khoa da liễu",
     "col": "皮肤科医生",
     "ex": "皮肤问题可以去看皮肤科医生。",
     "exv": "Bệnh về da có thể đến gặp bác sĩ da liễu."
    },
    {
     "han": "眼科",
     "pinyin": "yǎnkē",
     "vi": "khoa mắt",
     "col": "眼科检查",
     "ex": "眼科检查能测你的视力。",
     "exv": "Khám mắt có thể đo thị lực của bạn."
    },
    {
     "han": "牙科",
     "pinyin": "yákē",
     "vi": "khoa răng",
     "col": "看牙科",
     "ex": "牙疼要去看牙科。",
     "exv": "Đau răng phải đi khám răng."
    },
    {
     "han": "医生",
     "pinyin": "yīshēng",
     "vi": "bác sĩ",
     "col": "主治医生",
     "ex": "主治医生每天查房。",
     "exv": "Bác sĩ điều trị chính mỗi ngày đi buồng bệnh."
    },
    {
     "han": "护士",
     "pinyin": "hùshi",
     "vi": "điều dưỡng, y tá",
     "col": "护士站",
     "ex": "护士每天给病人量体温。",
     "exv": "Điều dưỡng mỗi ngày đo thân nhiệt cho bệnh nhân."
    },
    {
     "han": "药剂师",
     "pinyin": "yàojìshī",
     "vi": "dược sĩ",
     "col": "问药剂师",
     "ex": "吃药前可以问药剂师。",
     "exv": "Trước khi uống thuốc có thể hỏi dược sĩ."
    },
    {
     "han": "理疗师",
     "pinyin": "lǐliáoshī",
     "vi": "chuyên viên vật lý trị liệu",
     "col": "找理疗师",
     "ex": "腿受伤以后可以找理疗师。",
     "exv": "Sau chấn thương chân có thể tìm chuyên viên vật lý trị liệu."
    },
    {
     "han": "放射科",
     "pinyin": "fàngshèkē",
     "vi": "khoa chẩn đoán hình ảnh",
     "col": "放射科报告",
     "ex": "放射科医生看片子、写报告。",
     "exv": "Bác sĩ chẩn đoán hình ảnh đọc phim và viết báo cáo."
    },
    {
     "han": "麻醉师",
     "pinyin": "mázuìshī",
     "vi": "bác sĩ gây mê",
     "col": "麻醉师",
     "ex": "手术时麻醉师让你睡着。",
     "exv": "Lúc mổ, bác sĩ gây mê làm bạn ngủ."
    },
    {
     "han": "助产士",
     "pinyin": "zhùchǎnshì",
     "vi": "nữ hộ sinh",
     "col": "助产士",
     "ex": "助产士帮助产妇安全生孩子。",
     "exv": "Nữ hộ sinh giúp sản phụ sinh con an toàn."
    },
    {
     "han": "急救员",
     "pinyin": "jíjiùyuán",
     "vi": "nhân viên cấp cứu",
     "col": "叫急救员",
     "ex": "出了严重事故要叫急救员。",
     "exv": "Tai nạn nghiêm trọng phải gọi nhân viên cấp cứu."
    },
    {
     "han": "专家",
     "pinyin": "zhuānjiā",
     "vi": "chuyên gia",
     "col": "请专家会诊",
     "ex": "疑难病要请专家会诊。",
     "exv": "Bệnh khó phải mời chuyên gia hội chẩn."
    },
    {
     "han": "门诊",
     "pinyin": "ménzhěn",
     "vi": "khám ngoại trú",
     "col": "门诊时间",
     "ex": "门诊时间是上午八点到十二点。",
     "exv": "Giờ khám ngoại trú là 8 giờ sáng đến 12 giờ trưa."
    },
    {
     "han": "住院",
     "pinyin": "zhùyuàn",
     "vi": "nằm viện",
     "col": "办理住院",
     "ex": "重病人需要办理住院。",
     "exv": "Bệnh nặng cần làm thủ tục nằm viện."
    },
    {
     "han": "挂号",
     "pinyin": "guàhào",
     "vi": "đăng ký khám",
     "col": "先挂号",
     "ex": "看病要先挂号。",
     "exv": "Khám bệnh phải đăng ký khám trước."
    }
   ]
  },
  {
   "topic": "Y tế 2 — Xét nghiệm và chẩn đoán hình ảnh",
   "hsk": "HSK5",
   "hskNote": "Mức đặt theo chủ đề sức khỏe/nghề nghiệp cấp 5; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Thuật ngữ xét nghiệm/chẩn đoán hình ảnh phần lớn coi là ngoài khung.",
   "cards": [
    {
     "han": "化验",
     "pinyin": "huàyàn",
     "vi": "xét nghiệm",
     "col": "化验单",
     "ex": "医生开了化验单。",
     "exv": "Bác sĩ đã kê phiếu xét nghiệm."
    },
    {
     "han": "血检",
     "pinyin": "xuèjiǎn",
     "vi": "xét nghiệm máu",
     "col": "定期血检",
     "ex": "定期血检能了解身体情况。",
     "exv": "Xét nghiệm máu định kỳ giúp hiểu tình hình cơ thể."
    },
    {
     "han": "尿检",
     "pinyin": "niàojiǎn",
     "vi": "xét nghiệm nước tiểu",
     "col": "做尿检",
     "ex": "尿检可以发现肾脏问题。",
     "exv": "Xét nghiệm nước tiểu có thể phát hiện bệnh thận."
    },
    {
     "han": "样本",
     "pinyin": "yàngběn",
     "vi": "mẫu bệnh phẩm",
     "col": "采集样本",
     "ex": "护士从手臂采集样本。",
     "exv": "Điều dưỡng lấy mẫu từ cánh tay."
    },
    {
     "han": "实验室",
     "pinyin": "shíyànshì",
     "vi": "phòng thí nghiệm",
     "col": "送实验室",
     "ex": "样本要送实验室检查。",
     "exv": "Mẫu bệnh phẩm phải đưa đến phòng thí nghiệm kiểm tra."
    },
    {
     "han": "显微镜",
     "pinyin": "xiǎnwēijìng",
     "vi": "kính hiển vi",
     "col": "显微镜下",
     "ex": "在显微镜下看样本。",
     "exv": "Nhìn mẫu bệnh phẩm dưới kính hiển vi."
    },
    {
     "han": "试管",
     "pinyin": "shìguǎn",
     "vi": "ống nghiệm",
     "col": "试管里",
     "ex": "把血放在试管里。",
     "exv": "Cho máu vào ống nghiệm."
    },
    {
     "han": "针头",
     "pinyin": "zhēntóu",
     "vi": "đầu kim tiêm",
     "col": "一次性针头",
     "ex": "每次打针都要用一次性针头。",
     "exv": "Mỗi lần tiêm đều phải dùng đầu kim dùng một lần."
    },
    {
     "han": "胆固醇",
     "pinyin": "dǎngùchún",
     "vi": "cholesterol",
     "col": "胆固醇高",
     "ex": "胆固醇高会增加心脏病的风险。",
     "exv": "Cholesterol cao làm tăng nguy cơ bệnh tim."
    },
    {
     "han": "血糖",
     "pinyin": "xuètáng",
     "vi": "đường huyết",
     "col": "测血糖",
     "ex": "空腹测血糖最准确。",
     "exv": "Đo đường huyết lúc đói là chính xác nhất."
    },
    {
     "han": "抗体",
     "pinyin": "kàngtǐ",
     "vi": "kháng thể",
     "col": "产生抗体",
     "ex": "病好以后身体会产生抗体。",
     "exv": "Sau khi khỏi bệnh, cơ thể sẽ tạo kháng thể."
    },
    {
     "han": "培养",
     "pinyin": "péiyǎng",
     "vi": "nuôi cấy",
     "col": "细菌培养",
     "ex": "细菌培养能找到致病菌。",
     "exv": "Nuôi cấy vi khuẩn có thể tìm ra vi khuẩn gây bệnh."
    },
    {
     "han": "活检",
     "pinyin": "huójiǎn",
     "vi": "sinh thiết",
     "col": "活检结果",
     "ex": "活检结果要等几天。",
     "exv": "Kết quả sinh thiết phải chờ vài ngày."
    },
    {
     "han": "X光",
     "pinyin": "X guāng",
     "vi": "chụp X-quang",
     "col": "拍X光",
     "ex": "怀疑骨折要拍X光。",
     "exv": "Nghi gãy xương phải chụp X-quang."
    },
    {
     "han": "核磁共振",
     "pinyin": "hécí gòngzhèn",
     "vi": "chụp cộng hưởng từ",
     "col": "做核磁共振",
     "ex": "核磁共振能清楚看到软组织。",
     "exv": "Chụp cộng hưởng từ có thể thấy rõ mô mềm."
    },
    {
     "han": "扫描",
     "pinyin": "sǎomiáo",
     "vi": "quét, chụp quét",
     "col": "扫描结果",
     "ex": "扫描结果三天后出来。",
     "exv": "Kết quả chụp quét ba ngày sau mới có."
    },
    {
     "han": "超声",
     "pinyin": "chāoshēng",
     "vi": "siêu âm",
     "col": "做超声",
     "ex": "超声可以检查宝宝的发育。",
     "exv": "Siêu âm có thể kiểm tra sự phát triển của em bé."
    },
    {
     "han": "筛查",
     "pinyin": "shāichá",
     "vi": "sàng lọc",
     "col": "早期筛查",
     "ex": "早期筛查能早发现疾病。",
     "exv": "Sàng lọc sớm có thể phát hiện bệnh sớm."
    },
    {
     "han": "报告",
     "pinyin": "bàogào",
     "vi": "báo cáo, kết quả",
     "col": "检查报告",
     "ex": "检查报告明天可以拿。",
     "exv": "Báo cáo kiểm tra ngày mai có thể lấy."
    },
    {
     "han": "结果",
     "pinyin": "jiéguǒ",
     "vi": "kết quả",
     "col": "等结果",
     "ex": "病人正在等检查结果。",
     "exv": "Bệnh nhân đang chờ kết quả kiểm tra."
    }
   ]
  },
  {
   "topic": "Y tế 3 — Y tế công cộng và dịch bệnh",
   "hsk": "HSK6",
   "hskNote": "Mức đặt theo chủ đề xã hội/sức khỏe cấp 6; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Thuật ngữ dịch tễ chuyên ngành coi là ngoài khung.",
   "cards": [
    {
     "han": "公共卫生",
     "pinyin": "gōnggòng wèishēng",
     "vi": "y tế công cộng",
     "col": "公共卫生宣传",
     "ex": "公共卫生宣传教大家洗手。",
     "exv": "Tuyên truyền y tế công cộng dạy mọi người rửa tay."
    },
    {
     "han": "流行病",
     "pinyin": "liúxíngbìng",
     "vi": "dịch bệnh lưu hành",
     "col": "预防流行病",
     "ex": "预防流行病要从卫生做起。",
     "exv": "Phòng dịch bệnh lưu hành phải bắt đầu từ vệ sinh."
    },
    {
     "han": "大流行",
     "pinyin": "dà liúxíng",
     "vi": "đại dịch",
     "col": "全球大流行",
     "ex": "全球大流行同时影响很多国家。",
     "exv": "Đại dịch toàn cầu đồng thời ảnh hưởng nhiều nước."
    },
    {
     "han": "爆发",
     "pinyin": "bàofā",
     "vi": "bùng phát",
     "col": "疫情爆发",
     "ex": "流感爆发让学校停课了。",
     "exv": "Cúm bùng phát làm trường học phải nghỉ."
    },
    {
     "han": "隔离",
     "pinyin": "gélí",
     "vi": "cách ly",
     "col": "居家隔离",
     "ex": "旅客要居家隔离五天。",
     "exv": "Du khách phải cách ly tại nhà năm ngày."
    },
    {
     "han": "传播",
     "pinyin": "chuánbō",
     "vi": "lây truyền",
     "col": "阻止传播",
     "ex": "口罩能帮助阻止流感传播。",
     "exv": "Khẩu trang giúp ngăn lây truyền cúm."
    },
    {
     "han": "传染",
     "pinyin": "chuánrǎn",
     "vi": "lây nhiễm",
     "col": "容易传染",
     "ex": "水痘很容易传染。",
     "exv": "Thủy đậu rất dễ lây nhiễm."
    },
    {
     "han": "免疫力",
     "pinyin": "miǎnyìlì",
     "vi": "khả năng miễn dịch",
     "col": "提高免疫力",
     "ex": "运动和睡眠能提高免疫力。",
     "exv": "Vận động và ngủ đủ giúp tăng khả năng miễn dịch."
    },
    {
     "han": "卫生",
     "pinyin": "wèishēng",
     "vi": "vệ sinh",
     "col": "注意卫生",
     "ex": "注意卫生要从洗手开始。",
     "exv": "Chú ý vệ sinh phải bắt đầu từ rửa tay."
    },
    {
     "han": "消毒",
     "pinyin": "xiāodú",
     "vi": "khử trùng",
     "col": "消毒双手",
     "ex": "进病房前要消毒双手。",
     "exv": "Trước khi vào buồng bệnh phải khử trùng hai tay."
    },
    {
     "han": "口罩",
     "pinyin": "kǒuzhào",
     "vi": "khẩu trang",
     "col": "戴口罩",
     "ex": "生病的时候要戴口罩。",
     "exv": "Lúc ốm phải đeo khẩu trang."
    },
    {
     "han": "疫苗",
     "pinyin": "yìmiáo",
     "vi": "vắc xin",
     "col": "打疫苗",
     "ex": "流感疫苗每年打一次。",
     "exv": "Vắc xin cúm mỗi năm tiêm một lần."
    },
    {
     "han": "变异",
     "pinyin": "biànyì",
     "vi": "biến thể, đột biến",
     "col": "病毒变异",
     "ex": "新的变异传播得更快。",
     "exv": "Biến thể mới lây lan nhanh hơn."
    },
    {
     "han": "监测",
     "pinyin": "jiāncè",
     "vi": "giám sát",
     "col": "疫情监测",
     "ex": "疫情监测能早发现爆发。",
     "exv": "Giám sát dịch bệnh có thể phát hiện bùng phát sớm."
    },
    {
     "han": "死亡率",
     "pinyin": "sǐwánglǜ",
     "vi": "tỷ lệ tử vong",
     "col": "死亡率很高",
     "ex": "死亡率很高，医生很担心。",
     "exv": "Tỷ lệ tử vong rất cao, bác sĩ rất lo lắng."
    },
    {
     "han": "发病率",
     "pinyin": "fābìnglǜ",
     "vi": "tỷ lệ mắc bệnh",
     "col": "发病率数据",
     "ex": "发病率数据说明有多少人生病。",
     "exv": "Số liệu tỷ lệ mắc bệnh cho biết có bao nhiêu người ốm."
    },
    {
     "han": "宣传",
     "pinyin": "xuānchuán",
     "vi": "tuyên truyền",
     "col": "健康宣传",
     "ex": "健康宣传教大家预防疾病。",
     "exv": "Tuyên truyền sức khỏe dạy mọi người phòng bệnh."
    },
    {
     "han": "政策",
     "pinyin": "zhèngcè",
     "vi": "chính sách",
     "col": "卫生政策",
     "ex": "好的卫生政策能保护大家。",
     "exv": "Chính sách y tế tốt có thể bảo vệ mọi người."
    },
    {
     "han": "医疗体系",
     "pinyin": "yīliáo tǐxì",
     "vi": "hệ thống y tế",
     "col": "强大的医疗体系",
     "ex": "强大的医疗体系对每个人都公平。",
     "exv": "Hệ thống y tế mạnh công bằng với mọi người."
    },
    {
     "han": "健康",
     "pinyin": "jiànkāng",
     "vi": "sức khỏe",
     "col": "保持健康",
     "ex": "运动和好睡眠能保持健康。",
     "exv": "Vận động và ngủ ngon giúp giữ sức khỏe."
    }
   ]
  },
  {
   "topic": "Y tế 4 — Nghiên cứu y khoa và y đức",
   "hsk": "HSK6",
   "hskNote": "Mức đặt theo chủ đề học thuật cấp 6; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Thuật ngữ nghiên cứu y khoa coi là ngoài khung.",
   "cards": [
    {
     "han": "临床试验",
     "pinyin": "línchuáng shìyàn",
     "vi": "thử nghiệm lâm sàng",
     "col": "参加临床试验",
     "ex": "病人可以参加新药的临床试验。",
     "exv": "Bệnh nhân có thể tham gia thử nghiệm lâm sàng thuốc mới."
    },
    {
     "han": "安慰剂",
     "pinyin": "ānwèijì",
     "vi": "giả dược",
     "col": "安慰剂组",
     "ex": "安慰剂组吃的是没有药效的片剂。",
     "exv": "Nhóm giả dược uống viên không có tác dụng thuốc."
    },
    {
     "han": "伦理",
     "pinyin": "lúnlǐ",
     "vi": "đạo đức, luân lý",
     "col": "医学伦理",
     "ex": "医学伦理保护研究中的病人。",
     "exv": "Đạo đức y học bảo vệ bệnh nhân trong nghiên cứu."
    },
    {
     "han": "知情同意",
     "pinyin": "zhīqíng tóngyì",
     "vi": "đồng ý sau khi biết rõ",
     "col": "签署知情同意",
     "ex": "试验开始前要签署知情同意。",
     "exv": "Trước khi thử nghiệm bắt đầu phải ký đồng ý sau khi biết rõ."
    },
    {
     "han": "同行评审",
     "pinyin": "tóngháng píngshěn",
     "vi": "bình duyệt đồng nghiệp",
     "col": "经过同行评审",
     "ex": "论文经过同行评审才能发表。",
     "exv": "Bài báo qua bình duyệt đồng nghiệp mới được công bố."
    },
    {
     "han": "循证",
     "pinyin": "xúnzhèng",
     "vi": "dựa trên bằng chứng",
     "col": "循证医学",
     "ex": "循证医学用最好的研究做决定。",
     "exv": "Y học dựa trên bằng chứng dùng nghiên cứu tốt nhất để quyết định."
    },
    {
     "han": "假设",
     "pinyin": "jiǎshè",
     "vi": "giả thuyết",
     "col": "验证假设",
     "ex": "要用真实数据验证假设。",
     "exv": "Phải dùng dữ liệu thật để kiểm chứng giả thuyết."
    },
    {
     "han": "方法",
     "pinyin": "fāngfǎ",
     "vi": "phương pháp",
     "col": "研究方法",
     "ex": "好的研究方法能避免偏差。",
     "exv": "Phương pháp nghiên cứu tốt tránh được thiên lệch."
    },
    {
     "han": "对照组",
     "pinyin": "duìzhàozǔ",
     "vi": "nhóm đối chứng",
     "col": "设立对照组",
     "ex": "对照组不接受新治疗。",
     "exv": "Nhóm đối chứng không nhận phương pháp mới."
    },
    {
     "han": "双盲",
     "pinyin": "shuāngmáng",
     "vi": "mù đôi",
     "col": "双盲试验",
     "ex": "双盲试验里谁都不知道谁吃了药。",
     "exv": "Trong thử nghiệm mù đôi, không ai biết ai đã uống thuốc."
    },
    {
     "han": "疗效",
     "pinyin": "liáoxiào",
     "vi": "hiệu quả điều trị",
     "col": "证明疗效",
     "ex": "试验要先证明疗效才能批准。",
     "exv": "Thử nghiệm phải chứng minh hiệu quả điều trị trước khi phê duyệt."
    },
    {
     "han": "不良反应",
     "pinyin": "bùliáng fǎnyìng",
     "vi": "phản ứng bất lợi",
     "col": "报告不良反应",
     "ex": "出现不良反应要马上告诉医生。",
     "exv": "Xuất hiện phản ứng bất lợi phải báo ngay cho bác sĩ."
    },
    {
     "han": "保密",
     "pinyin": "bǎomì",
     "vi": "bảo mật",
     "col": "病人保密",
     "ex": "病人保密要求不公开姓名。",
     "exv": "Bảo mật bệnh nhân yêu cầu không công khai tên."
    },
    {
     "han": "方案",
     "pinyin": "fāng'àn",
     "vi": "phương án, phác đồ",
     "col": "研究方案",
     "ex": "每个试验都要严格执行研究方案。",
     "exv": "Mỗi thử nghiệm đều phải thực hiện nghiêm ngặt phác đồ nghiên cứu."
    },
    {
     "han": "参与者",
     "pinyin": "cānyùzhě",
     "vi": "người tham gia",
     "col": "试验参与者",
     "ex": "每个试验参与者随时可以退出。",
     "exv": "Mỗi người tham gia thử nghiệm đều có thể rút lui bất cứ lúc nào."
    },
    {
     "han": "发表",
     "pinyin": "fābiǎo",
     "vi": "công bố",
     "col": "发表论文",
     "ex": "研究结果发表以后医生都能看到。",
     "exv": "Kết quả nghiên cứu sau khi công bố, bác sĩ đều có thể xem."
    },
    {
     "han": "统计",
     "pinyin": "tǒngjì",
     "vi": "thống kê",
     "col": "统计结果",
     "ex": "统计结果说明差异是不是偶然。",
     "exv": "Kết quả thống kê cho biết khác biệt có phải ngẫu nhiên không."
    },
    {
     "han": "可重复性",
     "pinyin": "kě chóngfùxìng",
     "vi": "khả năng lặp lại",
     "col": "检验可重复性",
     "ex": "重复研究可以检验可重复性。",
     "exv": "Làm lại nghiên cứu có thể kiểm tra khả năng lặp lại."
    },
    {
     "han": "突破",
     "pinyin": "tūpò",
     "vi": "đột phá",
     "col": "重大突破",
     "ex": "新药是治疗上的重大突破。",
     "exv": "Thuốc mới là đột phá lớn trong điều trị."
    },
    {
     "han": "基因治疗",
     "pinyin": "jīyīn zhìliáo",
     "vi": "liệu pháp gen",
     "col": "基因治疗研究",
     "ex": "基因治疗研究还在早期阶段。",
     "exv": "Nghiên cứu liệu pháp gen vẫn đang ở giai đoạn đầu."
    }
   ]
  }
]; }
/* ============ LÝ THUYẾT TRƯỚC — THỰC HÀNH SAU (đợt nội dung chuẩn 26/10/2026) ============
   Các map lý thuyết dùng chung cho mẫu 2 pha "1. Lý thuyết → 2. Thực hành".
   Nội dung tự soạn, tiếng Việt đơn giản, ví dụ trước — quy tắc sau.
   Video lý thuyết chưa gắn: màn lý thuyết chỉ chừa slot trống (videoSlotHTML),
   đợt video sau gắn video đã kiểm chứng từ kênh chính thức vào đúng slot đó. */

var RB_READ_FORM_GUIDE = {
  MC: { t: "Trắc nghiệm — chọn 1 đáp án đúng", how: "Ví dụ: câu hỏi hỏi ý chính của đoạn 2. Cách làm: đọc câu hỏi trước, gạch chân từ khóa, rồi đọc đoạn để tìm ý — đừng chọn đáp án chỉ vì thấy đúng từ trong bài, đáp án đó thường chỉ đúng một nửa.", ex: "Q: What is the main idea of paragraph 2? → Đáp án đúng phải bao quát cả đoạn, không chỉ một câu.", trap: "Đáp án nhắc lại nguyên từ trong bài nhưng chỉ đúng một chi tiết nhỏ — đó là bẫy thường gặp nhất." },
  TFNG: { t: "True / False / Not Given", how: "Ví dụ: 'The library opens at 8 am.' Cách làm: tìm câu trong bài nói về giờ mở cửa. Khớp hoàn toàn → True. Trái ngược → False. Bài không nhắc tới → Not Given (không phải False).", ex: "Bài chỉ nói 'The library is open in the morning' mà không nói giờ → đáp án là Not Given.", trap: "Nhầm Not Given với False: không thấy thông tin không có nghĩa là sai — chỉ chọn False khi bài nói ngược lại." },
  SC: { t: "Hoàn thành câu — chọn từ trong bài", how: "Ví dụ: 'The market sells ___ every morning.' Cách làm: đọc câu, đoán loại từ cần điền (danh từ? số?), rồi tìm đúng từ trong bài — không tự bịa từ ngoài bài.", ex: "'The market sells fresh vegetables every morning.' → điền 'fresh vegetables'.", trap: "Điền từ đồng nghĩa của mình thay vì từ trong bài — dạng này chỉ tính đúng khi dùng đúng từ trong bài." },
  MH: { t: "Matching Headings — nối tiêu đề", how: "Ví dụ: tiêu đề 'A new way to learn'. Cách làm: đọc tiêu đề trước để biết ý chính cần tìm, rồi đọc lướt từng đoạn lấy ý chính — không đọc kỹ từng câu.", ex: "Đoạn nói về học qua video ngắn → tiêu đề 'Learning with short videos'.", trap: "Chọn tiêu đề chỉ khớp một ví dụ trong đoạn — tiêu đề đúng phải khớp ý chính cả đoạn." },
  MINFO: { t: "Matching Information — tìm đoạn chứa thông tin", how: "Ví dụ: 'a reason why people move to cities'. Cách làm: đọc thông tin cần tìm, gạch chân từ khóa, rồi quét từng đoạn — thông tin có thể nằm ở bất kỳ đoạn nào, thứ tự không theo bài.", ex: "'Many people move for better jobs' → đoạn đó chứa lý do.", trap: "Đọc theo thứ tự từ đầu đến cuối và dừng ở đoạn đầu tiên thấy từ giống — hãy quét hết các đoạn." },
  MSEND: { t: "Matching Sentence Endings — nối nửa câu", how: "Ví dụ: 'The new road will...' Cách làm: đọc nửa đầu, đoán ý tiếp theo (kết quả? nguyên nhân?), rồi chọn nửa sau hợp nghĩa và hợp ngữ pháp.", ex: "'The new road will reduce traffic.' → nửa sau phải là kết quả, không phải nguyên nhân.", trap: "Chọn nửa sau đúng từ nhưng sai nghĩa logic (ví dụ nguyên nhân thay vì kết quả)." },
  TCOMP: { t: "Hoàn thành bảng — điền từ trong bài", how: "Ví dụ: bảng có cột 'Year' và 'Event'. Cách làm: đọc tiêu đề bảng và hàng mẫu, đoán loại thông tin cần điền, rồi tìm đúng từ trong bài — giữ nguyên số từ cho phép.", ex: "Bảng hỏi năm thành lập → tìm năm trong bài, điền đúng số đó.", trap: "Điền quá số từ cho phép hoặc điền từ ngoài bài." },
  YNNG: { t: "Yes / No / Not Given — quan điểm tác giả", how: "Ví dụ: 'The writer believes online learning is better.' Cách làm: dạng này hỏi QUAN ĐIỂM của tác giả, không hỏi sự thật. Tác giả đồng ý → Yes. Phản đối → No. Không bày tỏ → Not Given.", ex: "Tác giả viết 'Some people prefer online learning' mà không nói mình nghĩ sao → Not Given.", trap: "Nhầm với True/False: Yes/No hỏi ý kiến tác giả, không hỏi đúng sai sự thật." },
  MF: { t: "Matching Features — nối đặc điểm với người/vật", how: "Ví dụ: 'Who developed the new method?' Cách làm: đọc danh sách đặc điểm, rồi quét bài tìm tên người/vật gắn với đặc điểm đó — một người có thể gắn nhiều đặc điểm.", ex: "'Dr Lee developed the method in 2019' → nối Dr Lee với đặc điểm đó.", trap: "Nối theo tên xuất hiện gần nhất — hãy đọc kỹ câu chứa đặc điểm, tên đúng nằm trong cùng câu đó." },
  DLC: { t: "Chọn vị trí đoạn chứa thông tin", how: "Ví dụ: 'In which paragraph is the cause mentioned?' Cách làm: đọc thông tin cần tìm, rồi quét từng đoạn — đáp án là CHỮ CÁI của đoạn (A, B, C...), không phải nội dung.", ex: "Nguyên nhân nằm ở đoạn C → chọn C.", trap: "Chọn đoạn nhắc tới chủ đề chung nhưng không chứa đúng thông tin cần tìm." },
  SAQ: { t: "Trả lời ngắn — không quá 3 từ", how: "Ví dụ: 'What does the museum display?' Cách làm: tìm câu trả lời trong bài, chép đúng từ trong bài, không quá 3 từ — không thêm từ của mình.", ex: "Bài viết 'The museum displays ancient coins' → trả lời 'ancient coins' (2 từ).", trap: "Trả lời bằng câu đầy đủ của mình — dạng này chỉ tính đúng khi ngắn gọn và đúng từ trong bài." }
};

var RB_LISTEN_SHORT_GUIDE = { how: "Ví dụ: bạn nghe 'I bought two tickets for Friday.' Cách nghe: nghe bắt từ khóa — số (two), tên, ngày (Friday) — vì 3 câu lựa chọn chỉ khác nhau ở 1-2 từ đó. Nghe xong, đọc lại 3 câu và chọn câu khớp hoàn toàn.", ex: "'I bought two tickets for Friday.' khác với 'I bought two tickets for Sunday.' ở đúng một từ: Friday.", trap: "Chọn câu nghe giống nhất theo cảm giác — hãy so từng từ khóa (số, tên, ngày) với câu vừa nghe." };

var RB_LISTEN_TYPE_GUIDE = {
  MC: { t: "Trắc nghiệm", how: "Ví dụ: 'Where will they meet?' Cách làm: nghe câu hỏi, gạch chân từ khóa, nghe đoạn để tìm ý — đáp án đúng bao quát ý, không chỉ nhắc lại một từ nghe được.", ex: "Nghe thấy 'library' trong bài chưa chắc đáp án là library — hãy nghe cả câu.", trap: "Chọn đáp án chứa từ nghe rõ nhất — đó thường là bẫy, đáp án đúng nằm ở ý sau đó." },
  COMP: { t: "Điền từ vào chỗ trống", how: "Ví dụ: 'The class starts at ___'. Cách làm: nghe trước chỗ trống để đoán loại từ (số? tên? danh từ?), rồi nghe bắt đúng từ đó — viết đúng chính tả.", ex: "Nghe 'at nine thirty' → điền đúng dạng bài yêu cầu.", trap: "Điền từ đồng nghĩa của mình — dạng này cần đúng từ nghe được trong bài." },
  TF: { t: "Đúng / Sai", how: "Ví dụ: 'The shop opens on Sundays.' Cách làm: nghe câu tương ứng trong bài, so từng chi tiết — chỉ một chi tiết sai là cả câu sai.", ex: "Bài nói 'open on Saturdays' mà câu hỏi nói 'Sundays' → Sai.", trap: "Nghe thấy đúng một nửa đã vội chọn Đúng — hãy so hết các chi tiết." },
  MATCH: { t: "Nối thông tin", how: "Ví dụ: nối mỗi người với công việc của họ. Cách làm: nghe tên người, rồi nghe tiếp để biết thông tin gắn với người đó — thông tin có thể nói sau vài câu.", ex: "'Anna works at the hospital' → nối Anna với hospital.", trap: "Nối theo thứ tự xuất hiện — thứ tự trong bài không theo thứ tự đáp án." },
  SA: { t: "Trả lời ngắn", how: "Ví dụ: 'What time does the train leave?' Cách làm: nghe câu hỏi trước, rồi nghe bắt đúng thông tin trả lời — trả lời ngắn gọn, đúng từ nghe được.", ex: "Nghe 'at half past seven' → trả lời '7:30'.", trap: "Trả lời dài dòng — chỉ cần đúng thông tin, không cần câu đầy đủ." }
};

var RB_SPEAK_CRITERIA_TXT = "trôi chảy và mạch lạc; từ vựng; ngữ pháp đúng và đa dạng; phát âm.";
var RB_SPEAK_PART_FRAME = {
  1: { frame: "Trả lời trực tiếp, rồi thêm 1 lý do và 1 ví dụ ngắn. Ví dụ: 'Yes, I love reading. I read every night because it helps me relax. My favourite book is...'", phrases: ["To be honest, ...", "I usually...", "For example, ...", "That is because..."] },
  2: { frame: "Mở đầu (nói về cái gì), rồi kể 2-3 ý theo gợi ý trên thẻ, kết bằng cảm nghĩ. Ví dụ: 'I would like to talk about... First,... Also,... So, ...'", phrases: ["I would like to talk about...", "One reason is...", "Another thing is...", "Overall, ..."] },
  3: { frame: "Nêu quan điểm, rồi lý do + ví dụ, có thể thêm ý trái chiều. Ví dụ: 'I think... because... For example,... On the other hand,...'", phrases: ["In my opinion, ...", "The main reason is...", "For instance, ...", "On the other hand, ..."] }
};

var RB_WRITE_CRITERIA_TXT = "đáp ứng đúng đề; mạch lạc và liên kết; từ vựng; ngữ pháp đúng và đa dạng. Task 2 nặng gấp đôi Task 1.";
var RB_WRITE_STRUCT = {
  "Task 1": { struct: "Mở bài (1-2 câu: nói lại biểu đồ nói về gì, không chép nguyên đề) — Thân bài (2 đoạn: điểm nổi bật nhất + so sánh số liệu) — Không cần kết luận dài. Mỗi đoạn 3-4 câu." },
  "Task 2": { struct: "Mở bài (1-2 câu: nói lại vấn đề + nêu quan điểm) — Thân bài (2-3 đoạn: mỗi đoạn 1 ý chính + lý do + ví dụ) — Kết bài (1-2 câu: nhắc lại quan điểm). Mỗi đoạn 4-5 câu." },
  "Đoạn văn ngắn": { struct: "Câu mở đầu (nói về cái gì) — Thân đoạn (3-5 câu: kể chi tiết, có ví dụ) — Câu kết (cảm nghĩ hoặc nhận xét ngắn)." },
  "Email thân mật": { struct: "Chào hỏi thân mật — Thân thư (2-3 đoạn ngắn: lý do viết thư + chi tiết + hỏi thăm) — Kết thư (chúc + ký tên). Giọng thân mật, câu ngắn." },
  "Email trang trọng": { struct: "Chào hỏi trang trọng (Dear Mr/Ms...) — Mở thư (lý do viết) — Thân thư (2 đoạn: chi tiết rõ ràng, lịch sự) — Kết thư (cảm ơn + mong hồi âm + ký tên đầy đủ)." },
  "Tin nhắn công việc": { struct: "Tiêu đề rõ ràng — Mở đầu (mục đích) — Thân (thông tin cần thiết, ngắn gọn) — Kết (đề nghị hành động + cảm ơn)." },
  "Thư xin việc": { struct: "Mở thư (vị trí ứng tuyển + biết tin từ đâu) — Thân (2 đoạn: kinh nghiệm + kỹ năng phù hợp) — Kết (mong phỏng vấn + cảm ơn)." },
  "Thư cảm ơn": { struct: "Cảm ơn ngay câu đầu — Thân (nói rõ cảm ơn vì điều gì + cảm nghĩ) — Kết (chúc + mong gặp lại)." },
  "Thư mời": { struct: "Mời ngay câu đầu (sự kiện, thời gian, địa điểm) — Thân (chi tiết + lý do nên đến) — Kết (mong hồi âm + cảm ơn)." },
  "Thư xin lỗi": { struct: "Xin lỗi ngay câu đầu — Thân (lý do + hậu quả + cách khắc phục) — Kết (mong thông cảm + cảm ơn)." },
  "Thư yêu cầu": { struct: "Nêu yêu cầu ngay câu đầu — Thân (lý do + chi tiết cần thiết) — Kết (cảm ơn + mong hồi âm)." }
};

var RB_DRILL_KIND_GUIDE = {
  combine: { t: "Nối câu", how: "Ví dụ: 'I like tea. I like coffee.' nối bằng 'and' thành 'I like tea and coffee.' Cách làm: giữ nguyên ý hai câu, dùng đúng từ nối (and/but/because/so/although/when), bỏ từ lặp.", ex: "'She is tired. She keeps working.' nối bằng 'but' → 'She is tired, but she keeps working.'" },
  paraphrase: { t: "Viết lại câu", how: "Ví dụ: 'This book is very interesting.' viết lại thành 'This book is really fascinating.' Cách làm: đổi từ (đồng nghĩa) hoặc đổi cấu trúc, nhưng giữ nguyên ý — không thêm ý mới, không bớt ý.", ex: "'He started learning English in 2020.' → 'He began to study English in 2020.'" },
  order: { t: "Sắp xếp từ thành câu", how: "Ví dụ: các từ 'school / to / goes / she / every day' xếp thành 'She goes to school every day.' Cách làm: tìm chủ ngữ trước, rồi động từ, rồi phần còn lại — chú ý chữ hoa đầu câu và dấu chấm cuối câu.", ex: "'are / they / friends / good' → 'They are good friends.'" }
};

var RB_TYPING_THEORY = "Mỗi bộ có 3 pha: Pha 1 nhìn mẫu rồi gõ (học câu mẫu), Pha 2 nghe rồi gõ (nghe kỹ rồi gõ lại), Pha 3 nhớ rồi gõ (gõ lại mà không nhìn mẫu). Gõ đúng chính tả từng chữ — gõ sai sẽ vào Sổ lỗi sai để ôn lại.";

/* Lỗi hay gặp của người Việt, keyed theo đúng chỉ số trạm trong CONTENT.grammar (0-63). */
var RB_GRAMMAR_MISTAKES = [
  "Quên -s ở ngôi thứ ba số ít: viết 'He go' thay vì 'He goes'.",
  "Dùng hiện tại đơn để tả số liệu đã qua trong biểu đồ — số liệu quá khứ phải dùng quá khứ đơn.",
  "Viết thừa 'more higher' — 'higher' đã là so sánh hơn, không thêm 'more'.",
  "Quên động từ be: viết 'The book written' thay vì 'The book was written'.",
  "Dùng 'must' quá chắc chắn cho ý kiến cá nhân — ý kiến nên dùng 'might' hoặc 'could'.",
  "Dùng cả 'because' và 'so' trong cùng một câu — chỉ dùng một trong hai.",
  "Dùng quá khứ đơn với 'since' hoặc 'for' (ví dụ 'I live here since 2020') — phải dùng hiện tại hoàn thành: 'I have lived here since 2020'.",
  "Dùng 'will' trong mệnh đề if: 'If it will rain...' là sai — mệnh đề if dùng hiện tại đơn.",
  "Bỏ đại từ quan hệ làm chủ ngữ: 'The man lives here is my friend' là sai — phải có 'who': 'The man who lives here is my friend'.",
  "Dùng giới từ theo tiếng Việt: 'depend of' là sai — đúng là 'depend on'.",
  "Dùng 'amount' cho danh từ đếm được: 'amount of people' là sai — dùng 'number of people'.",
  "Đặt 'however' giữa câu không có dấu câu đúng — 'however' đứng giữa hai câu cần dấu chấm phẩy hoặc dấu chấm.",
  "Dùng thì tương lai sau 'when' hoặc 'after': 'When I will arrive...' là sai — dùng hiện tại đơn.",
  "Dùng câu chủ động khi mô tả quy trình — quy trình trong Task 1 thường dùng bị động ('is produced', 'is packed').",
  "Viết 'more better' — 'better' đã là so sánh hơn, không thêm 'more'.",
  "Dùng 'whereas' như 'and' — 'whereas' dùng để đối chiếu hai ý trái ngược, không phải để nối hai ý cùng chiều.",
  "Paraphrase chỉ đổi từ đồng nghĩa mà không đổi dạng từ nên câu vẫn giống câu gốc — hãy đổi cả dạng từ (danh từ → động từ, tính từ → trạng từ).",
  "Dùng 'will' cho mọi dự đoán trong biểu đồ — dự đoán nên dùng 'be likely to' hoặc 'be expected to' cho thận trọng.",
  "Dùng 'who' cho vật — vật dùng 'which' hoặc 'that'.",
  "Dùng 'would have' ở cả hai vế câu điều kiện loại 3 — mệnh đề if dùng 'had + V3', mệnh đề chính mới dùng 'would have + V3'.",
  "Liệt kê không cùng dạng: 'reading, to write, and spoke' là sai — các mục liệt kê phải cùng dạng.",
  "Viết quá chắc chắn: 'This proves...' — học thuật nên thận trọng: 'This suggests...'.",
  "Lạm dụng danh hóa làm câu nặng nề, khó đọc — chỗ nào viết được bằng động từ thì viết bằng động từ.",
  "Đoạn văn không có câu chủ đề, ý nhảy lung tung — mỗi đoạn bắt đầu bằng một câu nêu ý chính của đoạn.",
  "Câu chẻ thiếu 'that': 'It is Lan helped me' là sai — phải là 'It is Lan that helped me'.",
  "Quên đảo ngữ sau trạng từ phủ định: 'Never I have seen...' là sai — phải là 'Never have I seen...'.",
  "Bị động tường thuật sai thì: 'It is said that he is...' khi sự việc đã qua — phải lùi thì cho khớp.",
  "Mệnh đề phân từ treo chủ ngữ: 'Walking home, the rain started' là sai — chủ ngữ của phân từ và của câu chính phải là một.",
  "Đảo ngữ trong câu điều kiện thiếu dạng quá khứ phân từ: 'Had I know...' là sai — phải là 'Had I known...'.",
  "Dùng 'It is' với danh từ số nhiều: 'It is many people...' là sai — giới thiệu số nhiều dùng 'There are'.",
  "Đảo cả câu không cần đảo — chỉ đảo khi có trạng từ phủ định đầu câu hoặc cấu trúc nhấn mạnh, không đảo mọi câu.",
  "Dùng 'would' trong mệnh đề 'that' sau 'suggest': 'I suggest he would go' là sai — dùng 'should' hoặc nguyên thể: 'I suggest he go'.",
  "Rút gọn làm mất chủ ngữ, câu khó hiểu — rút gọn chỉ dùng khi chủ ngữ hai vế giống nhau.",
  "Dùng 'do' nhấn mạnh với mọi câu khẳng định — chỉ dùng 'do' khi muốn nhấn mạnh thật sự, không lạm dụng.",
  "Dùng dấu phẩy nối hai câu độc lập (comma splice) — hai câu độc lập cần dấu chấm, dấu chấm phẩy, hoặc liên từ.",
  "Paraphrase làm đổi nghĩa gốc — viết lại xong hãy đọc lại và so ý với câu gốc.",
  "Quên động từ be: viết 'I student' thay vì 'I am a student'.",
  "Quên -s ở ngôi thứ ba số ít trong thói quen mỗi ngày: 'She get up' là sai — 'She gets up'.",
  "Dùng 'a' với danh từ số nhiều: 'a books' là sai — 'a' chỉ đi với danh từ số ít đếm được.",
  "Nhầm 'his' và 'her' theo chủ ngữ tiếng Việt — 'his' dùng cho nam, 'her' dùng cho nữ, theo người sở hữu.",
  "Dùng 'in' cho ngày cụ thể: 'in Monday' là sai — ngày dùng 'on Monday', tháng/năm mới dùng 'in'.",
  "Dùng 'can to': 'I can to swim' là sai — 'can' đi với động từ nguyên thể không 'to'.",
  "Dùng hiện tại tiếp diễn cho động từ chỉ trạng thái: 'I am knowing' là sai — 'know' dùng hiện tại đơn.",
  "Dùng nguyên thể sau 'did': 'Did you went?' là sai — sau 'did' dùng nguyên thể: 'Did you go?'.",
  "Tường thuật không lùi thì: 'He said he is busy' khi anh ấy nói hôm qua — phải lùi thành 'was'.",
  "Dùng 'used to' cho thói quen hiện tại — 'used to' chỉ dùng cho thói quen đã qua, không còn nữa.",
  "Dùng quá khứ đơn cho hành động đang diễn ra bị cắt ngang — hành động đang diễn ra dùng quá khứ tiếp diễn, hành động cắt ngang dùng quá khứ đơn.",
  "Dùng quá khứ đơn với 'just' hoặc 'already': 'I just finished' trong văn Anh-Anh nên dùng hiện tại hoàn thành: 'I have just finished'.",
  "Dùng 'whom' làm chủ ngữ — 'whom' làm tân ngữ, chủ ngữ dùng 'who'.",
  "Dùng 'the' với danh từ chung chung: 'The happiness is important' là sai — nói chung chung không dùng 'the'.",
  "Dùng 'more' với tính từ ngắn: 'more big' là sai — tính từ ngắn thêm '-er': 'bigger'.",
  "Dùng 'going to' cho dự đoán không có dấu hiệu — dự đoán không có căn cứ dùng 'will', 'going to' dùng cho kế hoạch hoặc dự đoán có dấu hiệu rõ.",
  "Dùng 'have + V2': 'have went' là sai — hiện tại hoàn thành dùng V3: 'have gone'.",
  "Dùng 'would' trong mệnh đề chính của câu điều kiện loại 1 — loại 1 (việc có thể xảy ra) dùng 'will', không dùng 'would'.",
  "Nhầm 'for' và 'since': 'for' đi với khoảng thời gian (for 3 years), 'since' đi với mốc thời gian (since 2020).",
  "Dùng 'There is' với danh từ số nhiều: 'There is many books' là sai — số nhiều dùng 'There are'.",
  "Dùng 'Let's' cho mệnh lệnh trực tiếp với người lạ — 'Let's' là lời rủ rê chung, mệnh lệnh trực tiếp dùng động từ nguyên thể.",
  "Quên trợ động từ trong câu hỏi và phủ định hiện tại đơn: 'You like coffee?' là sai — phải là 'Do you like coffee?'.",
  "Dùng 'much' với danh từ đếm được: 'much books' là sai — danh từ đếm được dùng 'many'.",
  "Dùng tính từ sau động từ thường: 'He speaks clear' là sai — sau động từ thường dùng trạng từ: 'He speaks clearly'.",
  "Dùng '-ed' cho động từ bất quy tắc: 'goed' là sai — 'go' quá khứ là 'went'.",
  "Bỏ mạo từ trước danh từ đếm được số ít: 'I am teacher' là sai — phải là 'I am a teacher'.",
  "Dùng 'to V' sau 'enjoy': 'enjoy to read' là sai — 'enjoy' đi với V-ing: 'enjoy reading'.",
  "Dùng 'despite' với mệnh đề đầy đủ: 'Despite it rains...' là sai — 'despite' đi với danh từ hoặc V-ing: 'Despite the rain...'."
];

var RB_NEW_GRAMMAR_MISTAKES = [
  "Bỏ 'am' (nói 'I student') hoặc thêm thừa 'is' ('I am is a student') — đúng chỉ có 'I am + ...'.",
  "Dùng 'This is' cho nhiều đồ vật ('This is books') — số nhiều phải dùng 'These are'.",
  "Nói 'My name are Linh' hoặc 'I name is Linh' — đúng chỉ có 'My name is + tên'."
];

// ---------- TRACK TIẾNG TRUNG HSK: DỮ LIỆU (26/10/2026) ----------
// Tự soạn theo chủ đề/cấu trúc của Giáo trình chuẩn HSK (hệ 6 cấp cũ);
// câu ví dụ tự viết, KHÔNG trích nguyên văn giáo trình.
// Hệ đếm HSK 3.0 dùng hệ E (đề cương thi 2025, đã đối chiếu văn bản gốc):
// tích lũy 300/500/1000/2000/3600/5400/11000. KHÔNG dùng số hệ F.
var ZH_STAGES = [
  { stage: 1, title: "Phát âm và chào hỏi", oldCum: 150, eCum: 300, desc: "2 bài ngữ âm + 13 chủ đề; nghe–nói là trục chính", note: "Nhãn HSK của web là mức đặt chủ đề theo tiến trình cấp, không phải xác nhận từng từ nằm trong khung HSK 2.0 chính thức." },
  { stage: 2, title: "Trọng âm, ngữ điệu và so sánh bước đầu", oldCum: 300, eCum: 500, desc: "Trọng âm từ/câu, ngữ điệu câu, so sánh bước đầu", note: "Nhãn HSK của web là mức đặt chủ đề theo tiến trình cấp, không phải xác nhận từng từ nằm trong khung HSK 2.0 chính thức." },
  { stage: 3, title: "Từ hội thoại sang đoạn văn", oldCum: 600, eCum: 1000, desc: "Bổ ngữ, câu chữ 把, câu chữ 被, đoạn văn ngắn", note: "Nhãn HSK của web là mức đặt chủ đề theo tiến trình cấp, không phải xác nhận từng từ nằm trong khung HSK 2.0 chính thức." },
  { stage: 4, title: "Học theo chủ đề, mở rộng theo chữ", oldCum: 1200, eCum: 2000, desc: "Mỗi bài 1 chủ đề lớn; dùng chữ dẫn từ; cặp điểm dễ nhầm", note: "Nhãn HSK của web là mức đặt chủ đề theo tiến trình cấp, không phải xác nhận từng từ nằm trong khung HSK 2.0 chính thức." },
  { stage: 5, title: "Học qua từ, đoạn văn dài", oldCum: 2500, eCum: 3600, desc: "Từ vựng là trục chính; tự sự, nghị luận; viết đoạn từ 100 chữ", note: "Nhãn HSK của web là mức đặt chủ đề theo tiến trình cấp, không phải xác nhận từng từ nằm trong khung HSK 2.0 chính thức." },
  { stage: 6, title: "Văn bản dài và viết lại", oldCum: 5000, eCum: 5400, desc: "Bài khóa 700–1500 chữ; viết rút gọn 300–350 chữ", note: "Nhãn HSK của web là mức đặt chủ đề theo tiến trình cấp, không phải xác nhận từng từ nằm trong khung HSK 2.0 chính thức." }
];
var ZH_PH_STEPS = [
  { id: "tones", title: "Thanh điệu: 4 thanh + thanh nhẹ",
    hook: "Nói tiếng Trung mà sai thanh là sai nghĩa: mā (mẹ) khác mǎ (ngựa) — chỉ khác dấu thanh.",
    examples: ["mā 妈 — mẹ (thanh 1, cao đều)", "má 麻 — tê, gai (thanh 2, đi lên)", "mǎ 马 — ngựa (thanh 3, xuống rồi lên)", "mà 骂 — mắng (thanh 4, đi xuống)", "ma 吗 — trợ từ hỏi (thanh nhẹ, đọc lướt)"],
    rule: "Thanh điệu là độ cao của giọng khi đọc một âm tiết. Tiếng Trung phổ thông có 4 thanh chính + thanh nhẹ. Nhìn dấu thanh là biết thanh nào.",
    tip: "Tập đọc từng thanh với tay vẽ đường đi của giọng: ngang, lên, cong, xuống.",
    quiz: [
      { q: "“mā” mang dấu thanh nào?", o: ["Dấu ngang", "Dấu lên", "Dấu cong", "Dấu xuống"], a: 0, why: "Dấu ngang là thanh 1, đọc cao và đều.", speak: "妈" },
      { q: "“mǎ” là thanh mấy?", o: ["Thanh 1", "Thanh 2", "Thanh 3", "Thanh 4"], a: 2, why: "Dấu cong xuống rồi lên là thanh 3.", speak: "马" },
      { q: "Từ nào đọc bằng thanh 4?", o: ["mā", "má", "mǎ", "mà"], a: 3, why: "Chỉ từ mang dấu xuống mới là thanh 4.", speak: "妈麻马骂" },
      { q: "“ma” không dấu thường là gì?", o: ["Thanh 1", "Thanh 2", "Thanh 4", "Thanh nhẹ"], a: 3, why: "Không dấu thường là thanh nhẹ, đọc ngắn và lướt.", speak: "吗" },
      { q: "Cặp nào chỉ khác nhau ở thanh điệu?", o: ["mā – mà", "mā – bā", "mā – nā", "mā – lā"], a: 0, why: "Cùng vần ma, chỉ khác dấu thanh thì nghĩa đã khác.", speak: "妈骂" },
      { q: "Hai thanh 3 đi liền nhau thì thanh đầu đọc thành gì?", o: ["Vẫn thanh 3", "Thanh 2", "Thanh 4", "Thanh nhẹ"], a: 1, why: "Quy tắc biến điệu: 3 + 3 đọc thành 2 + 3.", speak: "你好" }
    ] },
  { id: "finals", title: "Vận mẫu cơ bản",
    hook: "Vận mẫu là phần vần sau thanh mẫu: b + ao = bao.",
    examples: ["a, o, e, i, u, ü — 6 vận mẫu đơn", "ai, ei, ao, ou — vận mẫu kép, đọc trượt từ âm này sang âm kia", "an, en, ang, eng — vận mẫu mũi, kết thúc bằng n hoặc ng"],
    rule: "Một âm tiết = thanh mẫu (không bắt buộc) + vận mẫu (bắt buộc) + thanh điệu. Vận mẫu quyết định vần của âm tiết.",
    tip: "Đọc vận mẫu mũi thì hơi thoát ra mũi ở cuối: an khác ang ở độ sâu của âm mũi.",
    quiz: [
      { q: "Âm nào là vận mẫu (phần vần)?", o: ["b", "a", "m", "d"], a: 1, why: "a là vận mẫu đơn; b, m, d là thanh mẫu.", speak: "啊" },
      { q: "“ao” là vận mẫu gì?", o: ["Vận mẫu đơn", "Vận mẫu kép", "Vận mẫu mũi", "Thanh mẫu"], a: 1, why: "ao trượt từ a sang o nên là vận mẫu kép.", speak: "好" },
      { q: "Từ “hǎo” (hảo) có vận mẫu nào?", o: ["a", "ao", "ou", "an"], a: 1, why: "hǎo = h + ao.", speak: "好" },
      { q: "Vận mẫu mũi là vận mẫu kết thúc bằng gì?", o: ["i hoặc u", "n hoặc ng", "a hoặc o", "e"], a: 1, why: "an, en, ang, eng đều kết thúc bằng âm mũi.", speak: "安昂" },
      { q: "“an” và “ang” khác nhau ở đâu?", o: ["Không khác", "ang đọc mũi sâu hơn, có ng cuối", "an dài hơn", "ang là thanh mẫu"], a: 1, why: "ang có ng cuối nên âm mũi sâu hơn an.", speak: "安昂" },
      { q: "“ei” đọc gần giống gì?", o: ["ay", "au", "ei (e rồi i nhẹ)", "ao"], a: 2, why: "ei trượt từ e sang i nhẹ.", speak: "飞" }
    ] },
  { id: "initials", title: "Thanh mẫu cơ bản",
    hook: "Thanh mẫu là phụ âm đầu: b, p, m, f là 4 thanh mẫu môi.",
    examples: ["b, p, m, f — môi", "d, t, n, l — đầu lưỡi", "g, k, h — cuống lưỡi", "j, q, x — mặt lưỡi; zh, ch, sh, r — quặt lưỡi; z, c, s — đầu lưỡi"],
    rule: "Có 21 thanh mẫu (không tính y, w). Phân biệt cặp bật hơi/không bật hơi: b–p, d–t, g–k, j–q, zh–ch, z–c.",
    tip: "Nghe mẫu rồi nhại theo, chú ý bật hơi: p, t, k, q, ch, c có luồng hơi mạnh.",
    quiz: [
      { q: "Âm nào là thanh mẫu (phần đầu)?", o: ["a", "b", "ao", "an"], a: 1, why: "b là phụ âm đầu; a, ao, an là vận mẫu.", speak: "爸" },
      { q: "“zh, ch, sh” gọi là nhóm gì?", o: ["Thanh mẫu đầu lưỡi", "Thanh mẫu quặt lưỡi", "Vận mẫu", "Thanh điệu"], a: 1, why: "zh, ch, sh uốn lưỡi lên nên gọi là quặt lưỡi.", speak: "中" },
      { q: "“q” trong pinyin đọc gần giống gì?", o: ["k", "ch mềm, bật hơi nhẹ", "s", "z"], a: 1, why: "q mềm hơn ch và có bật hơi.", speak: "去" },
      { q: "Từ “Zhōngguó” bắt đầu bằng thanh mẫu nào?", o: ["z", "zh", "j", "ch"], a: 1, why: "Zhōng = zh + ōng.", speak: "中国" },
      { q: "Cặp nào khác nhau ở bật hơi?", o: ["b – m", "d – t", "n – l", "g – h"], a: 1, why: "d không bật hơi, t bật hơi mạnh.", speak: "大他" },
      { q: "“r” trong pinyin (như trong rén) đọc gần giống gì?", o: ["r rung mạnh như tiếng Việt", "r mềm, gần như “z” nhẹ có rung", "l", "y"], a: 1, why: "r tiếng Trung mềm và có ma sát, không rung mạnh.", speak: "人" }
    ] },
  { id: "rules", title: "Quy tắc viết pinyin hay nhầm",
    hook: "Viết pinyin có vài chỗ gọn lại — nhớ 4 quy tắc này là đủ đọc đúng.",
    examples: ["ü sau j, q, x, y → u: ju, qu, xu, yu", "iou có thanh mẫu → iu: jiu (không viết jiou)", "uen có thanh mẫu → un: lun (không viết luen)", "i đứng một mình → yi; u đứng một mình → wu; ü đứng một mình → yu"],
    rule: "Các quy tắc gọn này chỉ đổi CÁCH VIẾT, không đổi cách đọc. Ngoài ra: hai thanh 3 liền nhau thì thanh đầu đọc thành thanh 2.",
    tip: "Gặp pinyin lạ thì tách ra: thanh mẫu + vận mẫu + dấu thanh, đọc từng phần rồi nối lại.",
    quiz: [
      { q: "“ü” sau j, q, x, y viết thành gì?", o: ["ü", "u", "v", "yu"], a: 1, why: "Bỏ hai chấm: ju, qu, xu, yu.", speak: "句" },
      { q: "“iou” khi có thanh mẫu đi trước viết gọn thành gì?", o: ["iou", "iu", "io", "u"], a: 1, why: "Bỏ o giữa: jiu thay cho jiou.", speak: "九" },
      { q: "“uen” khi có thanh mẫu đi trước viết gọn thành gì?", o: ["uen", "un", "ueng", "en"], a: 1, why: "Bỏ e giữa: lun thay cho luen.", speak: "论" },
      { q: "Âm “i” đứng một mình, thêm gì ở đầu?", o: ["Không thêm", "y → yi", "w → wi", "j → ji"], a: 1, why: "i đứng một mình thêm y: yi.", speak: "一" },
      { q: "Âm “u” đứng một mình, thêm gì ở đầu?", o: ["y → yu", "w → wu", "j → ju", "Không thêm"], a: 1, why: "u đứng một mình thêm w: wu.", speak: "五" },
      { q: "Hai thanh 3 đi liền nhau (ví dụ nǐ hǎo) thì thanh 3 đầu tiên đọc thành gì?", o: ["Vẫn thanh 3", "Thanh 2", "Thanh 4", "Thanh nhẹ"], a: 1, why: "Quy tắc biến điệu: 3 + 3 → 2 + 3.", speak: "你好" }
    ] }
];
// Bộ từ khởi động chặng 1 (tự soạn theo chủ đề sách HSK1: chào hỏi, bản thân,
// giao tiếp tối thiểu). Các từ là từ cơ bản thông dụng; câu ví dụ tự soạn,
// không trích nguyên văn giáo trình.
var ZH_STARTER = {
  topic: "Chặng 1 — Chào hỏi và làm quen",
  hsk: "HSK1",
  hskNote: "Bộ tự soạn theo chủ đề sách HSK1 (chào hỏi, bản thân, giao tiếp tối thiểu). Các từ là từ cơ bản thông dụng; câu ví dụ tự soạn, không trích nguyên văn giáo trình.",
  cards: [
    { han: "你", pinyin: "nǐ", vi: "bạn", col: "你好", ex: "你好吗？", exv: "Bạn có khỏe không?" },
    { han: "好", pinyin: "hǎo", vi: "tốt; khỏe", col: "很好", ex: "我很好，谢谢。", exv: "Tôi rất khỏe, cảm ơn." },
    { han: "我", pinyin: "wǒ", vi: "tôi", col: "我们", ex: "我是中国人。", exv: "Tôi là người Trung Quốc." },
    { han: "是", pinyin: "shì", vi: "là", col: "是学生", ex: "我是学生。", exv: "Tôi là học sinh." },
    { han: "不", pinyin: "bù", vi: "không", col: "不是", ex: "我不是老师，我是学生。", exv: "Tôi không phải giáo viên, tôi là học sinh." },
    { han: "吗", pinyin: "ma", vi: "trợ từ câu hỏi", col: "好吗", ex: "你好吗？", exv: "Bạn khỏe không?" },
    { han: "呢", pinyin: "ne", vi: "trợ từ (còn… thì sao)", col: "你呢", ex: "我很好，你呢？", exv: "Tôi rất khỏe, còn bạn thì sao?" },
    { han: "谢谢", pinyin: "xièxie", vi: "cảm ơn", col: "谢谢你", ex: "谢谢你的帮助。", exv: "Cảm ơn sự giúp đỡ của bạn." },
    { han: "再见", pinyin: "zàijiàn", vi: "tạm biệt", col: "明天见", ex: "今天先这样，明天见。", exv: "Hôm nay thế này trước nhé, mai gặp." },
    { han: "请", pinyin: "qǐng", vi: "mời; xin", col: "请坐", ex: "请坐，喝茶吧。", exv: "Mời ngồi, uống trà nhé." },
    { han: "对不起", pinyin: "duìbuqi", vi: "xin lỗi", col: "说对不起", ex: "对不起，我迟到了。", exv: "Xin lỗi, tôi đến muộn rồi." },
    { han: "没关系", pinyin: "méi guānxi", vi: "không sao", col: "没关系", ex: "没关系，下次早一点。", exv: "Không sao, lần sau sớm hơn một chút." },
    { han: "叫", pinyin: "jiào", vi: "gọi là; tên là", col: "叫什么", ex: "你叫什么名字？", exv: "Bạn tên là gì?" },
    { han: "姓", pinyin: "xìng", vi: "họ", col: "贵姓", ex: "请问您贵姓？", exv: "Xin hỏi quý danh của ông/bà là gì?" },
    { han: "朋友", pinyin: "péngyou", vi: "bạn bè", col: "好朋友", ex: "他是我的好朋友。", exv: "Anh ấy là bạn thân của tôi." },
    { han: "老师", pinyin: "lǎoshī", vi: "thầy/cô giáo", col: "王老师", ex: "王老师是我的老师。", exv: "Thầy Vương là giáo viên của tôi." },
    { han: "学生", pinyin: "xuéshēng", vi: "học sinh; sinh viên", col: "中国学生", ex: "我是中国学生。", exv: "Tôi là học sinh Trung Quốc." },
    { han: "今天", pinyin: "jīntiān", vi: "hôm nay", col: "今天天气", ex: "今天天气很好。", exv: "Hôm nay thời tiết rất đẹp." },
    { han: "中国", pinyin: "Zhōngguó", vi: "Trung Quốc", col: "中国人", ex: "我爱中国。", exv: "Tôi yêu Trung Quốc." },
    { han: "人", pinyin: "rén", vi: "người", col: "中国人", ex: "中国人很多。", exv: "Người Trung Quốc rất đông." }
  ]
};
// Câu luyện HSKK Sơ cấp: nghe–nhắc lại (tự soạn, chào hỏi/giới thiệu cơ bản).
var ZH_HSKK_SENTENCES = [
  { han: "你好！", pinyin: "Nǐ hǎo!", vi: "Chào bạn!" },
  { han: "我叫小明。", pinyin: "Wǒ jiào Xiǎo Míng.", vi: "Tôi tên là Tiểu Minh." },
  { han: "我是中国人。", pinyin: "Wǒ shì Zhōngguó rén.", vi: "Tôi là người Trung Quốc." },
  { han: "你是哪国人？", pinyin: "Nǐ shì nǎ guó rén?", vi: "Bạn là người nước nào?" },
  { han: "我今年二十岁。", pinyin: "Wǒ jīnnián èrshí suì.", vi: "Năm nay tôi 20 tuổi." },
  { han: "谢谢你！", pinyin: "Xièxie nǐ!", vi: "Cảm ơn bạn!" },
  { han: "再见！", pinyin: "Zàijiàn!", vi: "Tạm biệt!" },
  { han: "请问，你叫什么名字？", pinyin: "Qǐngwèn, nǐ jiào shénme míngzi?", vi: "Xin hỏi, bạn tên là gì?" },
  { han: "我是学生。", pinyin: "Wǒ shì xuéshēng.", vi: "Tôi là học sinh." },
  { han: "今天天气很好。", pinyin: "Jīntiān tiānqì hěn hǎo.", vi: "Hôm nay thời tiết rất đẹp." }
];
// Kiểm tra xếp chặng nội bộ (không phải đề thi HSK thật): thanh điệu, từ cơ bản, pinyin.
var ZH_ENTRY_QS = [
  { q: "“mā” mang dấu thanh nào?", o: ["Dấu ngang", "Dấu lên", "Dấu cong", "Dấu xuống"], a: 0, why: "Dấu ngang là thanh 1." },
  { q: "“mǎ” là thanh mấy?", o: ["Thanh 1", "Thanh 2", "Thanh 3", "Thanh 4"], a: 2, why: "Dấu cong xuống rồi lên là thanh 3." },
  { q: "Từ nào đọc bằng thanh 4?", o: ["mā", "má", "mǎ", "mà"], a: 3, why: "Chỉ từ mang dấu xuống mới là thanh 4." },
  { q: "“ma” không dấu thường là gì?", o: ["Thanh 1", "Thanh 2", "Thanh 4", "Thanh nhẹ"], a: 3, why: "Không dấu thường là thanh nhẹ, đọc ngắn và lướt." },
  { q: "“你” nghĩa là gì?", o: ["Tôi", "Bạn", "Anh ấy", "Chúng ta"], a: 1, why: "你 là ngôi thứ hai: bạn." },
  { q: "“谢谢” nghĩa là gì?", o: ["Tạm biệt", "Xin lỗi", "Cảm ơn", "Xin chào"], a: 2, why: "谢谢 là cảm ơn." },
  { q: "“再见” nghĩa là gì?", o: ["Cảm ơn", "Tạm biệt", "Xin lỗi", "Mời ngồi"], a: 1, why: "再见 dùng khi chào tạm biệt." },
  { q: "“中国” đọc là gì?", o: ["Zhōngguó", "Zhōngwén", "Zhōngxué", "Zhōngrén"], a: 0, why: "中国 đọc là Zhōngguó." },
  { q: "“朋友” đọc là gì?", o: ["péngyou", "péngyǒu", "píngyou", "pèngyou"], a: 0, why: "朋友 đọc là péngyou." },
  { q: "“老师” đọc là gì?", o: ["lǎoshī", "láoshī", "lǎoshǐ", "lāoshī"], a: 0, why: "老师 đọc là lǎoshī." }
];
function ZH_STAGE_SETS(stage) {
  var out = [];
  (CONTENT.zhVocab || []).forEach(function (s, i) { if (s.hsk === "HSK" + stage) out.push(i); });
  return out;
}
function zhEntryStageFor(score, total) {
  if (score >= 9) return 4;
  if (score >= 7) return 3;
  if (score >= 4) return 2;
  return 1;
}
