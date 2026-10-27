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
  },
  {
  "topic": "Gia đình và đời sống hằng ngày",
  "hsk": "HSK2",
  "hskNote": "Bộ tự soạn theo chủ đề sách HSK2. Các từ là từ thông dụng ở trình độ này; câu ví dụ tự soạn, không trích nguyên văn giáo trình. Nhãn HSK2 là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "cards": [
   {
    "han": "爸爸",
    "pinyin": "bàba",
    "vi": "bố",
    "col": "我的爸爸",
    "ex": "我爸爸每天早上六点起床。",
    "exv": "Bố tôi mỗi sáng dậy lúc 6 giờ."
   },
   {
    "han": "妈妈",
    "pinyin": "māma",
    "vi": "mẹ",
    "col": "我的妈妈",
    "ex": "我妈妈做的饭很好吃。",
    "exv": "Cơm mẹ tôi nấu rất ngon."
   },
   {
    "han": "哥哥",
    "pinyin": "gēge",
    "vi": "anh trai",
    "col": "大哥哥",
    "ex": "我哥哥在北京工作。",
    "exv": "Anh trai tôi làm việc ở Bắc Kinh."
   },
   {
    "han": "姐姐",
    "pinyin": "jiějie",
    "vi": "chị gái",
    "col": "好姐姐",
    "ex": "我姐姐是医生。",
    "exv": "Chị gái tôi là bác sĩ."
   },
   {
    "han": "弟弟",
    "pinyin": "dìdi",
    "vi": "em trai",
    "col": "小弟弟",
    "ex": "我弟弟今年十岁。",
    "exv": "Em trai tôi năm nay 10 tuổi."
   },
   {
    "han": "妹妹",
    "pinyin": "mèimei",
    "vi": "em gái",
    "col": "小妹妹",
    "ex": "我妹妹喜欢画画。",
    "exv": "Em gái tôi thích vẽ."
   },
   {
    "han": "孩子",
    "pinyin": "háizi",
    "vi": "con; trẻ con",
    "col": "小孩子",
    "ex": "孩子们在公园里玩。",
    "exv": "Bọn trẻ chơi trong công viên."
   },
   {
    "han": "家人",
    "pinyin": "jiārén",
    "vi": "người nhà",
    "col": "一家人",
    "ex": "一家人周末常常一起吃饭。",
    "exv": "Cả nhà cuối tuần thường ăn cơm cùng nhau."
   },
   {
    "han": "妻子",
    "pinyin": "qīzi",
    "vi": "vợ",
    "col": "他的妻子",
    "ex": "他的妻子是老师。",
    "exv": "Vợ anh ấy là giáo viên."
   },
   {
    "han": "丈夫",
    "pinyin": "zhàngfu",
    "vi": "chồng",
    "col": "她的丈夫",
    "ex": "她的丈夫每天送孩子上学。",
    "exv": "Chồng cô ấy mỗi ngày đưa con đi học."
   },
   {
    "han": "儿子",
    "pinyin": "érzi",
    "vi": "con trai",
    "col": "大儿子",
    "ex": "我儿子在上海上大学。",
    "exv": "Con trai tôi học đại học ở Thượng Hải."
   },
   {
    "han": "女儿",
    "pinyin": "nǚ'ér",
    "vi": "con gái",
    "col": "小女儿",
    "ex": "我女儿很喜欢唱歌。",
    "exv": "Con gái tôi rất thích hát."
   },
   {
    "han": "奶奶",
    "pinyin": "nǎinai",
    "vi": "bà nội",
    "col": "老奶奶",
    "ex": "奶奶每天下午去公园散步。",
    "exv": "Bà nội mỗi chiều đi dạo trong công viên."
   },
   {
    "han": "爷爷",
    "pinyin": "yéye",
    "vi": "ông nội",
    "col": "老爷爷",
    "ex": "爷爷喜欢喝茶看报纸。",
    "exv": "Ông nội thích uống trà, đọc báo."
   },
   {
    "han": "外公",
    "pinyin": "wàigōng",
    "vi": "ông ngoại",
    "col": "我的外公",
    "ex": "我外公住在农村。",
    "exv": "Ông ngoại tôi sống ở nông thôn."
   },
   {
    "han": "外婆",
    "pinyin": "wàipó",
    "vi": "bà ngoại",
    "col": "我的外婆",
    "ex": "我外婆做的饺子最好吃。",
    "exv": "Bánh chẻo bà ngoại tôi làm là ngon nhất."
   },
   {
    "han": "叔叔",
    "pinyin": "shūshu",
    "vi": "chú; bác trai",
    "col": "王叔叔",
    "ex": "王叔叔是我的邻居。",
    "exv": "Chú Vương là hàng xóm của tôi."
   },
   {
    "han": "阿姨",
    "pinyin": "āyí",
    "vi": "cô; dì",
    "col": "李阿姨",
    "ex": "李阿姨对我们很好。",
    "exv": "Cô Lý rất tốt với chúng tôi."
   },
   {
    "han": "邻居",
    "pinyin": "línjū",
    "vi": "hàng xóm",
    "col": "新邻居",
    "ex": "新邻居是一对年轻夫妇。",
    "exv": "Hàng xóm mới là một đôi vợ chồng trẻ."
   },
   {
    "han": "家庭",
    "pinyin": "jiātíng",
    "vi": "gia đình",
    "col": "幸福的家庭",
    "ex": "这是一个幸福的家庭。",
    "exv": "Đây là một gia đình hạnh phúc."
   }
  ]
 },
  {
  "topic": "Thời gian",
  "hsk": "HSK2",
  "hskNote": "Bộ tự soạn theo chủ đề sách HSK2. Các từ là từ thông dụng ở trình độ này; câu ví dụ tự soạn, không trích nguyên văn giáo trình. Nhãn HSK2 là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "cards": [
   {
    "han": "明天",
    "pinyin": "míngtiān",
    "vi": "ngày mai",
    "col": "明天见",
    "ex": "明天我们一起去学校。",
    "exv": "Ngày mai chúng ta cùng đi học."
   },
   {
    "han": "昨天",
    "pinyin": "zuótiān",
    "vi": "hôm qua",
    "col": "昨天晚上",
    "ex": "昨天晚上下雨了。",
    "exv": "Tối hôm qua trời mưa."
   },
   {
    "han": "前天",
    "pinyin": "qiántiān",
    "vi": "hôm kia",
    "col": "前天上午",
    "ex": "前天上午我去看朋友了。",
    "exv": "Sáng hôm kia tôi đi thăm bạn."
   },
   {
    "han": "后天",
    "pinyin": "hòutiān",
    "vi": "ngày kia",
    "col": "后天早上",
    "ex": "后天早上我们去机场。",
    "exv": "Sáng ngày kia chúng ta ra sân bay."
   },
   {
    "han": "早上",
    "pinyin": "zǎoshang",
    "vi": "buổi sáng",
    "col": "每天早上",
    "ex": "我每天早上七点起床。",
    "exv": "Tôi mỗi sáng dậy lúc 7 giờ."
   },
   {
    "han": "中午",
    "pinyin": "zhōngwǔ",
    "vi": "buổi trưa",
    "col": "中午休息",
    "ex": "中午休息一个小时。",
    "exv": "Buổi trưa nghỉ một tiếng."
   },
   {
    "han": "晚上",
    "pinyin": "wǎnshang",
    "vi": "buổi tối",
    "col": "今天晚上",
    "ex": "今天晚上我们一起吃饭吧。",
    "exv": "Tối nay chúng ta cùng ăn cơm nhé."
   },
   {
    "han": "现在",
    "pinyin": "xiànzài",
    "vi": "bây giờ",
    "col": "现在就去",
    "ex": "现在就去，别等了。",
    "exv": "Bây giờ đi ngay đi, đừng đợi nữa."
   },
   {
    "han": "以前",
    "pinyin": "yǐqián",
    "vi": "trước đây",
    "col": "以前住",
    "ex": "我以前住在河内。",
    "exv": "Trước đây tôi sống ở Hà Nội."
   },
   {
    "han": "以后",
    "pinyin": "yǐhòu",
    "vi": "sau này; sau đó",
    "col": "以后再说",
    "ex": "这个问题以后再说吧。",
    "exv": "Vấn đề này để sau hãy nói."
   },
   {
    "han": "时候",
    "pinyin": "shíhou",
    "vi": "lúc; khi",
    "col": "小时候",
    "ex": "我小时候住在农村。",
    "exv": "Lúc nhỏ tôi sống ở nông thôn."
   },
   {
    "han": "星期",
    "pinyin": "xīngqī",
    "vi": "tuần",
    "col": "下星期",
    "ex": "下星期我去上海出差。",
    "exv": "Tuần sau tôi đi Thượng Hải công tác."
   },
   {
    "han": "今年",
    "pinyin": "jīnnián",
    "vi": "năm nay",
    "col": "今年夏天",
    "ex": "今年夏天很热。",
    "exv": "Mùa hè năm nay rất nóng."
   },
   {
    "han": "去年",
    "pinyin": "qùnián",
    "vi": "năm ngoái",
    "col": "去年冬天",
    "ex": "去年冬天不太冷。",
    "exv": "Mùa đông năm ngoái không lạnh lắm."
   },
   {
    "han": "明年",
    "pinyin": "míngnián",
    "vi": "năm sau",
    "col": "明年计划",
    "ex": "明年我计划去中国学习。",
    "exv": "Năm sau tôi dự định sang Trung Quốc học."
   },
   {
    "han": "每周",
    "pinyin": "měizhōu",
    "vi": "mỗi tuần",
    "col": "每周一次",
    "ex": "我们每周见一次。",
    "exv": "Chúng tôi mỗi tuần gặp nhau một lần."
   },
   {
    "han": "每天",
    "pinyin": "měitiān",
    "vi": "mỗi ngày",
    "col": "每天早上",
    "ex": "他每天早上跑步。",
    "exv": "Anh ấy mỗi sáng chạy bộ."
   },
   {
    "han": "每年",
    "pinyin": "měinián",
    "vi": "mỗi năm",
    "col": "每年春节",
    "ex": "我们每年春节都回家。",
    "exv": "Mỗi năm dịp Tết chúng tôi đều về nhà."
   },
   {
    "han": "半天",
    "pinyin": "bàntiān",
    "vi": "nửa ngày",
    "col": "花了半天",
    "ex": "这件事花了半天时间。",
    "exv": "Việc này tốn nửa ngày."
   },
   {
    "han": "小时",
    "pinyin": "xiǎoshí",
    "vi": "giờ (tiếng đồng hồ)",
    "col": "两个小时",
    "ex": "从这里到机场要两个小时。",
    "exv": "Từ đây ra sân bay mất hai tiếng."
   }
  ]
 },
  {
  "topic": "Ăn uống",
  "hsk": "HSK2",
  "hskNote": "Bộ tự soạn theo chủ đề sách HSK2. Các từ là từ thông dụng ở trình độ này; câu ví dụ tự soạn, không trích nguyên văn giáo trình. Nhãn HSK2 là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "cards": [
   {
    "han": "吃饭",
    "pinyin": "chīfàn",
    "vi": "ăn cơm",
    "col": "一起吃饭",
    "ex": "我们一起吃饭吧。",
    "exv": "Chúng ta cùng ăn cơm nhé."
   },
   {
    "han": "喝水",
    "pinyin": "hēshuǐ",
    "vi": "uống nước",
    "col": "多喝水",
    "ex": "天气热，要多喝水。",
    "exv": "Trời nóng, phải uống nhiều nước."
   },
   {
    "han": "米饭",
    "pinyin": "mǐfàn",
    "vi": "cơm",
    "col": "一碗米饭",
    "ex": "我要一碗米饭。",
    "exv": "Tôi muốn một bát cơm."
   },
   {
    "han": "面条",
    "pinyin": "miàntiáo",
    "vi": "mì sợi",
    "col": "一碗面条",
    "ex": "中午吃一碗面条吧。",
    "exv": "Trưa ăn một bát mì nhé."
   },
   {
    "han": "面包",
    "pinyin": "miànbāo",
    "vi": "bánh mì",
    "col": "买面包",
    "ex": "早上我去买面包。",
    "exv": "Buổi sáng tôi đi mua bánh mì."
   },
   {
    "han": "水果",
    "pinyin": "shuǐguǒ",
    "vi": "hoa quả",
    "col": "吃水果",
    "ex": "每天吃一点水果对身体好。",
    "exv": "Mỗi ngày ăn ít hoa quả thì tốt cho sức khỏe."
   },
   {
    "han": "苹果",
    "pinyin": "píngguǒ",
    "vi": "quả táo",
    "col": "红苹果",
    "ex": "这个苹果很甜。",
    "exv": "Quả táo này rất ngọt."
   },
   {
    "han": "香蕉",
    "pinyin": "xiāngjiāo",
    "vi": "quả chuối",
    "col": "一根香蕉",
    "ex": "他每天吃一根香蕉。",
    "exv": "Anh ấy mỗi ngày ăn một quả chuối."
   },
   {
    "han": "鸡蛋",
    "pinyin": "jīdàn",
    "vi": "trứng gà",
    "col": "煮鸡蛋",
    "ex": "早上吃一个煮鸡蛋。",
    "exv": "Buổi sáng ăn một quả trứng luộc."
   },
   {
    "han": "牛奶",
    "pinyin": "niúnǎi",
    "vi": "sữa bò",
    "col": "一杯牛奶",
    "ex": "早上喝一杯牛奶。",
    "exv": "Buổi sáng uống một cốc sữa."
   },
   {
    "han": "咖啡",
    "pinyin": "kāfēi",
    "vi": "cà phê",
    "col": "一杯咖啡",
    "ex": "下午喝一杯咖啡吧。",
    "exv": "Buổi chiều uống một cốc cà phê nhé."
   },
   {
    "han": "茶",
    "pinyin": "chá",
    "vi": "trà",
    "col": "一杯茶",
    "ex": "早上喝一杯茶，很舒服。",
    "exv": "Buổi sáng uống một chén trà, rất dễ chịu."
   },
   {
    "han": "菜",
    "pinyin": "cài",
    "vi": "món ăn",
    "col": "一个菜",
    "ex": "今天做一个菜就够了。",
    "exv": "Hôm nay nấu một món là đủ rồi."
   },
   {
    "han": "肉",
    "pinyin": "ròu",
    "vi": "thịt",
    "col": "不吃肉",
    "ex": "他不吃肉，只吃蔬菜。",
    "exv": "Anh ấy không ăn thịt, chỉ ăn rau."
   },
   {
    "han": "鱼",
    "pinyin": "yú",
    "vi": "cá",
    "col": "一条鱼",
    "ex": "今天买了一条鱼。",
    "exv": "Hôm nay mua một con cá."
   },
   {
    "han": "盐",
    "pinyin": "yán",
    "vi": "muối",
    "col": "少放盐",
    "ex": "做菜要少放盐。",
    "exv": "Nấu ăn nên cho ít muối."
   },
   {
    "han": "糖",
    "pinyin": "táng",
    "vi": "đường",
    "col": "不放糖",
    "ex": "这杯茶不放糖。",
    "exv": "Chén trà này không cho đường."
   },
   {
    "han": "饭馆",
    "pinyin": "fànguǎn",
    "vi": "quán ăn",
    "col": "一家饭馆",
    "ex": "学校旁边有一家饭馆。",
    "exv": "Bên cạnh trường có một quán ăn."
   },
   {
    "han": "服务员",
    "pinyin": "fúwùyuán",
    "vi": "nhân viên phục vụ",
    "col": "叫服务员",
    "ex": "请叫服务员来一下。",
    "exv": "Xin gọi nhân viên phục vụ tới một chút."
   },
   {
    "han": "买单",
    "pinyin": "mǎidān",
    "vi": "thanh toán (tính tiền)",
    "col": "买单吧",
    "ex": "吃完了，买单吧。",
    "exv": "Ăn xong rồi, thanh toán nhé."
   }
  ]
 },
  {
  "topic": "Đi lại và mua sắm",
  "hsk": "HSK2",
  "hskNote": "Bộ tự soạn theo chủ đề sách HSK2. Các từ là từ thông dụng ở trình độ này; câu ví dụ tự soạn, không trích nguyên văn giáo trình. Nhãn HSK2 là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "cards": [
   {
    "han": "出租车",
    "pinyin": "chūzūchē",
    "vi": "taxi",
    "col": "打出租车",
    "ex": "去机场打出租车吧。",
    "exv": "Ra sân bay thì bắt taxi nhé."
   },
   {
    "han": "公共汽车",
    "pinyin": "gōnggòngqìchē",
    "vi": "xe buýt",
    "col": "坐公共汽车",
    "ex": "我每天坐公共汽车去上班。",
    "exv": "Tôi mỗi ngày đi xe buýt đi làm."
   },
   {
    "han": "地铁",
    "pinyin": "dìtiě",
    "vi": "tàu điện ngầm",
    "col": "坐地铁",
    "ex": "坐地铁比开车快。",
    "exv": "Đi tàu điện ngầm nhanh hơn lái xe."
   },
   {
    "han": "火车",
    "pinyin": "huǒchē",
    "vi": "tàu hỏa",
    "col": "坐火车",
    "ex": "坐火车去北京要五个小时。",
    "exv": "Đi tàu hỏa tới Bắc Kinh mất năm tiếng."
   },
   {
    "han": "飞机",
    "pinyin": "fēijī",
    "vi": "máy bay",
    "col": "坐飞机",
    "ex": "坐飞机去上海只要两个小时。",
    "exv": "Đi máy bay tới Thượng Hải chỉ mất hai tiếng."
   },
   {
    "han": "船",
    "pinyin": "chuán",
    "vi": "thuyền",
    "col": "坐船",
    "ex": "我们可以坐船去那个小岛。",
    "exv": "Chúng ta có thể đi thuyền ra hòn đảo nhỏ đó."
   },
   {
    "han": "自行车",
    "pinyin": "zìxíngchē",
    "vi": "xe đạp",
    "col": "骑自行车",
    "ex": "他每天骑自行车上学。",
    "exv": "Anh ấy mỗi ngày đạp xe đi học."
   },
   {
    "han": "开车",
    "pinyin": "kāichē",
    "vi": "lái xe",
    "col": "会开车",
    "ex": "你会开车吗？",
    "exv": "Bạn biết lái xe không?"
   },
   {
    "han": "走路",
    "pinyin": "zǒulù",
    "vi": "đi bộ",
    "col": "走路去",
    "ex": "学校很近，走路去就行。",
    "exv": "Trường rất gần, đi bộ là được."
   },
   {
    "han": "过马路",
    "pinyin": "guòmǎlù",
    "vi": "qua đường",
    "col": "过马路小心",
    "ex": "过马路要小心。",
    "exv": "Qua đường phải cẩn thận."
   },
   {
    "han": "红绿灯",
    "pinyin": "hónglǜdēng",
    "vi": "đèn giao thông",
    "col": "看红绿灯",
    "ex": "过马路要看红绿灯。",
    "exv": "Qua đường phải nhìn đèn giao thông."
   },
   {
    "han": "商店",
    "pinyin": "shāngdiàn",
    "vi": "cửa hàng",
    "col": "一家商店",
    "ex": "这条街上有很多商店。",
    "exv": "Trên con phố này có nhiều cửa hàng."
   },
   {
    "han": "超市",
    "pinyin": "chāoshì",
    "vi": "siêu thị",
    "col": "去超市",
    "ex": "周末我们去超市买东西。",
    "exv": "Cuối tuần chúng tôi đi siêu thị mua đồ."
   },
   {
    "han": "便宜",
    "pinyin": "piányi",
    "vi": "rẻ",
    "col": "很便宜",
    "ex": "这件衣服很便宜。",
    "exv": "Chiếc áo này rất rẻ."
   },
   {
    "han": "贵",
    "pinyin": "guì",
    "vi": "đắt",
    "col": "太贵了",
    "ex": "这件衣服太贵了，我不买。",
    "exv": "Chiếc áo này đắt quá, tôi không mua."
   },
   {
    "han": "钱",
    "pinyin": "qián",
    "vi": "tiền",
    "col": "没有钱",
    "ex": "我今天没有带钱。",
    "exv": "Hôm nay tôi không mang tiền."
   },
   {
    "han": "付款",
    "pinyin": "fùkuǎn",
    "vi": "trả tiền",
    "col": "付款吧",
    "ex": "买好了，付款吧。",
    "exv": "Mua xong rồi, trả tiền nhé."
   },
   {
    "han": "找钱",
    "pinyin": "zhǎoqián",
    "vi": "trả lại tiền thừa",
    "col": "找钱给我",
    "ex": "请找钱给我。",
    "exv": "Xin trả lại tiền thừa cho tôi."
   },
   {
    "han": "试穿",
    "pinyin": "shìchuān",
    "vi": "mặc thử",
    "col": "试穿一下",
    "ex": "这件衣服可以试穿一下吗？",
    "exv": "Chiếc áo này có thể mặc thử một chút không?"
   },
   {
    "han": "打折",
    "pinyin": "dǎzhé",
    "vi": "giảm giá",
    "col": "正在打折",
    "ex": "这家商店正在打折。",
    "exv": "Cửa hàng này đang giảm giá."
   }
  ]
 },
  {
  "topic": "Học tập và công việc",
  "hsk": "HSK3",
  "hskNote": "Bộ tự soạn theo chủ đề sách HSK3. Các từ là từ thông dụng ở trình độ này; câu ví dụ tự soạn, không trích nguyên văn giáo trình. Nhãn HSK3 là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "cards": [
   {
    "han": "学习",
    "pinyin": "xuéxí",
    "vi": "học tập",
    "col": "努力学习",
    "ex": "我们要努力学习汉语。",
    "exv": "Chúng ta phải chăm học tiếng Trung."
   },
   {
    "han": "课堂",
    "pinyin": "kètáng",
    "vi": "lớp học; giờ học",
    "col": "在课堂上",
    "ex": "在课堂上要认真听讲。",
    "exv": "Trong giờ học phải chăm chú nghe giảng."
   },
   {
    "han": "作业",
    "pinyin": "zuòyè",
    "vi": "bài tập về nhà",
    "col": "做作业",
    "ex": "晚上我先做作业再看电视。",
    "exv": "Buổi tối tôi làm bài tập trước rồi mới xem ti vi."
   },
   {
    "han": "考试",
    "pinyin": "kǎoshì",
    "vi": "kỳ thi",
    "col": "参加考试",
    "ex": "下星期我们参加考试。",
    "exv": "Tuần sau chúng tôi dự thi."
   },
   {
    "han": "成绩",
    "pinyin": "chéngjì",
    "vi": "thành tích; điểm số",
    "col": "成绩很好",
    "ex": "他的成绩很好。",
    "exv": "Điểm số của anh ấy rất tốt."
   },
   {
    "han": "课程",
    "pinyin": "kèchéng",
    "vi": "khóa học; môn học",
    "col": "一门课程",
    "ex": "这门课程很有意思。",
    "exv": "Môn học này rất thú vị."
   },
   {
    "han": "教材",
    "pinyin": "jiàocái",
    "vi": "giáo trình",
    "col": "新教材",
    "ex": "我们用新教材学习。",
    "exv": "Chúng tôi học bằng giáo trình mới."
   },
   {
    "han": "词典",
    "pinyin": "cídiǎn",
    "vi": "từ điển",
    "col": "查词典",
    "ex": "不认识的字可以查词典。",
    "exv": "Chữ không biết có thể tra từ điển."
   },
   {
    "han": "笔记",
    "pinyin": "bǐjì",
    "vi": "ghi chép",
    "col": "做笔记",
    "ex": "上课要做笔记。",
    "exv": "Lên lớp phải ghi chép."
   },
   {
    "han": "复习",
    "pinyin": "fùxí",
    "vi": "ôn tập",
    "col": "复习功课",
    "ex": "考试前要认真复习功课。",
    "exv": "Trước kỳ thi phải ôn bài nghiêm túc."
   },
   {
    "han": "预习",
    "pinyin": "yùxí",
    "vi": "chuẩn bị bài trước",
    "col": "预习课文",
    "ex": "明天上课前先预习课文。",
    "exv": "Trước giờ học ngày mai hãy chuẩn bị bài trước."
   },
   {
    "han": "毕业",
    "pinyin": "bìyè",
    "vi": "tốt nghiệp",
    "col": "大学毕业",
    "ex": "他去年大学毕业了。",
    "exv": "Anh ấy năm ngoái tốt nghiệp đại học."
   },
   {
    "han": "工作",
    "pinyin": "gōngzuò",
    "vi": "công việc; làm việc",
    "col": "找工作",
    "ex": "他正在找工作。",
    "exv": "Anh ấy đang tìm việc."
   },
   {
    "han": "公司",
    "pinyin": "gōngsī",
    "vi": "công ty",
    "col": "一家公司",
    "ex": "这家公司有两百多人。",
    "exv": "Công ty này có hơn hai trăm người."
   },
   {
    "han": "老板",
    "pinyin": "lǎobǎn",
    "vi": "sếp; ông chủ",
    "col": "我的老板",
    "ex": "我的老板对我们很好。",
    "exv": "Sếp của tôi rất tốt với chúng tôi."
   },
   {
    "han": "同事",
    "pinyin": "tóngshì",
    "vi": "đồng nghiệp",
    "col": "新同事",
    "ex": "新同事是昨天来的。",
    "exv": "Đồng nghiệp mới hôm qua mới tới."
   },
   {
    "han": "会议",
    "pinyin": "huìyì",
    "vi": "cuộc họp",
    "col": "开一个会议",
    "ex": "下午三点开一个会议。",
    "exv": "Chiều ba giờ họp một cuộc họp."
   },
   {
    "han": "办公室",
    "pinyin": "bàngōngshì",
    "vi": "văn phòng",
    "col": "在办公室",
    "ex": "他在办公室工作。",
    "exv": "Anh ấy làm việc trong văn phòng."
   },
   {
    "han": "加班",
    "pinyin": "jiābān",
    "vi": "làm thêm giờ",
    "col": "加班到很晚",
    "ex": "昨天他加班到很晚。",
    "exv": "Hôm qua anh ấy làm thêm tới rất muộn."
   },
   {
    "han": "请假",
    "pinyin": "qǐngjià",
    "vi": "xin nghỉ",
    "col": "请假一天",
    "ex": "今天我请假一天。",
    "exv": "Hôm nay tôi xin nghỉ một ngày."
   }
  ]
 },
  {
  "topic": "Du lịch",
  "hsk": "HSK3",
  "hskNote": "Bộ tự soạn theo chủ đề sách HSK3. Các từ là từ thông dụng ở trình độ này; câu ví dụ tự soạn, không trích nguyên văn giáo trình. Nhãn HSK3 là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "cards": [
   {
    "han": "旅行",
    "pinyin": "lǚxíng",
    "vi": "du lịch (chuyến đi)",
    "col": "一次旅行",
    "ex": "这是一次愉快的旅行。",
    "exv": "Đây là một chuyến du lịch vui vẻ."
   },
   {
    "han": "旅游",
    "pinyin": "lǚyóu",
    "vi": "du lịch (tham quan)",
    "col": "旅游景点",
    "ex": "北京有很多旅游景点。",
    "exv": "Bắc Kinh có nhiều điểm tham quan du lịch."
   },
   {
    "han": "景点",
    "pinyin": "jǐngdiǎn",
    "vi": "điểm tham quan",
    "col": "有名景点",
    "ex": "这个景点很有名。",
    "exv": "Điểm tham quan này rất nổi tiếng."
   },
   {
    "han": "风景",
    "pinyin": "fēngjǐng",
    "vi": "phong cảnh",
    "col": "美丽的风景",
    "ex": "这里的风景很美丽。",
    "exv": "Phong cảnh ở đây rất đẹp."
   },
   {
    "han": "照片",
    "pinyin": "zhàopiàn",
    "vi": "ảnh",
    "col": "拍照片",
    "ex": "我们在长城拍了很多照片。",
    "exv": "Chúng tôi chụp nhiều ảnh ở Vạn Lý Trường Thành."
   },
   {
    "han": "相机",
    "pinyin": "xiàngjī",
    "vi": "máy ảnh",
    "col": "带相机",
    "ex": "旅行要带相机。",
    "exv": "Đi du lịch phải mang máy ảnh."
   },
   {
    "han": "行李",
    "pinyin": "xíngli",
    "vi": "hành lý",
    "col": "行李很多",
    "ex": "我们的行李很多。",
    "exv": "Hành lý của chúng tôi rất nhiều."
   },
   {
    "han": "护照",
    "pinyin": "hùzhào",
    "vi": "hộ chiếu",
    "col": "带护照",
    "ex": "出国要带护照。",
    "exv": "Ra nước ngoài phải mang hộ chiếu."
   },
   {
    "han": "签证",
    "pinyin": "qiānzhèng",
    "vi": "thị thực",
    "col": "办签证",
    "ex": "去中国要办签证。",
    "exv": "Sang Trung Quốc phải làm thị thực."
   },
   {
    "han": "机票",
    "pinyin": "jīpiào",
    "vi": "vé máy bay",
    "col": "买机票",
    "ex": "我已经买了机票。",
    "exv": "Tôi đã mua vé máy bay rồi."
   },
   {
    "han": "酒店",
    "pinyin": "jiǔdiàn",
    "vi": "khách sạn",
    "col": "住酒店",
    "ex": "我们住在市中心的酒店。",
    "exv": "Chúng tôi ở khách sạn trung tâm thành phố."
   },
   {
    "han": "房间",
    "pinyin": "fángjiān",
    "vi": "phòng",
    "col": "一个房间",
    "ex": "请给我一个房间。",
    "exv": "Xin cho tôi một phòng."
   },
   {
    "han": "预订",
    "pinyin": "yùdìng",
    "vi": "đặt trước",
    "col": "预订房间",
    "ex": "我们提前预订了房间。",
    "exv": "Chúng tôi đã đặt phòng trước."
   },
   {
    "han": "导游",
    "pinyin": "dǎoyóu",
    "vi": "hướng dẫn viên",
    "col": "导游介绍",
    "ex": "导游给我们介绍了长城的历史。",
    "exv": "Hướng dẫn viên giới thiệu cho chúng tôi lịch sử Vạn Lý Trường Thành."
   },
   {
    "han": "地图",
    "pinyin": "dìtú",
    "vi": "bản đồ",
    "col": "一张地图",
    "ex": "买一张地图吧。",
    "exv": "Mua một tấm bản đồ nhé."
   },
   {
    "han": "方向",
    "pinyin": "fāngxiàng",
    "vi": "phương hướng",
    "col": "问方向",
    "ex": "不认识路可以问方向。",
    "exv": "Không biết đường có thể hỏi phương hướng."
   },
   {
    "han": "迷路",
    "pinyin": "mílù",
    "vi": "lạc đường",
    "col": "迷路了",
    "ex": "我们在老街迷路了。",
    "exv": "Chúng tôi lạc đường ở phố cổ."
   },
   {
    "han": "纪念品",
    "pinyin": "jìniànpǐn",
    "vi": "đồ lưu niệm",
    "col": "买纪念品",
    "ex": "给朋友买一点纪念品。",
    "exv": "Mua ít đồ lưu niệm cho bạn bè."
   },
   {
    "han": "假期",
    "pinyin": "jiàqī",
    "vi": "kỳ nghỉ",
    "col": "假期旅行",
    "ex": "假期我们去旅行。",
    "exv": "Kỳ nghỉ chúng tôi đi du lịch."
   },
   {
    "han": "出发",
    "pinyin": "chūfā",
    "vi": "xuất phát",
    "col": "明天出发",
    "ex": "我们明天早上出发。",
    "exv": "Sáng mai chúng tôi xuất phát."
   }
  ]
 },
  {
  "topic": "Sức khỏe",
  "hsk": "HSK3",
  "hskNote": "Bộ tự soạn theo chủ đề sách HSK3. Các từ là từ thông dụng ở trình độ này; câu ví dụ tự soạn, không trích nguyên văn giáo trình. Nhãn HSK3 là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "cards": [
   {
    "han": "身体",
    "pinyin": "shēntǐ",
    "vi": "cơ thể; sức khỏe",
    "col": "身体健康",
    "ex": "希望你身体健康。",
    "exv": "Chúc bạn sức khỏe tốt."
   },
   {
    "han": "生病",
    "pinyin": "shēngbìng",
    "vi": "bị ốm",
    "col": "生病了",
    "ex": "他生病了，今天没来上课。",
    "exv": "Anh ấy bị ốm, hôm nay không tới lớp."
   },
   {
    "han": "感冒",
    "pinyin": "gǎnmào",
    "vi": "cảm",
    "col": "感冒了",
    "ex": "我感冒了，头很疼。",
    "exv": "Tôi bị cảm, đầu rất đau."
   },
   {
    "han": "发烧",
    "pinyin": "fāshāo",
    "vi": "sốt",
    "col": "发烧了",
    "ex": "孩子发烧了，要去医院。",
    "exv": "Đứa bé bị sốt, phải đi bệnh viện."
   },
   {
    "han": "咳嗽",
    "pinyin": "késou",
    "vi": "ho",
    "col": "咳嗽了",
    "ex": "他咳嗽了三天。",
    "exv": "Anh ấy ho ba ngày rồi."
   },
   {
    "han": "头疼",
    "pinyin": "tóuténg",
    "vi": "đau đầu",
    "col": "头疼得厉害",
    "ex": "我头疼得厉害，想休息一下。",
    "exv": "Tôi đau đầu dữ dội, muốn nghỉ một chút."
   },
   {
    "han": "肚子疼",
    "pinyin": "dùziténg",
    "vi": "đau bụng",
    "col": "肚子疼了",
    "ex": "吃了冷东西，肚子疼了。",
    "exv": "Ăn đồ lạnh nên đau bụng."
   },
   {
    "han": "药",
    "pinyin": "yào",
    "vi": "thuốc",
    "col": "吃药",
    "ex": "生病了要按时吃药。",
    "exv": "Ốm thì phải uống thuốc đúng giờ."
   },
   {
    "han": "吃药",
    "pinyin": "chīyào",
    "vi": "uống thuốc",
    "col": "按时吃药",
    "ex": "记得按时吃药。",
    "exv": "Nhớ uống thuốc đúng giờ."
   },
   {
    "han": "看病",
    "pinyin": "kànbìng",
    "vi": "đi khám bệnh",
    "col": "去看病",
    "ex": "不舒服就去看病吧。",
    "exv": "Không khỏe thì đi khám bệnh nhé."
   },
   {
    "han": "医院",
    "pinyin": "yīyuàn",
    "vi": "bệnh viện",
    "col": "去医院",
    "ex": "他去医院看病了。",
    "exv": "Anh ấy đi bệnh viện khám rồi."
   },
   {
    "han": "大夫",
    "pinyin": "dàifu",
    "vi": "bác sĩ (cách gọi thân mật)",
    "col": "看大夫",
    "ex": "去看大夫吧。",
    "exv": "Đi khám bác sĩ nhé."
   },
   {
    "han": "休息",
    "pinyin": "xiūxi",
    "vi": "nghỉ ngơi",
    "col": "好好休息",
    "ex": "生病了要好好休息。",
    "exv": "Ốm thì phải nghỉ ngơi cho tốt."
   },
   {
    "han": "锻炼",
    "pinyin": "duànliàn",
    "vi": "rèn luyện; tập thể dục",
    "col": "锻炼身体",
    "ex": "每天锻炼身体对健康有好处。",
    "exv": "Mỗi ngày tập thể dục có lợi cho sức khỏe."
   },
   {
    "han": "睡眠",
    "pinyin": "shuìmián",
    "vi": "giấc ngủ",
    "col": "睡眠不足",
    "ex": "睡眠不足会头疼。",
    "exv": "Thiếu ngủ sẽ đau đầu."
   },
   {
    "han": "精神",
    "pinyin": "jīngshén",
    "vi": "tinh thần",
    "col": "精神很好",
    "ex": "睡了一觉，精神很好。",
    "exv": "Ngủ một giấc, tinh thần rất tốt."
   },
   {
    "han": "累",
    "pinyin": "lèi",
    "vi": "mệt",
    "col": "很累",
    "ex": "工作了一天，很累。",
    "exv": "Làm việc cả ngày, rất mệt."
   },
   {
    "han": "舒服",
    "pinyin": "shūfu",
    "vi": "thoải mái; dễ chịu",
    "col": "很舒服",
    "ex": "洗个热水澡，很舒服。",
    "exv": "Tắm nước nóng, rất dễ chịu."
   },
   {
    "han": "疼",
    "pinyin": "téng",
    "vi": "đau",
    "col": "很疼",
    "ex": "我的腿很疼。",
    "exv": "Chân tôi rất đau."
   },
   {
    "han": "康复",
    "pinyin": "kāngfù",
    "vi": "hồi phục",
    "col": "早日康复",
    "ex": "希望你早日康复。",
    "exv": "Chúc bạn sớm hồi phục."
   }
  ]
 },
  {
  "topic": "Xã hội và giao tiếp",
  "hsk": "HSK3",
  "hskNote": "Bộ tự soạn theo chủ đề sách HSK3. Các từ là từ thông dụng ở trình độ này; câu ví dụ tự soạn, không trích nguyên văn giáo trình. Nhãn HSK3 là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "cards": [
   {
    "han": "社会",
    "pinyin": "shèhuì",
    "vi": "xã hội",
    "col": "现代社会",
    "ex": "现代社会变化很快。",
    "exv": "Xã hội hiện đại thay đổi rất nhanh."
   },
   {
    "han": "关系",
    "pinyin": "guānxi",
    "vi": "quan hệ",
    "col": "好关系",
    "ex": "他们关系很好。",
    "exv": "Quan hệ của họ rất tốt."
   },
   {
    "han": "交流",
    "pinyin": "jiāoliú",
    "vi": "giao lưu; trao đổi",
    "col": "交流经验",
    "ex": "大家交流学习经验。",
    "exv": "Mọi người trao đổi kinh nghiệm học tập."
   },
   {
    "han": "讨论",
    "pinyin": "tǎolùn",
    "vi": "thảo luận",
    "col": "讨论问题",
    "ex": "我们一起讨论这个问题。",
    "exv": "Chúng ta cùng thảo luận vấn đề này."
   },
   {
    "han": "意见",
    "pinyin": "yìjiàn",
    "vi": "ý kiến",
    "col": "提意见",
    "ex": "请提意见吧。",
    "exv": "Xin hãy nêu ý kiến."
   },
   {
    "han": "建议",
    "pinyin": "jiànyì",
    "vi": "đề nghị; gợi ý",
    "col": "一个建议",
    "ex": "我有一个建议。",
    "exv": "Tôi có một đề nghị."
   },
   {
    "han": "决定",
    "pinyin": "juédìng",
    "vi": "quyết định",
    "col": "做决定",
    "ex": "我们明天做决定。",
    "exv": "Ngày mai chúng ta quyết định."
   },
   {
    "han": "选择",
    "pinyin": "xuǎnzé",
    "vi": "lựa chọn",
    "col": "自己选择",
    "ex": "这是你自己选择的结果。",
    "exv": "Đây là kết quả do chính bạn lựa chọn."
   },
   {
    "han": "帮助",
    "pinyin": "bāngzhù",
    "vi": "giúp đỡ",
    "col": "帮助别人",
    "ex": "帮助别人是好事。",
    "exv": "Giúp đỡ người khác là việc tốt."
   },
   {
    "han": "感谢",
    "pinyin": "gǎnxiè",
    "vi": "cảm ơn (trang trọng)",
    "col": "感谢你的帮助",
    "ex": "感谢你的帮助。",
    "exv": "Cảm ơn sự giúp đỡ của bạn."
   },
   {
    "han": "道歉",
    "pinyin": "dàoqiàn",
    "vi": "xin lỗi (trang trọng)",
    "col": "向他道歉",
    "ex": "我向他道歉了。",
    "exv": "Tôi đã xin lỗi anh ấy."
   },
   {
    "han": "邀请",
    "pinyin": "yāoqǐng",
    "vi": "mời",
    "col": "邀请朋友",
    "ex": "我邀请朋友来家里吃饭。",
    "exv": "Tôi mời bạn bè tới nhà ăn cơm."
   },
   {
    "han": "参加",
    "pinyin": "cānjiā",
    "vi": "tham gia",
    "col": "参加活动",
    "ex": "我参加了学校的活动。",
    "exv": "Tôi đã tham gia hoạt động của trường."
   },
   {
    "han": "组织",
    "pinyin": "zǔzhī",
    "vi": "tổ chức",
    "col": "组织活动",
    "ex": "学生会组织了一次活动。",
    "exv": "Hội sinh viên tổ chức một hoạt động."
   },
   {
    "han": "活动",
    "pinyin": "huódòng",
    "vi": "hoạt động",
    "col": "学校活动",
    "ex": "学校活动很多。",
    "exv": "Hoạt động của trường rất nhiều."
   },
   {
    "han": "文化",
    "pinyin": "wénhuà",
    "vi": "văn hóa",
    "col": "中国文化",
    "ex": "我对中国文化很感兴趣。",
    "exv": "Tôi rất quan tâm tới văn hóa Trung Quốc."
   },
   {
    "han": "传统",
    "pinyin": "chuántǒng",
    "vi": "truyền thống",
    "col": "传统节日",
    "ex": "春节是中国传统节日。",
    "exv": "Tết là lễ hội truyền thống của Trung Quốc."
   },
   {
    "han": "习惯",
    "pinyin": "xíguàn",
    "vi": "thói quen",
    "col": "好习惯",
    "ex": "早起是好习惯。",
    "exv": "Dậy sớm là thói quen tốt."
   },
   {
    "han": "礼貌",
    "pinyin": "lǐmào",
    "vi": "lễ phép",
    "col": "很有礼貌",
    "ex": "这个孩子很有礼貌。",
    "exv": "Đứa bé này rất lễ phép."
   },
   {
    "han": "态度",
    "pinyin": "tàidu",
    "vi": "thái độ",
    "col": "学习态度",
    "ex": "他的学习态度很认真。",
    "exv": "Thái độ học tập của anh ấy rất nghiêm túc."
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
  { stage: 1, title: "Phát âm và chào hỏi", oldCum: 150, eCum: 300, desc: "Mạch pinyin 4 bước + bộ từ chào hỏi; nghe–nói là trục chính", note: "Nhãn HSK của web là mức đặt chủ đề theo tiến trình cấp, không phải xác nhận từng từ nằm trong khung HSK 2.0 chính thức." },
  { stage: 2, title: "Thanh điệu và so sánh bước đầu", oldCum: 300, eCum: 500, desc: "Thanh điệu, ngữ pháp 了/过/着/比较 + bộ từ đời sống", note: "Nhãn HSK của web là mức đặt chủ đề theo tiến trình cấp, không phải xác nhận từng từ nằm trong khung HSK 2.0 chính thức." },
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
// ---------- VIET CHU TUONG TAC DOT 2f (26/10/2026) ----------
// 30 chu Han net don gian (<=6 net) tu bo khoi dong va bo HSK2, moi net la
// 1 path SVG ve tay (viewBox 100x100). st = ten net theo thu tu, d = path
// tuong ung (so path == so net). pinyin/nghia la am doc rieng cua chu;
// src chi ro chu nay lay tu the tu / tu nao trong kho (khong bia nghia).
// Chu nao khong chac chan thu tu net thi KHONG dua vao day.
var ZH_STROKES = [
  { han: "人", py: "rén", vi: "người", src: "Thẻ từ bộ khởi động", note: "", st: ["撇", "捺"], d: ["M58,12 L26,88", "M46,16 Q64,50 84,88"] },
  { han: "上", py: "shàng", vi: "trên", src: "Trong từ 早上 (zǎoshang — buổi sáng)", note: "Trong từ 早上, 上 đọc nhẹ (shang).", st: ["竖", "横", "横"], d: ["M50,10 L50,48", "M22,48 L78,48", "M18,84 L82,84"] },
  { han: "女", py: "nǚ", vi: "nữ; con gái", src: "Trong từ 女儿 (nǚ'ér — con gái)", note: "", st: ["撇点", "撇", "横"], d: ["M66,10 Q50,26 38,40", "M40,40 L22,88", "M28,58 L86,58"] },
  { han: "子", py: "zǐ", vi: "con", src: "Trong từ 孩子 (háizi — con; trẻ con)", note: "Trong từ 孩子, 子 đọc nhẹ (zi).", st: ["横", "竖钩", "横"], d: ["M24,18 L76,18", "M50,18 L50,70 Q50,84 66,76", "M22,88 L78,88"] },
  { han: "小", py: "xiǎo", vi: "nhỏ", src: "Trong từ 小时 (xiǎoshí — giờ)", note: "", st: ["竖钩", "点", "点"], d: ["M50,12 L50,66 Q50,82 64,74", "M30,34 L22,46", "M70,34 L78,46"] },
  { han: "马", py: "mǎ", vi: "ngựa", src: "Trong từ 过马路 (guòmǎlù — qua đường)", note: "", st: ["横折", "竖折折钩", "横"], d: ["M22,16 L78,16 L78,44", "M46,20 L46,72 L72,72 L72,60", "M20,88 L80,88"] },
  { han: "不", py: "bù", vi: "không", src: "Thẻ từ bộ khởi động", note: "", st: ["横", "撇", "竖", "点"], d: ["M20,16 L80,16", "M70,16 L28,86", "M50,32 L50,88", "M66,50 L78,62"] },
  { han: "天", py: "tiān", vi: "trời; ngày", src: "Trong từ 明天 (míngtiān — ngày mai)", note: "", st: ["横", "横", "撇", "捺"], d: ["M20,16 L80,16", "M26,40 L74,40", "M62,40 L28,88", "M38,40 L80,88"] },
  { han: "午", py: "wǔ", vi: "trưa", src: "Trong từ 中午 (zhōngwǔ — buổi trưa)", note: "", st: ["撇", "横", "竖", "横"], d: ["M68,12 L32,38", "M22,44 L78,44", "M50,20 L50,78", "M24,82 L76,82"] },
  { han: "见", py: "jiàn", vi: "thấy; gặp", src: "Trong từ 再见 (zàijiàn — tạm biệt)", note: "", st: ["竖", "横折", "撇", "竖弯钩"], d: ["M30,14 L30,60", "M30,14 L74,14 L74,52", "M62,30 L36,62", "M74,52 L74,82 Q74,92 58,92 Q48,92 48,80"] },
  { han: "车", py: "chē", vi: "xe", src: "Trong từ 出租车 (chūzūchē — taxi)", note: "", st: ["横", "撇折", "横", "竖"], d: ["M20,14 L80,14", "M68,14 L36,44 L80,44", "M20,68 L80,68", "M50,14 L50,90"] },
  { han: "水", py: "shuǐ", vi: "nước", src: "Trong từ 喝水 (hēshuǐ — uống nước)", note: "", st: ["竖钩", "横撇", "撇", "捺"], d: ["M50,10 L50,74 Q50,86 38,84", "M28,30 L58,30 L40,54", "M76,30 L56,52", "M56,52 L84,88"] },
  { han: "火", py: "huǒ", vi: "lửa", src: "Trong từ 火车 (huǒchē — tàu hỏa)", note: "", st: ["点", "撇", "撇", "捺"], d: ["M28,12 L20,24", "M50,16 L22,88", "M58,24 L40,56", "M48,28 L82,88"] },
  { han: "牛", py: "niú", vi: "bò", src: "Trong từ 牛奶 (niúnǎi — sữa bò)", note: "", st: ["撇", "横", "横", "竖"], d: ["M72,12 L30,40", "M24,46 L76,46", "M22,68 L78,68", "M50,12 L50,90"] },
  { han: "开", py: "kāi", vi: "mở", src: "Trong từ 开车 (kāichē — lái xe)", note: "", st: ["横", "横", "撇", "竖"], d: ["M20,16 L80,16", "M26,40 L74,40", "M58,40 L28,88", "M68,40 L68,88"] },
  { han: "友", py: "yǒu", vi: "bạn", src: "Trong từ 朋友 (péngyou — bạn bè)", note: "Trong từ 朋友, 友 đọc nhẹ (you).", st: ["横", "撇", "横撇", "捺"], d: ["M24,16 L76,16", "M56,16 L30,52", "M34,54 L72,54 L48,78", "M50,54 L82,88"] },
  { han: "今", py: "jīn", vi: "nay", src: "Trong từ 今天 (jīntiān — hôm nay)", note: "", st: ["撇", "捺", "横", "竖"], d: ["M52,10 L26,44", "M48,10 L76,44", "M24,58 L76,58", "M50,58 L50,90"] },
  { han: "付", py: "fù", vi: "trả; giao", src: "Trong từ 付款 (fùkuǎn — trả tiền)", note: "", st: ["撇", "竖", "横", "竖钩", "点"], d: ["M36,12 L20,40", "M30,40 L30,88", "M44,26 L78,26", "M62,26 L62,70 Q62,84 76,76", "M70,44 L80,56"] },
  { han: "打", py: "dǎ", vi: "đánh", src: "Trong từ 打折 (dǎzhé — giảm giá)", note: "", st: ["横", "竖", "提", "横", "竖"], d: ["M20,26 L40,26", "M30,26 L30,58", "M30,58 L44,50", "M52,26 L80,26", "M66,26 L66,88"] },
  { han: "外", py: "wài", vi: "ngoài", src: "Trong từ 外公 (wàigōng — ông ngoại)", note: "", st: ["撇", "横撇", "点", "竖", "点"], d: ["M34,12 L18,40", "M22,42 L46,42 L32,60", "M40,60 L48,70", "M68,12 L68,78", "M58,74 L50,84"] },
  { han: "市", py: "shì", vi: "chợ; thành phố", src: "Trong từ 超市 (chāoshì — siêu thị)", note: "", st: ["点", "横折", "竖", "横折", "竖"], d: ["M50,12 L42,22", "M24,28 L76,28 L76,44", "M30,44 L30,88", "M30,50 L70,50 L70,64", "M70,50 L70,88"] },
  { han: "好", py: "hǎo", vi: "tốt; khỏe", src: "Thẻ từ bộ khởi động", note: "", st: ["撇点", "撇", "横", "横", "竖钩", "横"], d: ["M42,10 Q32,24 24,36", "M26,36 L14,86", "M18,54 L46,54", "M52,20 L84,20", "M68,20 L68,68 Q68,82 80,74", "M52,88 L84,88"] },
  { han: "吗", py: "ma", vi: "trợ từ câu hỏi", src: "Thẻ từ bộ khởi động", note: "", st: ["竖", "横折", "横", "横折", "竖折折钩", "横"], d: ["M18,18 L18,60", "M18,18 L44,18 L44,60", "M18,60 L44,60", "M50,18 L84,18 L84,44", "M64,20 L64,72 L80,72 L80,60", "M50,88 L84,88"] },
  { han: "妈", py: "mā", vi: "mẹ", src: "Trong từ 妈妈 (māma — mẹ)", note: "", st: ["撇点", "撇", "横", "横折", "竖折折钩", "横"], d: ["M42,10 Q32,24 24,36", "M26,36 L14,86", "M18,54 L46,54", "M50,18 L84,18 L84,44", "M64,20 L64,72 L80,72 L80,60", "M50,88 L84,88"] },
  { han: "年", py: "nián", vi: "năm", src: "Trong từ 今年 (jīnnián — năm nay)", note: "", st: ["撇", "横", "横", "竖", "横", "竖"], d: ["M62,12 L30,40", "M22,44 L78,44", "M24,60 L76,60", "M50,12 L50,76", "M22,76 L78,76", "M50,76 L50,90"] },
  { han: "早", py: "zǎo", vi: "sớm", src: "Trong từ 早上 (zǎoshang — buổi sáng)", note: "", st: ["竖", "横折", "横", "横", "横", "竖"], d: ["M28,12 L28,56", "M28,12 L72,12 L72,56", "M28,34 L72,34", "M28,56 L72,56", "M26,70 L74,70", "M50,62 L50,90"] },
  { han: "自", py: "zì", vi: "tự", src: "Trong từ 自行车 (zìxíngchē — xe đạp)", note: "", st: ["撇", "竖", "横折", "横", "横", "横"], d: ["M56,10 L30,32", "M28,16 L28,86", "M28,16 L76,16 L76,86", "M28,42 L76,42", "M28,64 L76,64", "M28,86 L76,86"] },
  { han: "灯", py: "dēng", vi: "đèn", src: "Trong từ 红绿灯 (hónglǜdēng — đèn giao thông)", note: "", st: ["点", "撇", "撇", "捺", "横", "竖"], d: ["M26,12 L20,22", "M42,14 L16,86", "M44,24 L30,52", "M40,28 L50,86", "M54,26 L84,26", "M70,26 L70,88"] },
  { han: "再", py: "zài", vi: "lại", src: "Trong từ 再见 (zàijiàn — tạm biệt)", note: "", st: ["横", "竖", "横", "横", "竖", "横"], d: ["M24,14 L76,14", "M28,14 L28,44", "M28,44 L76,44", "M24,60 L76,60", "M50,60 L50,86", "M22,86 L78,86"] },
  { han: "米", py: "mǐ", vi: "gạo", src: "Trong từ 米饭 (mǐfàn — cơm)", note: "", st: ["点", "撇", "横", "竖", "撇", "捺"], d: ["M50,10 L44,20", "M62,18 L30,40", "M22,46 L78,46", "M50,18 L50,86", "M50,56 L26,88", "M50,56 L76,88"] }
];
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
// ---------- DOT 2c (26/10/2026): NGU PHAP / DOC / NGHE TRACK TRUNG ----------
// Tu soan 100% theo chu de/diem ngu phap cua Giao trinh chuan HSK (he 6 cap cu);
// khong trich nguyen van giao trinh hay trang khac. 12 tram ngu phap chon cac diem
// chac chan dung trinh do HSK2-HSK3; ly hop tu (离合词) va bo ngu ket qua/xu huong
// de dot sau de giu dung 12 tram tap trung. Tien trinh dung lai zhDone san co
// (khoa zhGram:/zhRead:/zhListen:) nen dong bo Supabase theo dung mau row rb zhDone.
var ZH_GRAMMAR = [
 {
  "id": "le",
  "stage": 2,
  "title": "了 — đã / rồi",
  "hook": "“我吃饭了” — tôi ăn cơm rồi: thêm 了 là việc xong rồi.",
  "examples": [
   "我昨天买了一本书。(Wǒ zuótiān mǎi le yì běn shū.) — Hôm qua tôi đã mua một quyển sách.",
   "他已经回家了。(Tā yǐjīng huí jiā le.) — Anh ấy đã về nhà rồi.",
   "下雨了，快回家吧。(Xià yǔ le, kuài huí jiā ba.) — Mưa rồi, mau về nhà đi.",
   "我吃饭了，你呢？(Wǒ chī fàn le, nǐ ne?) — Tôi ăn cơm rồi, còn bạn?"
  ],
  "speak": "我昨天买了一本书。他已经回家了。下雨了，快回家吧。我吃饭了，你呢？",
  "rule": "了 đứng sau động từ báo việc đã xong (买了书); đứng cuối câu báo tình huống mới xuất hiện (下雨了). Có 已经 thì cuối câu vẫn dùng 了.",
  "tip": "Đừng dịch 了 lúc nào cũng là “đã”: ở cuối câu nó hay là “rồi”.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK2 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "Câu nào dùng 了 đúng để nói việc đã xong?",
    "o": [
     "我昨天去学校了",
     "我昨天去学校",
     "我了昨天去学校",
     "我昨天了去学校"
    ],
    "a": 0,
    "why": "了 đứng sau động từ 去: 昨天去学校了."
   },
   {
    "q": "“下雨了” nghĩa là gì?",
    "o": [
     "Mưa rồi",
     "Sắp mưa",
     "Hôm qua mưa",
     "Mưa rất to"
    ],
    "a": 0,
    "why": "了 cuối câu báo tình huống mới: trời đã mưa rồi."
   },
   {
    "q": "Điền vào chỗ trống: 他___回家了。",
    "o": [
     "已经",
     "都",
     "很",
     "在"
    ],
    "a": 0,
    "why": "已经…了 là cặp hay đi cùng nhau: đã… rồi."
   },
   {
    "q": "Câu nào dùng 了 SAI?",
    "o": [
     "我吃饭了",
     "他来了",
     "她走了",
     "我了吃饭"
    ],
    "a": 3,
    "why": "了 không đứng trước động từ: phải nói 我吃饭了."
   },
   {
    "q": "Trong “我买了一本书”, 了 báo điều gì?",
    "o": [
     "Việc đã xong",
     "Việc sắp làm",
     "Việc đang làm",
     "Câu hỏi"
    ],
    "a": 0,
    "why": "了 sau 买 báo việc mua đã xong."
   },
   {
    "q": "Câu nào đúng?",
    "o": [
     "明天我去了北京",
     "昨天我去了北京",
     "现在我去了北京",
     "每天我去了北京"
    ],
    "a": 1,
    "why": "了 báo việc đã xong nên đi với thời gian quá khứ như 昨天."
   }
  ]
 },
 {
  "id": "guo",
  "stage": 2,
  "title": "过 — từng (kinh nghiệm)",
  "hook": "“我去过中国” — tôi từng đi Trung Quốc: 过 nói kinh nghiệm đã có.",
  "examples": [
   "我去过北京。(Wǒ qù guo Běijīng.) — Tôi từng đi Bắc Kinh.",
   "你吃过中国菜吗？(Nǐ chī guo Zhōngguó cài ma?) — Bạn từng ăn món Trung Quốc chưa?",
   "他没去过上海。(Tā méi qù guo Shànghǎi.) — Anh ấy chưa từng đi Thượng Hải.",
   "我看过这部电影。(Wǒ kàn guo zhè bù diànyǐng.) — Tôi từng xem bộ phim này."
  ],
  "speak": "我去过北京。你吃过中国菜吗？他没去过上海。我看过这部电影。",
  "rule": "过 đứng sau động từ, nghĩa là “từng làm”, nhấn mạnh kinh nghiệm. Phủ định dùng 没…过, không dùng 不…过.",
  "tip": "了 nói việc xong, 过 nói từng trải: 我吃了饭 (ăn rồi) khác 我吃过饭 (từng ăn).",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK2 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“我去过北京” nhấn mạnh điều gì?",
    "o": [
     "Từng đi Bắc Kinh",
     "Đang đi Bắc Kinh",
     "Sắp đi Bắc Kinh",
     "Muốn đi Bắc Kinh"
    ],
    "a": 0,
    "why": "过 sau động từ báo kinh nghiệm từng có."
   },
   {
    "q": "Phủ định của “去过” là gì?",
    "o": [
     "没去过",
     "不去过",
     "没去",
     "不去"
    ],
    "a": 0,
    "why": "Kinh nghiệm chưa có dùng 没…过."
   },
   {
    "q": "Điền vào chỗ trống: 你吃___中国菜吗？",
    "o": [
     "了",
     "过",
     "着",
     "的"
    ],
    "a": 1,
    "why": "Hỏi kinh nghiệm từng ăn thì dùng 过."
   },
   {
    "q": "Câu nào nhấn mạnh “từng trải”?",
    "o": [
     "我吃了饭",
     "我吃过饭",
     "我在吃饭",
     "我要吃饭"
    ],
    "a": 1,
    "why": "吃过 mới là từng ăn; 吃了 chỉ báo ăn xong."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "我没去过上海",
     "你去过吗",
     "我不去过上海",
     "我看过这部电影"
    ],
    "a": 2,
    "why": "Không nói 不去过, phải nói 没去过."
   },
   {
    "q": "过 đứng ở đâu trong câu?",
    "o": [
     "Trước chủ ngữ",
     "Sau động từ",
     "Trước động từ",
     "Cuối câu"
    ],
    "a": 1,
    "why": "Công thức: động từ + 过."
   }
  ]
 },
 {
  "id": "zhe",
  "stage": 2,
  "title": "着 — đang giữ trạng thái",
  "hook": "“门开着” — cửa đang mở: 着 nói trạng thái đang giữ nguyên.",
  "examples": [
   "门开着。(Mén kāi zhe.) — Cửa đang mở.",
   "他穿着一件红衣服。(Tā chuān zhe yí jiàn hóng yīfu.) — Anh ấy đang mặc một chiếc áo đỏ.",
   "她笑着说。(Tā xiào zhe shuō.) — Cô ấy vừa cười vừa nói.",
   "墙上挂着一幅画。(Qiáng shang guà zhe yì fú huà.) — Trên tường đang treo một bức tranh."
  ],
  "speak": "门开着。他穿着一件红衣服。她笑着说。墙上挂着一幅画。",
  "rule": "着 đứng sau động từ, báo trạng thái đang duy trì: cửa đang mở, áo đang mặc, tranh đang treo. Dạng “động từ + 着 + động từ” nghĩa là vừa… vừa… (笑着说).",
  "tip": "着 khác 在: 在 + động từ là đang làm việc gì; 着 là trạng thái giữ nguyên.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK2 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“门开着” nghĩa là gì?",
    "o": [
     "Cửa đang mở",
     "Cửa đã đóng",
     "Cửa sắp mở",
     "Cửa rất to"
    ],
    "a": 0,
    "why": "开着 = trạng thái cửa đang mở."
   },
   {
    "q": "“她笑着说” nghĩa là gì?",
    "o": [
     "Cô ấy vừa cười vừa nói",
     "Cô ấy cười xong mới nói",
     "Cô ấy sắp cười",
     "Cô ấy không nói"
    ],
    "a": 0,
    "why": "笑着说 là vừa cười vừa nói."
   },
   {
    "q": "Điền vào chỗ trống: 墙上挂___一幅画。",
    "o": [
     "了",
     "过",
     "着",
     "的"
    ],
    "a": 2,
    "why": "Tranh đang treo giữ trạng thái nên dùng 着."
   },
   {
    "q": "Câu nào nói trạng thái đang giữ (không phải đang làm)?",
    "o": [
     "他在看书",
     "他穿着一件红衣服",
     "他要去学校",
     "他昨天来了"
    ],
    "a": 1,
    "why": "穿着 nói áo đang mặc trên người, là trạng thái giữ."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "他穿着衣服",
     "门开着",
     "他笑着说",
     "他着穿衣服"
    ],
    "a": 3,
    "why": "着 đứng sau động từ: 穿着, không nói 着穿."
   },
   {
    "q": "着 đứng ở đâu?",
    "o": [
     "Trước chủ ngữ",
     "Sau động từ",
     "Trước động từ",
     "Cuối câu hỏi"
    ],
    "a": 1,
    "why": "Công thức: động từ + 着."
   }
  ]
 },
 {
  "id": "bijiao",
  "stage": 2,
  "title": "比较 — so sánh hơn (比)",
  "hook": "“今天比昨天冷” — hôm nay lạnh hơn hôm qua: 比 là so sánh.",
  "examples": [
   "今天比昨天冷。(Jīntiān bǐ zuótiān lěng.) — Hôm nay lạnh hơn hôm qua.",
   "他比我高。(Tā bǐ wǒ gāo.) — Anh ấy cao hơn tôi.",
   "这个比那个便宜。(Zhè ge bǐ nà ge piányi.) — Cái này rẻ hơn cái kia.",
   "我的汉语比他的汉语好。(Wǒ de Hànyǔ bǐ tā de Hànyǔ hǎo.) — Tiếng Trung của tôi tốt hơn của anh ấy."
  ],
  "speak": "今天比昨天冷。他比我高。这个比那个便宜。我的汉语比他的汉语好。",
  "rule": "Công thức: A 比 B + tính từ. Có thể thêm 更, 多 hoặc 一点儿 sau tính từ. Phủ định so sánh dùng 没有: 他没有我高 (anh ấy không cao bằng tôi).",
  "tip": "比 không đi với 很: không nói “比昨天很冷”.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK2 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“今天比昨天冷” nghĩa là gì?",
    "o": [
     "Hôm nay lạnh hơn hôm qua",
     "Hôm qua lạnh hơn hôm nay",
     "Hai hôm lạnh như nhau",
     "Hôm nay rất lạnh"
    ],
    "a": 0,
    "why": "A 比 B + 冷: A lạnh hơn B."
   },
   {
    "q": "Điền vào chỗ trống: 他___我高。",
    "o": [
     "比",
     "被",
     "把",
     "和"
    ],
    "a": 0,
    "why": "So sánh hơn dùng 比."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "他比我高",
     "今天比昨天冷",
     "今天比昨天很冷",
     "这个比那个便宜"
    ],
    "a": 2,
    "why": "比 không đi với 很."
   },
   {
    "q": "“他没有我高” nghĩa là gì?",
    "o": [
     "Anh ấy không cao bằng tôi",
     "Anh ấy cao hơn tôi",
     "Anh ấy rất cao",
     "Tôi không cao"
    ],
    "a": 0,
    "why": "没有 trong câu so sánh là phủ định: không bằng."
   },
   {
    "q": "Điền vào chỗ trống: 我的汉语比他的汉语___。",
    "o": [
     "好",
     "很",
     "吗",
     "了"
    ],
    "a": 0,
    "why": "Sau 比 là tính từ so sánh: 好."
   },
   {
    "q": "比 đứng ở đâu?",
    "o": [
     "Giữa hai đối tượng so sánh",
     "Đầu câu",
     "Cuối câu",
     "Trước chủ ngữ"
    ],
    "a": 0,
    "why": "Công thức: A 比 B + tính từ."
   }
  ]
 },
 {
  "id": "dedide",
  "stage": 2,
  "title": "的 / 地 / 得 — ba chữ de",
  "hook": "“我的书、高兴地说、跑得很快” — ba chữ de đọc giống nhau, viết khác nhau.",
  "examples": [
   "这是我的书。(Zhè shì wǒ de shū.) — Đây là sách của tôi.",
   "他高兴地说。(Tā gāoxìng de shuō.) — Anh ấy vui vẻ nói.",
   "他跑得很快。(Tā pǎo de hěn kuài.) — Anh ấy chạy rất nhanh.",
   "她唱得很好听。(Tā chàng de hěn hǎotīng.) — Cô ấy hát rất hay."
  ],
  "speak": "这是我的书。他高兴地说。他跑得很快。她唱得很好听。",
  "rule": "的 nối định ngữ với danh từ (我的书); 地 nối trạng ngữ với động từ (高兴地说); 得 nối động từ với bổ ngữ mức độ (跑得很快).",
  "tip": "Mẹo nhớ: 的 trước danh từ, 地 trước động từ, 得 sau động từ.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK2 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "Điền vào chỗ trống: 这是___书。",
    "o": [
     "我的",
     "我地",
     "我得",
     "我着"
    ],
    "a": 0,
    "why": "的 nối định ngữ với danh từ 书."
   },
   {
    "q": "Điền vào chỗ trống: 他高兴___说。",
    "o": [
     "的",
     "地",
     "得",
     "着"
    ],
    "a": 1,
    "why": "Trạng ngữ trước động từ 说 dùng 地."
   },
   {
    "q": "Điền vào chỗ trống: 他跑___很快。",
    "o": [
     "的",
     "地",
     "得",
     "着"
    ],
    "a": 2,
    "why": "Bổ ngữ mức độ sau động từ 跑 dùng 得."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "他跑得很快",
     "他高兴地说",
     "这是我的书",
     "他跑的地很快"
    ],
    "a": 3,
    "why": "跑的地很快 sai: sau động từ phải là 得."
   },
   {
    "q": "的 dùng trước loại từ nào?",
    "o": [
     "Danh từ",
     "Động từ",
     "Tính từ đứng sau",
     "Trạng ngữ"
    ],
    "a": 0,
    "why": "的 nối định ngữ với danh từ."
   },
   {
    "q": "地 đứng ở đâu?",
    "o": [
     "Trước động từ",
     "Sau động từ",
     "Trước danh từ",
     "Cuối câu"
    ],
    "a": 0,
    "why": "地 nối trạng ngữ với động từ đứng sau nó."
   }
  ]
 },
 {
  "id": "haishihuozhe",
  "stage": 2,
  "title": "还是 / 或者 — hay là / hoặc",
  "hook": "“你喝茶还是喝咖啡？” — hỏi lựa chọn thì dùng 还是, kể lựa chọn thì dùng 或者.",
  "examples": [
   "你喝茶还是喝咖啡？(Nǐ hē chá háishi hē kāfēi?) — Bạn uống trà hay cà phê?",
   "明天或者后天都可以。(Míngtiān huòzhě hòutiān dōu kěyǐ.) — Ngày mai hoặc ngày kia đều được.",
   "你去还是我去？(Nǐ qù háishi wǒ qù?) — Bạn đi hay tôi đi?",
   "周末或者去公园，或者在家休息。(Zhōumò huòzhě qù gōngyuán, huòzhě zài jiā xiūxi.) — Cuối tuần hoặc đi công viên, hoặc ở nhà nghỉ."
  ],
  "speak": "你喝茶还是喝咖啡？明天或者后天都可以。你去还是我去？周末或者去公园，或者在家休息。",
  "rule": "还是 dùng trong câu hỏi lựa chọn (thường có dấu ?). 或者 dùng trong câu kể để nêu các lựa chọn, có thể lặp lại: 或者…或者….",
  "tip": "Thấy dấu ? và hai lựa chọn thì chọn 还是; câu kể “cái này hay cái kia đều được” thì chọn 或者.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK2 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "Câu hỏi lựa chọn “Bạn uống trà hay cà phê?” dùng từ nào?",
    "o": [
     "还是",
     "或者",
     "但是",
     "如果"
    ],
    "a": 0,
    "why": "Câu hỏi lựa chọn dùng 还是."
   },
   {
    "q": "Câu kể “Ngày mai hoặc ngày kia đều được” dùng từ nào?",
    "o": [
     "还是",
     "或者",
     "但是",
     "不但"
    ],
    "a": 1,
    "why": "Câu kể nêu lựa chọn dùng 或者."
   },
   {
    "q": "Điền vào chỗ trống: 你想去北京___去上海？",
    "o": [
     "还是",
     "或者",
     "但是",
     "而且"
    ],
    "a": 0,
    "why": "Đây là câu hỏi lựa chọn nên dùng 还是."
   },
   {
    "q": "Điền vào chỗ trống: 周末我___去公园，___在家休息。",
    "o": [
     "或者…或者",
     "还是…还是",
     "不但…而且",
     "虽然…但是"
    ],
    "a": 0,
    "why": "Câu kể nêu hai lựa chọn dùng 或者…或者."
   },
   {
    "q": "Câu hỏi lựa chọn nào SAI?",
    "o": [
     "你喝茶还是喝咖啡？",
     "你去还是我去？",
     "你去或者我去？",
     "你喜欢红色还是蓝色？"
    ],
    "a": 2,
    "why": "Câu hỏi lựa chọn không dùng 或者, phải dùng 还是."
   },
   {
    "q": "或者 có dùng trong câu hỏi lựa chọn không?",
    "o": [
     "Không, chỉ dùng trong câu kể",
     "Có, dùng như 还是",
     "Chỉ dùng cuối câu",
     "Chỉ dùng với 但是"
    ],
    "a": 0,
    "why": "或者 nêu lựa chọn trong câu kể, không dùng để hỏi."
   }
  ]
 },
 {
  "id": "ba",
  "stage": 3,
  "title": "把 — câu chữ 把",
  "hook": "“请把门关上” — hãy đóng cửa lại: 把 nhấn mạnh việc xử lý đồ vật.",
  "examples": [
   "请把门关上。(Qǐng bǎ mén guān shang.) — Xin hãy đóng cửa lại.",
   "我把书放在桌子上了。(Wǒ bǎ shū fàng zài zhuōzi shang le.) — Tôi đã đặt sách lên bàn rồi.",
   "他把房间打扫干净了。(Tā bǎ fángjiān dǎsǎo gānjìng le.) — Anh ấy đã dọn phòng sạch rồi.",
   "请把这句话写下来。(Qǐng bǎ zhè jù huà xiě xiàlai.) — Xin hãy viết câu này xuống."
  ],
  "speak": "请把门关上。我把书放在桌子上了。他把房间打扫干净了。请把这句话写下来。",
  "rule": "Công thức: 把 + tân ngữ + động từ + thành phần khác (kết quả, xu hướng, nơi chốn…). Động từ trong câu 把 không đứng trơ trọi một mình.",
  "tip": "Nhớ công thức: 把 + cái gì + làm sao (kết quả ra sao).",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK3 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“请把门关上” nghĩa là gì?",
    "o": [
     "Xin hãy đóng cửa lại",
     "Xin hãy mở cửa ra",
     "Cửa đang mở",
     "Cửa rất to"
    ],
    "a": 0,
    "why": "把门关上: xử lý cái cửa bằng cách đóng lại."
   },
   {
    "q": "Công thức câu 把 là gì?",
    "o": [
     "把 + tân ngữ + động từ + thành phần khác",
     "把 + động từ + tân ngữ",
     "动词 + 把 + tân ngữ",
     "把 + tính từ + danh từ"
    ],
    "a": 0,
    "why": "把 đưa tân ngữ lên trước động từ, sau động từ còn thành phần khác."
   },
   {
    "q": "Câu 把 nào đúng?",
    "o": [
     "我把书放在桌子上了",
     "我把放在桌子上书",
     "我把书放",
     "我放把书在桌子上"
    ],
    "a": 0,
    "why": "把书放在桌子上: 把 + 书 + 放 + 在桌子上."
   },
   {
    "q": "Điền vào chỗ trống: 请把这句话___下来。",
    "o": [
     "写",
     "书",
     "门",
     "很"
    ],
    "a": 0,
    "why": "把这句话写下来: viết câu này xuống."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "请把门关上",
     "我把房间打扫干净了",
     "他把书看",
     "请把这句话写下来"
    ],
    "a": 2,
    "why": "把书看 sai: động từ 看 đứng trơ, thiếu kết quả sau nó."
   },
   {
    "q": "Câu 把 nhấn mạnh điều gì?",
    "o": [
     "Việc xử lý đồ vật ra sao",
     "Thời gian làm việc",
     "Người làm việc",
     "Nơi chốn"
    ],
    "a": 0,
    "why": "Câu 把 nhấn mạnh đồ vật được xử lý thế nào."
   }
  ]
 },
 {
  "id": "bei",
  "stage": 3,
  "title": "被 — câu bị động",
  "hook": "“我的书被他拿走了” — sách của tôi bị anh ấy lấy đi mất: 被 nói việc xảy ra với chủ ngữ.",
  "examples": [
   "我的书被他拿走了。(Wǒ de shū bèi tā ná zǒu le.) — Sách của tôi bị anh ấy lấy đi mất.",
   "杯子被打碎了。(Bēizi bèi dǎ suì le.) — Cái cốc bị đánh vỡ rồi.",
   "他被老师表扬了。(Tā bèi lǎoshī biǎoyáng le.) — Anh ấy được cô giáo khen.",
   "我的作业被老师收走了。(Wǒ de zuòyè bèi lǎoshī shōu zǒu le.) — Bài tập của tôi bị cô giáo thu đi mất."
  ],
  "speak": "我的书被他拿走了。杯子被打碎了。他被老师表扬了。我的作业被老师收走了。",
  "rule": "Công thức: chủ ngữ + 被 + (người gây ra) + động từ + kết quả. Sau động từ thường có kết quả (走了, 碎了…), không đứng trơ.",
  "tip": "Bị động không chỉ là chuyện xấu: 被表扬 là được khen, vẫn dùng 被.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK3 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“我的书被他拿走了” nghĩa là gì?",
    "o": [
     "Sách của tôi bị anh ấy lấy đi mất",
     "Anh ấy lấy sách của tôi cho tôi",
     "Tôi lấy sách của anh ấy",
     "Sách của tôi rất mới"
    ],
    "a": 0,
    "why": "Chủ ngữ 书 là thứ chịu tác động của 拿走."
   },
   {
    "q": "Điền vào chỗ trống: 杯子被___碎了。",
    "o": [
     "打",
     "书",
     "很",
     "门"
    ],
    "a": 0,
    "why": "杯子被打碎了: cốc bị đánh vỡ."
   },
   {
    "q": "Công thức câu 被 là gì?",
    "o": [
     "Chủ ngữ + 被 + người gây ra + động từ + kết quả",
     "被 + chủ ngữ + động từ",
     "Chủ ngữ + động từ + 被",
     "被 + tính từ + danh từ"
    ],
    "a": 0,
    "why": "被 đưa người gây ra lên trước động từ, sau động từ có kết quả."
   },
   {
    "q": "Câu nào nói “anh ấy được cô giáo khen”?",
    "o": [
     "他被老师表扬了",
     "老师被他表扬了",
     "他表扬老师了",
     "老师表扬他了"
    ],
    "a": 0,
    "why": "他被老师表扬了: anh ấy là người được khen."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "我的作业被老师收走了",
     "杯子被打碎了",
     "他被表扬老师了",
     "他被老师表扬了"
    ],
    "a": 2,
    "why": "被表扬老师了 sai thứ tự: phải là 被老师表扬了."
   },
   {
    "q": "Sau động từ trong câu 被 thường có gì?",
    "o": [
     "Kết quả (走了, 碎了…)",
     "Tên riêng",
     "Số lượng",
     "Dấu hỏi"
    ],
    "a": 0,
    "why": "Động từ trong câu 被 cần thành phần kết quả đi sau."
   }
  ]
 },
 {
  "id": "yuelaiyue",
  "stage": 3,
  "title": "越来越 — càng ngày càng",
  "hook": "“天气越来越冷了” — trời càng ngày càng lạnh: 越来越 nói mức độ tăng dần.",
  "examples": [
   "天气越来越冷了。(Tiānqì yuè lái yuè lěng le.) — Trời càng ngày càng lạnh.",
   "他的汉语越来越好。(Tā de Hànyǔ yuè lái yuè hǎo.) — Tiếng Trung của anh ấy càng ngày càng tốt.",
   "东西越来越贵。(Dōngxi yuè lái yuè guì.) — Đồ đạc càng ngày càng đắt.",
   "我越来越喜欢北京了。(Wǒ yuè lái yuè xǐhuan Běijīng le.) — Tôi càng ngày càng thích Bắc Kinh."
  ],
  "speak": "天气越来越冷了。他的汉语越来越好。东西越来越贵。我越来越喜欢北京了。",
  "rule": "Công thức: 越来越 + tính từ hoặc động từ tâm lý (喜欢, 爱…). Nó diễn tả mức độ thay đổi dần theo thời gian.",
  "tip": "越来越 đi với tính từ hoặc cảm xúc, không đi với số lượng cụ thể hay tên riêng.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK3 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“天气越来越冷了” nghĩa là gì?",
    "o": [
     "Trời càng ngày càng lạnh",
     "Trời lạnh một hôm",
     "Trời sắp lạnh",
     "Trời lạnh nhất"
    ],
    "a": 0,
    "why": "越来越 + 冷: mức lạnh tăng dần."
   },
   {
    "q": "Điền vào chỗ trống: 他的汉语越来越___。",
    "o": [
     "好",
     "书",
     "北京",
     "三百"
    ],
    "a": 0,
    "why": "越来越 đi với tính từ: 好."
   },
   {
    "q": "越来越 dùng với loại từ nào?",
    "o": [
     "Tính từ hoặc động từ tâm lý",
     "Danh từ cụ thể",
     "Số lượng",
     "Tên riêng"
    ],
    "a": 0,
    "why": "越来越 + tính từ (好, 冷) hoặc 喜欢."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "天气越来越冷",
     "他越来越高",
     "东西越来越三百块",
     "我越来越喜欢北京"
    ],
    "a": 2,
    "why": "三百块 là số lượng cụ thể, không đi với 越来越."
   },
   {
    "q": "“我越来越喜欢北京了” nghĩa là gì?",
    "o": [
     "Tôi càng ngày càng thích Bắc Kinh",
     "Tôi thích Bắc Kinh một lần",
     "Tôi không thích Bắc Kinh",
     "Tôi sắp đi Bắc Kinh"
    ],
    "a": 0,
    "why": "越来越喜欢: mức thích tăng dần."
   },
   {
    "q": "Điền vào chỗ trống: 东西越来越___。",
    "o": [
     "贵",
     "桌子",
     "昨天",
     "吗"
    ],
    "a": 0,
    "why": "越来越 + tính từ 贵."
   }
  ]
 },
 {
  "id": "suiran",
  "stage": 3,
  "title": "虽然…但是 — tuy… nhưng…",
  "hook": "“虽然今天很冷，但是他还是去跑步了” — tuy lạnh nhưng anh ấy vẫn đi chạy.",
  "examples": [
   "虽然今天很冷，但是他还是去跑步了。(Suīrán jīntiān hěn lěng, dànshì tā háishi qù pǎobù le.) — Tuy hôm nay rất lạnh nhưng anh ấy vẫn đi chạy.",
   "虽然她很忙，但是每天都给我打电话。(Suīrán tā hěn máng, dànshì měitiān dōu gěi wǒ dǎ diànhuà.) — Tuy cô ấy rất bận nhưng ngày nào cũng gọi điện cho tôi.",
   "虽然路很远，但是我们走到了。(Suīrán lù hěn yuǎn, dànshì wǒmen zǒu dào le.) — Tuy đường rất xa nhưng chúng tôi đã đi tới.",
   "虽然他累了，但是还在工作。(Suīrán tā lèi le, dànshì hái zài gōngzuò.) — Tuy anh ấy mệt rồi nhưng vẫn đang làm việc."
  ],
  "speak": "虽然今天很冷，但是他还是去跑步了。虽然她很忙，但是每天都给我打电话。虽然路很远，但是我们走到了。虽然他累了，但是还在工作。",
  "rule": "虽然 mở đầu vế nhượng bộ (tuy…), 但是 mở đầu vế chính (nhưng…). Hai từ hay đi thành cặp; 但是 và 可是 chỉ chọn một, không dùng cả hai.",
  "tip": "Nhớ cặp đôi: thấy 虽然 thì tìm 但是 ở vế sau.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK3 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“虽然今天很冷，但是他还是去跑步了” nghĩa là gì?",
    "o": [
     "Tuy hôm nay rất lạnh nhưng anh ấy vẫn đi chạy",
     "Vì hôm nay lạnh nên anh ấy đi chạy",
     "Hôm nay lạnh nên anh ấy không chạy",
     "Anh ấy chạy vì trời lạnh"
    ],
    "a": 0,
    "why": "虽然…但是 là nhượng bộ: tuy… nhưng…."
   },
   {
    "q": "Điền vào chỗ trống: 虽然她很忙，___每天都给我打电话。",
    "o": [
     "但是",
     "因为",
     "如果",
     "而且"
    ],
    "a": 0,
    "why": "Cặp với 虽然 là 但是."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "虽然冷，但是他去了",
     "虽然忙，但是她来了",
     "虽然累，但是可是他还在工作",
     "虽然远，但是我们走到了"
    ],
    "a": 2,
    "why": "但是 và 可是 chỉ chọn một, không dùng cả hai."
   },
   {
    "q": "虽然 nêu lên điều gì?",
    "o": [
     "Vế nhượng bộ (tuy…)",
     "Nguyên nhân",
     "Giả thiết",
     "Kết quả"
    ],
    "a": 0,
    "why": "虽然 mở đầu vế nhượng bộ, vế chính dùng 但是."
   },
   {
    "q": "Điền vào chỗ trống: 虽然路很远，___我们走到了。",
    "o": [
     "但是",
     "所以",
     "就",
     "或者"
    ],
    "a": 0,
    "why": "Cặp 虽然…但是."
   },
   {
    "q": "Cặp nào khác với 虽然…但是 về ý nghĩa?",
    "o": [
     "因为…所以",
     "如果…就",
     "不但…而且",
     "还是…或者"
    ],
    "a": 0,
    "why": "因为…所以 là nguyên nhân – kết quả, không phải nhượng bộ."
   }
  ]
 },
 {
  "id": "ruguo",
  "stage": 3,
  "title": "如果…就 — nếu… thì…",
  "hook": "“如果明天下雨，我们就不去公园了” — nếu mai mưa thì chúng ta không đi công viên nữa.",
  "examples": [
   "如果明天下雨，我们就不去公园了。(Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù gōngyuán le.) — Nếu ngày mai mưa thì chúng ta không đi công viên nữa.",
   "如果你有时间，就来我家吧。(Rúguǒ nǐ yǒu shíjiān, jiù lái wǒ jiā ba.) — Nếu bạn có thời gian thì đến nhà tôi nhé.",
   "如果不舒服，就早点儿休息。(Rúguǒ bù shūfu, jiù zǎo diǎnr xiūxi.) — Nếu không khỏe thì nghỉ sớm một chút.",
   "如果他不来，我就自己去。(Rúguǒ tā bù lái, wǒ jiù zìjǐ qù.) — Nếu anh ấy không đến thì tôi tự đi."
  ],
  "speak": "如果明天下雨，我们就不去公园了。如果你有时间，就来我家吧。如果不舒服，就早点儿休息。如果他不来，我就自己去。",
  "rule": "如果 nêu giả thiết ở vế đầu, 就 nêu kết quả ở vế sau và đứng trước động từ của vế sau.",
  "tip": "Nhớ cặp đôi: 如果 ở vế đầu, 就 ở vế sau.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK3 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“如果明天下雨，我们就不去公园了” nghĩa là gì?",
    "o": [
     "Nếu ngày mai mưa thì chúng ta không đi công viên nữa",
     "Ngày mai mưa nên đi công viên",
     "Ngày mai không mưa",
     "Chúng ta đi công viên vì mưa"
    ],
    "a": 0,
    "why": "如果…就 là giả thiết – kết quả."
   },
   {
    "q": "Điền vào chỗ trống: 如果你有时间，___来我家吧。",
    "o": [
     "就",
     "但是",
     "因为",
     "或者"
    ],
    "a": 0,
    "why": "Vế kết quả dùng 就."
   },
   {
    "q": "就 đứng ở đâu?",
    "o": [
     "Trước động từ của vế sau",
     "Cuối câu",
     "Trước chủ ngữ vế đầu",
     "Sau danh từ"
    ],
    "a": 0,
    "why": "就 đứng trước động từ vế kết quả: 就来, 就去."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "如果下雨，我们就不去了",
     "如果你来，我就高兴",
     "如果就下雨，我们不去",
     "如果不舒服，就早点儿休息"
    ],
    "a": 2,
    "why": "就 không đứng trong vế 如果."
   },
   {
    "q": "Điền vào chỗ trống: 如果他不来，我___自己去。",
    "o": [
     "就",
     "但是",
     "而且",
     "被"
    ],
    "a": 0,
    "why": "Vế kết quả dùng 就."
   },
   {
    "q": "如果 nêu lên điều gì?",
    "o": [
     "Giả thiết",
     "Nguyên nhân",
     "Nhượng bộ",
     "So sánh"
    ],
    "a": 0,
    "why": "如果 = nếu, nêu giả thiết."
   }
  ]
 },
 {
  "id": "budan",
  "stage": 3,
  "title": "不但…而且 — không những… mà còn…",
  "hook": "“他不但会说汉语，而且会写汉字” — anh ấy không những nói được tiếng Trung mà còn viết được chữ Hán.",
  "examples": [
   "他不但会说汉语，而且会写汉字。(Tā búdàn huì shuō Hànyǔ, érqiě huì xiě Hànzì.) — Anh ấy không những nói được tiếng Trung mà còn viết được chữ Hán.",
   "这件衣服不但便宜，而且好看。(Zhè jiàn yīfu búdàn piányi, érqiě hǎokàn.) — Chiếc áo này không những rẻ mà còn đẹp.",
   "她不但聪明，而且很努力。(Tā búdàn cōngming, érqiě hěn nǔlì.) — Cô ấy không những thông minh mà còn rất chăm chỉ.",
   "北京不但大，而且很美。(Běijīng búdàn dà, érqiě hěn měi.) — Bắc Kinh không những lớn mà còn rất đẹp."
  ],
  "speak": "他不但会说汉语，而且会写汉字。这件衣服不但便宜，而且好看。她不但聪明，而且很努力。北京不但大，而且很美。",
  "rule": "不但 ở vế đầu, 而且 ở vế sau. Hai vế cùng chủ ngữ thì 不但 đứng sau chủ ngữ (他不但…). Vế sau thường tiến thêm một bậc so với vế trước.",
  "tip": "Cùng một người/vật thì 不但 đứng sau chủ ngữ, đừng đặt 不但 lên trước chủ ngữ.",
  "note": "Trạm tự soạn theo điểm ngữ pháp trình độ HSK3 (hệ 6 cấp cũ); ví dụ tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
  "quiz": [
   {
    "q": "“他不但会说汉语，而且会写汉字” nghĩa là gì?",
    "o": [
     "Anh ấy không những nói được mà còn viết được",
     "Anh ấy chỉ nói được",
     "Anh ấy chỉ viết được",
     "Anh ấy không nói cũng không viết"
    ],
    "a": 0,
    "why": "不但…而且: vế sau tiến thêm một bậc."
   },
   {
    "q": "Câu nào đúng khi hai vế cùng chủ ngữ “他”?",
    "o": [
     "他不但会说汉语，而且会写汉字",
     "不但他会说汉语，而且会写汉字",
     "他会说汉语不但，而且会写汉字",
     "他不但会说汉语，而且汉字"
    ],
    "a": 0,
    "why": "Cùng chủ ngữ thì 不但 đứng sau chủ ngữ."
   },
   {
    "q": "Điền vào chỗ trống: 这件衣服不但便宜，___好看。",
    "o": [
     "而且",
     "但是",
     "如果",
     "或者"
    ],
    "a": 0,
    "why": "Cặp với 不但 là 而且."
   },
   {
    "q": "Điền vào chỗ trống: 她不但聪明，___很努力。",
    "o": [
     "而且",
     "但是",
     "就",
     "被"
    ],
    "a": 0,
    "why": "Cặp 不但…而且."
   },
   {
    "q": "Vế sau của 不但…而且 thường thế nào so với vế trước?",
    "o": [
     "Tiến thêm một bậc",
     "Yếu hơn hẳn",
     "Trái ngược",
     "Không liên quan"
    ],
    "a": 0,
    "why": "而且 nêu thêm điểm mạnh hơn: viết được là tiến hơn nói được."
   },
   {
    "q": "Câu nào SAI?",
    "o": [
     "他不但会说，而且会写",
     "北京不但大，而且很美",
     "她不但聪明，而且很努力",
     "这件衣服不但便宜，而且很贵"
    ],
    "a": 3,
    "why": "便宜 và 很贵 trái ngược nhau, không phải tiến thêm một bậc cùng hướng."
   }
  ]
 }
];
var ZH_READING = [
 {
  "id": "nha",
  "stage": 2,
  "title": "Nhà của Tiểu Minh",
  "topic": "Nhà cửa",
  "text": "小明的家在三楼。家里有三口人：爸爸、妈妈和小明。客厅很大，沙发很舒服。他的房间不大，但是很干净。晚上，一家人在客厅看电视。",
  "pinyin": "Xiǎo Míng de jiā zài sān lóu. Jiā lǐ yǒu sān kǒu rén: bàba, māma hé Xiǎo Míng. Kètīng hěn dà, shāfā hěn shūfu. Tā de fángjiān bù dà, dànshì hěn gānjìng. Wǎnshang, yì jiā rén zài kètīng kàn diànshì.",
  "vi": "Nhà của Tiểu Minh ở tầng 3. Nhà có 3 người: bố, mẹ và Tiểu Minh. Phòng khách rất rộng, ghế sofa rất thoải mái. Phòng của cậu ấy không lớn nhưng rất sạch. Buổi tối, cả nhà xem tivi ở phòng khách.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); đoạn văn và câu hỏi tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "questions": [
   {
    "q": "Nhà của Tiểu Minh ở tầng mấy?",
    "o": [
     "Tầng 2",
     "Tầng 3",
     "Tầng 4",
     "Tầng 5"
    ],
    "a": 1,
    "why": "在三楼: ở tầng 3."
   },
   {
    "q": "Đúng hay sai: Nhà Tiểu Minh có 4 người.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bài viết: 家里有三口人 — nhà có 3 người."
   },
   {
    "q": "Phòng khách thế nào?",
    "o": [
     "Rất rộng",
     "Rất nhỏ",
     "Rất tối",
     "Rất cũ"
    ],
    "a": 0,
    "why": "客厅很大: phòng khách rất rộng."
   },
   {
    "q": "Điền vào chỗ trống: 他的房间不大，但是很___。",
    "o": [
     "干净",
     "大",
     "高",
     "远"
    ],
    "a": 0,
    "why": "Bài viết: 房间不大，但是很干净."
   },
   {
    "q": "Buổi tối cả nhà làm gì?",
    "o": [
     "Xem tivi",
     "Nấu cơm",
     "Đọc sách",
     "Đi ngủ"
    ],
    "a": 0,
    "why": "晚上，一家人在客厅看电视."
   }
  ]
 },
 {
  "id": "truong",
  "stage": 2,
  "title": "Một ngày ở trường",
  "topic": "Trường học",
  "text": "我每天早上七点去学校。上午有四节课：汉语、数学、英语和体育。午饭后，我和同学在操场上踢足球。下午三点放学，我坐公共汽车回家。老师说我的汉语越来越好，我很高兴。",
  "pinyin": "Wǒ měitiān zǎoshang qī diǎn qù xuéxiào. Shàngwǔ yǒu sì jié kè: Hànyǔ, shùxué, Yīngyǔ hé tǐyù. Wǔfàn hòu, wǒ hé tóngxué zài cāochǎng shang tī zúqiú. Xiàwǔ sān diǎn fàngxué, wǒ zuò gōnggòng qìchē huí jiā. Lǎoshī shuō wǒ de Hànyǔ yuè lái yuè hǎo, wǒ hěn gāoxìng.",
  "vi": "Mỗi ngày tôi đi học lúc 7 giờ sáng. Buổi sáng có 4 tiết: tiếng Trung, toán, tiếng Anh và thể dục. Sau bữa trưa, tôi và bạn học đá bóng ở sân trường. 3 giờ chiều tan học, tôi đi xe buýt về nhà. Cô giáo nói tiếng Trung của tôi càng ngày càng tốt, tôi rất vui.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); đoạn văn và câu hỏi tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "questions": [
   {
    "q": "Mấy giờ đi học?",
    "o": [
     "6 giờ",
     "7 giờ",
     "8 giờ",
     "9 giờ"
    ],
    "a": 1,
    "why": "早上七点去学校: 7 giờ sáng đi học."
   },
   {
    "q": "Buổi sáng có mấy tiết học?",
    "o": [
     "2 tiết",
     "3 tiết",
     "4 tiết",
     "5 tiết"
    ],
    "a": 2,
    "why": "上午有四节课: buổi sáng có 4 tiết."
   },
   {
    "q": "Sau bữa trưa làm gì?",
    "o": [
     "Đá bóng ở sân trường",
     "Ngủ trưa",
     "Đọc sách",
     "Về nhà"
    ],
    "a": 0,
    "why": "午饭后…在操场上踢足球."
   },
   {
    "q": "Về nhà bằng phương tiện gì?",
    "o": [
     "Xe buýt",
     "Tàu điện ngầm",
     "Xe đạp",
     "Đi bộ"
    ],
    "a": 0,
    "why": "坐公共汽车回家: đi xe buýt về nhà."
   },
   {
    "q": "Đúng hay sai: Cô giáo nói tiếng Trung của tôi càng ngày càng kém.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bài viết: 老师说我的汉语越来越好 — càng ngày càng tốt."
   }
  ]
 },
 {
  "id": "thoitiet",
  "stage": 2,
  "title": "Hôm nay trời đẹp",
  "topic": "Thời tiết",
  "text": "今天天气很好。早上有点儿冷，中午很暖和。天空很蓝，没有云。下午刮了一点儿风，但是不冷。明天可能下雨，出门别忘了带伞。",
  "pinyin": "Jīntiān tiānqì hěn hǎo. Zǎoshang yǒudiǎnr lěng, zhōngwǔ hěn nuǎnhuo. Tiānkōng hěn lán, méi yǒu yún. Xiàwǔ guā le yìdiǎnr fēng, dànshì bù lěng. Míngtiān kěnéng xià yǔ, chū mén bié wàng le dài sǎn.",
  "vi": "Hôm nay thời tiết rất đẹp. Sáng hơi lạnh, trưa rất ấm. Bầu trời rất xanh, không có mây. Chiều có gió nhẹ nhưng không lạnh. Ngày mai có thể mưa, ra ngoài đừng quên mang ô.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); đoạn văn và câu hỏi tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "questions": [
   {
    "q": "Buổi sáng thời tiết thế nào?",
    "o": [
     "Hơi lạnh",
     "Rất nóng",
     "Mưa to",
     "Có tuyết"
    ],
    "a": 0,
    "why": "早上有点儿冷: sáng hơi lạnh."
   },
   {
    "q": "Buổi trưa thế nào?",
    "o": [
     "Rất ấm",
     "Rất lạnh",
     "Mưa",
     "Có gió lớn"
    ],
    "a": 0,
    "why": "中午很暖和: trưa rất ấm."
   },
   {
    "q": "Đúng hay sai: Hôm nay trời có nhiều mây.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bài viết: 天空很蓝，没有云 — không có mây."
   },
   {
    "q": "Buổi chiều thế nào?",
    "o": [
     "Có gió nhẹ nhưng không lạnh",
     "Mưa rất to",
     "Rất nóng",
     "Có tuyết"
    ],
    "a": 0,
    "why": "下午刮了一点儿风，但是不冷."
   },
   {
    "q": "Ngày mai ra ngoài nên mang gì?",
    "o": [
     "Ô",
     "Kính râm",
     "Áo mưa dày",
     "Găng tay"
    ],
    "a": 0,
    "why": "明天可能下雨，出门别忘了带伞: có thể mưa nên mang ô."
   }
  ]
 },
 {
  "id": "banbe",
  "stage": 2,
  "title": "Bạn thân của tôi",
  "topic": "Bạn bè",
  "text": "我的好朋友叫小红。她今年二十岁，是大学生。她很高，也很漂亮。我们每个星期六一起去图书馆看书。她喜欢唱歌，我喜欢画画。我们常常互相帮助，从来不吵架。",
  "pinyin": "Wǒ de hǎo péngyou jiào Xiǎo Hóng. Tā jīnnián èrshí suì, shì dàxuéshēng. Tā hěn gāo, yě hěn piàoliang. Wǒmen měi ge xīngqīliù yìqǐ qù túshūguǎn kàn shū. Tā xǐhuan chàng gē, wǒ xǐhuan huà huà. Wǒmen chángcháng hùxiāng bāngzhù, cónglái bù chǎojià.",
  "vi": "Bạn thân của tôi tên là Tiểu Hồng. Năm nay cô ấy 20 tuổi, là sinh viên đại học. Cô ấy rất cao và cũng rất xinh. Mỗi thứ bảy chúng tôi cùng đi thư viện đọc sách. Cô ấy thích hát, tôi thích vẽ. Chúng tôi thường giúp đỡ lẫn nhau, không bao giờ cãi nhau.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); đoạn văn và câu hỏi tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "questions": [
   {
    "q": "Tiểu Hồng năm nay bao nhiêu tuổi?",
    "o": [
     "18 tuổi",
     "19 tuổi",
     "20 tuổi",
     "21 tuổi"
    ],
    "a": 2,
    "why": "她今年二十岁: năm nay 20 tuổi."
   },
   {
    "q": "Mỗi thứ bảy hai người cùng đi đâu?",
    "o": [
     "Thư viện",
     "Công viên",
     "Rạp phim",
     "Quán ăn"
    ],
    "a": 0,
    "why": "每个星期六一起去图书馆看书."
   },
   {
    "q": "Tiểu Hồng thích làm gì?",
    "o": [
     "Hát",
     "Vẽ",
     "Chạy bộ",
     "Nấu ăn"
    ],
    "a": 0,
    "why": "她喜欢唱歌: cô ấy thích hát."
   },
   {
    "q": "Đúng hay sai: Hai người thường cãi nhau.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bài viết: 从来不吵架 — không bao giờ cãi nhau."
   },
   {
    "q": "Điền vào chỗ trống: 我们常常互相___。",
    "o": [
     "帮助",
     "吵架",
     "唱歌",
     "画画"
    ],
    "a": 0,
    "why": "我们常常互相帮助: thường giúp đỡ lẫn nhau."
   }
  ]
 },
 {
  "id": "dilam",
  "stage": 3,
  "title": "Ngày đầu đi làm",
  "topic": "Đi làm",
  "text": "我上个月开始在一家公司工作。公司离我家不远，坐地铁只要二十分钟。我的工作是写报告，有时候还要开会。同事们都很友好，常常帮助我。虽然工作有点儿忙，但是我学到了很多东西。",
  "pinyin": "Wǒ shàng ge yuè kāishǐ zài yì jiā gōngsī gōngzuò. Gōngsī lí wǒ jiā bù yuǎn, zuò dìtiě zhǐ yào èrshí fēnzhōng. Wǒ de gōngzuò shì xiě bàogào, yǒu shíhou hái yào kāi huì. Tóngshìmen dōu hěn yǒuhǎo, chángcháng bāngzhù wǒ. Suīrán gōngzuò yǒudiǎnr máng, dànshì wǒ xué dào le hěn duō dōngxi.",
  "vi": "Tháng trước tôi bắt đầu làm việc ở một công ty. Công ty không xa nhà tôi, đi tàu điện ngầm chỉ mất 20 phút. Công việc của tôi là viết báo cáo, thỉnh thoảng còn phải họp. Các đồng nghiệp đều rất thân thiện, thường giúp đỡ tôi. Tuy công việc hơi bận nhưng tôi đã học được rất nhiều thứ.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); đoạn văn và câu hỏi tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "questions": [
   {
    "q": "Bắt đầu đi làm từ khi nào?",
    "o": [
     "Tháng này",
     "Tháng trước",
     "Năm ngoái",
     "Tuần trước"
    ],
    "a": 1,
    "why": "上个月开始…工作: tháng trước bắt đầu làm việc."
   },
   {
    "q": "Đi làm bằng tàu điện ngầm mất bao lâu?",
    "o": [
     "10 phút",
     "20 phút",
     "30 phút",
     "40 phút"
    ],
    "a": 1,
    "why": "坐地铁只要二十分钟: chỉ mất 20 phút."
   },
   {
    "q": "Công việc chính là gì?",
    "o": [
     "Viết báo cáo",
     "Bán hàng",
     "Dạy học",
     "Lái xe"
    ],
    "a": 0,
    "why": "我的工作是写报告."
   },
   {
    "q": "Đúng hay sai: Các đồng nghiệp không giúp đỡ tôi.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bài viết: 同事们…常常帮助我 — thường giúp đỡ tôi."
   },
   {
    "q": "Điền vào chỗ trống: 虽然工作有点儿忙，但是我___了很多东西。",
    "o": [
     "学到",
     "忘记",
     "买到",
     "看到"
    ],
    "a": 0,
    "why": "但是我学到了很多东西: tôi đã học được rất nhiều thứ."
   }
  ]
 },
 {
  "id": "dichoi",
  "stage": 3,
  "title": "Cuối tuần đi công viên",
  "topic": "Đi chơi",
  "text": "星期六早上，天气晴朗，我们一家人去公园玩。公园里有很多花，还有一个大湖。爸爸妈妈在湖边散步，我和弟弟在草地上放风筝。中午我们在公园外面的小饭馆吃饭。大家都玩得很开心，下午四点才回家。",
  "pinyin": "Xīngqīliù zǎoshang, tiānqì qínglǎng, wǒmen yì jiā rén qù gōngyuán wán. Gōngyuán lǐ yǒu hěn duō huā, hái yǒu yí ge dà hú. Bàba māma zài hú biān sànbù, wǒ hé dìdi zài cǎodì shang fàng fēngzheng. Zhōngwǔ wǒmen zài gōngyuán wàimiàn de xiǎo fànguǎn chī fàn. Dàjiā dōu wán de hěn kāixīn, xiàwǔ sì diǎn cái huí jiā.",
  "vi": "Sáng thứ bảy, trời nắng đẹp, cả nhà chúng tôi đi công viên chơi. Trong công viên có nhiều hoa, còn có một cái hồ lớn. Bố mẹ đi dạo bên hồ, tôi và em trai thả diều trên bãi cỏ. Trưa chúng tôi ăn cơm ở quán nhỏ ngoài công viên. Mọi người đều chơi rất vui, 4 giờ chiều mới về nhà.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); đoạn văn và câu hỏi tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "questions": [
   {
    "q": "Cả nhà đi đâu chơi?",
    "o": [
     "Công viên",
     "Bãi biển",
     "Rạp phim",
     "Thư viện"
    ],
    "a": 0,
    "why": "我们一家人去公园玩."
   },
   {
    "q": "Bố mẹ làm gì ở công viên?",
    "o": [
     "Đi dạo bên hồ",
     "Thả diều",
     "Ăn cơm",
     "Chụp ảnh"
    ],
    "a": 0,
    "why": "爸爸妈妈在湖边散步."
   },
   {
    "q": "Tôi và em trai làm gì?",
    "o": [
     "Thả diều trên bãi cỏ",
     "Đi dạo bên hồ",
     "Bơi",
     "Đọc sách"
    ],
    "a": 0,
    "why": "我和弟弟在草地上放风筝."
   },
   {
    "q": "Ăn trưa ở đâu?",
    "o": [
     "Quán nhỏ ngoài công viên",
     "Trong nhà",
     "Bên hồ",
     "Ở trường"
    ],
    "a": 0,
    "why": "在公园外面的小饭馆吃饭."
   },
   {
    "q": "Đúng hay sai: Mọi người chơi không vui.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bài viết: 大家都玩得很开心 — mọi người đều chơi rất vui."
   }
  ]
 },
 {
  "id": "suckhoe",
  "stage": 3,
  "title": "Bị cảm",
  "topic": "Sức khỏe",
  "text": "昨天我觉得头疼，还有点儿发烧，就去医院看医生了。医生说我感冒了，要多喝水，好好休息。妈妈给我做了热汤，还买了药。我吃了药，睡了一觉，今天感觉好多了。以后天气冷的时候，我一定多穿衣服。",
  "pinyin": "Zuótiān wǒ juéde tóu téng, hái yǒudiǎnr fāshāo, jiù qù yīyuàn kàn yīshēng le. Yīshēng shuō wǒ gǎnmào le, yào duō hē shuǐ, hǎohāo xiūxi. Māma gěi wǒ zuò le rè tāng, hái mǎi le yào. Wǒ chī le yào, shuì le yí jiào, jīntiān gǎnjué hǎo duō le. Yǐhòu tiānqì lěng de shíhou, wǒ yídìng duō chuān yīfu.",
  "vi": "Hôm qua tôi thấy đau đầu, còn hơi sốt, nên đã đi bệnh viện khám bác sĩ. Bác sĩ nói tôi bị cảm, phải uống nhiều nước, nghỉ ngơi cho tốt. Mẹ nấu canh nóng cho tôi, còn mua thuốc. Tôi uống thuốc, ngủ một giấc, hôm nay cảm thấy khá hơn nhiều. Sau này khi trời lạnh, tôi nhất định mặc nhiều áo hơn.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); đoạn văn và câu hỏi tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "questions": [
   {
    "q": "Hôm qua người kể bị sao?",
    "o": [
     "Đau đầu và hơi sốt",
     "Đau bụng",
     "Đau chân",
     "Mất ngủ"
    ],
    "a": 0,
    "why": "觉得头疼，还有点儿发烧: đau đầu và hơi sốt."
   },
   {
    "q": "Bác sĩ dặn gì?",
    "o": [
     "Uống nhiều nước và nghỉ ngơi tốt",
     "Không uống nước",
     "Đi làm ngay",
     "Ăn đồ lạnh"
    ],
    "a": 0,
    "why": "要多喝水，好好休息."
   },
   {
    "q": "Mẹ đã làm gì?",
    "o": [
     "Nấu canh nóng và mua thuốc",
     "Đưa đi công viên",
     "Mua quần áo",
     "Nấu cơm nguội"
    ],
    "a": 0,
    "why": "妈妈给我做了热汤，还买了药."
   },
   {
    "q": "Hôm nay cảm thấy thế nào?",
    "o": [
     "Khá hơn nhiều",
     "Nặng hơn",
     "Không đổi",
     "Mệt hơn"
    ],
    "a": 0,
    "why": "今天感觉好多了: hôm nay khá hơn nhiều."
   },
   {
    "q": "Đúng hay sai: Bác sĩ nói không cần nghỉ ngơi.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bác sĩ dặn 好好休息 — nghỉ ngơi cho tốt."
   }
  ]
 },
 {
  "id": "muasam",
  "stage": 3,
  "title": "Mua áo ở trung tâm thương mại",
  "topic": "Mua sắm",
  "text": "星期天，我和朋友去商场买衣服。我看中了一件蓝色的毛衣，穿上很舒服。可是价格有点儿贵，要三百块。售货员说可以便宜一点儿，最后两百五十块卖给我了。我还买了一条裤子，朋友买了一双鞋。我们都对今天买的东西很满意。",
  "pinyin": "Xīngqītiān, wǒ hé péngyou qù shāngchǎng mǎi yīfu. Wǒ kàn zhòng le yí jiàn lán sè de máoyī, chuān shang hěn shūfu. Kěshì jiàgé yǒudiǎnr guì, yào sān bǎi kuài. Shòuhuòyuán shuō kěyǐ piányi yìdiǎnr, zuìhòu liǎng bǎi wǔshí kuài mài gěi wǒ le. Wǒ hái mǎi le yì tiáo kùzi, péngyou mǎi le yì shuāng xié. Wǒmen dōu duì jīntiān mǎi de dōngxi hěn mǎnyì.",
  "vi": "Chủ nhật, tôi và bạn đi trung tâm thương mại mua quần áo. Tôi ưng một chiếc áo len màu xanh, mặc lên rất thoải mái. Nhưng giá hơi đắt, 300 đồng. Nhân viên bán hàng nói có thể rẻ hơn một chút, cuối cùng bán cho tôi 250 đồng. Tôi còn mua một chiếc quần, bạn tôi mua một đôi giày. Chúng tôi đều rất hài lòng với những thứ mua hôm nay.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); đoạn văn và câu hỏi tự viết, không trích nguyên văn giáo trình. Nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
  "questions": [
   {
    "q": "Người kể ưng món gì đầu tiên?",
    "o": [
     "Áo len màu xanh",
     "Áo len màu đỏ",
     "Quần",
     "Giày"
    ],
    "a": 0,
    "why": "看中了一件蓝色的毛衣: ưng áo len màu xanh."
   },
   {
    "q": "Giá ban đầu của áo len là bao nhiêu?",
    "o": [
     "250 đồng",
     "300 đồng",
     "350 đồng",
     "380 đồng"
    ],
    "a": 1,
    "why": "要三百块: 300 đồng."
   },
   {
    "q": "Cuối cùng mua với giá bao nhiêu?",
    "o": [
     "200 đồng",
     "250 đồng",
     "300 đồng",
     "350 đồng"
    ],
    "a": 1,
    "why": "最后两百五十块卖给我了: 250 đồng."
   },
   {
    "q": "Người bạn mua gì?",
    "o": [
     "Một đôi giày",
     "Một chiếc quần",
     "Một chiếc áo",
     "Một chiếc mũ"
    ],
    "a": 0,
    "why": "朋友买了一双鞋."
   },
   {
    "q": "Đúng hay sai: Mọi người không hài lòng với những thứ đã mua.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bài viết: 我们都…很满意 — đều rất hài lòng."
   }
  ]
 }
];
var ZH_LISTENING = [
 {
  "id": "hen",
  "stage": 2,
  "title": "Hẹn nhau xem phim",
  "topic": "Hẹn gặp",
  "lines": [
   {
    "sp": "A",
    "han": "星期六你有时间吗？",
    "py": "Xīngqīliù nǐ yǒu shíjiān ma?",
    "vi": "Thứ bảy bạn có thời gian không?"
   },
   {
    "sp": "B",
    "han": "有啊，怎么了？",
    "py": "Yǒu a, zěnme le?",
    "vi": "Có, sao thế?"
   },
   {
    "sp": "A",
    "han": "我们一起去看电影吧。",
    "py": "Wǒmen yìqǐ qù kàn diànyǐng ba.",
    "vi": "Chúng mình cùng đi xem phim nhé."
   },
   {
    "sp": "B",
    "han": "好啊，几点？",
    "py": "Hǎo a, jǐ diǎn?",
    "vi": "Được, mấy giờ?"
   },
   {
    "sp": "A",
    "han": "下午三点，在学校门口见。",
    "py": "Xiàwǔ sān diǎn, zài xuéxiào ménkǒu jiàn.",
    "vi": "3 giờ chiều, gặp ở cổng trường."
   },
   {
    "sp": "B",
    "han": "好，不见不散。",
    "py": "Hǎo, bú jiàn bú sàn.",
    "vi": "Được, không gặp không về."
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "Hai người hẹn làm gì?",
    "o": [
     "Xem phim",
     "Đá bóng",
     "Ăn cơm",
     "Đọc sách"
    ],
    "a": 0,
    "why": "我们一起去看电影吧: cùng đi xem phim."
   },
   {
    "q": "Hẹn lúc mấy giờ?",
    "o": [
     "1 giờ chiều",
     "2 giờ chiều",
     "3 giờ chiều",
     "4 giờ chiều"
    ],
    "a": 2,
    "why": "下午三点: 3 giờ chiều."
   },
   {
    "q": "Hẹn gặp ở đâu?",
    "o": [
     "Cổng trường",
     "Cổng công viên",
     "Quán ăn",
     "Nhà của A"
    ],
    "a": 0,
    "why": "在学校门口见: gặp ở cổng trường."
   },
   {
    "q": "Đúng hay sai: Hai người hẹn nhau vào thứ bảy.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 0,
    "why": "星期六你有时间吗: hỏi về thứ bảy."
   }
  ]
 },
 {
  "id": "nhao",
  "stage": 2,
  "title": "Nhà mới gần trường",
  "topic": "Nhà ở",
  "lines": [
   {
    "sp": "A",
    "han": "你的新家怎么样？",
    "py": "Nǐ de xīn jiā zěnmeyàng?",
    "vi": "Nhà mới của bạn thế nào?"
   },
   {
    "sp": "B",
    "han": "很好，离学校很近。",
    "py": "Hěn hǎo, lí xuéxiào hěn jìn.",
    "vi": "Rất tốt, gần trường."
   },
   {
    "sp": "A",
    "han": "房租贵吗？",
    "py": "Fángzū guì ma?",
    "vi": "Tiền thuê đắt không?"
   },
   {
    "sp": "B",
    "han": "不贵，一个月两千块。",
    "py": "Bú guì, yí ge yuè liǎng qiān kuài.",
    "vi": "Không đắt, một tháng 2000 đồng."
   },
   {
    "sp": "A",
    "han": "真不错，有空我去看看。",
    "py": "Zhēn búcuò, yǒu kòng wǒ qù kànkan.",
    "vi": "Thật tốt, rảnh tôi qua xem."
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "Nhà mới gần đâu?",
    "o": [
     "Trường học",
     "Công ty",
     "Bệnh viện",
     "Chợ"
    ],
    "a": 0,
    "why": "离学校很近: gần trường."
   },
   {
    "q": "Tiền thuê một tháng bao nhiêu?",
    "o": [
     "1000 đồng",
     "1500 đồng",
     "2000 đồng",
     "2500 đồng"
    ],
    "a": 2,
    "why": "一个月两千块."
   },
   {
    "q": "Đúng hay sai: Tiền thuê nhà rất đắt.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "B nói 不贵: không đắt."
   },
   {
    "q": "A muốn làm gì khi rảnh?",
    "o": [
     "Qua xem nhà mới",
     "Thuê nhà chung",
     "Chuyển nhà",
     "Mua nhà"
    ],
    "a": 0,
    "why": "有空我去看看: rảnh tôi qua xem."
   }
  ]
 },
 {
  "id": "hoibai",
  "stage": 2,
  "title": "Hỏi bài toán",
  "topic": "Trường học",
  "lines": [
   {
    "sp": "A",
    "han": "这道数学题你会做吗？",
    "py": "Zhè dào shùxué tí nǐ huì zuò ma?",
    "vi": "Bài toán này bạn biết làm không?"
   },
   {
    "sp": "B",
    "han": "我也不会，我们问老师吧。",
    "py": "Wǒ yě bú huì, wǒmen wèn lǎoshī ba.",
    "vi": "Tôi cũng không biết, chúng mình hỏi cô giáo nhé."
   },
   {
    "sp": "A",
    "han": "老师现在在办公室吗？",
    "py": "Lǎoshī xiànzài zài bàngōngshì ma?",
    "vi": "Cô giáo bây giờ ở văn phòng không?"
   },
   {
    "sp": "B",
    "han": "在，下课后我们一起去。",
    "py": "Zài, xià kè hòu wǒmen yìqǐ qù.",
    "vi": "Có, sau giờ học chúng mình cùng đi."
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "Hai người hỏi về bài gì?",
    "o": [
     "Bài toán",
     "Bài văn",
     "Bài tiếng Anh",
     "Bài vẽ"
    ],
    "a": 0,
    "why": "这道数学题: bài toán."
   },
   {
    "q": "Cả hai có biết làm bài không?",
    "o": [
     "Đều không biết",
     "Đều biết",
     "Chỉ A biết",
     "Chỉ B biết"
    ],
    "a": 0,
    "why": "B nói 我也不会: tôi cũng không biết."
   },
   {
    "q": "Hai người định hỏi ai?",
    "o": [
     "Cô giáo",
     "Bạn khác",
     "Bố mẹ",
     "Anh trai"
    ],
    "a": 0,
    "why": "我们问老师吧: hỏi cô giáo."
   },
   {
    "q": "Khi nào hai người đi hỏi?",
    "o": [
     "Sau giờ học",
     "Trước giờ học",
     "Giờ ra chơi",
     "Ngày mai"
    ],
    "a": 0,
    "why": "下课后我们一起去."
   }
  ]
 },
 {
  "id": "anuong",
  "stage": 2,
  "title": "Đi ăn mì",
  "topic": "Ăn uống",
  "lines": [
   {
    "sp": "A",
    "han": "你饿了吗？我们去吃饭吧。",
    "py": "Nǐ è le ma? Wǒmen qù chī fàn ba.",
    "vi": "Bạn đói chưa? Chúng mình đi ăn nhé."
   },
   {
    "sp": "B",
    "han": "好啊，你想吃什么？",
    "py": "Hǎo a, nǐ xiǎng chī shénme?",
    "vi": "Được, bạn muốn ăn gì?"
   },
   {
    "sp": "A",
    "han": "我想吃面条，你呢？",
    "py": "Wǒ xiǎng chī miàntiáo, nǐ ne?",
    "vi": "Tôi muốn ăn mì, còn bạn?"
   },
   {
    "sp": "B",
    "han": "我也想吃面条，再要两个菜吧。",
    "py": "Wǒ yě xiǎng chī miàntiáo, zài yào liǎng ge cài ba.",
    "vi": "Tôi cũng muốn ăn mì, gọi thêm 2 món nữa nhé."
   },
   {
    "sp": "A",
    "han": "好，老板，两碗面条，两个菜！",
    "py": "Hǎo, lǎobǎn, liǎng wǎn miàntiáo, liǎng ge cài!",
    "vi": "Được, chủ quán, 2 bát mì, 2 món!"
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "Hai người muốn ăn gì?",
    "o": [
     "Mì",
     "Cơm",
     "Bánh bao",
     "Phở"
    ],
    "a": 0,
    "why": "我想吃面条: muốn ăn mì."
   },
   {
    "q": "Gọi mấy bát mì?",
    "o": [
     "1 bát",
     "2 bát",
     "3 bát",
     "4 bát"
    ],
    "a": 1,
    "why": "两碗面条: 2 bát mì."
   },
   {
    "q": "Gọi thêm mấy món?",
    "o": [
     "1 món",
     "2 món",
     "3 món",
     "Không gọi thêm"
    ],
    "a": 1,
    "why": "再要两个菜: thêm 2 món."
   },
   {
    "q": "Đúng hay sai: Hai người muốn ăn cơm.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Cả hai đều nói 想吃面条: muốn ăn mì."
   }
  ]
 },
 {
  "id": "thoitietnghe",
  "stage": 2,
  "title": "Ngày mai mưa",
  "topic": "Thời tiết",
  "lines": [
   {
    "sp": "A",
    "han": "明天天气怎么样？",
    "py": "Míngtiān tiānqì zěnmeyàng?",
    "vi": "Ngày mai thời tiết thế nào?"
   },
   {
    "sp": "B",
    "han": "天气预报说会下雨，还会降温。",
    "py": "Tiānqì yùbào shuō huì xià yǔ, hái huì jiàngwēn.",
    "vi": "Dự báo nói sẽ mưa, còn hạ nhiệt."
   },
   {
    "sp": "A",
    "han": "那我得多穿一件衣服，还要带伞。",
    "py": "Nà wǒ děi duō chuān yí jiàn yīfu, hái yào dài sǎn.",
    "vi": "Vậy tôi phải mặc thêm một áo, còn mang ô."
   },
   {
    "sp": "B",
    "han": "对，别感冒了。",
    "py": "Duì, bié gǎnmào le.",
    "vi": "Đúng, đừng để bị cảm."
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "Ngày mai thời tiết thế nào?",
    "o": [
     "Mưa và hạ nhiệt",
     "Nắng đẹp",
     "Có tuyết",
     "Gió lớn"
    ],
    "a": 0,
    "why": "会下雨，还会降温: sẽ mưa, còn hạ nhiệt."
   },
   {
    "q": "A cần mang gì?",
    "o": [
     "Ô",
     "Kính râm",
     "Mũ",
     "Găng tay"
    ],
    "a": 0,
    "why": "还要带伞: còn mang ô."
   },
   {
    "q": "A cần mặc thêm gì?",
    "o": [
     "Một chiếc áo",
     "Một chiếc quần",
     "Một đôi giày",
     "Một chiếc khăn"
    ],
    "a": 0,
    "why": "多穿一件衣服: mặc thêm một áo."
   },
   {
    "q": "Đúng hay sai: Ngày mai trời nắng đẹp.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Dự báo nói 会下雨: sẽ mưa."
   }
  ]
 },
 {
  "id": "xinnghi",
  "stage": 3,
  "title": "Xin nghỉ một ngày",
  "topic": "Công việc",
  "lines": [
   {
    "sp": "A",
    "han": "王经理，我明天想请一天假。",
    "py": "Wáng jīnglǐ, wǒ míngtiān xiǎng qǐng yì tiān jià.",
    "vi": "Giám đốc Vương, ngày mai tôi muốn xin nghỉ một ngày."
   },
   {
    "sp": "B",
    "han": "有什么事吗？",
    "py": "Yǒu shénme shì ma?",
    "vi": "Có việc gì không?"
   },
   {
    "sp": "A",
    "han": "我妈妈生病了，我要带她去医院。",
    "py": "Wǒ māma shēng bìng le, wǒ yào dài tā qù yīyuàn.",
    "vi": "Mẹ tôi ốm rồi, tôi phải đưa bà đi bệnh viện."
   },
   {
    "sp": "B",
    "han": "好吧，你去吧，工作我帮你安排。",
    "py": "Hǎo ba, nǐ qù ba, gōngzuò wǒ bāng nǐ ānpái.",
    "vi": "Được, bạn đi đi, công việc tôi sắp xếp giúp bạn."
   },
   {
    "sp": "A",
    "han": "谢谢经理！",
    "py": "Xièxie jīnglǐ!",
    "vi": "Cảm ơn giám đốc!"
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "A xin nghỉ mấy ngày?",
    "o": [
     "Nửa ngày",
     "1 ngày",
     "2 ngày",
     "3 ngày"
    ],
    "a": 1,
    "why": "请一天假: xin nghỉ một ngày."
   },
   {
    "q": "A xin nghỉ vì sao?",
    "o": [
     "Mẹ ốm, đưa mẹ đi bệnh viện",
     "Mình ốm",
     "Đi du lịch",
     "Chuyển nhà"
    ],
    "a": 0,
    "why": "我妈妈生病了，我要带她去医院."
   },
   {
    "q": "Ai sắp xếp công việc giúp A?",
    "o": [
     "Giám đốc Vương",
     "Đồng nghiệp",
     "Mẹ của A",
     "Không ai"
    ],
    "a": 0,
    "why": "工作我帮你安排: giám đốc sắp xếp giúp."
   },
   {
    "q": "Đúng hay sai: Giám đốc không đồng ý cho nghỉ.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Giám đốc nói 好吧，你去吧: được, bạn đi đi."
   }
  ]
 },
 {
  "id": "dulich",
  "stage": 3,
  "title": "Đi Thượng Hải chơi",
  "topic": "Đi chơi",
  "lines": [
   {
    "sp": "A",
    "han": "国庆节你有什么打算？",
    "py": "Guóqìng Jié nǐ yǒu shénme dǎsuàn?",
    "vi": "Lễ Quốc khánh bạn có dự định gì?"
   },
   {
    "sp": "B",
    "han": "我打算和家人去上海玩三天。",
    "py": "Wǒ dǎsuàn hé jiārén qù Shànghǎi wán sān tiān.",
    "vi": "Tôi định cùng gia đình đi Thượng Hải chơi 3 ngày."
   },
   {
    "sp": "A",
    "han": "上海有什么好玩的？",
    "py": "Shànghǎi yǒu shénme hǎowán de?",
    "vi": "Thượng Hải có gì vui?"
   },
   {
    "sp": "B",
    "han": "有外滩，还有很多好吃的。",
    "py": "Yǒu Wàitān, hái yǒu hěn duō hǎochī de.",
    "vi": "Có Bến Thượng Hải, còn nhiều món ngon."
   },
   {
    "sp": "A",
    "han": "听起来不错，祝你们玩得开心！",
    "py": "Tīng qǐlai búcuò, zhù nǐmen wán de kāixīn!",
    "vi": "Nghe hay đấy, chúc các bạn chơi vui!"
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "B định đi đâu?",
    "o": [
     "Thượng Hải",
     "Bắc Kinh",
     "Quảng Châu",
     "Hà Nội"
    ],
    "a": 0,
    "why": "去上海玩: đi Thượng Hải chơi."
   },
   {
    "q": "B đi với ai?",
    "o": [
     "Gia đình",
     "Bạn bè",
     "Một mình",
     "Đồng nghiệp"
    ],
    "a": 0,
    "why": "和家人去: cùng gia đình đi."
   },
   {
    "q": "Đi chơi mấy ngày?",
    "o": [
     "2 ngày",
     "3 ngày",
     "4 ngày",
     "5 ngày"
    ],
    "a": 1,
    "why": "玩三天: chơi 3 ngày."
   },
   {
    "q": "Thượng Hải có gì?",
    "o": [
     "Bến Thượng Hải và nhiều món ngon",
     "Vạn Lý Trường Thành",
     "Tử Cấm Thành",
     "Biển"
    ],
    "a": 0,
    "why": "有外滩，还有很多好吃的."
   }
  ]
 },
 {
  "id": "khambenh",
  "stage": 3,
  "title": "Đi khám vì đau đầu",
  "topic": "Sức khỏe",
  "lines": [
   {
    "sp": "A",
    "han": "医生，我最近总是头疼，睡不好。",
    "py": "Yīshēng, wǒ zuìjìn zǒngshì tóu téng, shuì bù hǎo.",
    "vi": "Bác sĩ, dạo này tôi luôn đau đầu, ngủ không ngon."
   },
   {
    "sp": "B",
    "han": "你每天几点睡觉？",
    "py": "Nǐ měitiān jǐ diǎn shuìjiào?",
    "vi": "Mỗi ngày bạn ngủ lúc mấy giờ?"
   },
   {
    "sp": "A",
    "han": "常常十二点以后才睡。",
    "py": "Chángcháng shí'èr diǎn yǐhòu cái shuì.",
    "vi": "Thường sau 12 giờ mới ngủ."
   },
   {
    "sp": "B",
    "han": "你要早点儿睡，少看手机，多运动。",
    "py": "Nǐ yào zǎo diǎnr shuì, shǎo kàn shǒujī, duō yùndòng.",
    "vi": "Bạn phải ngủ sớm hơn, ít xem điện thoại, vận động nhiều."
   },
   {
    "sp": "A",
    "han": "好的，我一定注意。",
    "py": "Hǎo de, wǒ yídìng zhùyì.",
    "vi": "Vâng, tôi nhất định chú ý."
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "Bệnh nhân bị sao?",
    "o": [
     "Đau đầu và ngủ không ngon",
     "Đau bụng",
     "Sốt cao",
     "Ho nhiều"
    ],
    "a": 0,
    "why": "总是头疼，睡不好."
   },
   {
    "q": "Bệnh nhân thường ngủ lúc nào?",
    "o": [
     "Sau 12 giờ",
     "Trước 10 giờ",
     "Lúc 9 giờ",
     "Lúc 11 giờ"
    ],
    "a": 0,
    "why": "常常十二点以后才睡."
   },
   {
    "q": "Bác sĩ dặn gì?",
    "o": [
     "Ngủ sớm, ít xem điện thoại, vận động nhiều",
     "Thức khuya hơn",
     "Uống thuốc ngủ",
     "Nằm cả ngày"
    ],
    "a": 0,
    "why": "要早点儿睡，少看手机，多运动."
   },
   {
    "q": "Đúng hay sai: Bác sĩ dặn thức khuya hơn.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Bác sĩ dặn 早点儿睡: ngủ sớm hơn."
   }
  ]
 },
 {
  "id": "maccamua",
  "stage": 3,
  "title": "Mặc cả mua áo",
  "topic": "Mua sắm",
  "lines": [
   {
    "sp": "A",
    "han": "这件衣服多少钱？",
    "py": "Zhè jiàn yīfu duōshao qián?",
    "vi": "Chiếc áo này bao nhiêu tiền?"
   },
   {
    "sp": "B",
    "han": "三百八十块。",
    "py": "Sān bǎi bāshí kuài.",
    "vi": "380 đồng."
   },
   {
    "sp": "A",
    "han": "太贵了，能便宜一点儿吗？",
    "py": "Tài guì le, néng piányi yìdiǎnr ma?",
    "vi": "Đắt quá, có thể rẻ hơn chút không?"
   },
   {
    "sp": "B",
    "han": "最低三百块，不能再少了。",
    "py": "Zuì dī sān bǎi kuài, bù néng zài shǎo le.",
    "vi": "Thấp nhất 300 đồng, không thể ít hơn nữa."
   },
   {
    "sp": "A",
    "han": "好吧，我买了。",
    "py": "Hǎo ba, wǒ mǎi le.",
    "vi": "Được, tôi mua."
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "Giá ban đầu là bao nhiêu?",
    "o": [
     "300 đồng",
     "350 đồng",
     "380 đồng",
     "400 đồng"
    ],
    "a": 2,
    "why": "三百八十块: 380 đồng."
   },
   {
    "q": "Giá cuối cùng là bao nhiêu?",
    "o": [
     "250 đồng",
     "280 đồng",
     "300 đồng",
     "380 đồng"
    ],
    "a": 2,
    "why": "最低三百块: thấp nhất 300 đồng."
   },
   {
    "q": "Khách chê áo thế nào?",
    "o": [
     "Đắt quá",
     "Xấu quá",
     "Cũ quá",
     "Nhỏ quá"
    ],
    "a": 0,
    "why": "太贵了: đắt quá."
   },
   {
    "q": "Đúng hay sai: Cuối cùng khách không mua áo.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "Khách nói 好吧，我买了: được, tôi mua."
   }
  ]
 },
 {
  "id": "chuyennha",
  "stage": 3,
  "title": "Nhờ giúp chuyển nhà",
  "topic": "Bạn bè",
  "lines": [
   {
    "sp": "A",
    "han": "星期天你有空吗？我想请你帮忙。",
    "py": "Xīngqītiān nǐ yǒu kòng ma? Wǒ xiǎng qǐng nǐ bāngmáng.",
    "vi": "Chủ nhật bạn rảnh không? Tôi muốn nhờ bạn giúp."
   },
   {
    "sp": "B",
    "han": "当然有空，帮什么忙？",
    "py": "Dāngrán yǒu kòng, bāng shénme máng?",
    "vi": "Đương nhiên rảnh, giúp việc gì?"
   },
   {
    "sp": "A",
    "han": "我要搬家，东西很多，你能来帮我搬吗？",
    "py": "Wǒ yào bān jiā, dōngxi hěn duō, nǐ néng lái bāng wǒ bān ma?",
    "vi": "Tôi sắp chuyển nhà, đồ rất nhiều, bạn đến giúp tôi chuyển được không?"
   },
   {
    "sp": "B",
    "han": "没问题，星期天早上九点我去你家。",
    "py": "Méi wèntí, xīngqītiān zǎoshang jiǔ diǎn wǒ qù nǐ jiā.",
    "vi": "Không vấn đề, sáng chủ nhật 9 giờ tôi đến nhà bạn."
   },
   {
    "sp": "A",
    "han": "太谢谢你了！",
    "py": "Tài xièxie nǐ le!",
    "vi": "Cảm ơn bạn nhiều!"
   }
  ],
  "note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại và câu hỏi tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
  "questions": [
   {
    "q": "A nhờ giúp việc gì?",
    "o": [
     "Chuyển nhà",
     "Dọn phòng",
     "Sửa xe",
     "Nấu ăn"
    ],
    "a": 0,
    "why": "我要搬家: tôi sắp chuyển nhà."
   },
   {
    "q": "B đến giúp lúc nào?",
    "o": [
     "Sáng chủ nhật 9 giờ",
     "Chiều chủ nhật 9 giờ",
     "Sáng thứ bảy 9 giờ",
     "Tối chủ nhật"
    ],
    "a": 0,
    "why": "星期天早上九点我去你家."
   },
   {
    "q": "B đến giúp ở đâu?",
    "o": [
     "Nhà của A",
     "Nhà của B",
     "Công ty",
     "Trường học"
    ],
    "a": 0,
    "why": "我去你家: tôi đến nhà bạn."
   },
   {
    "q": "Đúng hay sai: B từ chối giúp.",
    "o": [
     "Đúng",
     "Sai"
    ],
    "a": 1,
    "why": "B nói 没问题: không vấn đề."
   }
  ]
 }
];
// Dot 2b (26/10/2026): anh xa nay chay theo nhan hsk nen khong can doi logic —
// them 4 bo hsk "HSK2" la du: chang 2 -> cac chi so bo HSK2 moi, chang 3 ->
// cac chi so bo HSK3 moi (kiem chung bang test_zh_sets_hsk23.js).
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
// ---------- DOT 2d (26/10/2026): NOI / NHAP VAI / VIET TRACK TRUNG ----------
// Tu soan 100% theo chu de doi song cua Giao trinh chuan HSK (he 6 cap cu),
// trinh do HSK2-HSK3; khong trich nguyen van giao trinh hay trang khac.
// Nghe/noi dung giong doc may zh-CN (zhSpeak), khong phai audio thu san.
// AI cham tieng Trung DANG CHO nang cap (parent bao pronounce v5): moi cho
// can cham AI deu ghi ro cho nang cap, khong tinh dat cung khong tinh
// chua dat, khong noi ham cham tieng Anh vao. Tien trinh dung lai zhDone
// san co (khoa zhSpeak:/zhRole:/zhWrite:) + zhAwardOnce, dong bo theo
// dung mau row rb zhDone, khong them khoa state moi.
var ZH_SPEAK = [
 {
  "id": "chaohoi", "stage": 2, "title": "Chào hỏi và làm quen", "topic": "Chào hỏi",
  "hook": "“你好！你叫什么名字？” — chào hỏi và hỏi tên là câu mở đầu quen thuộc nhất.",
  "lines": [
   { "sp": "A", "han": "你好！你叫什么名字？", "py": "Nǐ hǎo! Nǐ jiào shénme míngzi?", "vi": "Chào bạn! Bạn tên là gì?" },
   { "sp": "B", "han": "你好！我叫小红。你呢？", "py": "Nǐ hǎo! Wǒ jiào Xiǎo Hóng. Nǐ ne?", "vi": "Chào bạn! Tôi tên là Tiểu Hồng. Còn bạn?" },
   { "sp": "A", "han": "我叫大明，很高兴认识你。", "py": "Wǒ jiào Dà Míng, hěn gāoxìng rènshi nǐ.", "vi": "Tôi tên là Đại Minh, rất vui được quen bạn." },
   { "sp": "B", "han": "我也很高兴认识你。", "py": "Wǒ yě hěn gāoxìng rènshi nǐ.", "vi": "Tôi cũng rất vui được quen bạn." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "giadinh", "stage": 2, "title": "Nói về gia đình", "topic": "Gia đình",
  "hook": "“你家有几口人？” — hỏi nhà có mấy người là cách mở chuyện về gia đình.",
  "lines": [
   { "sp": "A", "han": "你家有几口人？", "py": "Nǐ jiā yǒu jǐ kǒu rén?", "vi": "Nhà bạn có mấy người?" },
   { "sp": "B", "han": "我家有四口人：爸爸、妈妈、我和妹妹。", "py": "Wǒ jiā yǒu sì kǒu rén: bàba, māma, wǒ hé mèimei.", "vi": "Nhà tôi có 4 người: bố, mẹ, tôi và em gái." },
   { "sp": "A", "han": "你妹妹今年多大了？", "py": "Nǐ mèimei jīnnián duō dà le?", "vi": "Em gái bạn năm nay mấy tuổi?" },
   { "sp": "B", "han": "她今年十岁，上小学三年级。", "py": "Tā jīnnián shí suì, shàng xiǎoxué sān niánjí.", "vi": "Em ấy năm nay 10 tuổi, học lớp 3 tiểu học." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "truonghoc", "stage": 2, "title": "Ở trường học", "topic": "Trường học",
  "hook": "“你是哪个班的？” — hỏi bạn học lớp nào là câu làm quen ở trường.",
  "lines": [
   { "sp": "A", "han": "你是哪个班的？", "py": "Nǐ shì nǎ ge bān de?", "vi": "Bạn học lớp nào?" },
   { "sp": "B", "han": "我是二班的，你呢？", "py": "Wǒ shì èr bān de, nǐ ne?", "vi": "Tôi học lớp 2, còn bạn?" },
   { "sp": "A", "han": "我是一班的。你们班有多少学生？", "py": "Wǒ shì yì bān de. Nǐmen bān yǒu duōshao xuésheng?", "vi": "Tôi học lớp 1. Lớp bạn có bao nhiêu học sinh?" },
   { "sp": "B", "han": "我们班有三十个学生。", "py": "Wǒmen bān yǒu sānshí ge xuésheng.", "vi": "Lớp chúng tôi có 30 học sinh." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "muasam", "stage": 2, "title": "Mua quần áo", "topic": "Mua sắm",
  "hook": "“这件衣服多少钱？” — hỏi giá là câu đầu tiên khi đi mua đồ.",
  "lines": [
   { "sp": "A", "han": "这件衣服多少钱？", "py": "Zhè jiàn yīfu duōshao qián?", "vi": "Cái áo này bao nhiêu tiền?" },
   { "sp": "B", "han": "一百五十块。", "py": "Yì bǎi wǔshí kuài.", "vi": "150 tệ." },
   { "sp": "A", "han": "有点儿贵，能便宜一点儿吗？", "py": "Yǒu diǎnr guì, néng piányi yì diǎnr ma?", "vi": "Hơi đắt, có thể rẻ hơn một chút không?" },
   { "sp": "B", "han": "好吧，一百二十块，你要吗？", "py": "Hǎo ba, yì bǎi èrshí kuài, nǐ yào ma?", "vi": "Được rồi, 120 tệ, bạn có lấy không?" },
   { "sp": "A", "han": "好，我要了。", "py": "Hǎo, wǒ yào le.", "vi": "Được, tôi lấy." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "anuong", "stage": 2, "title": "Gọi món ăn", "topic": "Ăn uống",
  "hook": "“你想吃什么？” — hỏi muốn ăn gì là câu mở đầu khi đi ăn cùng nhau.",
  "lines": [
   { "sp": "A", "han": "你想吃什么？", "py": "Nǐ xiǎng chī shénme?", "vi": "Bạn muốn ăn gì?" },
   { "sp": "B", "han": "我想吃面条，你呢？", "py": "Wǒ xiǎng chī miàntiáo, nǐ ne?", "vi": "Tôi muốn ăn mì, còn bạn?" },
   { "sp": "A", "han": "我想吃米饭和鱼。", "py": "Wǒ xiǎng chī mǐfàn hé yú.", "vi": "Tôi muốn ăn cơm và cá." },
   { "sp": "B", "han": "好，我们再要两杯水。", "py": "Hǎo, wǒmen zài yào liǎng bēi shuǐ.", "vi": "Được, chúng mình gọi thêm hai cốc nước." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "thoitiet", "stage": 2, "title": "Nói về thời tiết", "topic": "Thời tiết",
  "hook": "“今天天气怎么样？” — hỏi thời tiết hôm nay thế nào là câu chuyện phiếm dễ nhất.",
  "lines": [
   { "sp": "A", "han": "今天天气怎么样？", "py": "Jīntiān tiānqì zěnmeyàng?", "vi": "Hôm nay thời tiết thế nào?" },
   { "sp": "B", "han": "今天很冷，还下雪了。", "py": "Jīntiān hěn lěng, hái xià xuě le.", "vi": "Hôm nay rất lạnh, còn có tuyết nữa." },
   { "sp": "A", "han": "明天会更冷吗？", "py": "Míngtiān huì gèng lěng ma?", "vi": "Ngày mai có lạnh hơn không?" },
   { "sp": "B", "han": "天气预报说明天会晴天，但是风很大。", "py": "Tiānqì yùbào shuō míngtiān huì qíngtiān, dànshì fēng hěn dà.", "vi": "Dự báo nói mai trời nắng, nhưng gió rất to." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "dilam", "stage": 3, "title": "Nói về công việc", "topic": "Đi làm",
  "hook": "“你在哪儿工作？” — hỏi làm việc ở đâu là câu làm quen của người đi làm.",
  "lines": [
   { "sp": "A", "han": "你在哪儿工作？", "py": "Nǐ zài nǎr gōngzuò?", "vi": "Bạn làm việc ở đâu?" },
   { "sp": "B", "han": "我在一家公司工作，你呢？", "py": "Wǒ zài yì jiā gōngsī gōngzuò, nǐ ne?", "vi": "Tôi làm ở một công ty, còn bạn?" },
   { "sp": "A", "han": "我在学校工作，我是老师。", "py": "Wǒ zài xuéxiào gōngzuò, wǒ shì lǎoshī.", "vi": "Tôi làm ở trường, tôi là giáo viên." },
   { "sp": "B", "han": "你的工作忙吗？", "py": "Nǐ de gōngzuò máng ma?", "vi": "Công việc của bạn có bận không?" },
   { "sp": "A", "han": "有时候很忙，不过我很喜欢。", "py": "Yǒu shíhou hěn máng, búguò wǒ hěn xǐhuan.", "vi": "Có lúc rất bận, nhưng tôi rất thích." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "dilai", "stage": 3, "title": "Đi xe buýt", "topic": "Đi lại",
  "hook": "“去火车站坐几路车？” — hỏi đi ga tàu ngồi xe số mấy là câu cần nhất khi đi lại.",
  "lines": [
   { "sp": "A", "han": "请问，去火车站坐几路车？", "py": "Qǐngwèn, qù huǒchē zhàn zuò jǐ lù chē?", "vi": "Xin hỏi, đi ga tàu ngồi xe số mấy?" },
   { "sp": "B", "han": "坐三路车，在第三站下车。", "py": "Zuò sān lù chē, zài dì sān zhàn xià chē.", "vi": "Ngồi xe số 3, xuống ở trạm thứ ba." },
   { "sp": "A", "han": "要多长时间？", "py": "Yào duō cháng shíjiān?", "vi": "Mất bao lâu?" },
   { "sp": "B", "han": "大概二十分钟。", "py": "Dàgài èrshí fēnzhōng.", "vi": "Khoảng 20 phút." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "suckhoe", "stage": 3, "title": "Bị cảm", "topic": "Sức khỏe",
  "hook": "“你怎么了？看起来不太舒服。” — hỏi thăm người ốm bắt đầu bằng câu quan tâm.",
  "lines": [
   { "sp": "A", "han": "你怎么了？看起来不太舒服。", "py": "Nǐ zěnme le? Kàn qǐlai bú tài shūfu.", "vi": "Bạn sao thế? Trông không được khỏe lắm." },
   { "sp": "B", "han": "我感冒了，头有点儿疼。", "py": "Wǒ gǎnmào le, tóu yǒu diǎnr téng.", "vi": "Tôi bị cảm rồi, đầu hơi đau." },
   { "sp": "A", "han": "你吃药了吗？", "py": "Nǐ chī yào le ma?", "vi": "Bạn uống thuốc chưa?" },
   { "sp": "B", "han": "吃了，还喝了很多水。", "py": "Chī le, hái hē le hěn duō shuǐ.", "vi": "Uống rồi, còn uống rất nhiều nước." },
   { "sp": "A", "han": "那你早点儿休息吧。", "py": "Nà nǐ zǎo diǎnr xiūxi ba.", "vi": "Vậy bạn nghỉ sớm nhé." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "banbe", "stage": 3, "title": "Hẹn bạn bè", "topic": "Bạn bè",
  "hook": "“周末你有什么打算？” — hỏi cuối tuần định làm gì là cách rủ bạn đi chơi.",
  "lines": [
   { "sp": "A", "han": "周末你有什么打算？", "py": "Zhōumò nǐ yǒu shénme dǎsuan?", "vi": "Cuối tuần bạn có dự định gì?" },
   { "sp": "B", "han": "我想和朋友去公园，你去吗？", "py": "Wǒ xiǎng hé péngyou qù gōngyuán, nǐ qù ma?", "vi": "Tôi muốn cùng bạn đi công viên, bạn đi không?" },
   { "sp": "A", "han": "好啊，几点见？", "py": "Hǎo a, jǐ diǎn jiàn?", "vi": "Được, mấy giờ gặp?" },
   { "sp": "B", "han": "上午九点，在公园门口见。", "py": "Shàngwǔ jiǔ diǎn, zài gōngyuán ménkǒu jiàn.", "vi": "9 giờ sáng, gặp ở cổng công viên." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "dulich", "stage": 3, "title": "Đi du lịch", "topic": "Du lịch",
  "hook": "“假期你想去哪儿玩？” — hỏi kỳ nghỉ muốn đi chơi đâu là câu mở chuyện du lịch.",
  "lines": [
   { "sp": "A", "han": "假期你想去哪儿玩？", "py": "Jiàqī nǐ xiǎng qù nǎr wán?", "vi": "Kỳ nghỉ bạn muốn đi chơi đâu?" },
   { "sp": "B", "han": "我想去北京，看看长城。", "py": "Wǒ xiǎng qù Běijīng, kànkan Chángchéng.", "vi": "Tôi muốn đi Bắc Kinh, xem Vạn Lý Trường Thành." },
   { "sp": "A", "han": "你打算去几天？", "py": "Nǐ dǎsuan qù jǐ tiān?", "vi": "Bạn định đi mấy ngày?" },
   { "sp": "B", "han": "大概五天。", "py": "Dàgài wǔ tiān.", "vi": "Khoảng 5 ngày." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "sothich", "stage": 3, "title": "Sở thích của bạn", "topic": "Sở thích",
  "hook": "“你平时喜欢做什么？” — hỏi bình thường thích làm gì là cách tìm điểm chung.",
  "lines": [
   { "sp": "A", "han": "你平时喜欢做什么？", "py": "Nǐ píngshí xǐhuan zuò shénme?", "vi": "Bình thường bạn thích làm gì?" },
   { "sp": "B", "han": "我喜欢看书和听音乐。", "py": "Wǒ xǐhuan kàn shū hé tīng yīnyuè.", "vi": "Tôi thích đọc sách và nghe nhạc." },
   { "sp": "A", "han": "你喜欢什么音乐？", "py": "Nǐ xǐhuan shénme yīnyuè?", "vi": "Bạn thích nhạc gì?" },
   { "sp": "B", "han": "我喜欢轻音乐，听了很放松。", "py": "Wǒ xǐhuan qīng yīnyuè, tīng le hěn fàngsōng.", "vi": "Tôi thích nhạc nhẹ, nghe rất thư giãn." }
  ],
  "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
  }
 ];
var ZH_ROLE = [
 {
  "id": "cuahang", "stage": 2, "title": "Ở cửa hàng", "setting": "Cửa hàng quần áo",
  "you": "Khách mua hàng", "partner": "Nhân viên cửa hàng",
  "goal": "Hỏi giá, mặc thử rồi mua một cái áo.",
  "turns": [
   { "from": "partner", "han": "欢迎光临！您想买什么？", "py": "Huānyíng guānglín! Nín xiǎng mǎi shénme?", "vi": "Chào mừng quý khách! Quý khách muốn mua gì?" },
   { "from": "you", "han": "我想买一件毛衣。", "py": "Wǒ xiǎng mǎi yí jiàn máoyī.", "vi": "Tôi muốn mua một cái áo len." },
   { "from": "partner", "han": "这件怎么样？很暖和。", "py": "Zhè jiàn zěnmeyàng? Hěn nuǎnhuo.", "vi": "Cái này thế nào? Rất ấm." },
   { "from": "you", "han": "我可以试一下吗？", "py": "Wǒ kěyǐ shì yí xià ma?", "vi": "Tôi có thể mặc thử không?" },
   { "from": "partner", "han": "当然可以，试衣间在那边。", "py": "Dāngrán kěyǐ, shìyījiān zài nàbian.", "vi": "Tất nhiên được, phòng thử đồ ở bên kia." },
   { "from": "you", "han": "正好，我买这件。", "py": "Zhèng hǎo, wǒ mǎi zhè jiàn.", "vi": "Vừa đẹp, tôi mua cái này." },
   { "from": "partner", "han": "一共二百块，谢谢！", "py": "Yígòng èr bǎi kuài, xièxie!", "vi": "Tổng cộng 200 tệ, cảm ơn!" }
  ],
  "chunks": ["这件多少钱？ — Cái này bao nhiêu tiền?", "我可以试一下吗？ — Tôi mặc thử được không?", "我要这件。 — Tôi lấy cái này."],
  "tip": "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Đối tác nói gì chưa hiểu thì bấm Nghe lại.",
  "note": "Tình huống tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Thoại đối tác nghe bằng giọng đọc máy zh-CN. Tình huống này không chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "nhahang", "stage": 2, "title": "Ở nhà hàng", "setting": "Nhà hàng",
  "you": "Khách ăn", "partner": "Nhân viên phục vụ",
  "goal": "Chọn chỗ ngồi, gọi món rồi tính tiền.",
  "turns": [
   { "from": "partner", "han": "您好，几位？", "py": "Nín hǎo, jǐ wèi?", "vi": "Chào quý khách, mấy người ạ?" },
   { "from": "you", "han": "两位，靠窗的位子还有吗？", "py": "Liǎng wèi, kào chuāng de wèizi hái yǒu ma?", "vi": "Hai người, còn chỗ gần cửa sổ không?" },
   { "from": "partner", "han": "有，这边请。", "py": "Yǒu, zhèbian qǐng.", "vi": "Còn, mời bên này." },
   { "from": "you", "han": "我要一碗面条和一杯水。", "py": "Wǒ yào yì wǎn miàntiáo hé yì bēi shuǐ.", "vi": "Tôi muốn một bát mì và một cốc nước." },
   { "from": "partner", "han": "好的，稍等一下。", "py": "Hǎo de, shāo děng yí xià.", "vi": "Vâng, chờ một lát ạ." },
   { "from": "you", "han": "买单，谢谢！", "py": "Mǎi dān, xièxie!", "vi": "Tính tiền, cảm ơn!" }
  ],
  "chunks": ["几位？ — Mấy người ạ?", "我要一碗面条。 — Tôi muốn một bát mì.", "买单，谢谢！ — Tính tiền, cảm ơn!"],
  "tip": "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Đối tác nói gì chưa hiểu thì bấm Nghe lại.",
  "note": "Tình huống tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Thoại đối tác nghe bằng giọng đọc máy zh-CN. Tình huống này không chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "hoiduong", "stage": 2, "title": "Hỏi đường", "setting": "Ngoài đường",
  "you": "Người hỏi đường", "partner": "Người đi đường",
  "goal": "Hỏi đường tới bệnh viện và hiểu chỉ dẫn.",
  "turns": [
   { "from": "you", "han": "请问，去医院怎么走？", "py": "Qǐngwèn, qù yīyuàn zěnme zǒu?", "vi": "Xin hỏi, đi bệnh viện đi thế nào?" },
   { "from": "partner", "han": "一直往前走，第二个路口右转。", "py": "Yìzhí wǎng qián zǒu, dì èr ge lùkǒu yòu zhuǎn.", "vi": "Đi thẳng, đến ngã tư thứ hai rẽ phải." },
   { "from": "you", "han": "要走多远？", "py": "Yào zǒu duō yuǎn?", "vi": "Phải đi bao xa?" },
   { "from": "partner", "han": "大概十分钟就到了。", "py": "Dàgài shí fēnzhōng jiù dào le.", "vi": "Khoảng 10 phút là tới." },
   { "from": "you", "han": "谢谢！", "py": "Xièxie!", "vi": "Cảm ơn!" }
  ],
  "chunks": ["请问，去……怎么走？ — Xin hỏi, đi…… đi thế nào?", "一直往前走 — Đi thẳng", "大概十分钟就到了。 — Khoảng 10 phút là tới."],
  "tip": "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Đối tác nói gì chưa hiểu thì bấm Nghe lại.",
  "note": "Tình huống tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Thoại đối tác nghe bằng giọng đọc máy zh-CN. Tình huống này không chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "truonghocrole", "stage": 2, "title": "Học sinh mới ở trường", "setting": "Lớp học",
  "you": "Học sinh mới", "partner": "Bạn cùng lớp",
  "goal": "Làm quen với bạn cùng lớp trong ngày đầu tới trường.",
  "turns": [
   { "from": "partner", "han": "你是新来的吗？", "py": "Nǐ shì xīn lái de ma?", "vi": "Bạn là học sinh mới à?" },
   { "from": "you", "han": "是的，我今天第一天来。", "py": "Shì de, wǒ jīntiān dì yì tiān lái.", "vi": "Vâng, hôm nay là ngày đầu tôi đến." },
   { "from": "partner", "han": "你叫什么名字？", "py": "Nǐ jiào shénme míngzi?", "vi": "Bạn tên là gì?" },
   { "from": "you", "han": "我叫小李，你呢？", "py": "Wǒ jiào Xiǎo Lǐ, nǐ ne?", "vi": "Tôi tên là Tiểu Lý, còn bạn?" },
   { "from": "partner", "han": "我叫小王，坐我旁边吧。", "py": "Wǒ jiào Xiǎo Wáng, zuò wǒ pángbiān ba.", "vi": "Tôi tên là Tiểu Vương, ngồi cạnh tôi nhé." },
   { "from": "you", "han": "好，谢谢！", "py": "Hǎo, xièxie!", "vi": "Được, cảm ơn!" }
  ],
  "chunks": ["你是新来的吗？ — Bạn là học sinh mới à?", "我叫……，你呢？ — Tôi tên là……，còn bạn?", "坐我旁边吧。 — Ngồi cạnh tôi nhé."],
  "tip": "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Đối tác nói gì chưa hiểu thì bấm Nghe lại.",
  "note": "Tình huống tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Thoại đối tác nghe bằng giọng đọc máy zh-CN. Tình huống này không chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "benhvien", "stage": 3, "title": "Đi khám bệnh", "setting": "Bệnh viện",
  "you": "Bệnh nhân", "partner": "Bác sĩ",
  "goal": "Nói rõ mình khó chịu ở đâu, bị mấy ngày rồi.",
  "turns": [
   { "from": "partner", "han": "你哪儿不舒服？", "py": "Nǐ nǎr bù shūfu?", "vi": "Bạn khó chịu ở đâu?" },
   { "from": "you", "han": "我头疼，还发烧。", "py": "Wǒ tóu téng, hái fāshāo.", "vi": "Tôi đau đầu, còn sốt." },
   { "from": "partner", "han": "几天了？", "py": "Jǐ tiān le?", "vi": "Mấy ngày rồi?" },
   { "from": "you", "han": "两天了。", "py": "Liǎng tiān le.", "vi": "Hai ngày rồi." },
   { "from": "partner", "han": "先量一下体温，再去做检查。", "py": "Xiān liàng yí xià tǐwēn, zài qù zuò jiǎnchá.", "vi": "Đo nhiệt độ trước, rồi đi làm kiểm tra." },
   { "from": "you", "han": "好的，谢谢医生。", "py": "Hǎo de, xièxie yīshēng.", "vi": "Vâng, cảm ơn bác sĩ." }
  ],
  "chunks": ["你哪儿不舒服？ — Bạn khó chịu ở đâu?", "我头疼，还发烧。 — Tôi đau đầu, còn sốt.", "谢谢医生。 — Cảm ơn bác sĩ."],
  "tip": "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Đối tác nói gì chưa hiểu thì bấm Nghe lại.",
  "note": "Tình huống tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Thoại đối tác nghe bằng giọng đọc máy zh-CN. Tình huống này không chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "benxe", "stage": 3, "title": "Mua vé ở bến xe", "setting": "Bến xe",
  "you": "Hành khách", "partner": "Nhân viên bán vé",
  "goal": "Hỏi giờ xe, hỏi giá vé rồi mua hai vé.",
  "turns": [
   { "from": "partner", "han": "您去哪儿？", "py": "Nín qù nǎr?", "vi": "Quý khách đi đâu?" },
   { "from": "you", "han": "我去上海，几点有车？", "py": "Wǒ qù Shànghǎi, jǐ diǎn yǒu chē?", "vi": "Tôi đi Thượng Hải, mấy giờ có xe?" },
   { "from": "partner", "han": "上午十点有一班车。", "py": "Shàngwǔ shí diǎn yǒu yì bān chē.", "vi": "10 giờ sáng có một chuyến." },
   { "from": "you", "han": "票多少钱一张？", "py": "Piào duōshao qián yì zhāng?", "vi": "Vé bao nhiêu tiền một vé?" },
   { "from": "partner", "han": "一百块。", "py": "Yì bǎi kuài.", "vi": "100 tệ." },
   { "from": "you", "han": "我要两张。", "py": "Wǒ yào liǎng zhāng.", "vi": "Tôi muốn hai vé." }
  ],
  "chunks": ["几点有车？ — Mấy giờ có xe?", "票多少钱一张？ — Vé bao nhiêu tiền một vé?", "我要两张。 — Tôi muốn hai vé."],
  "tip": "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Đối tác nói gì chưa hiểu thì bấm Nghe lại.",
  "note": "Tình huống tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Thoại đối tác nghe bằng giọng đọc máy zh-CN. Tình huống này không chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "khachsan", "stage": 3, "title": "Thuê phòng khách sạn", "setting": "Khách sạn",
  "you": "Khách thuê phòng", "partner": "Lễ tân",
  "goal": "Hỏi phòng trống, chọn phòng đôi và chốt giá một đêm.",
  "turns": [
   { "from": "partner", "han": "您好，请问您要住几天？", "py": "Nín hǎo, qǐngwèn nín yào zhù jǐ tiān?", "vi": "Chào quý khách, xin hỏi quý khách ở mấy ngày?" },
   { "from": "you", "han": "三天，有空房间吗？", "py": "Sān tiān, yǒu kòng fángjiān ma?", "vi": "Ba ngày, còn phòng trống không?" },
   { "from": "partner", "han": "有，您要单人间还是双人间？", "py": "Yǒu, nín yào dān rén jiān háishi shuāng rén jiān?", "vi": "Còn, quý khách muốn phòng đơn hay phòng đôi?" },
   { "from": "you", "han": "双人间，多少钱一晚？", "py": "Shuāng rén jiān, duōshao qián yì wǎn?", "vi": "Phòng đôi, bao nhiêu tiền một đêm?" },
   { "from": "partner", "han": "三百块一晚。", "py": "Sān bǎi kuài yì wǎn.", "vi": "300 tệ một đêm." },
   { "from": "you", "han": "好，就这间。", "py": "Hǎo, jiù zhè jiān.", "vi": "Được, lấy phòng này." }
  ],
  "chunks": ["有空房间吗？ — Còn phòng trống không?", "单人间还是双人间？ — Phòng đơn hay phòng đôi?", "多少钱一晚？ — Bao nhiêu tiền một đêm?"],
  "tip": "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Đối tác nói gì chưa hiểu thì bấm Nghe lại.",
  "note": "Tình huống tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Thoại đối tác nghe bằng giọng đọc máy zh-CN. Tình huống này không chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "goidien", "stage": 3, "title": "Gọi điện rủ bạn đi chơi", "setting": "Cuộc gọi điện thoại",
  "you": "Người gọi điện", "partner": "Bạn",
  "goal": "Gọi điện rủ bạn ngày mai cùng đi xem phim và chốt giờ.",
  "turns": [
   { "from": "you", "han": "喂，你好！我是小明。", "py": "Wéi, nǐ hǎo! Wǒ shì Xiǎo Míng.", "vi": "A lô, chào bạn! Tôi là Tiểu Minh." },
   { "from": "partner", "han": "你好，小明！有什么事吗？", "py": "Nǐ hǎo, Xiǎo Míng! Yǒu shénme shì ma?", "vi": "Chào Tiểu Minh! Có việc gì không?" },
   { "from": "you", "han": "明天你有时间吗？我们一起去看电影吧。", "py": "Míngtiān nǐ yǒu shíjiān ma? Wǒmen yìqǐ qù kàn diànyǐng ba.", "vi": "Ngày mai bạn có thời gian không? Chúng mình cùng đi xem phim nhé." },
   { "from": "partner", "han": "好啊，几点？", "py": "Hǎo a, jǐ diǎn?", "vi": "Được, mấy giờ?" },
   { "from": "you", "han": "下午三点见。", "py": "Xiàwǔ sān diǎn jiàn.", "vi": "3 giờ chiều gặp." },
   { "from": "partner", "han": "好，明天见！", "py": "Hǎo, míngtiān jiàn!", "vi": "Được, mai gặp!" }
  ],
  "chunks": ["喂，你好！我是…… — A lô, chào bạn! Tôi là……", "明天你有时间吗？ — Ngày mai bạn có thời gian không?", "我们一起去看电影吧。 — Chúng mình cùng đi xem phim nhé."],
  "tip": "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Đối tác nói gì chưa hiểu thì bấm Nghe lại.",
  "note": "Tình huống tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); lời thoại tự viết, không trích nguyên văn giáo trình. Thoại đối tác nghe bằng giọng đọc máy zh-CN. Tình huống này không chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt cũng không tính chưa đạt."
  }
 ];
var ZH_WRITE = [
 {
  "id": "sapxep-chaohoi", "stage": 2, "title": "Sắp xếp: Hôm nay đi học", "kind": "order",
  "prompt": "Sắp xếp các từ thành câu đúng: hôm nay tôi đi học ở trường.",
  "words": ["我", "今天", "去", "学校", "上课"],
  "why": "Trật tự đúng: chủ ngữ 我 → thời gian 今天 → động từ 去 → nơi chốn 学校 → việc 上课.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); câu và từ tự viết, không trích nguyên văn giáo trình. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
 },
 {
  "id": "sapxep-muado", "stage": 2, "title": "Sắp xếp: Mẹ mua áo mới", "kind": "order",
  "prompt": "Sắp xếp các từ thành câu đúng: hôm qua mẹ đã mua một cái áo mới.",
  "words": ["妈妈", "昨天", "买了", "一件", "新衣服"],
  "why": "Trật tự đúng: chủ ngữ 妈妈 → thời gian 昨天 → động từ 买了 → số lượng 一件 → đồ vật 新衣服.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); câu và từ tự viết, không trích nguyên văn giáo trình. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
 },
 {
  "id": "sapxep-dilam", "stage": 3, "title": "Sắp xếp: Anh ấy đi làm", "kind": "order",
  "prompt": "Sắp xếp các từ thành câu đúng: anh ấy mỗi ngày 8 giờ sáng đi làm.",
  "words": ["他", "每天", "早上", "八点", "去", "上班"],
  "why": "Trật tự đúng: chủ ngữ 他 → tần suất 每天 → buổi 早上 → giờ 八点 → động từ 去 → việc 上班.",
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); câu và từ tự viết, không trích nguyên văn giáo trình. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
 },
 {
  "id": "dientu-giadinh", "stage": 2, "title": "Điền từ: Gia đình", "kind": "fill",
  "prompt": "Chọn từ đúng điền vào chỗ trống trong các câu về gia đình.",
  "questions": [
   { "q": "我家有___口人。(Nhà tôi có 4 người.)", "o": ["三", "四", "五", "六"], "a": 1, "why": "四口人: nhà có 4 người." },
   { "q": "我妹妹今年___岁。(Em gái tôi năm nay 10 tuổi.)", "o": ["九", "十", "十一", "十二"], "a": 1, "why": "十岁: 10 tuổi." }
  ],
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); câu và đáp án tự viết, không trích nguyên văn giáo trình. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
 },
 {
  "id": "dientu-anuong", "stage": 2, "title": "Điền từ: Ăn uống", "kind": "fill",
  "prompt": "Chọn từ đúng điền vào chỗ trống trong các câu về ăn uống.",
  "questions": [
   { "q": "我想吃___。(Tôi muốn ăn mì.)", "o": ["米饭", "面条", "面包", "水果"], "a": 1, "why": "面条 là mì." },
   { "q": "我们再要两___水。(Chúng mình gọi thêm hai cốc nước.)", "o": ["杯", "个", "本", "张"], "a": 0, "why": "杯 là lượng từ cho cốc nước: 两杯水." }
  ],
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); câu và đáp án tự viết, không trích nguyên văn giáo trình. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
 },
 {
  "id": "dientu-dilam", "stage": 3, "title": "Điền từ: Đi làm", "kind": "fill",
  "prompt": "Chọn từ đúng điền vào chỗ trống trong các câu về công việc.",
  "questions": [
   { "q": "他在一家公司___。(Anh ấy làm việc ở một công ty.)", "o": ["学习", "工作", "休息", "睡觉"], "a": 1, "why": "工作 là làm việc." },
   { "q": "我的工作有时候很___，不过我很喜欢。(Công việc của tôi có lúc rất bận, nhưng tôi rất thích.)", "o": ["忙", "闲", "早", "晚"], "a": 0, "why": "很忙: rất bận." }
  ],
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); câu và đáp án tự viết, không trích nguyên văn giáo trình. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
 },
 {
  "id": "viet-gioithieu", "stage": 2, "title": "Viết: Giới thiệu bản thân", "kind": "free",
  "prompt": "Viết 3–4 câu giới thiệu bản thân bằng tiếng Trung: tên, tuổi, là học sinh hay sinh viên, sở thích.",
  "model": "大家好！我叫小明。我今年二十岁。我是学生。我喜欢看书和听音乐。",
  "analysis": "Bài mẫu mở đầu bằng 大家好，rồi đi theo thứ tự: tên → tuổi → thân phận → sở thích, mỗi ý một câu ngắn.",
  "phrases": ["我叫…… — Tôi tên là……", "我今年……岁 — Năm nay tôi…… tuổi", "我是学生 — Tôi là học sinh"],
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK2 (hệ 6 cấp cũ); đề và bài mẫu tự viết, không trích nguyên văn giáo trình. Phần này chỉ đối chiếu bài mẫu, chưa có AI chấm tiếng Trung — AI chấm đang chờ nâng cấp, không có điểm, không tính đạt cũng không tính chưa đạt."
 },
 {
  "id": "viet-cuoituan", "stage": 3, "title": "Viết: Kể về cuối tuần", "kind": "free",
  "prompt": "Viết một đoạn ngắn 4–5 câu kể cuối tuần của bạn: đi đâu, với ai, làm gì, cảm thấy thế nào.",
  "model": "上个周末，我和朋友去公园了。我们在公园散步，还拍了很多照片。中午我们在附近的饭馆吃饭。下午我们回家了。我觉得很开心。",
  "analysis": "Bài mẫu kể theo thứ tự thời gian: cuối tuần → buổi sáng, buổi trưa, buổi chiều → cảm nghĩ ở câu cuối.",
  "phrases": ["上个周末 — Cuối tuần trước", "我和朋友去…… — Tôi cùng bạn đi……", "我觉得很开心 — Tôi thấy rất vui"],
  "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK3 (hệ 6 cấp cũ); đề và bài mẫu tự viết, không trích nguyên văn giáo trình. Phần này chỉ đối chiếu bài mẫu, chưa có AI chấm tiếng Trung — AI chấm đang chờ nâng cấp, không có điểm, không tính đạt cũng không tính chưa đạt."
  }
 ];

// ============================================================
//  noi-dung-2b-draft.js — NHÁP đợt mở rộng 2b (CHƯA append vào build).
//  Chỉ chứa các lệnh push; điều phối viên append vào cuối content-new.js.
//  Nội dung tự soạn 100%, tiếng Việt đơn giản, ví dụ trước.
// ============================================================
CONTENT.vocab.push.apply(CONTENT.vocab, [
{
"topic": "Môi trường và biến đổi khí hậu",
"theme": "Environment - Môi trường",
"band": "Band 7.5+",
"cards": [
{"w": "mitigation", "ipa": "/ˌmɪtɪˈɡeɪʃn/", "vi": "sự giảm nhẹ (tác động)", "col": "climate mitigation", "ex": "Planting trees is one simple form of climate mitigation.", "exv": "Trồng cây là một cách đơn giản để giảm nhẹ tác động của khí hậu."},
{"w": "adaptation", "ipa": "/ˌædæpˈteɪʃn/", "vi": "sự thích ứng", "col": "climate adaptation", "ex": "Farmers need climate adaptation because the weather is changing.", "exv": "Nông dân cần thích ứng với khí hậu vì thời tiết đang thay đổi."},
{"w": "carbon sequestration", "ipa": "/ˈkɑːbən ˌsiːkwesˈtreɪʃn/", "vi": "sự giữ lại carbon", "col": "carbon sequestration in forests", "ex": "Forests help carbon sequestration in forests by storing carbon in trees and soil.", "exv": "Rừng giúp giữ lại carbon bằng cách lưu carbon trong cây và đất."},
{"w": "reforestation", "ipa": "/ˌriːfɒrɪˈsteɪʃn/", "vi": "sự trồng rừng lại", "col": "a reforestation project", "ex": "The village started a reforestation project on the empty hills.", "exv": "Ngôi làng bắt đầu một dự án trồng rừng lại trên những quả đồi trống."},
{"w": "afforestation", "ipa": "/əˌfɒrɪˈsteɪʃn/", "vi": "sự trồng rừng mới", "col": "afforestation on dry land", "ex": "Afforestation on dry land can slowly turn bare land green again.", "exv": "Trồng rừng mới trên đất khô có thể dần làm đất trống xanh trở lại."},
{"w": "permafrost", "ipa": "/ˈpɜːməfrɒst/", "vi": "lớp đất đóng băng vĩnh cửu", "col": "melting permafrost", "ex": "Melting permafrost releases gases that warm the planet further.", "exv": "Lớp đất đóng băng tan ra thải khí làm hành tinh nóng thêm."},
{"w": "decarbonisation", "ipa": "/diːˌkɑːbənaɪˈzeɪʃn/", "vi": "sự giảm carbon", "col": "decarbonisation of transport", "ex": "Electric buses are part of the decarbonisation of transport in the city.", "exv": "Xe buýt điện là một phần của việc giảm carbon trong giao thông thành phố."},
{"w": "ocean acidification", "ipa": "/ˈəʊʃn əˌsɪdɪfɪˈkeɪʃn/", "vi": "sự axit hóa đại dương", "col": "ocean acidification and coral", "ex": "Ocean acidification and coral are linked, because acid water harms coral reefs.", "exv": "Axit hóa đại dương và san hô có liên quan, vì nước axit làm hại rạn san hô."},
{"w": "sea-level rise", "ipa": "/ˈsiː levl raɪz/", "vi": "sự dâng mực nước biển", "col": "sea-level rise in coastal cities", "ex": "Sea-level rise in coastal cities forces people to build stronger sea walls.", "exv": "Mực nước biển dâng ở thành phố ven biển buộc người dân xây đê biển chắc hơn."},
{"w": "climate resilience", "ipa": "/ˈklaɪmət rɪˈzɪliəns/", "vi": "khả năng chống chịu khí hậu", "col": "build climate resilience", "ex": "Strong houses and early warnings help villages build climate resilience.", "exv": "Nhà chắc và cảnh báo sớm giúp các làng xây khả năng chống chịu khí hậu."},
{"w": "environmental degradation", "ipa": "/ɪnˌvaɪrənˈmentl ˌdeɡrəˈdeɪʃn/", "vi": "sự suy thoái môi trường", "col": "stop environmental degradation", "ex": "We must stop environmental degradation before the soil loses all its life.", "exv": "Chúng ta phải chặn suy thoái môi trường trước khi đất mất hết sự sống."},
{"w": "carbon offset", "ipa": "/ˈkɑːbən ˈɒfset/", "vi": "sự bù trừ carbon", "col": "buy a carbon offset", "ex": "Some travellers buy a carbon offset when they fly, to support tree planting.", "exv": "Một số khách du lịch mua bù trừ carbon khi bay, để ủng hộ trồng cây."},
{"w": "emission reduction", "ipa": "/ɪˈmɪʃn rɪˈdʌkʃn/", "vi": "sự cắt giảm khí thải", "col": "an emission reduction plan", "ex": "The factory published an emission reduction plan for the next five years.", "exv": "Nhà máy công bố kế hoạch cắt giảm khí thải cho năm năm tới."},
{"w": "extreme weather", "ipa": "/ɪkˈstriːm ˈweðə(r)/", "vi": "thời tiết cực đoan", "col": "extreme weather events", "ex": "Extreme weather events, like long heatwaves, are becoming more common.", "exv": "Các hiện tượng thời tiết cực đoan, như đợt nắng nóng dài, ngày càng phổ biến."},
{"w": "water scarcity", "ipa": "/ˈwɔːtə(r) ˈskeəsəti/", "vi": "sự khan hiếm nước", "col": "water scarcity in dry regions", "ex": "Water scarcity in dry regions makes farming much harder every year.", "exv": "Khan hiếm nước ở vùng khô khiến việc trồng trọt khó hơn mỗi năm."},
{"w": "food security", "ipa": "/fuːd sɪˈkjʊərəti/", "vi": "an ninh lương thực", "col": "protect food security", "ex": "Good storage and fair prices help protect food security for poor families.", "exv": "Kho chứa tốt và giá hợp lý giúp bảo vệ an ninh lương thực cho gia đình nghèo."},
{"w": "ecological footprint", "ipa": "/ˌiːkəˈlɒdʒɪkl ˈfʊtprɪnt/", "vi": "dấu chân sinh thái", "col": "reduce your ecological footprint", "ex": "Cycling to work is one way to reduce your ecological footprint.", "exv": "Đạp xe đi làm là một cách giảm dấu chân sinh thái của bạn."},
{"w": "renewable transition", "ipa": "/rɪˈnjuːəbl trænˈzɪʃn/", "vi": "sự chuyển đổi sang năng lượng tái tạo", "col": "a renewable transition plan", "ex": "The town approved a renewable transition plan based on wind and sun power.", "exv": "Thị trấn duyệt kế hoạch chuyển đổi sang năng lượng tái tạo dùng gió và nắng."},
{"w": "green technology", "ipa": "/ɡriːn tekˈnɒlədʒi/", "vi": "công nghệ xanh", "col": "invest in green technology", "ex": "Many firms now invest in green technology to save energy and cut waste.", "exv": "Nhiều công ty nay đầu tư vào công nghệ xanh để tiết kiệm năng lượng và giảm rác."},
{"w": "climate policy", "ipa": "/ˈklaɪmət ˈpɒləsi/", "vi": "chính sách khí hậu", "col": "a national climate policy", "ex": "A clear national climate policy helps firms plan for cleaner production.", "exv": "Một chính sách khí hậu quốc gia rõ ràng giúp doanh nghiệp lên kế hoạch sản xuất sạch hơn."}
]
},
{
"topic": "Kinh tế và việc làm",
"theme": "Economy - Kinh tế",
"band": "Band 7.5+",
"cards": [
{"w": "labour market", "ipa": "/ˈleɪbə(r) ˈmɑːkɪt/", "vi": "thị trường lao động", "col": "the labour market today", "ex": "The labour market today needs workers who can learn new skills quickly.", "exv": "Thị trường lao động ngày nay cần người lao động học kỹ năng mới nhanh."},
{"w": "job creation", "ipa": "/dʒɒb kriˈeɪʃn/", "vi": "sự tạo việc làm", "col": "support job creation", "ex": "Small firms do a lot to support job creation in towns and cities.", "exv": "Doanh nghiệp nhỏ đóng góp nhiều cho việc tạo việc làm ở thị trấn và thành phố."},
{"w": "wage growth", "ipa": "/weɪdʒ ɡrəʊθ/", "vi": "sự tăng lương", "col": "slow wage growth", "ex": "Slow wage growth makes it hard for families to keep up with rising prices.", "exv": "Tăng lương chậm khiến gia đình khó theo kịp giá cả tăng."},
{"w": "skills gap", "ipa": "/skɪlz ɡæp/", "vi": "khoảng trống kỹ năng", "col": "close the skills gap", "ex": "Training courses can help close the skills gap in technology jobs.", "exv": "Các khóa đào tạo có thể giúp lấp khoảng trống kỹ năng trong việc làm công nghệ."},
{"w": "remote working", "ipa": "/rɪˈməʊt ˈwɜːkɪŋ/", "vi": "làm việc từ xa", "col": "remote working from home", "ex": "Remote working from home saves travel time but needs strong self-discipline.", "exv": "Làm việc từ xa tại nhà tiết kiệm thời gian đi lại nhưng cần kỷ luật cao."},
{"w": "gig economy", "ipa": "/ɡɪɡ ɪˈkɒnəmi/", "vi": "kinh tế làm việc ngắn hạn", "col": "workers in the gig economy", "ex": "Workers in the gig economy often do short jobs for several different firms.", "exv": "Người lao động trong kinh tế làm việc ngắn hạn thường làm việc ngắn cho nhiều công ty."},
{"w": "job security", "ipa": "/dʒɒb sɪˈkjʊərəti/", "vi": "sự ổn định việc làm", "col": "better job security", "ex": "A long contract gives workers better job security than a one-week job.", "exv": "Hợp đồng dài hạn cho người lao động ổn định việc làm hơn việc làm một tuần."},
{"w": "workforce planning", "ipa": "/ˈwɜːkfɔːs ˈplænɪŋ/", "vi": "kế hoạch nhân lực", "col": "careful workforce planning", "ex": "Careful workforce planning helps a hospital avoid staff shortages.", "exv": "Kế hoạch nhân lực cẩn thận giúp bệnh viện tránh thiếu nhân viên."},
{"w": "productivity growth", "ipa": "/ˌprɒdʌkˈtɪvəti ɡrəʊθ/", "vi": "sự tăng năng suất", "col": "productivity growth and wages", "ex": "Productivity growth and wages should rise together, but they often do not.", "exv": "Tăng năng suất và lương nên tăng cùng nhau, nhưng thường thì không."},
{"w": "economic downturn", "ipa": "/ˌiːkəˈnɒmɪk ˈdaʊntɜːn/", "vi": "sự suy thoái kinh tế", "col": "during an economic downturn", "ex": "During an economic downturn, many shops sell less and hire fewer staff.", "exv": "Trong suy thoái kinh tế, nhiều cửa hàng bán ít hơn và thuê ít nhân viên hơn."},
{"w": "fiscal policy", "ipa": "/ˈfɪskl ˈpɒləsi/", "vi": "chính sách tài khóa", "col": "government fiscal policy", "ex": "Government fiscal policy decides how much the state spends and taxes.", "exv": "Chính sách tài khóa của nhà nước quyết định nhà nước chi và thu thuế bao nhiêu."},
{"w": "monetary policy", "ipa": "/ˈmɒnɪtri ˈpɒləsi/", "vi": "chính sách tiền tệ", "col": "tight monetary policy", "ex": "Tight monetary policy raises interest rates to slow down rising prices.", "exv": "Chính sách tiền tệ chặt làm lãi suất tăng để kìm giá cả tăng."},
{"w": "central bank", "ipa": "/ˈsentrəl bæŋk/", "vi": "ngân hàng trung ương", "col": "the central bank decision", "ex": "The central bank decision on interest rates affects loans for homes and firms.", "exv": "Quyết định của ngân hàng trung ương về lãi suất ảnh hưởng tới khoản vay mua nhà và vay doanh nghiệp."},
{"w": "trade deficit", "ipa": "/treɪd ˈdefɪsɪt/", "vi": "thâm hụt thương mại", "col": "a large trade deficit", "ex": "A large trade deficit means a country imports much more than it exports.", "exv": "Thâm hụt thương mại lớn nghĩa là một nước nhập khẩu nhiều hơn xuất khẩu rất nhiều."},
{"w": "consumer spending", "ipa": "/kənˈsjuːmə(r) ˈspendɪŋ/", "vi": "chi tiêu của người tiêu dùng", "col": "weak consumer spending", "ex": "Weak consumer spending is a warning sign for shops and restaurants.", "exv": "Chi tiêu người tiêu dùng yếu là dấu hiệu cảnh báo cho cửa hàng và nhà hàng."},
{"w": "cost of living", "ipa": "/kɒst əv ˈlɪvɪŋ/", "vi": "chi phí sinh hoạt", "col": "the rising cost of living", "ex": "The rising cost of living hits young renters hardest in big cities.", "exv": "Chi phí sinh hoạt tăng đánh mạnh nhất vào người trẻ thuê nhà ở thành phố lớn."},
{"w": "minimum wage", "ipa": "/ˈmɪnɪməm weɪdʒ/", "vi": "lương tối thiểu", "col": "raise the minimum wage", "ex": "Some argue we should raise the minimum wage to protect low-paid workers.", "exv": "Một số người cho rằng nên tăng lương tối thiểu để bảo vệ người lao động lương thấp."},
{"w": "automation risk", "ipa": "/ˌɔːtəˈmeɪʃn rɪsk/", "vi": "nguy cơ tự động hóa", "col": "automation risk for routine jobs", "ex": "Automation risk for routine jobs pushes workers to learn new, creative skills.", "exv": "Nguy cơ tự động hóa với việc làm lặp lại thúc người lao động học kỹ năng mới, sáng tạo."},
{"w": "career transition", "ipa": "/kəˈrɪə(r) trænˈzɪʃn/", "vi": "sự chuyển đổi nghề nghiệp", "col": "a career transition at 40", "ex": "A career transition at 40 is common when whole industries change.", "exv": "Chuyển đổi nghề nghiệp ở tuổi 40 là chuyện thường khi cả ngành nghề thay đổi."},
{"w": "flexible working", "ipa": "/ˈfleksəbl ˈwɜːkɪŋ/", "vi": "làm việc linh hoạt", "col": "offer flexible working", "ex": "Firms that offer flexible working often keep good staff for longer.", "exv": "Công ty cho làm việc linh hoạt thường giữ được nhân viên giỏi lâu hơn."}
]
},
{
"topic": "Luật pháp và công lý",
"theme": "Law - Luật pháp",
"band": "Band 7.5+",
"cards": [
{"w": "legislation", "ipa": "/ˌledʒɪsˈleɪʃn/", "vi": "luật, văn bản pháp luật", "col": "new legislation on safety", "ex": "New legislation on safety requires firms to report serious accidents.", "exv": "Luật mới về an toàn yêu cầu doanh nghiệp báo cáo tai nạn nghiêm trọng."},
{"w": "judicial system", "ipa": "/dʒuˈdɪʃl ˈsɪstəm/", "vi": "hệ thống tư pháp", "col": "trust in the judicial system", "ex": "Trust in the judicial system grows when trials are open and fair.", "exv": "Niềm tin vào hệ thống tư pháp tăng khi xét xử công khai và công bằng."},
{"w": "civil rights", "ipa": "/ˈsɪvl raɪts/", "vi": "quyền công dân", "col": "protect civil rights", "ex": "Laws must protect civil rights for every person, not only for some groups.", "exv": "Luật phải bảo vệ quyền công dân cho mọi người, không chỉ một số nhóm."},
{"w": "justice system", "ipa": "/ˈdʒʌstɪs ˈsɪstəm/", "vi": "hệ thống công lý", "col": "reform the justice system", "ex": "Many experts want to reform the justice system to make trials faster.", "exv": "Nhiều chuyên gia muốn cải cách hệ thống công lý để xét xử nhanh hơn."},
{"w": "legal reform", "ipa": "/ˈliːɡl rɪˈfɔːm/", "vi": "cải cách pháp luật", "col": "a legal reform programme", "ex": "A legal reform programme should be debated in public before it becomes law.", "exv": "Chương trình cải cách pháp luật nên được tranh luận công khai trước khi thành luật."},
{"w": "due process", "ipa": "/djuː ˈprəʊses/", "vi": "trình tự pháp lý đúng", "col": "the right to due process", "ex": "Every accused person has the right to due process and a fair hearing.", "exv": "Mọi bị cáo đều có quyền được xét xử đúng trình tự và công bằng."},
{"w": "human rights", "ipa": "/ˈhjuːmən raɪts/", "vi": "quyền con người", "col": "respect human rights", "ex": "Schools should teach children to respect human rights from an early age.", "exv": "Trường học nên dạy trẻ tôn trọng quyền con người từ sớm."},
{"w": "constitutional law", "ipa": "/ˌkɒnstɪˈtjuːʃənl lɔː/", "vi": "luật hiến pháp", "col": "study constitutional law", "ex": "Law students study constitutional law to understand the power of the state.", "exv": "Sinh viên luật học luật hiến pháp để hiểu quyền lực của nhà nước."},
{"w": "legal aid", "ipa": "/ˈliːɡl eɪd/", "vi": "trợ giúp pháp lý", "col": "free legal aid", "ex": "Free legal aid helps poor people get a lawyer when they cannot pay.", "exv": "Trợ giúp pháp lý miễn phí giúp người nghèo có luật sư khi không trả nổi phí."},
{"w": "court ruling", "ipa": "/kɔːt ˈruːlɪŋ/", "vi": "phán quyết của tòa", "col": "a landmark court ruling", "ex": "A landmark court ruling changed how firms treat personal data.", "exv": "Một phán quyết tòa mang tính bước ngoặt đã đổi cách doanh nghiệp xử lý dữ liệu cá nhân."},
{"w": "appeal", "ipa": "/əˈpiːl/", "vi": "sự kháng cáo", "col": "file an appeal", "ex": "The defendant decided to file an appeal against the first decision.", "exv": "Bị cáo quyết định kháng cáo quyết định đầu tiên."},
{"w": "defendant", "ipa": "/dɪˈfendənt/", "vi": "bị cáo", "col": "the defendant in court", "ex": "The defendant in court listened quietly while the witness spoke.", "exv": "Bị cáo tại tòa lặng nghe khi nhân chứng nói."},
{"w": "prosecution", "ipa": "/ˌprɒsɪˈkjuːʃn/", "vi": "bên công tố, sự truy tố", "col": "the prosecution case", "ex": "The prosecution case rested on two documents and one witness.", "exv": "Vụ truy tố dựa vào hai tài liệu và một nhân chứng."},
{"w": "verdict", "ipa": "/ˈvɜːdɪkt/", "vi": "phán quyết (của bồi thẩm đoàn)", "col": "reach a verdict", "ex": "After three days, the jury managed to reach a verdict.", "exv": "Sau ba ngày, bồi thẩm đoàn đã đưa ra được phán quyết."},
{"w": "penalty", "ipa": "/ˈpenlti/", "vi": "hình phạt", "col": "a heavy penalty", "ex": "The firm paid a heavy penalty for breaking safety rules.", "exv": "Công ty chịu hình phạt nặng vì vi phạm quy tắc an toàn."},
{"w": "public defender", "ipa": "/ˈpʌblɪk dɪˈfendə(r)/", "vi": "luật sư bào chữa công", "col": "a public defender for the accused", "ex": "A public defender for the accused is paid by the state, not by the client.", "exv": "Luật sư bào chữa công cho bị cáo do nhà nước trả, không phải khách hàng trả."},
{"w": "legal precedent", "ipa": "/ˈliːɡl ˈpresɪdənt/", "vi": "án lệ, tiền lệ pháp lý", "col": "set a legal precedent", "ex": "This case may set a legal precedent for future online privacy cases.", "exv": "Vụ này có thể tạo án lệ cho các vụ riêng tư trực tuyến sau này."},
{"w": "rule of law", "ipa": "/ruːl əv lɔː/", "vi": "pháp quyền, sự thượng tôn pháp luật", "col": "respect the rule of law", "ex": "A fair society must respect the rule of law, even in hard times.", "exv": "Một xã hội công bằng phải tôn trọng pháp quyền, ngay cả lúc khó khăn."},
{"w": "civil lawsuit", "ipa": "/ˈsɪvl ˈlɔːsuːt/", "vi": "vụ kiện dân sự", "col": "file a civil lawsuit", "ex": "The customer decided to file a civil lawsuit after the firm refused a refund.", "exv": "Khách hàng quyết định kiện dân sự sau khi công ty từ chối hoàn tiền."},
{"w": "intellectual property", "ipa": "/ˌɪntəˈlektʃuəl ˈprɒpəti/", "vi": "sở hữu trí tuệ", "col": "protect intellectual property", "ex": "Inventors need laws to protect intellectual property for their new ideas.", "exv": "Nhà sáng chế cần luật để bảo vệ sở hữu trí tuệ cho ý tưởng mới của họ."}
]
}
]);
CONTENT.vocab.push.apply(CONTENT.vocab, [
{
"topic": "Giáo dục đại học và nghiên cứu",
"theme": "Higher Education - Giáo dục đại học",
"band": "Band 7.0",
"cards": [
{"w": "doctoral degree", "ipa": "/ˈdɒktərəl dɪˈɡriː/", "vi": "bằng tiến sĩ", "col": "complete a doctoral degree", "ex": "She hopes to complete a doctoral degree in biology within four years.", "exv": "Cô ấy hy vọng hoàn thành bằng tiến sĩ sinh học trong bốn năm."},
{"w": "research proposal", "ipa": "/rɪˈsɜːtʃ prəˈpəʊzl/", "vi": "đề cương nghiên cứu", "col": "write a research proposal", "ex": "First, students must write a research proposal and explain why the topic matters.", "exv": "Trước tiên, sinh viên phải viết đề cương nghiên cứu và giải thích vì sao đề tài quan trọng."},
{"w": "field study", "ipa": "/fiːld ˈstʌdi/", "vi": "nghiên cứu thực địa", "col": "a field study in a village", "ex": "A field study in a village taught the team more than books alone could.", "exv": "Nghiên cứu thực địa ở một ngôi làng dạy nhóm nhiều hơn chỉ đọc sách."},
{"w": "academic journal", "ipa": "/ˌækəˈdemɪk ˈdʒɜːnl/", "vi": "tạp chí học thuật", "col": "publish in an academic journal", "ex": "Young researchers dream of publishing in an academic journal one day.", "exv": "Nhà nghiên cứu trẻ mơ một ngày công bố trên tạp chí học thuật."},
{"w": "research ethics", "ipa": "/rɪˈsɜːtʃ ˈeθɪks/", "vi": "đạo đức nghiên cứu", "col": "follow research ethics", "ex": "All teams must follow research ethics and protect the people in the study.", "exv": "Mọi nhóm phải tuân theo đạo đức nghiên cứu và bảo vệ người tham gia nghiên cứu."},
{"w": "literature review", "ipa": "/ˈlɪtrətʃə(r) rɪˈvjuː/", "vi": "tổng quan tài liệu", "col": "a literature review chapter", "ex": "A literature review chapter shows what other writers already found.", "exv": "Chương tổng quan tài liệu cho thấy các tác giả khác đã tìm ra điều gì."},
{"w": "case study", "ipa": "/keɪs ˈstʌdi/", "vi": "nghiên cứu tình huống", "col": "a case study of one school", "ex": "A case study of one school can show problems that big surveys miss.", "exv": "Nghiên cứu tình huống một trường học có thể chỉ ra vấn đề mà khảo sát lớn bỏ sót."},
{"w": "academic integrity", "ipa": "/ˌækəˈdemɪk ɪnˈteɡrəti/", "vi": "liêm chính học thuật", "col": "uphold academic integrity", "ex": "Universities ask students to uphold academic integrity and cite their sources.", "exv": "Trường đại học yêu cầu sinh viên giữ liêm chính học thuật và trích dẫn nguồn."},
{"w": "scholarly article", "ipa": "/ˈskɒləli ˈɑːtɪkl/", "vi": "bài báo học thuật", "col": "read a scholarly article", "ex": "Try to read a scholarly article slowly, and note its main argument first.", "exv": "Hãy thử đọc chậm một bài báo học thuật, và ghi luận điểm chính trước."},
{"w": "research method", "ipa": "/rɪˈsɜːtʃ ˈmeθəd/", "vi": "phương pháp nghiên cứu", "col": "choose a research method", "ex": "You must choose a research method that fits your question, not the easiest one.", "exv": "Bạn phải chọn phương pháp nghiên cứu hợp với câu hỏi, không phải cách dễ nhất."},
{"w": "critical analysis", "ipa": "/ˈkrɪtɪkl əˈnæləsɪs/", "vi": "phân tích phản biện", "col": "a critical analysis of the data", "ex": "A critical analysis of the data showed that the first result was too weak.", "exv": "Phân tích phản biện dữ liệu cho thấy kết quả đầu tiên còn quá yếu."},
{"w": "academic writing", "ipa": "/ˌækəˈdemɪk ˈraɪtɪŋ/", "vi": "viết học thuật", "col": "academic writing skills", "ex": "Academic writing skills grow when students rewrite their drafts several times.", "exv": "Kỹ năng viết học thuật tăng khi sinh viên viết lại bản nháp nhiều lần."},
{"w": "thesis defence", "ipa": "/ˈθiːsɪs dɪˈfens/", "vi": "buổi bảo vệ luận văn", "col": "prepare for a thesis defence", "ex": "He spent two weeks to prepare for a thesis defence in front of three teachers.", "exv": "Anh ấy dành hai tuần chuẩn bị cho buổi bảo vệ luận văn trước ba thầy cô."},
{"w": "research grant", "ipa": "/rɪˈsɜːtʃ ɡrɑːnt/", "vi": "khoản tài trợ nghiên cứu", "col": "apply for a research grant", "ex": "The team will apply for a research grant to buy lab equipment.", "exv": "Nhóm sẽ xin tài trợ nghiên cứu để mua thiết bị phòng thí nghiệm."},
{"w": "graduation rate", "ipa": "/ˌɡrædʒuˈeɪʃn reɪt/", "vi": "tỷ lệ tốt nghiệp", "col": "a high graduation rate", "ex": "A high graduation rate often means strong student support at the university.", "exv": "Tỷ lệ tốt nghiệp cao thường nghĩa là trường hỗ trợ sinh viên tốt."},
{"w": "campus life", "ipa": "/ˈkæmpəs laɪf/", "vi": "đời sống trong trường", "col": "campus life for new students", "ex": "Campus life for new students is easier when clubs welcome them in week one.", "exv": "Đời sống trong trường với sinh viên mới dễ hơn khi câu lạc bộ chào đón họ ngay tuần đầu."},
{"w": "exchange programme", "ipa": "/ɪksˈtʃeɪndʒ ˈprəʊɡræm/", "vi": "chương trình trao đổi", "col": "join an exchange programme", "ex": "She wants to join an exchange programme and study abroad for one term.", "exv": "Cô ấy muốn tham gia chương trình trao đổi và học ở nước ngoài một học kỳ."},
{"w": "academic calendar", "ipa": "/ˌækəˈdemɪk ˈkælɪndə(r)/", "vi": "lịch học thuật", "col": "check the academic calendar", "ex": "Always check the academic calendar before you book a holiday during term time.", "exv": "Luôn kiểm tra lịch học thuật trước khi đặt kỳ nghỉ trong học kỳ."},
{"w": "entrance exam", "ipa": "/ˈentrəns ɪɡˈzæm/", "vi": "kỳ thi đầu vào", "col": "pass the entrance exam", "ex": "To study medicine, he must pass the entrance exam with a very high score.", "exv": "Để học y khoa, anh ấy phải đỗ kỳ thi đầu vào với điểm rất cao."},
{"w": "lifelong learning", "ipa": "/ˈlaɪflɒŋ ˈlɜːnɪŋ/", "vi": "học tập suốt đời", "col": "a habit of lifelong learning", "ex": "A habit of lifelong learning helps workers stay useful when jobs change.", "exv": "Thói quen học tập suốt đời giúp người lao động vẫn hữu ích khi việc làm thay đổi."}
]
},
{
"topic": "Thành phố và giao thông bền vững",
"theme": "Cities and Transport - Thành phố và giao thông",
"band": "Band 7.0",
"cards": [
{"w": "urban planning", "ipa": "/ˈɜːbən ˈplænɪŋ/", "vi": "quy hoạch đô thị", "col": "good urban planning", "ex": "Good urban planning puts parks, schools and shops within walking distance.", "exv": "Quy hoạch đô thị tốt đặt công viên, trường học và cửa hàng trong tầm đi bộ."},
{"w": "congestion charge", "ipa": "/kənˈdʒestʃən tʃɑːdʒ/", "vi": "phí chống tắc đường", "col": "pay a congestion charge", "ex": "Drivers must pay a congestion charge to enter the city centre at peak times.", "exv": "Tài xế phải trả phí chống tắc đường để vào trung tâm thành phố giờ cao điểm."},
{"w": "cycle lane", "ipa": "/ˈsaɪkl leɪn/", "vi": "làn đường xe đạp", "col": "a safe cycle lane", "ex": "A safe cycle lane encourages more people to ride to work.", "exv": "Làn đường xe đạp an toàn khuyến khích nhiều người đạp xe đi làm."},
{"w": "pedestrian zone", "ipa": "/pəˈdestriən zəʊn/", "vi": "khu vực đi bộ", "col": "a pedestrian zone in the old town", "ex": "A pedestrian zone in the old town is full of cafes and street music.", "exv": "Khu vực đi bộ ở phố cổ đầy quán cà phê và nhạc đường phố."},
{"w": "electric bus", "ipa": "/ɪˈlektrɪk bʌs/", "vi": "xe buýt điện", "col": "ride an electric bus", "ex": "I ride an electric bus to work, and it is quieter than the old diesel bus.", "exv": "Tôi đi xe buýt điện đi làm, và nó êm hơn xe buýt dầu cũ."},
{"w": "car sharing", "ipa": "/kɑː(r) ˈʃeərɪŋ/", "vi": "dùng chung xe hơi", "col": "a car sharing scheme", "ex": "A car sharing scheme lets neighbours use one car instead of owning three.", "exv": "Chương trình dùng chung xe hơi cho hàng xóm dùng một xe thay vì sở hữu ba xe."},
{"w": "traffic flow", "ipa": "/ˈtræfɪk fləʊ/", "vi": "luồng giao thông", "col": "improve traffic flow", "ex": "Better traffic lights can improve traffic flow without building new roads.", "exv": "Đèn giao thông tốt hơn có thể cải thiện luồng giao thông mà không cần xây đường mới."},
{"w": "smart city", "ipa": "/smɑːt ˈsɪti/", "vi": "thành phố thông minh", "col": "build a smart city", "ex": "To build a smart city, planners use live data on traffic, water and power.", "exv": "Để xây thành phố thông minh, nhà quy hoạch dùng dữ liệu trực tiếp về giao thông, nước và điện."},
{"w": "city centre", "ipa": "/ˈsɪti ˈsentə(r)/", "vi": "trung tâm thành phố", "col": "live near the city centre", "ex": "Many students live near the city centre because buses run late there.", "exv": "Nhiều sinh viên sống gần trung tâm thành phố vì xe buýt chạy muộn ở đó."},
{"w": "suburban area", "ipa": "/səˈbɜːbən ˈeəriə/", "vi": "khu vực ngoại ô", "col": "a quiet suburban area", "ex": "A quiet suburban area suits families who want a garden and less noise.", "exv": "Khu vực ngoại ô yên tĩnh hợp với gia đình muốn có vườn và ít ồn."},
{"w": "housing shortage", "ipa": "/ˈhaʊzɪŋ ˈʃɔːtɪdʒ/", "vi": "sự thiếu nhà ở", "col": "a serious housing shortage", "ex": "A serious housing shortage pushes rents up faster than wages.", "exv": "Thiếu nhà ở nghiêm trọng đẩy tiền thuê tăng nhanh hơn lương."},
{"w": "green belt", "ipa": "/ɡriːn belt/", "vi": "vành đai xanh", "col": "protect the green belt", "ex": "The council promised to protect the green belt around the city from new building.", "exv": "Hội đồng hứa bảo vệ vành đai xanh quanh thành phố khỏi xây dựng mới."},
{"w": "public square", "ipa": "/ˈpʌblɪk skweə(r)/", "vi": "quảng trường công cộng", "col": "meet in the public square", "ex": "Friends often meet in the public square before walking to the market.", "exv": "Bạn bè thường gặp nhau ở quảng trường công cộng trước khi đi bộ ra chợ."},
{"w": "peak-hour traffic", "ipa": "/piːk aʊə(r) ˈtræfɪk/", "vi": "giao thông giờ cao điểm", "col": "avoid peak-hour traffic", "ex": "Leave home early if you want to avoid peak-hour traffic on the main road.", "exv": "Hãy rời nhà sớm nếu muốn tránh giao thông giờ cao điểm trên đường chính."},
{"w": "metro line", "ipa": "/ˈmetrəʊ laɪn/", "vi": "tuyến tàu điện ngầm", "col": "a new metro line", "ex": "A new metro line will cut the trip from the suburbs to the centre to 20 minutes.", "exv": "Tuyến tàu điện ngầm mới sẽ rút chuyến đi từ ngoại ô vào trung tâm còn 20 phút."},
{"w": "bus network", "ipa": "/bʌs ˈnetwɜːk/", "vi": "mạng lưới xe buýt", "col": "a reliable bus network", "ex": "A reliable bus network matters more than one fast line alone.", "exv": "Mạng lưới xe buýt đáng tin quan trọng hơn chỉ một tuyến nhanh."},
{"w": "walkability", "ipa": "/ˌwɔːkəˈbɪləti/", "vi": "sự thuận tiện đi bộ", "col": "improve walkability", "ex": "Wide pavements and shade trees improve walkability in hot cities.", "exv": "Vỉa hè rộng và cây bóng mát cải thiện sự thuận tiện đi bộ ở thành phố nóng."},
{"w": "urban renewal", "ipa": "/ˈɜːbən rɪˈnjuːəl/", "vi": "sự đổi mới đô thị", "col": "an urban renewal project", "ex": "An urban renewal project turned an old factory area into homes and studios.", "exv": "Dự án đổi mới đô thị biến khu nhà máy cũ thành nhà ở và xưởng làm việc."},
{"w": "air quality", "ipa": "/eə(r) ˈkwɒləti/", "vi": "chất lượng không khí", "col": "monitor air quality", "ex": "Schools now monitor air quality and keep children inside on bad days.", "exv": "Trường học nay theo dõi chất lượng không khí và giữ trẻ trong nhà vào ngày xấu."},
{"w": "noise pollution", "ipa": "/nɔɪz pəˈluːʃn/", "vi": "ô nhiễm tiếng ồn", "col": "reduce noise pollution", "ex": "Double windows help reduce noise pollution for flats near busy roads.", "exv": "Cửa sổ hai lớp giúp giảm ô nhiễm tiếng ồn cho căn hộ gần đường đông."}
]
},
{
"topic": "Truyền thông và xã hội số",
"theme": "Digital Society - Xã hội số",
"band": "Band 7.0",
"cards": [
{"w": "digital literacy", "ipa": "/ˈdɪdʒɪtl ˈlɪtərəsi/", "vi": "năng lực số", "col": "teach digital literacy", "ex": "Schools should teach digital literacy so children can judge online news.", "exv": "Trường học nên dạy năng lực số để trẻ đánh giá được tin tức trực tuyến."},
{"w": "misinformation", "ipa": "/ˌmɪsɪnfəˈmeɪʃn/", "vi": "thông tin sai lệch", "col": "spread misinformation online", "ex": "False health claims spread misinformation online very fast.", "exv": "Lời khẳng định sức khỏe sai lan truyền thông tin sai lệch trực tuyến rất nhanh."},
{"w": "fact-checking", "ipa": "/fækt ˈtʃekɪŋ/", "vi": "sự kiểm chứng sự thật", "col": "do fact-checking first", "ex": "Do fact-checking first before you share a shocking story.", "exv": "Hãy kiểm chứng sự thật trước khi chia sẻ một câu chuyện gây sốc."},
{"w": "social media influence", "ipa": "/ˈsəʊʃl ˈmiːdiə ˈɪnfluəns/", "vi": "ảnh hưởng của mạng xã hội", "col": "social media influence on teens", "ex": "Social media influence on teens worries many parents and teachers.", "exv": "Ảnh hưởng của mạng xã hội lên thanh thiếu niên khiến nhiều phụ huynh và giáo viên lo."},
{"w": "digital footprint", "ipa": "/ˈdɪdʒɪtl ˈfʊtprɪnt/", "vi": "dấu vết số", "col": "your digital footprint", "ex": "Your digital footprint stays online long after you delete a post.", "exv": "Dấu vết số của bạn còn ở trực tuyến lâu sau khi bạn xóa bài đăng."},
{"w": "echo chamber", "ipa": "/ˈekəʊ ˈtʃeɪmbə(r)/", "vi": "buồng vang (chỉ nghe ý giống mình)", "col": "stuck in an echo chamber", "ex": "If you only follow people who agree with you, you live in an echo chamber.", "exv": "Nếu bạn chỉ theo dõi người đồng ý với mình, bạn sống trong buồng vang."},
{"w": "viral content", "ipa": "/ˈvaɪrəl ˈkɒntent/", "vi": "nội dung lan truyền mạnh", "col": "create viral content", "ex": "Short, funny videos often become viral content overnight.", "exv": "Video ngắn, hài hước thường thành nội dung lan truyền mạnh chỉ sau một đêm."},
{"w": "online community", "ipa": "/ˈɒnlaɪn kəˈmjuːnəti/", "vi": "cộng đồng trực tuyến", "col": "join an online community", "ex": "She joined an online community of learners who practise English daily.", "exv": "Cô ấy tham gia cộng đồng trực tuyến của người học luyện tiếng Anh hằng ngày."},
{"w": "digital divide", "ipa": "/ˈdɪdʒɪtl dɪˈvaɪd/", "vi": "khoảng cách số", "col": "bridge the digital divide", "ex": "Cheap phones and free wifi can help bridge the digital divide.", "exv": "Điện thoại rẻ và wifi miễn phí có thể giúp thu hẹp khoảng cách số."},
{"w": "cyberbullying", "ipa": "/ˈsaɪbəbʊliɪŋ/", "vi": "bắt nạt trực tuyến", "col": "stop cyberbullying", "ex": "Schools must act fast to stop cyberbullying and support the victim.", "exv": "Trường học phải hành động nhanh để chặn bắt nạt trực tuyến và hỗ trợ nạn nhân."},
{"w": "data protection", "ipa": "/ˈdeɪtə prəˈtekʃn/", "vi": "bảo vệ dữ liệu", "col": "strong data protection rules", "ex": "Strong data protection rules limit what firms can do with your photos.", "exv": "Quy tắc bảo vệ dữ liệu chặt hạn chế điều công ty được làm với ảnh của bạn."},
{"w": "media literacy", "ipa": "/ˈmiːdiə ˈlɪtərəsi/", "vi": "năng lực truyền thông", "col": "build media literacy", "ex": "Lessons that build media literacy teach students to spot biased reports.", "exv": "Bài học xây năng lực truyền thông dạy học sinh nhận ra bản tin thiên lệch."},
{"w": "information overload", "ipa": "/ˌɪnfəˈmeɪʃn ˈəʊvələʊd/", "vi": "quá tải thông tin", "col": "suffer from information overload", "ex": "Too many alerts can make workers suffer from information overload.", "exv": "Quá nhiều thông báo có thể khiến người lao động bị quá tải thông tin."},
{"w": "virtual identity", "ipa": "/ˈvɜːtʃuəl aɪˈdentəti/", "vi": "danh tính ảo", "col": "a separate virtual identity", "ex": "Some gamers keep a separate virtual identity that differs from real life.", "exv": "Một số game thủ giữ danh tính ảo riêng, khác với đời thật."},
{"w": "online reputation", "ipa": "/ˈɒnlaɪn ˌrepjuˈteɪʃn/", "vi": "danh tiếng trực tuyến", "col": "protect your online reputation", "ex": "Think before you post, because one rude comment can harm your online reputation.", "exv": "Hãy nghĩ trước khi đăng, vì một bình luận thô lỗ có thể hại danh tiếng trực tuyến của bạn."},
{"w": "digital citizenship", "ipa": "/ˈdɪdʒɪtl ˈsɪtɪzənʃɪp/", "vi": "công dân số", "col": "lessons in digital citizenship", "ex": "Lessons in digital citizenship teach respect, honesty and safety online.", "exv": "Bài học về công dân số dạy sự tôn trọng, trung thực và an toàn trực tuyến."},
{"w": "content creator", "ipa": "/ˈkɒntent kriˈeɪtə(r)/", "vi": "người sáng tạo nội dung", "col": "a popular content creator", "ex": "A popular content creator can earn money from short teaching videos.", "exv": "Người sáng tạo nội dung nổi tiếng có thể kiếm tiền từ video dạy ngắn."},
{"w": "deepfake", "ipa": "/ˈdiːpfeɪk/", "vi": "video giả mạo sâu", "col": "a deepfake video", "ex": "A deepfake video can make a famous person seem to say things they never said.", "exv": "Video giả mạo sâu có thể khiến người nổi tiếng dường như nói điều họ chưa từng nói."},
{"w": "algorithm transparency", "ipa": "/ˈælɡərɪðəm trænsˈpærənsi/", "vi": "sự minh bạch thuật toán", "col": "demand algorithm transparency", "ex": "Users now demand algorithm transparency from big video platforms.", "exv": "Người dùng nay yêu cầu minh bạch thuật toán từ các nền tảng video lớn."},
{"w": "screen dependency", "ipa": "/skriːn dɪˈpendənsi/", "vi": "sự phụ thuộc màn hình", "col": "reduce screen dependency", "ex": "A phone-free evening helps families reduce screen dependency step by step.", "exv": "Buổi tối không điện thoại giúp gia đình giảm phụ thuộc màn hình từng bước."}
]
}
]);
CONTENT.listening.push.apply(CONTENT.listening, [
{"section": "Section 4", "topic": "Rạn san hô và đa dạng sinh học biển", "band": "Band 7.5+", "text": "Coral reefs cover less than one percent of the ocean floor, yet they support about a quarter of all marine species. A single reef can shelter thousands of fish, crabs, and molluscs, and it protects nearby coasts by breaking large waves before they reach the shore. When sea water becomes warmer, corals expel the tiny algae that feed them, and the reef turns white in a process called bleaching. If the heat lasts only a short time, the reef may recover, but repeated bleaching weakens it and leaves less food for the animals that depend on it. Scientists now grow coral fragments in underwater nurseries and return them to damaged reefs, hoping to rebuild the living structure faster than nature alone could manage. Local fishing rules also matter, because overfishing removes the fish that clean algae from coral and keep the reef in balance."},
{"section": "Section 4", "topic": "Trí tuệ nhân tạo và thị trường việc làm", "band": "Band 7.5+", "text": "The debate about artificial intelligence and work often swings between fear and excitement, but the evidence points to a more mixed picture. Machines now handle routine tasks such as sorting documents, checking forms, and answering simple questions, which frees human workers for jobs that need judgement, empathy, and creativity. At the same time, whole roles built only on repetition are shrinking, and workers without new training may find it harder to move into better-paid work. Economists therefore argue that education systems should teach adaptable skills, such as problem solving and clear communication, rather than narrow facts that a machine can learn faster. Employers also share responsibility, because short retraining courses inside firms can help older workers shift to new roles instead of leaving the labour market altogether. The fairest outcome will depend less on the technology itself than on the policies that surround it."},
{"section": "Section 4", "topic": "Đảo nhiệt đô thị", "band": "Band 7.5+", "text": "On a hot summer night, the centre of a large city can be five degrees warmer than the countryside around it, a gap known as the urban heat island effect. Concrete, asphalt, and glass absorb heat during the day and release it slowly after dark, while the lack of trees means there is little shade and almost no cooling from leaves. This extra heat is not merely uncomfortable, because it raises the risk of heatstroke for elderly people and increases the demand for air conditioning, which in turn produces more waste heat. Planners have begun to respond with green roofs, tree-lined streets, and lighter building materials that reflect rather than store sunlight. Water features and small parks can also help, since evaporation cools the air in much the same way that sweat cools the skin. A cooler city is therefore a design choice, not an accident of geography."},
{"section": "Section 4", "topic": "Khảo cổ học dưới nước", "band": "Band 7.5+", "text": "Underwater archaeology studies what the sea has preserved and what it has hidden, from sunken ships to flooded settlements that once stood on dry land. Unlike a site on land, a wreck lies in darkness and cold water, where low oxygen can protect wood, rope, and even paper for centuries. Divers map the site with photographs and careful measurements before anything is moved, because the position of each object tells a story about how the ship sank or how the cargo was stored. Raising artefacts is only the second step, since wood that has soaked for hundreds of years may collapse within hours if it dries in open air. Conservators therefore keep finds wet and treat them slowly, sometimes for years, before they can be shown in a museum. Each successful project reminds us that history does not end at the shoreline."},
{"section": "Section 4", "topic": "Trí nhớ dài hạn và việc học", "band": "Band 7.5+", "text": "Long-term memory does not work like a video recording, because every time we recall an event we partly rebuild it from fragments. This rebuilding explains why two witnesses can remember the same accident differently, and why a memory can grow more confident even as its details change. For learners, the lesson is practical rather than abstract, since testing yourself forces the brain to rebuild the material and strengthens the path to it. Spreading practice over several days works better than studying for six hours in one night, because sleep gives the brain time to consolidate what was practised. Teachers can use this knowledge by returning to old topics briefly at the start of each lesson, instead of teaching each unit once and never revisiting it. In short, forgetting is not the enemy of learning, because the effort of remembering is what makes knowledge last."},
{"section": "Section 4", "topic": "Năng lượng hạt nhân và an toàn", "band": "Band 7.5+", "text": "Nuclear power divides public opinion more sharply than almost any other energy source, because its benefits and its risks both seem unusually large. A single plant can supply electricity for a whole city without producing carbon dioxide during operation, which makes it attractive to countries trying to cut emissions quickly. Yet the same plant produces waste that stays dangerous for thousands of years, and a serious accident, however rare, can force thousands of people from their homes. Modern designs try to reduce these risks with passive safety systems that shut the reactor down without human action or external power. Supporters argue that these designs, combined with strict inspection, make nuclear power safer than coal, which harms health every day through air pollution. Critics reply that cost, waste, and public trust remain unsolved, and that cheaper solar and wind power now offer a simpler path."},
{"section": "Section 1", "topic": "Đặt vé xem phim", "band": "Band 2.0", "text": "A: Good evening. I would like to book two tickets for the film at 7 o'clock, please. B: Certainly. Do you want seats at the back? A: Yes, please. B: There are two seats in row H, numbers 12 and 13. Is that OK? A: Yes. How much are the tickets? B: Each ticket costs 90000 dong, so two tickets cost 180000 dong. A: Can I pay by card? B: Yes, of course. Please arrive early. A: Thank you very much. B: You are welcome. Enjoy the film!"},
{"section": "Section 1", "topic": "Mua thuốc ở hiệu thuốc", "band": "Band 2.0", "text": "A: Good morning. I have a headache and a sore throat. Can you help me? B: Of course. How long have you felt like this? A: Since yesterday evening. B: This medicine is good for headaches. Take one tablet twice a day. A: How much is it? B: It costs 45000 dong. A: I would like some cough sweets as well. B: Here you are. Drink a lot of water and rest at home today. A: Thank you for your help. B: You are welcome. Get well soon!"},
{"section": "Section 1", "topic": "Đăng ký thẻ thành viên siêu thị", "band": "Band 2.0", "text": "A: Good afternoon. I would like to get a member card, please. B: Certainly. May I have your name and phone number? A: My name is Lan Anh, and my phone number is 0987654321. B: Thank you. The card is free, and you will get 5 percent off every Friday. A: That sounds good. Can I use the card today? B: Yes, you can use it straight away at the checkout. A: Great. Thank you very much. B: You are welcome. Have a nice day!"},
{"section": "Section 2", "topic": "Thông báo của tiệm cắt tóc Sunny", "band": "Band 2.0", "text": "Good morning, and welcome to Sunny Hair Salon. Our salon opens at 9 o'clock in the morning and closes at 8 o'clock in the evening. We are open every day except Monday. To book an appointment, please call us or come to the salon on Flower Street. A haircut costs 80000 dong, and washing your hair costs 30000 dong extra. On Saturday and Sunday, please book one day before, because the salon is very busy. Thank you for choosing Sunny Hair Salon!"},
{"section": "Section 2", "topic": "Hỏi đường đến ga tàu", "band": "Band 2.0", "text": "A: Excuse me, how can I get to the train station? B: Go straight along this road for about five minutes. A: Do I turn left at the end of the road? B: Yes, turn left, and then walk past the small market. A: Is the station far from the market? B: No, it is near. After the market, turn right, and you will see the station. A: How long does it take on foot? B: About ten minutes. A: Thank you. B: You are welcome. Have a safe trip!"},
{"section": "Section 1", "topic": "Mua vé xe buýt tháng", "band": "Band 2.0", "text": "A: Good morning. I would like to buy a monthly bus ticket, please. B: Certainly. Do you travel to school or to work? A: I travel to school every day, from Monday to Friday. B: A student monthly ticket costs 100000 dong. May I see your student card? A: Yes, here it is. B: Thank you. This ticket is valid for one month. A: Thank you. B: You are welcome!"},
{"section": "Section 1", "topic": "Chào buổi chiều ở lớp học", "band": "Band 0", "text": "A: Good afternoon, class! B: Good afternoon, teacher! A: How are you today? B: We are fine, thank you. And you? A: I am very well, thank you. Please sit down. B: Yes, teacher. A: Let us start our lesson now. B: OK, teacher!"},
{"section": "Section 1", "topic": "Tôi là học sinh mới", "band": "Band 0", "text": "A: Hello! What is your name? B: Hello! My name is Minh. A: Nice to meet you, Minh. I am Lan. B: Nice to meet you too, Lan. A: Are you a new student? B: Yes, I am. A: Welcome to our class! B: Thank you very much!"},
{"section": "Section 1", "topic": "Đếm từ một đến mười", "band": "Band 0", "text": "Teacher: Let us count together. One, two, three, four, five. Class: One, two, three, four, five. Teacher: Good! Now six, seven, eight, nine, ten. Class: Six, seven, eight, nine, ten. Teacher: Very good! Count again, please. Class: One, two, three, four, five, six, seven, eight, nine, ten!"},
{"section": "Section 1", "topic": "Hôm nay là thứ Hai", "band": "Band 0", "text": "A: Hello, Nam. What day is it today? B: Today is Monday. A: Is it Monday today? B: Yes, it is. Tomorrow is Tuesday. A: What time is it now? B: It is 8 o'clock in the morning. A: It is time for school! B: Yes! Let us go!"}
]);
CONTENT.zhVocab.push.apply(CONTENT.zhVocab, [
{
"topic": "Công việc văn phòng — Làm việc trong văn phòng",
"hsk": "HSK4",
"hskNote": "Mức đặt theo chủ đề công việc văn phòng cấp 4; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
"cards": [
{"han": "会议室", "pinyin": "huìyìshì", "vi": "phòng họp", "col": "在会议室开会", "ex": "我们在会议室开会。", "exv": "Chúng tôi họp trong phòng họp."},
{"han": "复印", "pinyin": "fùyìn", "vi": "photocopy", "col": "复印文件", "ex": "请帮我复印这份文件。", "exv": "Hãy giúp tôi photocopy tài liệu này."},
{"han": "打印", "pinyin": "dǎyìn", "vi": "in (tài liệu)", "col": "打印报告", "ex": "他先打印报告，再交给经理。", "exv": "Anh ấy in báo cáo trước, rồi giao cho giám đốc."},
{"han": "文件", "pinyin": "wénjiàn", "vi": "tài liệu, văn kiện", "col": "整理文件", "ex": "下班前要整理好文件。", "exv": "Trước khi tan làm phải sắp xếp xong tài liệu."},
{"han": "总结", "pinyin": "zǒngjié", "vi": "tổng kết", "col": "写总结", "ex": "这个星期我要写一份总结。", "exv": "Tuần này tôi phải viết một bản tổng kết."},
{"han": "计划", "pinyin": "jìhuà", "vi": "kế hoạch", "col": "做计划", "ex": "我们先做计划，再开始工作。", "exv": "Chúng tôi làm kế hoạch trước, rồi mới bắt đầu làm việc."},
{"han": "商量", "pinyin": "shāngliang", "vi": "bàn bạc", "col": "跟同事商量", "ex": "这个办法要跟同事商量一下。", "exv": "Cách này phải bàn bạc với đồng nghiệp một chút."},
{"han": "批准", "pinyin": "pīzhǔn", "vi": "phê duyệt", "col": "经理批准", "ex": "经理批准了这个计划。", "exv": "Giám đốc đã phê duyệt kế hoạch này."},
{"han": "负责", "pinyin": "fùzé", "vi": "phụ trách", "col": "负责这个任务", "ex": "小王负责这个任务。", "exv": "Tiểu Vương phụ trách nhiệm vụ này."},
{"han": "任务", "pinyin": "rènwu", "vi": "nhiệm vụ", "col": "完成任务", "ex": "今天必须完成这个任务。", "exv": "Hôm nay phải hoàn thành nhiệm vụ này."},
{"han": "进度", "pinyin": "jìndù", "vi": "tiến độ", "col": "工作进度", "ex": "经理每天问工作进度。", "exv": "Giám đốc mỗi ngày hỏi tiến độ công việc."},
{"han": "截止日期", "pinyin": "jiézhǐ rìqī", "vi": "hạn chót", "col": "记住截止日期", "ex": "请记住报告的截止日期。", "exv": "Hãy nhớ hạn chót của báo cáo."},
{"han": "汇报", "pinyin": "huìbào", "vi": "báo cáo (trình bày)", "col": "向经理汇报", "ex": "星期五向经理汇报工作。", "exv": "Thứ Sáu báo cáo công việc với giám đốc."},
{"han": "审批", "pinyin": "shěnpī", "vi": "xét duyệt", "col": "等审批", "ex": "这份文件还在等审批。", "exv": "Tài liệu này vẫn đang chờ xét duyệt."},
{"han": "预算", "pinyin": "yùsuàn", "vi": "ngân sách dự kiến", "col": "做预算", "ex": "活动开始前要先做预算。", "exv": "Trước khi bắt đầu hoạt động phải làm ngân sách dự kiến trước."},
{"han": "部门", "pinyin": "bùmén", "vi": "phòng ban", "col": "我们部门", "ex": "我们部门有十个人。", "exv": "Phòng ban chúng tôi có mười người."},
{"han": "经理", "pinyin": "jīnglǐ", "vi": "giám đốc, quản lý", "col": "请问经理", "ex": "这个问题请问经理。", "exv": "Vấn đề này hãy hỏi giám đốc."},
{"han": "秘书", "pinyin": "mìshū", "vi": "thư ký", "col": "经理的秘书", "ex": "经理的秘书帮他安排会议。", "exv": "Thư ký của giám đốc giúp anh ấy sắp xếp cuộc họp."},
{"han": "协议", "pinyin": "xiéyì", "vi": "thỏa thuận", "col": "签协议", "ex": "两家公司签了协议。", "exv": "Hai công ty đã ký thỏa thuận."},
{"han": "安排", "pinyin": "ānpái", "vi": "sắp xếp", "col": "安排时间", "ex": "秘书帮我安排时间见客户。", "exv": "Thư ký giúp tôi sắp xếp thời gian gặp khách hàng."}
]
},
{
"topic": "Sức khỏe và bệnh viện — Khám bệnh và chăm sóc",
"hsk": "HSK4",
"hskNote": "Mức đặt theo chủ đề sức khỏe và bệnh viện cấp 4; tài liệu HSK tham khảo không có bảng từ từng cấp nên nhãn này là mức đặt chủ đề, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
"cards": [
{"han": "检查", "pinyin": "jiǎnchá", "vi": "kiểm tra", "col": "做检查", "ex": "医生先做检查，再开药。", "exv": "Bác sĩ kiểm tra trước, rồi mới kê thuốc."},
{"han": "治疗", "pinyin": "zhìliáo", "vi": "điều trị", "col": "接受治疗", "ex": "他住院接受治疗。", "exv": "Anh ấy nằm viện để điều trị."},
{"han": "症状", "pinyin": "zhèngzhuàng", "vi": "triệu chứng", "col": "有什么症状", "ex": "你有什么症状？请告诉医生。", "exv": "Bạn có triệu chứng gì? Hãy nói với bác sĩ."},
{"han": "诊断", "pinyin": "zhěnduàn", "vi": "chẩn đoán", "col": "医生的诊断", "ex": "医生的诊断是感冒。", "exv": "Chẩn đoán của bác sĩ là cảm lạnh."},
{"han": "处方", "pinyin": "chǔfāng", "vi": "đơn thuốc", "col": "拿处方", "ex": "拿着处方去药房买药。", "exv": "Cầm đơn thuốc ra hiệu thuốc mua thuốc."},
{"han": "药房", "pinyin": "yàofáng", "vi": "hiệu thuốc", "col": "医院的药房", "ex": "医院的药房在二楼。", "exv": "Hiệu thuốc của bệnh viện ở tầng 2."},
{"han": "手术", "pinyin": "shǒushù", "vi": "phẫu thuật", "col": "做手术", "ex": "他明天要做手术。", "exv": "Ngày mai anh ấy phải phẫu thuật."},
{"han": "病房", "pinyin": "bìngfáng", "vi": "phòng bệnh", "col": "安静的病房", "ex": "病房很安静，适合休息。", "exv": "Phòng bệnh rất yên tĩnh, thích hợp để nghỉ ngơi."},
{"han": "体检", "pinyin": "tǐjiǎn", "vi": "khám sức khỏe tổng quát", "col": "每年体检", "ex": "公司每年安排员工体检。", "exv": "Công ty mỗi năm sắp xếp cho nhân viên khám sức khỏe."},
{"han": "血压", "pinyin": "xuèyā", "vi": "huyết áp", "col": "量血压", "ex": "护士先帮他量血压。", "exv": "Y tá đo huyết áp cho anh ấy trước."},
{"han": "过敏", "pinyin": "guòmǐn", "vi": "dị ứng", "col": "对花粉过敏", "ex": "她对花粉过敏，春天很难受。", "exv": "Cô ấy dị ứng phấn hoa, mùa xuân rất khó chịu."},
{"han": "伤口", "pinyin": "shāngkǒu", "vi": "vết thương", "col": "伤口很疼", "ex": "伤口很疼，要小心。", "exv": "Vết thương rất đau, phải cẩn thận."},
{"han": "发炎", "pinyin": "fāyán", "vi": "viêm, sưng viêm", "col": "伤口发炎", "ex": "伤口发炎了，要去看医生。", "exv": "Vết thương bị viêm rồi, phải đi khám bác sĩ."},
{"han": "打针", "pinyin": "dǎzhēn", "vi": "tiêm", "col": "去打针", "ex": "孩子怕打针，妈妈安慰他。", "exv": "Đứa trẻ sợ tiêm, mẹ an ủi nó."},
{"han": "输液", "pinyin": "shūyè", "vi": "truyền dịch", "col": "输液三天", "ex": "医生让他输液三天。", "exv": "Bác sĩ bảo anh ấy truyền dịch ba ngày."},
{"han": "护理", "pinyin": "hùlǐ", "vi": "chăm sóc (bệnh nhân)", "col": "护理病人", "ex": "护士认真护理病人。", "exv": "Y tá chăm sóc bệnh nhân chu đáo."},
{"han": "营养", "pinyin": "yíngyǎng", "vi": "dinh dưỡng", "col": "注意营养", "ex": "生病的时候要注意营养。", "exv": "Lúc ốm phải chú ý dinh dưỡng."},
{"han": "心理", "pinyin": "xīnlǐ", "vi": "tâm lý", "col": "心理压力", "ex": "工作太多，心理压力很大。", "exv": "Việc nhiều quá nên áp lực tâm lý rất lớn."},
{"han": "预防", "pinyin": "yùfáng", "vi": "phòng ngừa", "col": "预防感冒", "ex": "多运动可以预防感冒。", "exv": "Tập thể dục nhiều có thể phòng ngừa cảm lạnh."},
{"han": "复查", "pinyin": "fùchá", "vi": "tái khám", "col": "下周复查", "ex": "医生让他下周来复查。", "exv": "Bác sĩ bảo anh ấy tuần sau đến tái khám."}
]
}
]);
ZH_GRAMMAR.push.apply(ZH_GRAMMAR, [
{
"id": "s4-suiran", "stage": 4, "title": "虽然…但是 — tuy… nhưng…",
"hook": "“虽然很累，但是我还想学” — mệt thì mệt, nhưng vẫn muốn học: tuy… nhưng… nói hai mặt trái ngược.",
"examples": [
"虽然今天下雨，但是我们还是去公园。(Suīrán jīntiān xià yǔ, dànshì wǒmen háishi qù gōngyuán.) — Tuy hôm nay mưa, nhưng chúng tôi vẫn đi công viên.",
"虽然他很累，但是他没有休息。(Suīrán tā hěn lèi, dànshì tā méiyǒu xiūxi.) — Tuy anh ấy rất mệt, nhưng anh ấy không nghỉ.",
"虽然这件衣服很贵，但是我很喜欢。(Suīrán zhè jiàn yīfu hěn guì, dànshì wǒ hěn xǐhuan.) — Tuy chiếc áo này rất đắt, nhưng tôi rất thích.",
"虽然工作很难，但是大家都很努力。(Suīrán gōngzuò hěn nán, dànshì dàjiā dōu hěn nǔlì.) — Tuy công việc rất khó, nhưng mọi người đều rất cố gắng."
],
"speak": "虽然今天下雨，但是我们还是去公园。虽然他很累，但是他没有休息。虽然这件衣服很贵，但是我很喜欢。虽然工作很难，但是大家都很努力。",
"rule": "虽然 nêu điều trái ngược ở vế đầu, 但是 nêu ý chính ở vế sau. Hai chữ thường đi thành cặp, 但是 đứng đầu vế sau.",
"tip": "Hãy nhớ: 虽然 là “tuy”, 但是 là “nhưng” — nói điều khó trước, rồi nói quyết định sau.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
"quiz": [
{"q": "Điền chỗ trống: 虽然今天很忙，___ 我还是来了。", "o": ["但是", "如果", "而且", "因为"], "a": 0, "why": "虽然 đi với 但是: tuy bận, nhưng vẫn đến."},
{"q": "Câu nào dùng 虽然…但是 đúng?", "o": ["虽然下雨，但是我们去公园", "虽然下雨，如果我们去公园", "虽然下雨，而且我们去公园", "虽然下雨，因为我们去公园"], "a": 0, "why": "虽然…但是 là cặp nói hai mặt trái ngược."},
{"q": "“虽然很贵，但是我很喜欢” nghĩa là gì?", "o": ["Tuy đắt nhưng tôi rất thích", "Vì đắt nên tôi thích", "Nếu đắt thì tôi thích", "Không những đắt mà còn thích"], "a": 0, "why": "虽然 = tuy, 但是 = nhưng: tuy đắt nhưng rất thích."}
]
},
{
"id": "s4-budan", "stage": 4, "title": "不但…而且 — không những… mà còn…",
"hook": "“他不但会唱歌，而且会跳舞” — không những hát hay, mà còn nhảy giỏi: một người có hai điểm tốt.",
"examples": [
"他不但会唱歌，而且会跳舞。(Tā búdàn huì chànggē, érqiě huì tiàowǔ.) — Anh ấy không những biết hát mà còn biết nhảy.",
"这家饭馆不但便宜，而且很好吃。(Zhè jiā fànguǎn búdàn piányi, érqiě hěn hǎochī.) — Nhà hàng này không những rẻ mà còn rất ngon.",
"她不但学习好，而且很热心。(Tā búdàn xuéxí hǎo, érqiě hěn rèxīn.) — Cô ấy không những học giỏi mà còn rất nhiệt tình.",
"这个城市不但干净，而且很安静。(Zhège chéngshì búdàn gānjìng, érqiě hěn ānjìng.) — Thành phố này không những sạch mà còn rất yên tĩnh."
],
"speak": "他不但会唱歌，而且会跳舞。这家饭馆不但便宜，而且很好吃。她不但学习好，而且很热心。这个城市不但干净，而且很安静。",
"rule": "不但 nêu điểm tốt thứ nhất, 而且 nêu điểm tốt thứ hai, và điểm sau thường mạnh hơn điểm trước. Hai chữ đi thành cặp.",
"tip": "Hãy nhớ thứ tự: 不但 trước, 而且 sau — giống như “không những… mà còn…” trong tiếng Việt.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
"quiz": [
{"q": "Điền chỗ trống: 她不但聪明，___ 很努力。", "o": ["而且", "但是", "如果", "因为"], "a": 0, "why": "不但 đi với 而且: không những thông minh mà còn chăm chỉ."},
{"q": "Câu nào dùng 不但…而且 đúng?", "o": ["他不但会中文，而且会英文", "他不但会中文，但是会英文", "他不但会中文，如果会英文", "他不但会中文，因为会英文"], "a": 0, "why": "不但…而且 là cặp nói hai điểm tốt cùng lúc."}
]
},
{
"id": "s4-ruguo", "stage": 4, "title": "如果…就 — nếu… thì…",
"hook": "“如果下雨，我们就不去” — nếu mưa thì không đi: đặt điều kiện trước, rồi nói kết quả sau.",
"examples": [
"如果明天下雨，我们就不去爬山。(Rúguǒ míngtiān xià yǔ, wǒmen jiù bú qù páshān.) — Nếu ngày mai mưa, chúng tôi sẽ không đi leo núi.",
"如果你有时间，就帮我一下。(Rúguǒ nǐ yǒu shíjiān, jiù bāng wǒ yí xià.) — Nếu bạn có thời gian thì giúp tôi một chút.",
"如果他不来，我们就先开始。(Rúguǒ tā bù lái, wǒmen jiù xiān kāishǐ.) — Nếu anh ấy không đến, chúng tôi sẽ bắt đầu trước.",
"如果身体不舒服，就早点儿休息。(Rúguǒ shēntǐ bù shūfu, jiù zǎo diǎnr xiūxi.) — Nếu cơ thể không khỏe thì nghỉ sớm một chút."
],
"speak": "如果明天下雨，我们就不去爬山。如果你有时间，就帮我一下。如果他不来，我们就先开始。如果身体不舒服，就早点儿休息。",
"rule": "如果 nêu điều kiện ở vế đầu, 就 nêu kết quả ở vế sau. 就 thường đứng trước động từ của vế sau.",
"tip": "Hãy nhớ: 如果 là “nếu”, 就 là “thì” — điều kiện chưa xảy ra, kết quả đi sau nó.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
"quiz": [
{"q": "Điền chỗ trống: 如果你累了，___ 休息一下。", "o": ["就", "但是", "而且", "因为"], "a": 0, "why": "如果…就: nếu mệt thì nghỉ một chút."},
{"q": "“如果明天下雨，我们就不去” nghĩa là gì?", "o": ["Nếu ngày mai mưa thì chúng tôi không đi", "Tuy ngày mai mưa nhưng chúng tôi vẫn đi", "Vì ngày mai mưa nên chúng tôi đi", "Không những mưa mà chúng tôi còn đi"], "a": 0, "why": "如果 nêu điều kiện mưa, 就 nêu kết quả không đi."}
]
},
{
"id": "s4-ba", "stage": 4, "title": "把字句 — câu chữ 把 (nâng cao)",
"hook": "“我把书放在桌子上了” — tôi đặt sách lên bàn rồi: 把 đưa đồ vật lên trước động từ.",
"examples": [
"我把书放在桌子上了。(Wǒ bǎ shū fàng zài zhuōzi shang le.) — Tôi đã đặt sách lên bàn rồi.",
"请把门关上。(Qǐng bǎ mén guān shang.) — Hãy đóng cửa lại.",
"他把房间打扫干净了。(Tā bǎ fángjiān dǎsǎo gānjìng le.) — Anh ấy đã dọn phòng sạch rồi.",
"妈妈把衣服洗干净了。(Māma bǎ yīfu xǐ gānjìng le.) — Mẹ đã giặt quần áo sạch rồi."
],
"speak": "我把书放在桌子上了。请把门关上。他把房间打扫干净了。妈妈把衣服洗干净了。",
"rule": "把 + đồ vật + động từ + kết quả hoặc phương hướng. Sau động từ phải có thêm thành phần như 上, 干净, 在桌子上 — động từ không đứng trơ một mình.",
"tip": "Hãy nhớ công thức: 把 + cái gì + làm gì + kết quả ra sao.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
"quiz": [
{"q": "Câu nào là câu chữ 把 đúng?", "o": ["我把书放在桌子上了", "我把书放", "我放把书在桌子上", "我书把放在桌子上"], "a": 0, "why": "把 + 书 + 放 + 在桌子上: đồ vật lên trước động từ, sau động từ có phương hướng."},
{"q": "“请把门关上” nghĩa là gì?", "o": ["Hãy đóng cửa lại", "Hãy mở cửa ra", "Hãy lau cửa đi", "Hãy khóa cửa lại"], "a": 0, "why": "把门关上: đóng cửa lại, 上 chỉ phương hướng đóng vào."}
]
},
{
"id": "s4-bei", "stage": 4, "title": "被字句 — câu chữ 被 (nâng cao)",
"hook": "“我的手机被弟弟拿走了” — điện thoại của tôi bị em trai lấy đi mất: 被 nói việc không may xảy ra với đồ vật.",
"examples": [
"我的手机被弟弟拿走了。(Wǒ de shǒujī bèi dìdi ná zǒu le.) — Điện thoại của tôi bị em trai lấy đi mất.",
"衣服被雨淋湿了。(Yīfu bèi yǔ lín shī le.) — Quần áo bị mưa làm ướt.",
"他的自行车被偷了。(Tā de zìxíngchē bèi tōu le.) — Xe đạp của anh ấy bị trộm mất.",
"这个消息被大家知道了。(Zhège xiāoxi bèi dàjiā zhīdào le.) — Tin này đã bị mọi người biết rồi."
],
"speak": "我的手机被弟弟拿走了。衣服被雨淋湿了。他的自行车被偷了。这个消息被大家知道了。",
"rule": "被 + người gây ra (có thể bỏ) + động từ + kết quả. Câu 被 thường nói việc không mong muốn, và sau động từ phải có kết quả như 走了, 湿了, 偷了.",
"tip": "Hãy nhớ: đồ vật chịu tác động đứng trước 被, người làm ra việc (nếu có) đứng sau 被.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
"quiz": [
{"q": "Câu nào là câu chữ 被 đúng?", "o": ["他的自行车被偷了", "他的自行车偷了被", "被他的自行车偷了", "他的被自行车偷了"], "a": 0, "why": "自行车 + 被 + 偷了: đồ vật trước 被, động từ và kết quả sau."},
{"q": "“衣服被雨淋湿了” nghĩa là gì?", "o": ["Quần áo bị mưa làm ướt", "Quần áo làm mưa bị ướt", "Mưa bị quần áo làm ướt", "Quần áo phơi ngoài mưa"], "a": 0, "why": "衣服 chịu tác động, 雨 gây ra việc làm ướt."}
]
},
{
"id": "s4-bijiao", "stage": 4, "title": "比较句 — câu so sánh (比…更… / 没有…那么…)",
"hook": "“今天比昨天更冷” — hôm nay lạnh hơn hôm qua: 比 nói hơn, 没有…那么 nói kém hơn.",
"examples": [
"今天比昨天更冷。(Jīntiān bǐ zuótiān gèng lěng.) — Hôm nay lạnh hơn hôm qua.",
"这件衣服比那件更贵。(Zhè jiàn yīfu bǐ nà jiàn gèng guì.) — Chiếc áo này đắt hơn chiếc kia.",
"北京没有上海那么热。(Běijīng méiyǒu Shànghǎi nàme rè.) — Bắc Kinh không nóng bằng Thượng Hải.",
"我的中文没有他那么好。(Wǒ de Zhōngwén méiyǒu tā nàme hǎo.) — Tiếng Trung của tôi không tốt bằng anh ấy."
],
"speak": "今天比昨天更冷。这件衣服比那件更贵。北京没有上海那么热。我的中文没有他那么好。",
"rule": "比…更…: A 比 B 更 + tính từ (A hơn B). 没有…那么…: A 没有 B 那么 + tính từ (A không bằng B). Tính từ đứng cuối câu so sánh.",
"tip": "Hãy nhớ: 比 là “hơn”, 没有…那么 là “không bằng” — hai mẫu ngược nhau, đừng đổi chỗ.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng câu nằm trong khung từ vựng HSK 2.0 chính thức.",
"quiz": [
{"q": "“今天比昨天更冷” nghĩa là gì?", "o": ["Hôm nay lạnh hơn hôm qua", "Hôm qua lạnh hơn hôm nay", "Hôm nay và hôm qua lạnh như nhau", "Hôm nay không lạnh"], "a": 0, "why": "比…更…: hôm nay hơn hôm qua về độ lạnh."},
{"q": "“我的中文没有他那么好” nghĩa là gì?", "o": ["Tiếng Trung của tôi không tốt bằng anh ấy", "Tiếng Trung của tôi tốt hơn anh ấy", "Tiếng Trung của tôi tốt như anh ấy", "Anh ấy không biết tiếng Trung"], "a": 0, "why": "没有…那么…: tôi không bằng anh ấy."},
{"q": "Điền chỗ trống: 这件衣服___那件更贵。", "o": ["比", "被", "把", "跟"], "a": 0, "why": "比…更贵: chiếc áo này đắt hơn chiếc kia."}
]
}
]);
ZH_READING.push.apply(ZH_READING, [
{
"id": "s4-reading-congviec", "stage": 4, "title": "Tuần đầu đi làm của Tiểu Vương", "topic": "Công việc",
"text": "小王上个月开始在一家公司工作。他的工作是整理文件和安排会议。每天早上八点，他先检查今天的任务。上午，他跟同事讨论新的计划。中午，大家一起去食堂吃饭。下午，他把报告交给经理，经理会告诉他哪里要改。刚开始的时候，他觉得工作很难，但是同事都很热心。现在，他已经习惯了新的工作，也交了几个好朋友。",
"pinyin": "Xiǎo Wáng shàng ge yuè kāishǐ zài yì jiā gōngsī gōngzuò. Tā de gōngzuò shì zhěnglǐ wénjiàn hé ānpái huìyì. Měitiān zǎoshang bā diǎn, tā xiān jiǎnchá jīntiān de rènwu. Shàngwǔ, tā gēn tóngshì tǎolùn xīn de jìhuà. Zhōngwǔ, dàjiā yìqǐ qù shítáng chī fàn. Xiàwǔ, tā bǎ bàogào jiāo gěi jīnglǐ, jīnglǐ huì gàosu tā nǎlǐ yào gǎi. Gāng kāishǐ de shíhou, tā juéde gōngzuò hěn nán, dànshì tóngshì dōu hěn rèxīn. Xiànzài, tā yǐjīng xíguàn le xīn de gōngzuò, yě jiāo le jǐ ge hǎo péngyou.",
"vi": "Tháng trước Tiểu Vương bắt đầu làm việc ở một công ty. Công việc của anh ấy là sắp xếp tài liệu và sắp xếp cuộc họp. Mỗi sáng 8 giờ, anh ấy kiểm tra nhiệm vụ hôm nay trước. Buổi sáng, anh ấy thảo luận kế hoạch mới với đồng nghiệp. Buổi trưa, mọi người cùng đi ăn ở nhà ăn. Buổi chiều, anh ấy giao báo cáo cho giám đốc, giám đốc sẽ nói chỗ nào cần sửa. Lúc mới bắt đầu, anh ấy thấy công việc rất khó, nhưng đồng nghiệp đều rất nhiệt tình. Bây giờ, anh ấy đã quen với công việc mới, cũng kết bạn với vài người bạn tốt.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
"questions": [
{"q": "Công việc của Tiểu Vương là gì?", "o": ["Sắp xếp tài liệu và sắp xếp cuộc họp", "Lái xe và giao hàng", "Nấu ăn và dọn phòng", "Bán quần áo và thu tiền"], "a": 0, "why": "Bài viết: 他的工作是整理文件和安排会议."},
{"q": "Buổi chiều Tiểu Vương làm gì?", "o": ["Giao báo cáo cho giám đốc", "Đi họp ở công ty khác", "Về nhà sớm", "Đi mua tài liệu"], "a": 0, "why": "Bài viết: 下午，他把报告交给经理."},
{"q": "Lúc mới bắt đầu, Tiểu Vương thấy thế nào?", "o": ["Thấy công việc rất khó", "Thấy công việc rất dễ", "Thấy công việc rất buồn", "Thấy công việc rất nhanh"], "a": 0, "why": "Bài viết: 刚开始的时候，他觉得工作很难."},
{"q": "Bây giờ Tiểu Vương ra sao?", "o": ["Đã quen việc mới và có bạn tốt", "Đã nghỉ việc ở công ty", "Đã chuyển sang công ty khác", "Vẫn chưa quen việc"], "a": 0, "why": "Bài viết: 现在，他已经习惯了新的工作，也交了几个好朋友."}
]
},
{
"id": "s4-reading-tintuc", "stage": 4, "title": "Tuyến tàu điện ngầm mới của thành phố", "topic": "Tin tức",
"text": "昨天，市里开通了一条新的地铁线。这条线一共有十个站，从城东到城西。很多市民早上坐地铁去上班，比以前快二十分钟。车站里有清楚的标志，老人和孩子也容易找到路。市政府说，新地铁可以减少路上的汽车。记者采访了一位司机，他说现在开车没有以前那么堵了。不过，也有人说，早上高峰的时候车上还是很挤。",
"pinyin": "Zuótiān, shì lǐ kāitōng le yì tiáo xīn de dìtiě xiàn. Zhè tiáo xiàn yígòng yǒu shí ge zhàn, cóng chéng dōng dào chéng xī. Hěn duō shìmín zǎoshang zuò dìtiě qù shàngbān, bǐ yǐqián kuài èr shí fēnzhōng. Chēzhàn lǐ yǒu qīngchu de biāozhì, lǎorén hé háizi yě róngyì zhǎodào lù. Shì zhèngfǔ shuō, xīn dìtiě kěyǐ jiǎnshǎo lù shang de qìchē. Jìzhě cǎifǎng le yí wèi sījī, tā shuō xiànzài kāi chē méiyǒu yǐqián nàme dǔ le. Búguò, yě yǒu rén shuō, zǎoshang gāofēng de shíhou chē shang háishi hěn jǐ.",
"vi": "Hôm qua, thành phố khai trương một tuyến tàu điện ngầm mới. Tuyến này tổng cộng có mười ga, từ phía đông thành phố đến phía tây. Nhiều người dân buổi sáng đi tàu điện ngầm đi làm, nhanh hơn trước hai mươi phút. Trong ga có biển chỉ dẫn rõ ràng, người già và trẻ em cũng dễ tìm đường. Chính quyền thành phố nói tàu điện ngầm mới có thể giảm ô tô trên đường. Phóng viên phỏng vấn một tài xế, anh ấy nói bây giờ lái xe không tắc như trước. Tuy nhiên, cũng có người nói giờ cao điểm buổi sáng trên xe vẫn rất đông.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
"questions": [
{"q": "Tuyến tàu điện ngầm mới có mấy ga?", "o": ["Tám ga", "Mười ga", "Mười hai ga", "Hai mươi ga"], "a": 1, "why": "Bài viết: 这条线一共有十个站."},
{"q": "Đi tàu điện ngầm đi làm nhanh hơn trước bao nhiêu?", "o": ["Mười phút", "Hai mươi phút", "Ba mươi phút", "Một giờ"], "a": 1, "why": "Bài viết: 比以前快二十分钟."},
{"q": "Theo chính quyền thành phố, tàu điện ngầm mới có tác dụng gì?", "o": ["Giảm ô tô trên đường", "Tăng giá vé xe buýt", "Đóng cửa các ga cũ", "Cấm xe đạp"], "a": 0, "why": "Bài viết: 新地铁可以减少路上的汽车."},
{"q": "Vấn đề còn lại được nhắc đến là gì?", "o": ["Giờ cao điểm buổi sáng trên xe vẫn rất đông", "Ga tàu không có biển chỉ dẫn", "Tàu chạy quá chậm", "Không ai đi tàu điện ngầm"], "a": 0, "why": "Bài viết: 早上高峰的时候车上还是很挤."}
]
},
{
"id": "s4-reading-moitruong", "stage": 4, "title": "Ngày trồng cây của khu dân cư", "topic": "Môi trường",
"text": "上个星期六，小区组织居民一起种树。早上八点，三十多个人来到小区的空地上。大家先把垃圾分类，再把树苗种进土里。孩子们负责浇水，大人负责扶树苗。种完树以后，大家又在公园里捡垃圾。一个小时以后，公园变得干净多了。居委会说，以后每个月都要组织一次这样的活动。居民们都说，这样的活动不但对环境好，而且让邻居更熟悉。",
"pinyin": "Shàng ge xīngqīliù, xiǎoqū zǔzhī jūmín yìqǐ zhòng shù. Zǎoshang bā diǎn, sān shí duō ge rén láidào xiǎoqū de kōngdì shang. Dàjiā xiān bǎ lājī fēnlèi, zài bǎ shùmiáo zhòng jìn tǔ lǐ. Háizimen fùzé jiāo shuǐ, dàren fùzé fú shùmiáo. Zhòng wán shù yǐhòu, dàjiā yòu zài gōngyuán lǐ jiǎn lājī. Yí ge xiǎoshí yǐhòu, gōngyuán biàn de gānjìng duō le. Jūwěihuì shuō, yǐhòu měi ge yuè dōu yào zǔzhī yí cì zhèyàng de huódòng. Jūmínmen dōu shuō, zhèyàng de huódòng búdàn duì huánjìng hǎo, érqiě ràng línjū gèng shúxi.",
"vi": "Thứ Bảy tuần trước, khu dân cư tổ chức cư dân cùng trồng cây. Sáng 8 giờ, hơn ba mươi người đến bãi đất trống của khu. Mọi người phân loại rác trước, rồi trồng cây con xuống đất. Trẻ em phụ trách tưới nước, người lớn phụ trách đỡ cây con. Trồng cây xong, mọi người lại nhặt rác trong công viên. Một giờ sau, công viên sạch hơn nhiều. Ban quản lý khu nói sau này mỗi tháng đều tổ chức một hoạt động như vậy. Cư dân đều nói hoạt động như vậy không những tốt cho môi trường mà còn khiến hàng xóm thân thiết hơn.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
"questions": [
{"q": "Có bao nhiêu người tham gia trồng cây?", "o": ["Hơn mười người", "Hơn hai mươi người", "Hơn ba mươi người", "Hơn năm mươi người"], "a": 2, "why": "Bài viết: 三十多个人来到小区的空地上."},
{"q": "Trẻ em phụ trách việc gì?", "o": ["Tưới nước", "Đỡ cây con", "Phân loại rác", "Nhặt rác"], "a": 0, "why": "Bài viết: 孩子们负责浇水."},
{"q": "Sau một giờ, công viên thế nào?", "o": ["Sạch hơn nhiều", "Đông hơn nhiều", "Ồn hơn nhiều", "Tối hơn nhiều"], "a": 0, "why": "Bài viết: 公园变得干净多了."},
{"q": "Sau này khu dân cư sẽ tổ chức hoạt động này bao lâu một lần?", "o": ["Mỗi tuần một lần", "Mỗi tháng một lần", "Mỗi năm một lần", "Mỗi ngày một lần"], "a": 1, "why": "Bài viết: 以后每个月都要组织一次这样的活动."}
]
},
{
"id": "s4-reading-dulich", "stage": 4, "title": "Chuyến đi Hàng Châu", "topic": "Du lịch",
"text": "去年夏天，我和朋友去杭州旅行。我们先去西湖，湖边有很多柳树。上午，我们坐船游湖，风很舒服。中午，我们在一家小饭馆吃西湖有名的菜。下午，我们去茶园看茶农采茶，还买了一包新茶。晚上，我们在夜市买纪念品，也尝了当地的小吃。虽然走了很多路，但是大家都很开心。回来以后，我把照片发给家人，他们也想去杭州看看。",
"pinyin": "Qùnián xiàtiān, wǒ hé péngyou qù Hángzhōu lǚxíng. Wǒmen xiān qù Xī Hú, hú biān yǒu hěn duō liǔshù. Shàngwǔ, wǒmen zuò chuán yóu hú, fēng hěn shūfu. Zhōngwǔ, wǒmen zài yì jiā xiǎo fànguǎn chī Xī Hú yǒumíng de cài. Xiàwǔ, wǒmen qù cháyuán kàn chánóng cǎi chá, hái mǎi le yì bāo xīn chá. Wǎnshang, wǒmen zài yèshì mǎi jìniànpǐn, yě cháng le dāngdì de xiǎochī. Suīrán zǒu le hěn duō lù, dànshì dàjiā dōu hěn kāixīn. Huílai yǐhòu, wǒ bǎ zhàopiàn fā gěi jiārén, tāmen yě xiǎng qù Hángzhōu kànkan.",
"vi": "Mùa hè năm ngoái, tôi và bạn bè đi du lịch Hàng Châu. Chúng tôi đến Tây Hồ trước, bên hồ có nhiều cây liễu. Buổi sáng, chúng tôi ngồi thuyền dạo hồ, gió rất dễ chịu. Buổi trưa, chúng tôi ăn món nổi tiếng của Tây Hồ ở một quán nhỏ. Buổi chiều, chúng tôi đến vườn chè xem nông dân hái chè, còn mua một gói chè mới. Buổi tối, chúng tôi mua đồ lưu niệm ở chợ đêm, cũng nếm món ăn vặt địa phương. Tuy đi bộ rất nhiều đường, nhưng mọi người đều rất vui. Sau khi về, tôi gửi ảnh cho gia đình, họ cũng muốn đến Hàng Châu xem.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức.",
"questions": [
{"q": "Buổi sáng nhóm đi đâu và làm gì?", "o": ["Ngồi thuyền dạo hồ Tây Hồ", "Đi vườn chè hái chè", "Đi chợ đêm mua đồ", "Đi nhà hàng ăn trưa"], "a": 0, "why": "Bài viết: 上午，我们坐船游湖."},
{"q": "Buổi chiều nhóm mua gì?", "o": ["Một gói chè mới", "Một chiếc áo", "Một quyển sách", "Một chiếc thuyền"], "a": 0, "why": "Bài viết: 还买了一包新茶."},
{"q": "Tuy đi bộ nhiều nhưng mọi người thế nào?", "o": ["Đều rất vui", "Đều rất mệt và buồn", "Đều muốn về sớm", "Đều không nói chuyện"], "a": 0, "why": "Bài viết: 虽然走了很多路，但是大家都很开心."},
{"q": "Sau khi về, tác giả làm gì?", "o": ["Gửi ảnh cho gia đình", "Viết một quyển sách", "Mở một quán ăn", "Lên kế hoạch đi tiếp"], "a": 0, "why": "Bài viết: 回来以后，我把照片发给家人."}
]
}
]);
ZH_LISTENING.push.apply(ZH_LISTENING, [
{
"id": "s4-listen-hencongviec", "stage": 4, "title": "Hẹn họp công việc", "topic": "Hẹn công việc",
"lines": [
{"sp": "A", "han": "明天上午你有时间吗？", "py": "Míngtiān shàngwǔ nǐ yǒu shíjiān ma?", "vi": "Sáng mai bạn có thời gian không?"},
{"sp": "B", "han": "有啊，十点以后都可以。", "py": "Yǒu a, shí diǎn yǐhòu dōu kěyǐ.", "vi": "Có, sau 10 giờ lúc nào cũng được."},
{"sp": "A", "han": "那我们十点半在会议室见吧。", "py": "Nà wǒmen shí diǎn bàn zài huìyìshì jiàn ba.", "vi": "Vậy 10 giờ rưỡi chúng ta gặp ở phòng họp nhé."},
{"sp": "B", "han": "好，你要带什么文件吗？", "py": "Hǎo, nǐ yào dài shénme wénjiàn ma?", "vi": "Được, bạn cần mang tài liệu gì không?"},
{"sp": "A", "han": "请带上个月的报告，我想讨论一下。", "py": "Qǐng dài shàng ge yuè de bàogào, wǒ xiǎng tǎolùn yí xià.", "vi": "Hãy mang báo cáo tháng trước, tôi muốn thảo luận một chút."},
{"sp": "B", "han": "没问题，明天见。", "py": "Méi wèntí, míngtiān jiàn.", "vi": "Không vấn đề, mai gặp."}
],
"note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
"questions": [
{"q": "Hai người hẹn gặp lúc mấy giờ?", "o": ["9 giờ", "10 giờ", "10 giờ rưỡi", "11 giờ"], "a": 2, "why": "A nói: 我们十点半在会议室见吧."},
{"q": "Hai người gặp ở đâu?", "o": ["Ở nhà ăn", "Ở phòng họp", "Ở văn phòng giám đốc", "Ở cổng công ty"], "a": 1, "why": "A nói: 在会议室见吧."},
{"q": "B cần mang theo gì?", "o": ["Báo cáo tháng trước", "Báo cáo tháng này", "Một quyển sách", "Một chiếc máy tính"], "a": 0, "why": "A nói: 请带上个月的报告."}
]
},
{
"id": "s4-listen-thuenha", "stage": 4, "title": "Đi xem nhà thuê", "topic": "Thuê nhà",
"lines": [
{"sp": "A", "han": "请问，这间房子多少钱一个月？", "py": "Qǐngwèn, zhè jiān fángzi duōshao qián yí ge yuè?", "vi": "Xin hỏi, căn nhà này bao nhiêu tiền một tháng?"},
{"sp": "B", "han": "两千五百块，不包括水电。", "py": "Liǎng qiān wǔ bǎi kuài, bù bāokuò shuǐdiàn.", "vi": "2500 tệ, không bao gồm điện nước."},
{"sp": "A", "han": "房子离地铁站远吗？", "py": "Fángzi lí dìtiě zhàn yuǎn ma?", "vi": "Nhà cách ga tàu điện ngầm có xa không?"},
{"sp": "B", "han": "不远，走路十分钟就到了。", "py": "Bù yuǎn, zǒulù shí fēnzhōng jiù dào le.", "vi": "Không xa, đi bộ mười phút là tới."},
{"sp": "A", "han": "我可以先看一下房间吗？", "py": "Wǒ kěyǐ xiān kàn yí xià fángjiān ma?", "vi": "Tôi xem phòng trước được không?"},
{"sp": "B", "han": "当然可以，请跟我来。", "py": "Dāngrán kěyǐ, qǐng gēn wǒ lái.", "vi": "Tất nhiên được, mời đi theo tôi."}
],
"note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
"questions": [
{"q": "Tiền thuê nhà một tháng là bao nhiêu?", "o": ["1500 tệ", "2000 tệ", "2500 tệ", "3000 tệ"], "a": 2, "why": "B nói: 两千五百块."},
{"q": "Tiền thuê có bao gồm điện nước không?", "o": ["Có, bao gồm hết", "Không, không bao gồm", "Chỉ bao gồm nước", "Chỉ bao gồm điện"], "a": 1, "why": "B nói: 不包括水电."},
{"q": "Từ nhà đi bộ đến ga tàu mất bao lâu?", "o": ["Năm phút", "Mười phút", "Mười lăm phút", "Hai mươi phút"], "a": 1, "why": "B nói: 走路十分钟就到了."}
]
},
{
"id": "s4-listen-khambenh", "stage": 4, "title": "Đi khám vì sốt và đau đầu", "topic": "Khám bệnh",
"lines": [
{"sp": "A", "han": "医生，我头疼，还发烧。", "py": "Yīshēng, wǒ tóu téng, hái fāshāo.", "vi": "Bác sĩ, tôi đau đầu, còn sốt."},
{"sp": "B", "han": "你发烧几天了？", "py": "Nǐ fāshāo jǐ tiān le?", "vi": "Bạn sốt mấy ngày rồi?"},
{"sp": "A", "han": "两天了，昨天晚上更严重。", "py": "Liǎng tiān le, zuótiān wǎnshang gèng yánzhòng.", "vi": "Hai ngày rồi, tối qua nặng hơn."},
{"sp": "B", "han": "先量一下体温，再做检查。", "py": "Xiān liàng yí xià tǐwēn, zài zuò jiǎnchá.", "vi": "Đo thân nhiệt trước, rồi kiểm tra."},
{"sp": "A", "han": "医生，我要吃药吗？", "py": "Yīshēng, wǒ yào chī yào ma?", "vi": "Bác sĩ, tôi phải uống thuốc không?"},
{"sp": "B", "han": "要吃药，多喝水，多休息。", "py": "Yào chī yào, duō hē shuǐ, duō xiūxi.", "vi": "Phải uống thuốc, uống nhiều nước, nghỉ ngơi nhiều."}
],
"note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
"questions": [
{"q": "Bệnh nhân bị làm sao?", "o": ["Đau đầu và sốt", "Đau bụng và ho", "Đau chân và mệt", "Đau răng và sốt"], "a": 0, "why": "A nói: 我头疼，还发烧."},
{"q": "Bệnh nhân sốt mấy ngày rồi?", "o": ["Một ngày", "Hai ngày", "Ba ngày", "Bốn ngày"], "a": 1, "why": "A nói: 两天了."},
{"q": "Bác sĩ dặn bệnh nhân làm gì?", "o": ["Uống thuốc, uống nhiều nước, nghỉ ngơi nhiều", "Không uống thuốc, chỉ nghỉ ngơi", "Đi làm ngay", "Tập thể dục nặng"], "a": 0, "why": "B nói: 要吃药，多喝水，多休息."}
]
},
{
"id": "s4-listen-muasamonline", "stage": 4, "title": "Đổi giày mua trên mạng", "topic": "Mua sắm online",
"lines": [
{"sp": "A", "han": "你看，我在网上买的鞋子到了。", "py": "Nǐ kàn, wǒ zài wǎng shang mǎi de xiézi dào le.", "vi": "Bạn xem, giày tôi mua trên mạng đã đến."},
{"sp": "B", "han": "颜色好看吗？跟照片一样吗？", "py": "Yánsè hǎokàn ma? Gēn zhàopiàn yíyàng ma?", "vi": "Màu đẹp không? Giống ảnh không?"},
{"sp": "A", "han": "颜色一样，但是有点儿小。", "py": "Yánsè yíyàng, dànshì yǒu diǎnr xiǎo.", "vi": "Màu giống, nhưng hơi nhỏ."},
{"sp": "B", "han": "那你可以换大一号的。", "py": "Nà nǐ kěyǐ huàn dà yí hào de.", "vi": "Vậy bạn có thể đổi sang cỡ lớn hơn một số."},
{"sp": "A", "han": "换货要钱吗？", "py": "Huàn huò yào qián ma?", "vi": "Đổi hàng có mất tiền không?"},
{"sp": "B", "han": "不用，七天内免费换。", "py": "Bú yòng, qī tiān nèi miǎnfèi huàn.", "vi": "Không, trong bảy ngày đổi miễn phí."}
],
"note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
"questions": [
{"q": "Đôi giày có vấn đề gì?", "o": ["Màu khác ảnh", "Hơi nhỏ", "Bị rách", "Giao nhầm hàng"], "a": 1, "why": "A nói: 颜色一样，但是有点儿小."},
{"q": "A nên đổi sang cỡ nào?", "o": ["Cỡ nhỏ hơn một số", "Cỡ lớn hơn một số", "Cỡ giống như cũ", "Cỡ lớn hơn hai số"], "a": 1, "why": "B nói: 换大一号的."},
{"q": "Đổi hàng trong bao lâu thì miễn phí?", "o": ["Ba ngày", "Năm ngày", "Bảy ngày", "Mười ngày"], "a": 2, "why": "B nói: 七天内免费换."}
]
},
{
"id": "s4-listen-hoithamdulich", "stage": 4, "title": "Hỏi đường đi Tây Hồ", "topic": "Hỏi thăm du lịch",
"lines": [
{"sp": "A", "han": "请问，去西湖怎么走？", "py": "Qǐngwèn, qù Xī Hú zěnme zǒu?", "vi": "Xin hỏi, đi Tây Hồ thế nào?"},
{"sp": "B", "han": "坐二号地铁，在西湖站下车。", "py": "Zuò èr hào dìtiě, zài Xī Hú zhàn xià chē.", "vi": "Đi tàu số 2, xuống ở ga Tây Hồ."},
{"sp": "A", "han": "从车站走过去要多久？", "py": "Cóng chēzhàn zǒu guòqu yào duō jiǔ?", "vi": "Từ ga đi bộ qua đó mất bao lâu?"},
{"sp": "B", "han": "大概十分钟，路上有标志。", "py": "Dàgài shí fēnzhōng, lù shang yǒu biāozhì.", "vi": "Khoảng mười phút, trên đường có biển chỉ."},
{"sp": "A", "han": "西湖门票多少钱？", "py": "Xī Hú ménpiào duōshao qián?", "vi": "Vé vào Tây Hồ bao nhiêu tiền?"},
{"sp": "B", "han": "湖边免费，坐船才要钱。", "py": "Hú biān miǎnfèi, zuò chuán cái yào qián.", "vi": "Ven hồ miễn phí, ngồi thuyền mới mất tiền."}
],
"note": "Đoạn hội thoại tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ.",
"questions": [
{"q": "Đi Tây Hồ bằng phương tiện nào?", "o": ["Tàu số 1", "Tàu số 2", "Xe buýt số 2", "Taxi"], "a": 1, "why": "B nói: 坐二号地铁."},
{"q": "Từ ga đi bộ đến Tây Hồ mất bao lâu?", "o": ["Khoảng năm phút", "Khoảng mười phút", "Khoảng hai mươi phút", "Khoảng nửa giờ"], "a": 1, "why": "B nói: 大概十分钟."},
{"q": "Đi dạo ven hồ có mất tiền không?", "o": ["Có, vé rất đắt", "Không, ven hồ miễn phí", "Chỉ miễn phí buổi sáng", "Chỉ miễn phí cho trẻ em"], "a": 1, "why": "B nói: 湖边免费，坐船才要钱."}
]
}
]);
ZH_SPEAK.push.apply(ZH_SPEAK, [
{
"id": "s4-speak-congviec", "stage": 4, "title": "Họp nhóm chia việc", "topic": "Công việc",
"hook": "“我们先讨论一下计划吧” — họp nhóm bắt đầu bằng việc thảo luận kế hoạch.",
"lines": [
{"sp": "A", "han": "我们先讨论一下计划吧。", "py": "Wǒmen xiān tǎolùn yí xià jìhuà ba.", "vi": "Chúng ta thảo luận kế hoạch trước nhé."},
{"sp": "B", "han": "好，这个星期要完成报告。", "py": "Hǎo, zhège xīngqī yào wánchéng bàogào.", "vi": "Được, tuần này phải hoàn thành báo cáo."},
{"sp": "A", "han": "谁负责写第一部分？", "py": "Shéi fùzé xiě dì yí bùfen?", "vi": "Ai phụ trách viết phần đầu?"},
{"sp": "B", "han": "我负责第一部分，你负责第二部分。", "py": "Wǒ fùzé dì yí bùfen, nǐ fùzé dì èr bùfen.", "vi": "Tôi phụ trách phần đầu, bạn phụ trách phần hai."},
{"sp": "A", "han": "星期五我们再开会检查进度。", "py": "Xīngqīwǔ wǒmen zài kāihuì jiǎnchá jìndù.", "vi": "Thứ Sáu chúng ta họp lại kiểm tra tiến độ."}
],
"note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp."
},
{
"id": "s4-speak-thuenha", "stage": 4, "title": "Xem nhà thuê", "topic": "Thuê nhà",
"hook": "“这间房子很亮，也很安静” — khen nhà sáng và yên tĩnh là cách mở chuyện khi xem nhà.",
"lines": [
{"sp": "A", "han": "这间房子很亮，也很安静。", "py": "Zhè jiān fángzi hěn liàng, yě hěn ānjìng.", "vi": "Căn nhà này rất sáng, cũng rất yên tĩnh."},
{"sp": "B", "han": "是啊，早上阳光很好。", "py": "Shì a, zǎoshang yángguāng hěn hǎo.", "vi": "Đúng, buổi sáng nắng rất tốt."},
{"sp": "A", "han": "厨房可以用吗？", "py": "Chúfáng kěyǐ yòng ma?", "vi": "Bếp dùng được không?"},
{"sp": "B", "han": "可以，冰箱和洗衣机都可以用。", "py": "Kěyǐ, bīngxiāng hé xǐyījī dōu kěyǐ yòng.", "vi": "Được, tủ lạnh và máy giặt đều dùng được."},
{"sp": "A", "han": "那我下个月一号搬进来。", "py": "Nà wǒ xià ge yuè yí hào bān jìnlai.", "vi": "Vậy mùng 1 tháng sau tôi dọn vào."}
],
"note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp."
},
{
"id": "s4-speak-khambenh", "stage": 4, "title": "Ở phòng khám", "topic": "Khám bệnh",
"hook": "“医生，我咳嗽三天了” — nói triệu chứng và số ngày là cách mở chuyện ở phòng khám.",
"lines": [
{"sp": "A", "han": "医生，我咳嗽三天了。", "py": "Yīshēng, wǒ késou sān tiān le.", "vi": "Bác sĩ, tôi ho ba ngày rồi."},
{"sp": "B", "han": "还有别的症状吗？", "py": "Hái yǒu bié de zhèngzhuàng ma?", "vi": "Còn triệu chứng khác không?"},
{"sp": "A", "han": "有一点儿头疼，不发烧。", "py": "Yǒu yì diǎnr tóu téng, bù fāshāo.", "vi": "Hơi đau đầu, không sốt."},
{"sp": "B", "han": "先做检查，再开药给你。", "py": "Xiān zuò jiǎnchá, zài kāi yào gěi nǐ.", "vi": "Kiểm tra trước, rồi kê thuốc cho bạn."},
{"sp": "A", "han": "谢谢医生，我会多休息。", "py": "Xièxie yīshēng, wǒ huì duō xiūxi.", "vi": "Cảm ơn bác sĩ, tôi sẽ nghỉ ngơi nhiều."}
],
"note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp."
},
{
"id": "s4-speak-muasam", "stage": 4, "title": "Đổi áo mua trên mạng", "topic": "Mua sắm",
"hook": "“这件衣服有点儿大，我想换小一号” — áo hơi rộng thì nói rõ muốn đổi nhỏ hơn một cỡ.",
"lines": [
{"sp": "A", "han": "这件衣服有点儿大，我想换小一号。", "py": "Zhè jiàn yīfu yǒu diǎnr dà, wǒ xiǎng huàn xiǎo yí hào.", "vi": "Chiếc áo này hơi rộng, tôi muốn đổi nhỏ hơn một cỡ."},
{"sp": "B", "han": "可以，七天内都能换。", "py": "Kěyǐ, qī tiān nèi dōu néng huàn.", "vi": "Được, trong bảy ngày đều đổi được."},
{"sp": "A", "han": "换货要自己付运费吗？", "py": "Huàn huò yào zìjǐ fù yùnfèi ma?", "vi": "Đổi hàng có tự trả phí vận chuyển không?"},
{"sp": "B", "han": "不用，这次免费。", "py": "Bú yòng, zhè cì miǎnfèi.", "vi": "Không, lần này miễn phí."},
{"sp": "A", "han": "太好了，谢谢！", "py": "Tài hǎo le, xièxie!", "vi": "Tuyệt quá, cảm ơn!"}
],
"note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp."
},
{
"id": "s4-speak-dulich", "stage": 4, "title": "Lên kế hoạch leo núi", "topic": "Du lịch",
"hook": "“这个周末我们去爬山吧” — rủ đi leo núi cuối tuần là cách mở kế hoạch đi chơi.",
"lines": [
{"sp": "A", "han": "这个周末我们去爬山吧。", "py": "Zhège zhōumò wǒmen qù páshān ba.", "vi": "Cuối tuần này chúng ta đi leo núi nhé."},
{"sp": "B", "han": "好啊，几点出发？", "py": "Hǎo a, jǐ diǎn chūfā?", "vi": "Được, mấy giờ xuất phát?"},
{"sp": "A", "han": "早上八点，在学校门口见。", "py": "Zǎoshang bā diǎn, zài xuéxiào ménkǒu jiàn.", "vi": "8 giờ sáng, gặp ở cổng trường."},
{"sp": "B", "han": "要带水和雨衣吗？", "py": "Yào dài shuǐ hé yǔyī ma?", "vi": "Cần mang nước và áo mưa không?"},
{"sp": "A", "han": "要带，山上天气变化很快。", "py": "Yào dài, shān shang tiānqì biànhuà hěn kuài.", "vi": "Cần mang, thời tiết trên núi thay đổi rất nhanh."}
],
"note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp."
},
{
"id": "s4-speak-moitruong", "stage": 4, "title": "Trồng cây ở khu phố", "topic": "Môi trường",
"hook": "“我们小区可以多种一些树吗” — hỏi khu phố có trồng thêm cây được không là cách mở chuyện về môi trường.",
"lines": [
{"sp": "A", "han": "我们小区可以多种一些树吗？", "py": "Wǒmen xiǎoqū kěyǐ duō zhòng yìxiē shù ma?", "vi": "Khu chúng ta có thể trồng thêm cây không?"},
{"sp": "B", "han": "可以，大家周末一起种树。", "py": "Kěyǐ, dàjiā zhōumò yìqǐ zhòng shù.", "vi": "Được, mọi người cuối tuần cùng trồng cây."},
{"sp": "A", "han": "还要把垃圾分类，对吗？", "py": "Hái yào bǎ lājī fēnlèi, duì ma?", "vi": "Còn phải phân loại rác, đúng không?"},
{"sp": "B", "han": "对，分类以后回收更容易。", "py": "Duì, fēnlèi yǐhòu huíshōu gèng róngyì.", "vi": "Đúng, phân loại xong tái chế dễ hơn."},
{"sp": "A", "han": "好，我先告诉邻居们。", "py": "Hǎo, wǒ xiān gàosu línjūmen.", "vi": "Được, tôi báo cho hàng xóm trước."}
],
"note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp."
}
]);
ZH_ROLE.push.apply(ZH_ROLE, [
{
"id": "s4-role-phongvan", "stage": 4, "title": "Phỏng vấn xin việc", "setting": "Văn phòng công ty",
"you": "Ứng viên xin việc", "partner": "Người phỏng vấn",
"goal": "Giới thiệu kinh nghiệm, hỏi giờ làm và lương, kết thúc lịch sự.",
"turns": [
{"from": "partner", "han": "请先介绍一下你自己。", "py": "Qǐng xiān jièshào yí xià nǐ zìjǐ.", "vi": "Hãy giới thiệu về bản thân bạn trước."},
{"from": "you", "han": "我叫小李，去年大学毕业，做过一年销售。", "py": "Wǒ jiào Xiǎo Lǐ, qùnián dàxué bìyè, zuò guo yì nián xiāoshòu.", "vi": "Tôi tên là Tiểu Lý, năm ngoái tốt nghiệp đại học, đã làm bán hàng một năm."},
{"from": "partner", "han": "你为什么想来我们公司？", "py": "Nǐ wèishénme xiǎng lái wǒmen gōngsī?", "vi": "Vì sao bạn muốn đến công ty chúng tôi?"},
{"from": "you", "han": "因为我想学习更多，也想长期工作。", "py": "Yīnwèi wǒ xiǎng xuéxí gèng duō, yě xiǎng chángqī gōngzuò.", "vi": "Vì tôi muốn học thêm, cũng muốn làm việc lâu dài."},
{"from": "partner", "han": "星期一到星期五上班，早上九点到下午六点。", "py": "Xīngqīyī dào xīngqīwǔ shàngbān, zǎoshang jiǔ diǎn dào xiàwǔ liù diǎn.", "vi": "Làm việc từ thứ Hai đến thứ Sáu, sáng 9 giờ đến chiều 6 giờ."},
{"from": "you", "han": "谢谢，我可以接受。希望有机会跟你们合作。", "py": "Xièxie, wǒ kěyǐ jiēshòu. Xīwàng yǒu jīhuì gēn nǐmen hézuò.", "vi": "Cảm ơn, tôi có thể chấp nhận. Hy vọng có cơ hội hợp tác với các bạn."}
]
},
{
"id": "s4-role-thuenha", "stage": 4, "title": "Thuê nhà với chủ nhà", "setting": "Căn nhà cho thuê",
"you": "Người thuê nhà", "partner": "Chủ nhà",
"goal": "Hỏi giá, hỏi đồ dùng, chốt ngày dọn vào.",
"turns": [
{"from": "you", "han": "请问，房租多少钱一个月？", "py": "Qǐngwèn, fángzū duōshao qián yí ge yuè?", "vi": "Xin hỏi, tiền thuê nhà bao nhiêu một tháng?"},
{"from": "partner", "han": "两千块一个月，不包括水电。", "py": "Liǎng qiān kuài yí ge yuè, bù bāokuò shuǐdiàn.", "vi": "2000 tệ một tháng, không bao gồm điện nước."},
{"from": "you", "han": "房间里有洗衣机和冰箱吗？", "py": "Fángjiān lǐ yǒu xǐyījī hé bīngxiāng ma?", "vi": "Trong phòng có máy giặt và tủ lạnh không?"},
{"from": "partner", "han": "都有，还可以上网。", "py": "Dōu yǒu, hái kěyǐ shàngwǎng.", "vi": "Đều có, còn có thể lên mạng."},
{"from": "you", "han": "我下个月一号可以搬进来吗？", "py": "Wǒ xià ge yuè yí hào kěyǐ bān jìnlai ma?", "vi": "Mùng 1 tháng sau tôi có thể dọn vào không?"},
{"from": "partner", "han": "可以，我们先签协议。", "py": "Kěyǐ, wǒmen xiān qiān xiéyì.", "vi": "Được, chúng ta ký thỏa thuận trước."}
]
},
{
"id": "s4-role-khambenh", "stage": 4, "title": "Khám bệnh ở bệnh viện", "setting": "Phòng khám bệnh viện",
"you": "Bệnh nhân", "partner": "Bác sĩ",
"goal": "Nói triệu chứng, nghe chẩn đoán và dặn dò, hẹn tái khám.",
"turns": [
{"from": "you", "han": "医生，我这两天一直咳嗽。", "py": "Yīshēng, wǒ zhè liǎng tiān yìzhí késou.", "vi": "Bác sĩ, hai ngày nay tôi ho liên tục."},
{"from": "partner", "han": "发烧吗？喉咙疼不疼？", "py": "Fāshāo ma? Hóulóng téng bu téng?", "vi": "Có sốt không? Cổ họng có đau không?"},
{"from": "you", "han": "不发烧，但是喉咙有点儿疼。", "py": "Bù fāshāo, dànshì hóulóng yǒu diǎnr téng.", "vi": "Không sốt, nhưng cổ họng hơi đau."},
{"from": "partner", "han": "先做检查，可能是感冒。", "py": "Xiān zuò jiǎnchá, kěnéng shì gǎnmào.", "vi": "Kiểm tra trước, có thể là cảm lạnh."},
{"from": "you", "han": "我要吃药几天？", "py": "Wǒ yào chī yào jǐ tiān?", "vi": "Tôi phải uống thuốc mấy ngày?"},
{"from": "partner", "han": "吃三天，下周来复查。", "py": "Chī sān tiān, xià zhōu lái fùchá.", "vi": "Uống ba ngày, tuần sau đến tái khám."}
]
},
{
"id": "s4-role-khieunai", "stage": 4, "title": "Khiếu nại đơn hàng online", "setting": "Cuộc gọi với dịch vụ khách hàng",
"you": "Khách hàng", "partner": "Nhân viên dịch vụ khách hàng",
"goal": "Nói rõ đơn hàng bị lỗi, yêu cầu đổi hàng miễn phí.",
"turns": [
{"from": "you", "han": "你好，我在网上买的衣服有问题。", "py": "Nǐ hǎo, wǒ zài wǎng shang mǎi de yīfu yǒu wèntí.", "vi": "Chào bạn, quần áo tôi mua trên mạng có vấn đề."},
{"from": "partner", "han": "请问，是什么问题？", "py": "Qǐngwèn, shì shénme wèntí?", "vi": "Xin hỏi, là vấn đề gì?"},
{"from": "you", "han": "衣服的颜色跟照片不一样。", "py": "Yīfu de yánsè gēn zhàopiàn bù yíyàng.", "vi": "Màu quần áo không giống ảnh."},
{"from": "partner", "han": "对不起，您想换还是退？", "py": "Duìbuqǐ, nín xiǎng huàn háishi tuì?", "vi": "Xin lỗi, quý khách muốn đổi hay trả?"},
{"from": "you", "han": "我想换一件，颜色要跟照片一样。", "py": "Wǒ xiǎng huàn yí jiàn, yánsè yào gēn zhàopiàn yíyàng.", "vi": "Tôi muốn đổi một cái, màu phải giống ảnh."},
{"from": "partner", "han": "好的，七天内免费换，请放心。", "py": "Hǎo de, qī tiān nèi miǎnfèi huàn, qǐng fàngxīn.", "vi": "Được, trong bảy ngày đổi miễn phí, xin yên tâm."}
]
}
]);
ZH_WRITE.push.apply(ZH_WRITE, [
{
"id": "s4-write-sapxep-ba", "stage": 4, "title": "Sắp xếp: Câu chữ 把 với dọn phòng", "kind": "order",
"prompt": "Sắp xếp các từ thành câu đúng: anh ấy đã dọn phòng sạch rồi.",
"words": ["他", "把", "房间", "打扫", "干净了"],
"why": "Trật tự đúng: chủ ngữ 他 → 把 → đồ vật 房间 → động từ 打扫 → kết quả 干净了.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
},
{
"id": "s4-write-sapxep-bei", "stage": 4, "title": "Sắp xếp: Câu chữ 被 với xe đạp", "kind": "order",
"prompt": "Sắp xếp các từ thành câu đúng: xe đạp của anh ấy bị trộm mất.",
"words": ["他的", "自行车", "被", "偷", "了"],
"why": "Trật tự đúng: đồ vật chịu tác động 他的自行车 → 被 → động từ 偷 → kết quả 了.",
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
},
{
"id": "s4-write-dientu-congviec", "stage": 4, "title": "Điền từ: Công việc văn phòng", "kind": "fill",
"prompt": "Chọn từ đúng điền vào câu về công việc văn phòng.",
"questions": [
{"q": "星期五我们要 ___ 报告，经理要看。", "o": ["写", "吃", "买", "跑"], "a": 0, "why": "Viết báo cáo: 写报告, giám đốc cần xem báo cáo."},
{"q": "这个任务 ___ 小王负责。", "o": ["被", "把", "由", "跟"], "a": 2, "why": "由小王负责: nhiệm vụ do Tiểu Vương phụ trách; 由 nêu người chịu trách nhiệm."}
],
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách."
},
{
"id": "s4-write-viet-dulich", "stage": 4, "title": "Viết: Kể về một chuyến đi", "kind": "free",
"prompt": "Viết một đoạn ngắn (5-8 câu) kể về một chuyến đi của bạn: đi đâu, đi với ai, làm gì, cảm thấy thế nào.",
"model": "去年夏天，我和朋友去杭州旅行。我们先去西湖，湖边有很多柳树。上午，我们坐船游湖，风很舒服。下午，我们去茶园看茶农采茶，还买了一包新茶。虽然走了很多路，但是大家都很开心。",
"analysis": "Đoạn mẫu mở đầu bằng thời gian và người đi cùng, rồi kể theo thứ tự buổi sáng — buổi chiều, cuối cùng nói cảm xúc bằng 虽然…但是. Viết theo khung này thì đoạn văn rõ ràng, không bị nhảy ý.",
"phrases": ["去年夏天，我和朋友去…旅行。", "上午，我们…，下午，我们…。", "虽然…，但是大家都很开心。"],
"note": "Bài tự soạn theo chủ đề đời sống trình độ HSK4, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Bài viết tự do đối chiếu với đoạn mẫu, không chấm điểm tự động."
}
]);
// noi-dung-2b-fix.js — FILE VÁ đợt 2b (bổ sung cho đủ chuẩn các phân hệ Trung chặng 4).
// Chỉ chứa LỆNH SỬA các mục s4- đã có trong content-new.js; không tạo mục mới, không viết lại toàn bộ mục.
// Nạp SAU content-new.js.

// ---------- 1. NGỮ PHÁP chặng 4: mỗi trạm đủ đúng 6 quiz ----------
// s4-suiran: đã có 3, thêm 3.
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-suiran"; })[0]; if (_g) _g.quiz.push({ "q": "Điền chỗ trống: 虽然很晚，___ 他还在学习。", "o": ["但是", "如果", "而且", "因为"], "a": 0, "why": "虽然 đi với 但是: tuy muộn, nhưng anh ấy vẫn học." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-suiran"; })[0]; if (_g) _g.quiz.push({ "q": "“虽然天气很冷，但是我们去跑步” nghĩa là gì?", "o": ["Tuy trời rất lạnh nhưng chúng tôi đi chạy bộ", "Vì trời rất lạnh nên chúng tôi đi chạy bộ", "Nếu trời rất lạnh thì chúng tôi đi chạy bộ", "Không những trời lạnh mà chúng tôi còn đi chạy bộ"], "a": 0, "why": "虽然 = tuy, 但是 = nhưng: tuy lạnh nhưng vẫn đi chạy bộ." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-suiran"; })[0]; if (_g) _g.quiz.push({ "q": "Chọn câu viết đúng mẫu 虽然…但是:", "o": ["虽然他很忙，但是他来帮忙", "虽然他很忙，如果他来帮忙", "虽然他很忙，而且他来帮忙", "虽然他很忙，因为他来帮忙"], "a": 0, "why": "虽然…但是 là cặp nói hai mặt trái ngược: tuy bận nhưng vẫn đến giúp." });
// s4-budan: đã có 2, thêm 4.
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-budan"; })[0]; if (_g) _g.quiz.push({ "q": "Điền chỗ trống: 这家饭馆不但便宜，___ 很好吃。", "o": ["而且", "但是", "如果", "因为"], "a": 0, "why": "不但 đi với 而且: không những rẻ mà còn rất ngon." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-budan"; })[0]; if (_g) _g.quiz.push({ "q": "“他不但会唱歌，而且会跳舞” nghĩa là gì?", "o": ["Anh ấy không những biết hát mà còn biết nhảy", "Anh ấy tuy biết hát nhưng không biết nhảy", "Vì anh ấy biết hát nên biết nhảy", "Nếu anh ấy biết hát thì biết nhảy"], "a": 0, "why": "不但 = không những, 而且 = mà còn: một người có hai điểm tốt." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-budan"; })[0]; if (_g) _g.quiz.push({ "q": "Chọn câu viết đúng mẫu 不但…而且:", "o": ["这个城市不但干净，而且很安静", "这个城市不但干净，但是很安静", "这个城市不但干净，如果很安静", "这个城市不但干净，因为很安静"], "a": 0, "why": "不但…而且 là cặp nói hai điểm tốt cùng lúc." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-budan"; })[0]; if (_g) _g.quiz.push({ "q": "Câu nào nói hai điểm tốt bằng 不但…而且?", "o": ["他不但跑得快，而且跳得远", "他虽然跑得快，但是跳得远", "他如果跑得快，就跳得远", "他因为跑得快，所以跳得远"], "a": 0, "why": "只有 不但…而且 nói hai điểm tốt cùng lúc; 虽然…但是 nói hai mặt trái ngược." });
// s4-ruguo: đã có 2, thêm 4.
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-ruguo"; })[0]; if (_g) _g.quiz.push({ "q": "Điền chỗ trống: 如果你有时间，___ 帮我一下。", "o": ["就", "但是", "而且", "因为"], "a": 0, "why": "如果…就: nếu có thời gian thì giúp một chút." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-ruguo"; })[0]; if (_g) _g.quiz.push({ "q": "“如果身体不舒服，就早点儿休息” nghĩa là gì?", "o": ["Nếu cơ thể không khỏe thì nghỉ sớm một chút", "Tuy cơ thể không khỏe nhưng vẫn làm việc", "Vì cơ thể không khỏe nên phải làm việc", "Không những cơ thể không khỏe mà còn phải làm việc"], "a": 0, "why": "如果 nêu điều kiện không khỏe, 就 nêu kết quả nghỉ sớm." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-ruguo"; })[0]; if (_g) _g.quiz.push({ "q": "Câu nào dùng 如果…就 đúng?", "o": ["如果他不来，我们就先开始", "如果他不来，我们但是先开始", "如果他不来，我们而且先开始", "如果他不来，我们因为先开始"], "a": 0, "why": "如果 nêu điều kiện, 就 nêu kết quả ở vế sau." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-ruguo"; })[0]; if (_g) _g.quiz.push({ "q": "Câu nào dùng 如果…就 đúng để nói điều kiện?", "o": ["如果你累了，就休息一下", "如果你累了，但是休息一下", "如果你累了，而且休息一下", "如果你累了，因为休息一下"], "a": 0, "why": "如果…就: nếu mệt thì nghỉ một chút." });
// s4-ba: đã có 2, thêm 4.
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-ba"; })[0]; if (_g) _g.quiz.push({ "q": "Chọn câu chữ 把 viết đúng:", "o": ["我把房间打扫干净了", "我把房间打扫", "我打扫把房间干净了", "我房间把打扫干净了"], "a": 0, "why": "把 + 房间 + 打扫 + 干净了: đồ vật trước động từ, sau động từ có kết quả." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-ba"; })[0]; if (_g) _g.quiz.push({ "q": "“妈妈把衣服洗干净了” nghĩa là gì?", "o": ["Mẹ đã giặt quần áo sạch rồi", "Mẹ đã mua quần áo mới rồi", "Quần áo đã giặt sạch cho mẹ", "Mẹ đã phơi quần áo rồi"], "a": 0, "why": "把衣服洗干净了: giặt quần áo cho sạch rồi." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-ba"; })[0]; if (_g) _g.quiz.push({ "q": "Điền chỗ trống: 请把门___。", "o": ["关上", "关", "上关", "在关"], "a": 0, "why": "Sau động từ phải có thêm thành phần như 上: 把门关上 mới đủ nghĩa." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-ba"; })[0]; if (_g) _g.quiz.push({ "q": "Vì sao câu “我把书放” là sai?", "o": ["Vì sau động từ thiếu thành phần kết quả hoặc phương hướng", "Vì câu thiếu chữ 把", "Vì câu thiếu chủ ngữ", "Vì câu thiếu đồ vật"], "a": 0, "why": "Câu 把: động từ không đứng trơ một mình, phải có thêm như 在桌子上." });
// s4-bei: đã có 2, thêm 4.
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-bei"; })[0]; if (_g) _g.quiz.push({ "q": "Điền chỗ trống: 我的手机被弟弟___了。", "o": ["拿走了", "拿", "走拿", "被拿"], "a": 0, "why": "被 + 弟弟 + 拿走了: người gây ra sau 被, động từ và kết quả sau đó." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-bei"; })[0]; if (_g) _g.quiz.push({ "q": "“这个消息被大家知道了” nghĩa là gì?", "o": ["Tin này đã bị mọi người biết rồi", "Mọi người đã bị tin này biết rồi", "Tin này làm mọi người biết nhau", "Mọi người chưa biết tin này"], "a": 0, "why": "消息 chịu tác động, 大家 là người biết tin." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-bei"; })[0]; if (_g) _g.quiz.push({ "q": "Chọn câu chữ 被 viết đúng:", "o": ["衣服被雨淋湿了", "衣服雨被淋湿了", "被衣服雨淋湿了", "衣服被淋湿雨了"], "a": 0, "why": "衣服 + 被 + 雨 + 淋湿了: đồ vật trước 被, người gây ra và kết quả sau." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-bei"; })[0]; if (_g) _g.quiz.push({ "q": "Trong câu chữ 被, đồ vật chịu tác động đứng ở đâu?", "o": ["Trước chữ 被", "Sau chữ 被", "Cuối câu", "Thay cho động từ"], "a": 0, "why": "Đồ vật chịu tác động đứng trước 被, người làm ra việc (nếu có) đứng sau 被." });
// s4-bijiao: đã có 3, thêm 3.
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-bijiao"; })[0]; if (_g) _g.quiz.push({ "q": "“北京没有上海那么热” nghĩa là gì?", "o": ["Bắc Kinh không nóng bằng Thượng Hải", "Bắc Kinh nóng hơn Thượng Hải", "Bắc Kinh nóng như Thượng Hải", "Bắc Kinh không nóng"], "a": 0, "why": "没有…那么…: Bắc Kinh không bằng Thượng Hải về độ nóng." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-bijiao"; })[0]; if (_g) _g.quiz.push({ "q": "Điền chỗ trống: 这件衣服比那件___贵。", "o": ["更", "被", "把", "没有"], "a": 0, "why": "比…更贵: chiếc áo này đắt hơn chiếc kia." });
var _g = ZH_GRAMMAR.filter(function (x) { return x.id === "s4-bijiao"; })[0]; if (_g) _g.quiz.push({ "q": "Câu nào dùng 没有…那么… đúng?", "o": ["我的中文没有他那么好", "我的中文比他那么好", "我的中文被他那么好", "我的中文把他那么好"], "a": 0, "why": "没有…那么…: tôi không tốt bằng anh ấy." });

// ---------- 2. ĐỌC chặng 4: mỗi bài đủ đúng 5 câu hỏi (đã có 4, thêm 1) ----------
var _r = ZH_READING.filter(function (x) { return x.id === "s4-reading-congviec"; })[0]; if (_r) _r.questions.push({ "q": "Mỗi sáng 8 giờ, Tiểu Vương làm gì trước?", "o": ["Kiểm tra nhiệm vụ hôm nay", "Giao báo cáo cho giám đốc", "Đi ăn ở nhà ăn", "Thảo luận kế hoạch mới"], "a": 0, "why": "Bài viết: 每天早上八点，他先检查今天的任务." });
var _r = ZH_READING.filter(function (x) { return x.id === "s4-reading-tintuc"; })[0]; if (_r) _r.questions.push({ "q": "Tuyến tàu điện ngầm mới chạy từ đâu đến đâu?", "o": ["Từ phía đông thành phố đến phía tây", "Từ phía tây thành phố đến phía đông", "Từ phía nam thành phố đến phía bắc", "Chỉ chạy trong trung tâm thành phố"], "a": 0, "why": "Bài viết: 这条线一共有十个站，从城东到城西." });
var _r = ZH_READING.filter(function (x) { return x.id === "s4-reading-moitruong"; })[0]; if (_r) _r.questions.push({ "q": "Trước khi trồng cây, mọi người làm gì?", "o": ["Phân loại rác", "Tưới nước cho cây", "Nhặt rác trong công viên", "Đỡ cây con"], "a": 0, "why": "Bài viết: 大家先把垃圾分类，再把树苗种进土里." });
var _r = ZH_READING.filter(function (x) { return x.id === "s4-reading-dulich"; })[0]; if (_r) _r.questions.push({ "q": "Buổi trưa nhóm ăn gì, ở đâu?", "o": ["Món nổi tiếng của Tây Hồ ở một quán nhỏ", "Chè mới ở vườn chè", "Món ăn vặt ở chợ đêm", "Cơm ở khách sạn"], "a": 0, "why": "Bài viết: 中午，我们在一家小饭馆吃西湖有名的菜." });

// ---------- 3. NGHE chặng 4: mỗi đoạn đủ đúng 4 câu hỏi (đã có 3, thêm 1) ----------
var _l = ZH_LISTENING.filter(function (x) { return x.id === "s4-listen-hencongviec"; })[0]; if (_l) _l.questions.push({ "q": "B nói sau 10 giờ thì thế nào?", "o": ["Lúc nào cũng được", "Chỉ rảnh đúng lúc 10 giờ", "Bận cả buổi sáng", "Chỉ rảnh buổi chiều"], "a": 0, "why": "B nói: 有啊，十点以后都可以." });
var _l = ZH_LISTENING.filter(function (x) { return x.id === "s4-listen-thuenha"; })[0]; if (_l) _l.questions.push({ "q": "Cuối đoạn, A muốn làm gì?", "o": ["Xem phòng trước", "Ký hợp đồng ngay", "Trả tiền ngay", "Dọn vào ngay"], "a": 0, "why": "A nói: 我可以先看一下房间吗？" });
var _l = ZH_LISTENING.filter(function (x) { return x.id === "s4-listen-khambenh"; })[0]; if (_l) _l.questions.push({ "q": "Bác sĩ bảo làm gì trước?", "o": ["Đo thân nhiệt trước, rồi kiểm tra", "Uống thuốc trước, rồi đo thân nhiệt", "Về nhà nghỉ trước", "Chụp phim trước"], "a": 0, "why": "B nói: 先量一下体温，再做检查." });
var _l = ZH_LISTENING.filter(function (x) { return x.id === "s4-listen-muasamonline"; })[0]; if (_l) _l.questions.push({ "q": "Màu đôi giày so với ảnh thế nào?", "o": ["Giống ảnh", "Khác ảnh", "Đậm hơn ảnh", "Nhạt hơn ảnh"], "a": 0, "why": "A nói: 颜色一样，但是有点儿小." });
var _l = ZH_LISTENING.filter(function (x) { return x.id === "s4-listen-hoithamdulich"; })[0]; if (_l) _l.questions.push({ "q": "Ngồi thuyền ở Tây Hồ có mất tiền không?", "o": ["Có, ngồi thuyền mới mất tiền", "Không, tất cả đều miễn phí", "Chỉ mất tiền buổi tối", "Chỉ mất tiền cuối tuần"], "a": 0, "why": "B nói: 湖边免费，坐船才要钱." });

// ---------- 4. NHẬP VAI chặng 4: bổ sung tip + chunks + note ----------
// Lưu ý: 4 kịch bản s4- hiện chưa có sẵn tip/chunks/note, nên tip/chunks gán mới,
// còn note gán mới bằng đúng câu chuẩn trong mẫu (không có phần note cũ để giữ).
var _ro = ZH_ROLE.filter(function (x) { return x.id === "s4-role-phongvan"; })[0]; if (_ro) { _ro.tip = "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Chưa rõ giờ làm hay lương thì hỏi lại bằng câu đơn giản, đừng im lặng."; _ro.chunks = ["请先介绍一下你自己。 — Hãy giới thiệu về bản thân bạn trước.", "我叫小李，去年大学毕业。 — Tôi tên là Tiểu Lý, năm ngoái tốt nghiệp đại học.", "希望有机会跟你们合作。 — Hy vọng có cơ hội hợp tác với các bạn."]; if (!_ro.note) { _ro.note = " Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt."; } else if (_ro.note.indexOf("chờ nâng cấp") < 0) { _ro.note += " Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt."; } }
var _ro = ZH_ROLE.filter(function (x) { return x.id === "s4-role-thuenha"; })[0]; if (_ro) { _ro.tip = "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Hỏi giá thì hỏi rõ giá đã gồm điện nước chưa, rồi mới chốt ngày dọn vào."; _ro.chunks = ["房租多少钱一个月？ — Tiền thuê nhà bao nhiêu một tháng?", "房间里有洗衣机和冰箱吗？ — Trong phòng có máy giặt và tủ lạnh không?", "我们先签协议。 — Chúng ta ký thỏa thuận trước."]; if (!_ro.note) { _ro.note = " Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt."; } else if (_ro.note.indexOf("chờ nâng cấp") < 0) { _ro.note += " Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt."; } }
var _ro = ZH_ROLE.filter(function (x) { return x.id === "s4-role-khambenh"; })[0]; if (_ro) { _ro.tip = "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Nói rõ triệu chứng và số ngày bị bệnh trước, rồi mới hỏi thuốc uống mấy ngày."; _ro.chunks = ["我这两天一直咳嗽。 — Hai ngày nay tôi ho liên tục.", "不发烧，但是喉咙有点儿疼。 — Không sốt, nhưng cổ họng hơi đau.", "下周来复查。 — Tuần sau đến tái khám."]; if (!_ro.note) { _ro.note = " Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt."; } else if (_ro.note.indexOf("chờ nâng cấp") < 0) { _ro.note += " Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt."; } }
var _ro = ZH_ROLE.filter(function (x) { return x.id === "s4-role-khieunai"; })[0]; if (_ro) { _ro.tip = "Học để dùng được, không học vẹt: hiểu ý từng lượt rồi nói lại bằng lời của mình cũng được. Khiếu nại thì nói rõ lỗi sai ở đâu, rồi nói rõ mình muốn đổi hay trả."; _ro.chunks = ["我在网上买的衣服有问题。 — Quần áo tôi mua trên mạng có vấn đề.", "衣服的颜色跟照片不一样。 — Màu quần áo không giống ảnh.", "七天内免费换。 — Trong bảy ngày đổi miễn phí."]; if (!_ro.note) { _ro.note = " Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt."; } else if (_ro.note.indexOf("chờ nâng cấp") < 0) { _ro.note += " Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt."; } }
// [2b-fix bổ sung bởi điều phối viên] Viết tự do chặng 4: note phải chứa "chưa có AI chấm" (test A8).
var _wf = ZH_WRITE.filter(function (x) { return x.id === "s4-write-viet-dulich"; })[0];
if (_wf && (_wf.note || "").indexOf("chưa có AI chấm") < 0) _wf.note += " Phần này chỉ đối chiếu bài mẫu, chưa có AI chấm tiếng Trung — AI chấm đang chờ nâng cấp, không có điểm, không tính đạt cũng không tính chưa đạt.";
/* PHA 2 (a) — BAI DOC THI THU DANG DAY DU (CONTENT.readingMock).
   Tu soan 100%, khong chep de that. Moi bai 13-14 cau, du 3 bai la 40 cau/moc.
   Pool rieng (khong dem vao skillCounts) de giu nguyen cac test dem kho cu. */
if (!CONTENT.readingMock) CONTENT.readingMock = [];
CONTENT.readingMock.push.apply(CONTENT.readingMock, [
{"topic":"Cửa hàng nhỏ bán đủ thứ","level":"Band 4.5","title":"A Small Shop That Sells Everything",
"text":"A. In the small town of An Binh, Mrs Hoa runs a shop that is no bigger than a classroom, yet people say you can buy almost everything there. The shop opens at six o'clock in the morning, six days a week, and closes at nine o'clock in the evening. On the wooden shelves there are bags of rice, boxes of eggs, soap, toothpaste, notebooks, pencils, cooking oil and sweets. Mrs Hoa does not sell clothes or shoes, but for daily needs, most families in the town never have to go anywhere else.\n\nB. There is no computer in the shop. Mrs Hoa writes every price on small pieces of paper and sticks them on the shelves. She counts money by hand and keeps her notes in an old exercise book. What surprises visitors most is her memory: she remembers what her regular customers usually buy. When Mr Tuan walks in, she already has his newspaper and a bag of coffee ready. When Lan, a schoolgirl, comes after school, Mrs Hoa knows she will ask for a blue pen.\n\nC. The mornings are the busiest time. Between six and eight, workers stop for bread and hot coffee on their way to the factory, and children buy pencils and notebooks before school. At midday the shop is quiet, and Mrs Hoa uses the time to clean the shelves and write new price notes. In the afternoon, farmers from nearby villages arrive, some to buy salt and sugar, and some to sell fresh eggs and vegetables to the shop.\n\nD. The shop is more than a place to buy things. It is also where people meet and exchange news. Old men sit on small plastic chairs outside, drink tea and talk about the weather and the rice harvest. Young mothers ask each other about schools and doctors. Mrs Hoa listens to everyone, and she often helps neighbours find a worker, a bicycle repairman or a tutor for their children.\n\nE. One reason people stay loyal to the shop is Mrs Hoa's small kindness: families she knows well may take goods today and pay on Friday, when workers receive their wages. She writes these small debts in her exercise book and never charges extra. She says a shop does not grow by selling the most goods, but by being trusted. After twenty years, the people of An Binh still agree with her.",
"questions":[
{"type":"MC","q":"Mấy giờ cửa hàng của bà Hoa mở cửa?","o":["Lúc 5 giờ sáng","Lúc 6 giờ sáng","Lúc 7 giờ sáng","Lúc 8 giờ sáng"],"options":["Lúc 5 giờ sáng","Lúc 6 giờ sáng","Lúc 7 giờ sáng","Lúc 8 giờ sáng"],"a":1,"why":"Đoạn A: cửa hàng mở cửa lúc sáu giờ sáng, sáu ngày mỗi tuần."},
{"type":"MSEND","q":"Theo bài, điều khiến khách thăm ngạc nhiên nhất về bà Hoa là","o":["bà bán rất nhiều loại hàng","bà nhớ khách quen thường mua gì","bà mở cửa cả ngày chủ nhật","bà bán hàng rất rẻ"],"options":["bà bán rất nhiều loại hàng","bà nhớ khách quen thường mua gì","bà mở cửa cả ngày chủ nhật","bà bán hàng rất rẻ"],"a":1,"why":"Đoạn B: điều ngạc nhiên nhất là trí nhớ của bà — bà nhớ khách quen thường mua gì."},
{"type":"TFNG","q":"Cửa hàng dùng máy tính để tính tiền.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn B: trong cửa hàng không có máy tính; bà Hoa tính tiền bằng tay → Sai."},
{"type":"MC","q":"Buổi sáng, ai ghé cửa hàng?","o":["Chỉ công nhân nhà máy","Chỉ học sinh","Công nhân mua bánh mì, cà phê và trẻ em mua bút, vở","Chỉ nông dân"],"options":["Chỉ công nhân nhà máy","Chỉ học sinh","Công nhân mua bánh mì, cà phê và trẻ em mua bút, vở","Chỉ nông dân"],"a":2,"why":"Đoạn C: buổi sáng công nhân ghé mua bánh mì và cà phê nóng, trẻ em mua bút chì và vở."},
{"type":"SC","q":"Hoàn thành tóm tắt. Cửa hàng mở cửa lúc ______ và buổi trưa bà Hoa ______.","o":["sáu giờ sáng; lau kệ và viết giấy giá mới","bảy giờ sáng; đi chợ mua hàng","sáu giờ sáng; đóng cửa nghỉ trưa","tám giờ sáng; gặp nông dân"],"options":["sáu giờ sáng; lau kệ và viết giấy giá mới","bảy giờ sáng; đi chợ mua hàng","sáu giờ sáng; đóng cửa nghỉ trưa","tám giờ sáng; gặp nông dân"],"a":0,"why":"Đoạn A và C: mở cửa lúc sáu giờ sáng; buổi trưa cửa hàng vắng, bà Hoa lau kệ và viết giấy giá mới."},
{"type":"TFNG","q":"Bà Hoa mua trứng tươi từ các trang trại gần thị trấn.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn C: buổi chiều nông dân từ làng gần đó tới bán trứng và rau tươi cho cửa hàng → Đúng."},
{"type":"MC","q":"Vì sao nông dân tới cửa hàng vào buổi chiều?","o":["Chỉ để uống trà","Để mua muối, đường và bán trứng, rau","Để mượn vở ghi chép của bà Hoa","Để sửa xe đạp"],"options":["Chỉ để uống trà","Để mua muối, đường và bán trứng, rau","Để mượn vở ghi chép của bà Hoa","Để sửa xe đạp"],"a":1,"why":"Đoạn C: nông dân tới mua muối, đường và bán trứng, rau tươi cho cửa hàng."},
{"type":"YNNG","q":"Theo tác giả, các cửa hàng nhỏ như của bà Hoa sẽ sớm biến mất.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":2,"why":"Bài không nói gì về việc cửa hàng nhỏ có biến mất hay không → Not Given."},
{"type":"MSEND","q":"Theo bài, ngoài mua hàng, người ta tới cửa hàng còn để","o":["học cách tính tiền bằng tay","gặp gỡ và trao đổi tin tức","mua quần áo và giày dép","đăng ký lớp học buổi tối"],"options":["học cách tính tiền bằng tay","gặp gỡ và trao đổi tin tức","mua quần áo và giày dép","đăng ký lớp học buổi tối"],"a":1,"why":"Đoạn D: cửa hàng còn là nơi mọi người gặp gỡ và trao đổi tin tức."},
{"type":"MC","q":"“Lấy hàng hôm nay, trả tiền thứ Sáu” có nghĩa là gì?","o":["Bà Hoa bán chịu cho gia đình quen, trả khi nhận lương","Bà Hoa giảm giá vào thứ Sáu","Cửa hàng chỉ mở cửa tới thứ Sáu","Khách phải trả thêm tiền lãi"],"options":["Bà Hoa bán chịu cho gia đình quen, trả khi nhận lương","Bà Hoa giảm giá vào thứ Sáu","Cửa hàng chỉ mở cửa tới thứ Sáu","Khách phải trả thêm tiền lãi"],"a":0,"why":"Đoạn E: gia đình quen có thể lấy hàng hôm nay và trả vào thứ Sáu, khi công nhân nhận lương; bà không thu thêm tiền."},
{"type":"TFNG","q":"Buổi sáng, trẻ em tới cửa hàng mua bánh mì.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn C: buổi sáng trẻ em mua bút chì và vở; bánh mì là của công nhân → Sai."},
{"type":"SC","q":"Hoàn thành tóm tắt. Bà Hoa viết giá lên ______ và ghi chép vào ______.","o":["giấy nhỏ; một quyển vở cũ","bảng lớn; máy tính","giấy nhỏ; điện thoại","thẻ nhựa; sổ ngân hàng"],"options":["giấy nhỏ; một quyển vở cũ","bảng lớn; máy tính","giấy nhỏ; điện thoại","thẻ nhựa; sổ ngân hàng"],"a":0,"why":"Đoạn B: bà viết giá lên giấy nhỏ dán trên kệ và ghi chép vào một quyển vở bài tập cũ."},
{"type":"MATCH","q":"Nhóm nào mua bút chì và vở trước giờ học?","o":["Công nhân","Trẻ em","Nông dân","Các bà mẹ trẻ"],"options":["Công nhân","Trẻ em","Nông dân","Các bà mẹ trẻ"],"a":1,"why":"Đoạn C: trẻ em mua bút chì và vở trước giờ học."}
],
"translation":"Ở thị trấn nhỏ An Bình, bà Hoa bán một cửa hàng chỉ lớn bằng một phòng học nhưng người ta nói có thể mua gần như mọi thứ ở đó. Cửa hàng mở cửa lúc sáu giờ sáng và đóng cửa lúc chín giờ tối. Không có máy tính: bà viết giá lên giấy nhỏ, tính tiền bằng tay và nhớ khách quen thường mua gì. Buổi sáng đông nhất với công nhân và trẻ em; buổi chiều nông dân tới mua hàng và bán trứng, rau. Cửa hàng còn là nơi gặp gỡ, trao đổi tin tức. Gia đình quen có thể lấy hàng hôm nay, trả tiền thứ Sáu mà không bị thu thêm — vì theo bà, cửa hàng lớn lên nhờ được tin cậy.",
"phrases":[{"en":"regular customers","vi":"khách quen"},{"en":"on their way to the factory","vi":"trên đường tới nhà máy"},{"en":"exchange news","vi":"trao đổi tin tức"},{"en":"receive their wages","vi":"nhận lương"},{"en":"stay loyal to the shop","vi":"trung thành với cửa hàng"}]},
{"topic":"Học đi xe đạp khi đã lớn","level":"Band 4.5","title":"Learning to Ride a Bicycle as an Adult",
"text":"A. Minh is thirty-two years old and works in an office in Hanoi. Until last spring, he had never ridden a bicycle. As a child he lived in a tall building with no safe place to practise, and later he always travelled by bus or motorbike. When his office moved to a new building near a park, his friends suggested cycling to work. Minh laughed at first, but the idea stayed in his mind: cycling would save money, keep him healthy, and let him enjoy the morning air.\n\nB. Learning as an adult was harder than Minh expected. On his first lesson, in an empty schoolyard on Sunday morning, he could not keep his balance for more than a few seconds. He fell twice, and his knees were sore for days. His friend Tuan, who taught him, said the most important rule is simple: look ahead, not down at the wheels. When Minh looked down, the bicycle turned sharply; when he looked at a tree far away, the bicycle went straighter.\n\nC. Tuan gave Minh three short lessons, each about forty minutes. In the first lesson, Minh only walked with the bicycle and practised stopping with the brakes. In the second, he pedalled slowly while Tuan held the back of the seat. In the third, Tuan let go, and Minh rode alone for almost twenty metres before he stopped, shaking but smiling. Between lessons, Minh watched short videos about balance and practised on quiet streets in the early morning, when there were very few cars.\n\nD. After one month, Minh could ride to the park near his office, a journey of about fifteen minutes. He still avoided busy roads and always wore a helmet. His legs became stronger, and he slept better at night. The best change, he says, was in his mornings: instead of waiting for a crowded bus, he now rides slowly past trees and lakes, arrives at work awake, and feels proud of something he learned late.\n\nE. Minh now tells other adults not to be afraid of learning late. He says adults learn more slowly than children because they think too much about falling, but they also follow instructions better and practise with a plan. His advice is practical: find an empty place, ask a patient friend to help, wear a helmet, and practise a little every day. After a few weeks, he promises, the bicycle stops feeling like an enemy and starts feeling like a friend.",
"questions":[
{"type":"MC","q":"Vì sao Minh muốn học đi xe đạp?","o":["Để đi du lịch xa","Để tiết kiệm tiền, khỏe hơn và tận hưởng buổi sáng","Vì công ty bắt buộc","Vì bạn bè cười anh"],"options":["Để tiết kiệm tiền, khỏe hơn và tận hưởng buổi sáng","Để đi du lịch xa","Vì công ty bắt buộc","Vì bạn bè cười anh"],"a":0,"why":"Đoạn A: đi xe đạp giúp tiết kiệm tiền, giữ sức khỏe và tận hưởng không khí buổi sáng."},
{"type":"MSEND","q":"Theo bài, khi còn nhỏ Minh không học đi xe đạp vì","o":["anh sợ ngã","anh sống trong tòa nhà cao, không có chỗ tập an toàn","gia đình anh không có xe đạp","anh thích đi xe buýt hơn"],"options":["anh sợ ngã","anh sống trong tòa nhà cao, không có chỗ tập an toàn","gia đình anh không có xe đạp","anh thích đi xe buýt hơn"],"a":1,"why":"Đoạn A: hồi nhỏ Minh sống trong tòa nhà cao, không có chỗ an toàn để tập."},
{"type":"TFNG","q":"Buổi học đầu tiên, Minh giữ thăng bằng được hơn một phút.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn B: buổi đầu Minh chỉ giữ thăng bằng được vài giây, không phải hơn một phút → Sai."},
{"type":"MC","q":"Quy tắc quan trọng nhất Tuan dạy Minh là gì?","o":["Đạp thật nhanh","Nhìn về phía trước, không nhìn xuống bánh xe","Luôn bóp phanh","Đi xe vào buổi tối"],"options":["Đạp thật nhanh","Nhìn về phía trước, không nhìn xuống bánh xe","Luôn bóp phanh","Đi xe vào buổi tối"],"a":1,"why":"Đoạn B: quy tắc quan trọng nhất là nhìn về phía trước, không nhìn xuống bánh xe."},
{"type":"SC","q":"Hoàn thành tóm tắt. Buổi học thứ hai, Minh đạp chậm trong khi Tuan ______.","o":["giữ phía sau yên xe","chạy bên cạnh","quay video","đi xe đạp trước"],"options":["giữ phía sau yên xe","chạy bên cạnh","quay video","đi xe đạp trước"],"a":0,"why":"Đoạn C: buổi thứ hai, Minh đạp chậm trong khi Tuan giữ phía sau yên xe."},
{"type":"TFNG","q":"Giữa các buổi học, Minh tập trên đường phố đông xe vào giờ cao điểm.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn C: giữa các buổi, Minh tập trên đường yên tĩnh vào sáng sớm, khi rất ít xe → Sai."},
{"type":"MC","q":"Sau một tháng, Minh có thể làm gì?","o":["Đi xe trên đường đông","Đi xe tới công viên gần văn phòng trong khoảng 15 phút","Dạy người khác đi xe","Đi xe không cần mũ bảo hiểm"],"options":["Đi xe tới công viên gần văn phòng trong khoảng 15 phút","Đi xe trên đường đông","Dạy người khác đi xe","Đi xe không cần mũ bảo hiểm"],"a":0,"why":"Đoạn D: sau một tháng, Minh đi xe tới công viên gần văn phòng, hành trình khoảng mười lăm phút; anh vẫn tránh đường đông và luôn đội mũ bảo hiểm."},
{"type":"YNNG","q":"Theo tác giả, người lớn học đi xe đạp nhanh hơn trẻ em.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn E: Minh nói người lớn học chậm hơn trẻ em vì nghĩ nhiều về việc ngã → No."},
{"type":"MSEND","q":"Theo bài, thay đổi tốt nhất với Minh là","o":["chân anh khỏe hơn","buổi sáng của anh: không chờ xe buýt đông mà đạp xe qua cây và hồ","anh ngủ ít hơn","anh tiết kiệm được nhiều tiền"],"options":["chân anh khỏe hơn","buổi sáng của anh: không chờ xe buýt đông mà đạp xe qua cây và hồ","anh ngủ ít hơn","anh tiết kiệm được nhiều tiền"],"a":1,"why":"Đoạn D: thay đổi tốt nhất là buổi sáng — thay vì chờ xe buýt đông, anh đạp xe chậm qua cây và hồ."},
{"type":"MC","q":"Lời khuyên thực tế của Minh cho người lớn muốn học muộn là gì?","o":["Mua xe đắt tiền nhất","Tìm chỗ trống, nhờ bạn kiên nhẫn giúp, đội mũ bảo hiểm, tập ít mỗi ngày","Tập một lần thật lâu rồi thôi","Chỉ học bằng video"],"options":["Mua xe đắt tiền nhất","Tìm chỗ trống, nhờ bạn kiên nhẫn giúp, đội mũ bảo hiểm, tập ít mỗi ngày","Tập một lần thật lâu rồi thôi","Chỉ học bằng video"],"a":1,"why":"Đoạn E: tìm chỗ trống, nhờ bạn kiên nhẫn giúp, đội mũ bảo hiểm và tập một ít mỗi ngày."},
{"type":"TFNG","q":"Minh luôn đội mũ bảo hiểm khi đi xe.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn D: Minh vẫn tránh đường đông và luôn đội mũ bảo hiểm → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Buổi học thứ ba, Tuan buông tay và Minh tự đi được gần ______.","o":["hai mươi mét","hai trăm mét","hai cây số","hai mươi phút"],"options":["hai mươi mét","hai trăm mét","hai cây số","hai mươi phút"],"a":0,"why":"Đoạn C: buổi thứ ba, Tuan buông tay và Minh tự đi gần hai mươi mét rồi dừng lại."},
{"type":"MATCH","q":"Ai dạy Minh đi xe đạp?","o":["Một giáo viên trường học","Bạn anh, Tuan","Một huấn luyện viên chuyên nghiệp","Đồng nghiệp ở văn phòng"],"options":["Một giáo viên trường học","Bạn anh, Tuan","Một huấn luyện viên chuyên nghiệp","Đồng nghiệp ở văn phòng"],"a":1,"why":"Đoạn B: bạn anh, Tuan, là người dạy Minh."}
],
"translation":"Minh ba mươi hai tuổi, làm việc ở văn phòng tại Hà Nội và tới mùa xuân năm ngoái vẫn chưa từng đi xe đạp. Hồi nhỏ anh sống trong tòa nhà cao, không có chỗ tập an toàn. Khi văn phòng chuyển tới gần công viên, bạn bè gợi ý anh đạp xe đi làm. Học khi đã lớn khó hơn anh tưởng: buổi đầu anh chỉ giữ thăng bằng vài giây và ngã hai lần. Bạn Tuan dạy anh quy tắc quan trọng nhất là nhìn về phía trước, không nhìn xuống bánh xe. Sau ba buổi học ngắn và tập thêm buổi sáng sớm, một tháng sau Minh đã đạp xe tới công viên gần văn phòng trong khoảng mười lăm phút. Anh khuyên người lớn khác đừng sợ học muộn: tìm chỗ trống, nhờ bạn kiên nhẫn giúp, đội mũ bảo hiểm và tập một ít mỗi ngày.",
"phrases":[{"en":"keep his balance","vi":"giữ thăng bằng"},{"en":"look ahead","vi":"nhìn về phía trước"},{"en":"let go","vi":"buông tay"},{"en":"on quiet streets","vi":"trên đường phố yên tĩnh"},{"en":"wear a helmet","vi":"đội mũ bảo hiểm"}]},
{"topic":"Dự án vườn trường","level":"Band 4.5","title":"The School Garden Project",
"text":"A. Last year, the students of class 6B at Le Loi Secondary School started a small garden behind their classroom. Their teacher, Mrs Lan, gave them a piece of empty land, about twenty square metres, that nobody had used for years. The soil was hard and full of stones, so for the first two weeks the students only cleaned the land, removed stones and mixed the soil with compost made from dry leaves and kitchen waste.\n\nB. In March, the class planted their first seeds: morning glory, lettuce, tomatoes and herbs like mint and basil. Each group of five students took care of one bed. They watered the plants every morning before lessons and wrote the height of the plants in a notebook every Friday. When insects ate the lettuce leaves, the students did not use chemicals; instead, they picked the insects off by hand and planted garlic nearby, because they had read that its strong smell keeps many insects away.\n\nC. The first harvest came in May, and it was small but exciting. The class picked two kilograms of lettuce and one kilogram of tomatoes, and the school cook used them for lunch the same day. Students who had never liked vegetables said the lettuce tasted better because they had grown it themselves. Mrs Lan said the best lesson was not about plants at all: the students learned to work together, share tools and wait patiently for results.\n\nD. The garden also changed how the school deals with waste. Before the project, lunch leftovers went into one big bin. Now, students separate vegetable waste into a compost box, and the compost goes back to the garden. The school now buys fewer plastic bags, and the area behind the classroom, once dirty and empty, is green and full of birds in the morning.\n\nE. This year, class 6B plans to grow more: beans, cucumbers and sunflowers. They also want to teach class 6A how to start a garden, and they hope to sell some herbs at the school fair to buy new watering cans. Mrs Lan believes the garden will continue even after class 6B moves up, because younger students already ask when they can have their own beds.",
"questions":[
{"type":"MC","q":"Mảnh đất vườn trường rộng khoảng bao nhiêu?","o":["10 mét vuông","20 mét vuông","50 mét vuông","100 mét vuông"],"options":["10 mét vuông","20 mét vuông","50 mét vuông","100 mét vuông"],"a":1,"why":"Đoạn A: mảnh đất trống khoảng hai mươi mét vuông, nhiều năm không ai dùng."},
{"type":"MSEND","q":"Theo bài, hai tuần đầu học sinh chỉ làm gì?","o":["gieo hạt giống","dọn đất, nhặt đá và trộn đất với phân ủ","tưới nước mỗi sáng","bán rau ở hội chợ"],"options":["gieo hạt giống","dọn đất, nhặt đá và trộn đất với phân ủ","tưới nước mỗi sáng","bán rau ở hội chợ"],"a":1,"why":"Đoạn A: hai tuần đầu học sinh chỉ dọn đất, nhặt đá và trộn đất với phân ủ từ lá khô và rác nhà bếp."},
{"type":"TFNG","q":"Lớp 6B dùng thuốc hóa học để diệt sâu ăn rau diếp.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn B: học sinh không dùng hóa chất; các em bắt sâu bằng tay và trồng tỏi gần đó → Sai."},
{"type":"MC","q":"Vì sao học sinh trồng tỏi gần rau?","o":["Vì tỏi bán được giá cao","Vì mùi mạnh của tỏi xua nhiều loại côn trùng","Vì tỏi dễ trồng nhất","Vì cô Lan yêu cầu trồng đủ loại"],"options":["Vì tỏi bán được giá cao","Vì mùi mạnh của tỏi xua nhiều loại côn trùng","Vì tỏi dễ trồng nhất","Vì cô Lan yêu cầu trồng đủ loại"],"a":1,"why":"Đoạn B: các em trồng tỏi gần đó vì đã đọc rằng mùi mạnh của tỏi xua nhiều côn trùng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Học sinh tưới cây mỗi ______ và ghi chiều cao cây vào ______.","o":["sáng trước giờ học; thứ Sáu","chiều sau giờ học; thứ Hai","trưa; cuối tháng","tối; mỗi ngày"],"options":["sáng trước giờ học; thứ Sáu","chiều sau giờ học; thứ Hai","trưa; cuối tháng","tối; mỗi ngày"],"a":0,"why":"Đoạn B: các em tưới cây mỗi sáng trước giờ học và ghi chiều cao cây vào vở mỗi thứ Sáu."},
{"type":"TFNG","q":"Vụ thu hoạch đầu tiên vào tháng Năm gồm hai ki-lô-gam rau diếp và một ki-lô-gam cà chua.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn C: vụ đầu vào tháng Năm thu hai ki-lô-gam rau diếp và một ki-lô-gam cà chua → Đúng."},
{"type":"MC","q":"Theo cô Lan, bài học hay nhất từ vườn là gì?","o":["Cách trồng cà chua","Cách làm phân ủ","Học sinh học làm việc cùng nhau, chia sẻ dụng cụ và kiên nhẫn chờ kết quả","Học sinh thích ăn rau hơn"],"options":["Cách trồng cà chua","Cách làm phân ủ","Học sinh học làm việc cùng nhau, chia sẻ dụng cụ và kiên nhẫn chờ kết quả","Học sinh thích ăn rau hơn"],"a":2,"why":"Đoạn C: cô Lan nói bài học hay nhất không phải về cây cối: học sinh học làm việc cùng nhau, chia sẻ dụng cụ và kiên nhẫn chờ kết quả."},
{"type":"YNNG","q":"Theo tác giả, mọi học sinh trong trường hiện đều thích ăn rau.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":2,"why":"Bài chỉ nói một số học sinh trước đây không thích rau nay thấy rau ngon hơn; không nói mọi học sinh đều thích ăn rau → Not Given."},
{"type":"MSEND","q":"Theo bài, vườn đã thay đổi cách trường xử lý rác như thế nào?","o":["Trường đốt hết rác thải","Học sinh tách rác rau vào thùng ủ, phân ủ quay lại vườn","Trường thuê công ty dọn rác","Học sinh mang rác về nhà"],"options":["Trường đốt hết rác thải","Học sinh tách rác rau vào thùng ủ, phân ủ quay lại vườn","Trường thuê công ty dọn rác","Học sinh mang rác về nhà"],"a":1,"why":"Đoạn D: học sinh tách rác rau vào thùng ủ, và phân ủ quay lại vườn."},
{"type":"MC","q":"Năm nay lớp 6B dự định làm gì thêm?","o":["Chỉ trồng rau diếp","Trồng thêm đậu, dưa chuột, hoa hướng dương và dạy lớp 6A làm vườn","Bán toàn bộ vườn","Chuyển vườn ra trước cổng trường"],"options":["Chỉ trồng rau diếp","Trồng thêm đậu, dưa chuột, hoa hướng dương và dạy lớp 6A làm vườn","Bán toàn bộ vườn","Chuyển vườn ra trước cổng trường"],"a":1,"why":"Đoạn E: năm nay lớp dự định trồng thêm đậu, dưa chuột, hoa hướng dương và dạy lớp 6A cách bắt đầu một khu vườn."},
{"type":"TFNG","q":"Lớp 6B muốn bán một số thảo mộc ở hội chợ trường để mua bình tưới mới.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn E: các em hy vọng bán một số thảo mộc ở hội chợ trường để mua bình tưới mới → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Trước dự án, rác thừa bữa trưa được bỏ vào ______; nay rác rau được tách vào ______.","o":["một thùng lớn; thùng ủ","nhiều thùng nhỏ; vườn","thùng ủ; thùng lớn","vườn; thùng lớn"],"options":["một thùng lớn; thùng ủ","nhiều thùng nhỏ; vườn","thùng ủ; thùng lớn","vườn; thùng lớn"],"a":0,"why":"Đoạn D: trước dự án, rác thừa bữa trưa bỏ vào một thùng lớn; nay học sinh tách rác rau vào thùng ủ."},
{"type":"MATCH","q":"Nhóm nào chăm sóc một luống rau?","o":["Mỗi học sinh một luống","Mỗi nhóm năm học sinh một luống","Cả lớp cùng một luống","Chỉ cô Lan chăm sóc"],"options":["Mỗi học sinh một luống","Mỗi nhóm năm học sinh một luống","Cả lớp cùng một luống","Chỉ cô Lan chăm sóc"],"a":1,"why":"Đoạn B: mỗi nhóm năm học sinh chăm sóc một luống."},
{"type":"MC","q":"Vì sao cô Lan tin vườn sẽ tiếp tục sau khi lớp 6B lên lớp?","o":["Vì trường sẽ thuê người làm vườn","Vì học sinh nhỏ hơn đã hỏi khi nào các em có luống riêng","Vì vườn đã kiếm được nhiều tiền","Vì cô Lan sẽ dạy lớp 6B tiếp"],"options":["Vì trường sẽ thuê người làm vườn","Vì học sinh nhỏ hơn đã hỏi khi nào các em có luống riêng","Vì vườn đã kiếm được nhiều tiền","Vì cô Lan sẽ dạy lớp 6B tiếp"],"a":1,"why":"Đoạn E: học sinh nhỏ hơn đã hỏi khi nào các em có luống riêng của mình."}
],"translation":"Năm ngoái, học sinh lớp 6B trường THCS Lê Lợi bắt đầu một khu vườn nhỏ sau lớp học trên mảnh đất trống khoảng hai mươi mét vuông. Hai tuần đầu các em chỉ dọn đất, nhặt đá và trộn đất với phân ủ từ lá khô và rác nhà bếp. Tháng Ba, lớp gieo hạt rau muống, rau diếp, cà chua và thảo mộc như bạc hà, húng quế; mỗi nhóm năm học sinh chăm sóc một luống, tưới mỗi sáng và ghi chiều cao cây mỗi thứ Sáu. Khi sâu ăn rau diếp, các em không dùng hóa chất mà bắt sâu bằng tay và trồng tỏi gần đó vì mùi mạnh xua côn trùng. Vụ thu hoạch đầu vào tháng Năm gồm hai ki-lô-gam rau diếp và một ki-lô-gam cà chua, đầu bếp dùng cho bữa trưa ngay hôm đó. Cô Lan nói bài học hay nhất là học sinh học làm việc cùng nhau, chia sẻ dụng cụ và kiên nhẫn chờ kết quả. Vườn còn thay đổi cách trường xử lý rác: rác rau được tách vào thùng ủ và phân ủ quay lại vườn. Năm nay lớp dự định trồng thêm đậu, dưa chuột, hoa hướng dương, dạy lớp 6A làm vườn và bán thảo mộc ở hội chợ để mua bình tưới mới.","phrases":[{"en": "empty land", "vi": "mảnh đất trống"}, {"en": "mix the soil with compost", "vi": "trộn đất với phân ủ"}, {"en": "take care of one bed", "vi": "chăm sóc một luống"}, {"en": "pick the insects off by hand", "vi": "bắt sâu bằng tay"}, {"en": "separate vegetable waste", "vi": "tách rác rau"}]}]);
/* PHA 2 (a) — tiep: 3 bai Band 5.5 cho pool readingMock (13+13+14=40 cau). */
CONTENT.readingMock.push.apply(CONTENT.readingMock, [
{"topic":"Đi bộ đi làm tốt cho thành phố","level":"Band 5.5","title":"Why Walking to Work Is Good for a City",
"text":"A. Every morning in many large cities, thousands of people spend an hour or more sitting in traffic, even though their offices are only two or three kilometres from home. Transport researchers say that a large share of these short car trips could easily be walked in twenty to thirty minutes. Walking to work is not only a personal health choice, they argue, but also a practical answer to some of the most expensive problems cities face: traffic jams, air pollution and the rising cost of road building.\n\nB. The health argument is the simplest. People who walk briskly for at least thirty minutes a day have stronger hearts, sleep better and report lower stress than people who drive everywhere. Unlike a gym membership, walking costs nothing and fits naturally into a day: the journey to work becomes the exercise. Doctors also point out that walkers are less likely to gain weight over time, because they move every weekday instead of only on weekends.\n\nC. The benefits for the city are just as clear. One bus carries as many people as forty cars, and one pedestrian needs far less road space than any vehicle. When more people walk, streets become quieter and safer for children and older residents. Shops along walking routes also gain: studies in several European cities found that pedestrians visit local shops more often than drivers, who tend to buy everything in one large trip to a supermarket outside the centre.\n\nD. Yet walking to work is not always easy. In hot climates, people arrive sweaty; in rainy seasons, they need shelter and dry places to change clothes. Many cities also lack safe pavements: cars park on footpaths, crossings are rare, and street lighting is poor at night. Without these basics, even people who want to walk choose their cars, and the traffic problem grows worse.\n\nE. The cities that have succeeded did not simply tell people to walk more. They widened pavements, planted trees for shade, built safe crossings every few hundred metres, and gave office buildings showers and lockers for walkers. They also made driving short distances slightly less convenient, for example by charging for parking in the centre. The lesson is consistent: when walking is safe, pleasant and practical, a surprising number of people choose it on their own.",
"questions":[
{"type":"MC","q":"Theo các nhà nghiên cứu giao thông, nhiều chuyến đi xe ngắn có thể thay bằng gì?","o":["Đi xe buýt đường dài","Đi bộ trong 20–30 phút","Đi xe đạp leo núi","Làm việc tại nhà cả tuần"],"options":["Đi xe buýt đường dài","Đi bộ trong 20–30 phút","Đi xe đạp leo núi","Làm việc tại nhà cả tuần"],"a":1,"why":"Đoạn A: phần lớn chuyến đi xe ngắn có thể dễ dàng đi bộ trong hai mươi tới ba mươi phút."},
{"type":"MSEND","q":"Theo bài, đi bộ đi làm còn là đáp án thực tế cho vấn đề nào của thành phố?","o":["Thiếu bãi đỗ xe đạp","Tắc đường, ô nhiễm không khí và chi phí làm đường tăng","Thiếu trường học","Giá nhà tăng"],"options":["Thiếu bãi đỗ xe đạp","Tắc đường, ô nhiễm không khí và chi phí làm đường tăng","Thiếu trường học","Giá nhà tăng"],"a":1,"why":"Đoạn A: đi bộ là đáp án thực tế cho tắc đường, ô nhiễm không khí và chi phí làm đường tăng."},
{"type":"TFNG","q":"Đi bộ nhanh ít nhất 30 phút mỗi ngày giúp tim khỏe hơn và ngủ tốt hơn.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn B: người đi bộ nhanh ít nhất ba mươi phút mỗi ngày có tim khỏe hơn, ngủ tốt hơn và ít căng thẳng hơn → Đúng."},
{"type":"MC","q":"Vì sao đi bộ phù hợp làm bài tập hằng ngày hơn tới phòng gym?","o":["Vì đi bộ nhanh hơn","Vì đi bộ không tốn tiền và gắn tự nhiên vào hành trình đi làm","Vì phòng gym luôn đông","Vì bác sĩ yêu cầu"],"options":["Vì đi bộ nhanh hơn","Vì đi bộ không tốn tiền và gắn tự nhiên vào hành trình đi làm","Vì phòng gym luôn đông","Vì bác sĩ yêu cầu"],"a":1,"why":"Đoạn B: khác với thẻ phòng gym, đi bộ không tốn tiền và gắn tự nhiên vào một ngày — hành trình đi làm trở thành bài tập."},
{"type":"SC","q":"Hoàn thành tóm tắt. Một xe buýt chở số người bằng ______ xe hơi, và người đi bộ cần ______ diện tích đường hơn bất kỳ phương tiện nào.","o":["bốn mươi; ít hơn nhiều","mười; nhiều hơn","bốn mươi; nhiều hơn","mười; ít hơn nhiều"],"options":["bốn mươi; ít hơn nhiều","mười; nhiều hơn","bốn mươi; nhiều hơn","mười; ít hơn nhiều"],"a":0,"why":"Đoạn C: một xe buýt chở số người bằng bốn mươi xe hơi, và người đi bộ cần ít diện tích đường hơn nhiều so với bất kỳ phương tiện nào."},
{"type":"TFNG","q":"Người đi bộ ghé cửa hàng địa phương thường xuyên hơn tài xế.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn C: nghiên cứu ở vài thành phố châu Âu thấy người đi bộ ghé cửa hàng địa phương thường xuyên hơn tài xế → Đúng."},
{"type":"MC","q":"Điều gì khiến đi bộ đi làm khó khăn ở xứ nóng?","o":["Đường quá dài","Người ta tới nơi đầy mồ hôi và cần chỗ thay đồ khô","Không có cây xanh","Xe buýt quá rẻ"],"options":["Đường quá dài","Người ta tới nơi đầy mồ hôi và cần chỗ thay đồ khô","Không có cây xanh","Xe buýt quá rẻ"],"a":1,"why":"Đoạn D: ở khí hậu nóng, người ta tới nơi đầy mồ hôi; mùa mưa cần chỗ trú và chỗ thay đồ khô."},
{"type":"YNNG","q":"Theo tác giả, mọi thành phố đều đã có vỉa hè an toàn cho người đi bộ.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn D: nhiều thành phố thiếu vỉa hè an toàn — xe đỗ trên lối đi, ít chỗ sang đường, đèn đường kém → No."},
{"type":"MSEND","q":"Theo bài, các thành phố thành công đã làm gì cho người đi bộ?","o":["Chỉ khuyên người dân đi bộ nhiều hơn","Mở rộng vỉa hè, trồng cây che bóng, làm chỗ sang đường an toàn, trang bị phòng tắm và tủ đồ","Cấm hoàn toàn xe hơi","Xây thêm đường cao tốc"],"options":["Chỉ khuyên người dân đi bộ nhiều hơn","Mở rộng vỉa hè, trồng cây che bóng, làm chỗ sang đường an toàn, trang bị phòng tắm và tủ đồ","Cấm hoàn toàn xe hơi","Xây thêm đường cao tốc"],"a":1,"why":"Đoạn E: các thành phố thành công mở rộng vỉa hè, trồng cây che bóng, làm chỗ sang đường an toàn và trang bị phòng tắm, tủ đồ cho người đi bộ."},
{"type":"MC","q":"Bài học chung rút ra từ các thành phố thành công là gì?","o":["Đi bộ chỉ hiệu quả ở thành phố nhỏ","Khi đi bộ an toàn, dễ chịu và thực tế, nhiều người tự chọn đi bộ","Cần cấm xe hơi mới có người đi bộ","Đi bộ không giúp giảm tắc đường"],"options":["Đi bộ chỉ hiệu quả ở thành phố nhỏ","Khi đi bộ an toàn, dễ chịu và thực tế, nhiều người tự chọn đi bộ","Cần cấm xe hơi mới có người đi bộ","Đi bộ không giúp giảm tắc đường"],"a":1,"why":"Đoạn E: khi đi bộ an toàn, dễ chịu và thực tế, nhiều người tự chọn đi bộ."},
{"type":"TFNG","q":"Người đi bộ ít có khả năng tăng cân theo thời gian vì họ vận động mỗi ngày làm việc.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn B: người đi bộ ít có khả năng tăng cân theo thời gian vì họ vận động mỗi ngày làm việc thay vì chỉ cuối tuần → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Khi nhiều người đi bộ hơn, đường phố trở nên ______ và ______ hơn cho trẻ em và người lớn tuổi.","o":["yên tĩnh; an toàn","đông đúc; nguy hiểm","rộng; đắt đỏ","tối; vắng vẻ"],"options":["yên tĩnh; an toàn","đông đúc; nguy hiểm","rộng; đắt đỏ","tối; vắng vẻ"],"a":0,"why":"Đoạn C: khi nhiều người đi bộ hơn, đường phố trở nên yên tĩnh hơn và an toàn hơn cho trẻ em và người lớn tuổi."},
{"type":"MATCH","q":"Nhóm nào có xu hướng mua mọi thứ trong một chuyến lớn tới siêu thị ngoài trung tâm?","o":["Người đi bộ","Tài xế","Người đi xe buýt","Trẻ em"],"options":["Người đi bộ","Tài xế","Người đi xe buýt","Trẻ em"],"a":1,"why":"Đoạn C: tài xế có xu hướng mua mọi thứ trong một chuyến lớn tới siêu thị ngoài trung tâm."}
],
"translation":"Mỗi sáng ở nhiều thành phố lớn, hàng nghìn người ngồi trong tắc đường cả giờ dù văn phòng chỉ cách nhà hai ba cây số. Các nhà nghiên cứu giao thông cho rằng phần lớn chuyến xe ngắn này có thể đi bộ trong hai mươi tới ba mươi phút. Đi bộ đi làm không chỉ tốt cho sức khỏe cá nhân mà còn là đáp án thực tế cho tắc đường, ô nhiễm và chi phí làm đường. Người đi bộ nhanh ít nhất ba mươi phút mỗi ngày có tim khỏe hơn, ngủ tốt hơn, ít căng thẳng hơn và ít tăng cân hơn. Với thành phố, đường phố yên tĩnh và an toàn hơn, cửa hàng địa phương hưởng lợi vì người đi bộ ghé thường xuyên hơn tài xế. Tuy vậy, khí hậu nóng, mưa và thiếu vỉa hè an toàn khiến nhiều người vẫn chọn xe hơi. Các thành phố thành công đã mở rộng vỉa hè, trồng cây che bóng, làm chỗ sang đường an toàn và trang bị phòng tắm, tủ đồ — và khi đi bộ an toàn, dễ chịu và thực tế, nhiều người tự chọn đi bộ.",
"phrases":[{"en":"a large share of","vi":"phần lớn"},{"en":"fits naturally into a day","vi":"gắn tự nhiên vào một ngày"},{"en":"road space","vi":"diện tích đường"},{"en":"safe crossings","vi":"chỗ sang đường an toàn"},{"en":"on their own","vi":"tự mình"}]},
{"topic":"Nấu ăn ở nhà và ăn ngoài","level":"Band 5.5","title":"Cooking at Home vs Eating Out",
"text":"A. In most cities today, a worker finishing late can choose between cooking at home and ordering food to the door in less than thirty minutes. Delivery apps have made eating out, or eating food cooked elsewhere, cheaper and faster than ever before. Yet surveys keep finding the same puzzle: people say they enjoy home-cooked meals more, but they still order takeaway several times a week. The reasons, researchers suggest, are less about taste than about time, energy and habit.\n\nB. The strongest argument for cooking at home is control. A home cook decides exactly how much salt, oil and sugar goes into a dish, and can use fresh vegetables instead of sauces high in fat. Studies that follow families over years find that people who cook at home at least five times a week tend to eat more vegetables and less fried food than people who rarely cook. Home cooking is also usually cheaper: the same ingredients that make four servings at home often cost less than two restaurant meals.\n\nC. Eating out has real advantages, too. It saves the time spent shopping, preparing and washing up, which for a tired worker may be the most valuable hour of the evening. It also lets people try dishes they cannot cook themselves, from sushi to wood-fired pizza, and it turns an ordinary evening into a social event: friends meet, talk and share plates in a way that rarely happens over a quick meal at home.\n\nD. The problem, nutritionists warn, is not eating out itself but how often it happens. Restaurant food is designed to taste exciting, which usually means more salt, sugar and oil than a home version of the same dish. Portions are also larger: a restaurant serving of pasta can contain twice the energy of a home serving. When eating out becomes a daily habit, these differences add up, and weight and blood pressure tend to rise.\n\nE. The healthiest pattern, most experts agree, is a mix rather than a strict rule. Cook at home on ordinary weekdays, when a simple meal of rice, vegetables and fish takes only twenty minutes, and save eating out for weekends or meetings with friends. Planning helps more than willpower: people who decide the week's meals on Sunday, and keep basic ingredients at home, cook far more often than people who decide what to eat when they are already hungry.",
"questions":[
{"type":"MC","q":"Theo bài, vì sao người ta vẫn đặt đồ ăn ngoài nhiều lần mỗi tuần dù thích cơm nhà hơn?","o":["Vì đồ ăn ngoài ngon hơn hẳn","Vì lý do thời gian, năng lượng và thói quen hơn là vị ngon","Vì nấu ở nhà đắt hơn","Vì không ai biết nấu ăn"],"options":["Vì đồ ăn ngoài ngon hơn hẳn","Vì lý do thời gian, năng lượng và thói quen hơn là vị ngon","Vì nấu ở nhà đắt hơn","Vì không ai biết nấu ăn"],"a":1,"why":"Đoạn A: lý do ít liên quan tới vị ngon mà liên quan tới thời gian, năng lượng và thói quen."},
{"type":"MSEND","q":"Theo bài, lập luận mạnh nhất cho nấu ăn ở nhà là","o":["nấu ở nhà nhanh hơn","người nấu kiểm soát chính xác lượng muối, dầu, đường và dùng rau tươi","nấu ở nhà không cần đi chợ","món nhà luôn ngon hơn nhà hàng"],"options":["nấu ở nhà nhanh hơn","người nấu kiểm soát chính xác lượng muối, dầu, đường và dùng rau tươi","nấu ở nhà không cần đi chợ","món nhà luôn ngon hơn nhà hàng"],"a":1,"why":"Đoạn B: lập luận mạnh nhất là sự kiểm soát — người nấu quyết định chính xác lượng muối, dầu, đường và có thể dùng rau tươi."},
{"type":"TFNG","q":"Người nấu ở nhà ít nhất năm lần mỗi tuần có xu hướng ăn nhiều rau hơn và ít đồ chiên hơn.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn B: nghiên cứu theo dõi gia đình nhiều năm thấy người nấu ở nhà ít nhất năm lần mỗi tuần ăn nhiều rau hơn và ít đồ chiên hơn → Đúng."},
{"type":"MC","q":"Ăn ngoài có lợi thế thật nào?","o":["Rẻ hơn nấu ở nhà","Tiết kiệm thời gian mua sắm, chuẩn bị, dọn dẹp và tạo dịp gặp gỡ bạn bè","Tốt cho sức khỏe hơn","Giúp giảm cân"],"options":["Rẻ hơn nấu ở nhà","Tiết kiệm thời gian mua sắm, chuẩn bị, dọn dẹp và tạo dịp gặp gỡ bạn bè","Tốt cho sức khỏe hơn","Giúp giảm cân"],"a":1,"why":"Đoạn C: ăn ngoài tiết kiệm thời gian mua sắm, chuẩn bị, dọn dẹp và biến buổi tối thường thành dịp gặp gỡ bạn bè."},
{"type":"SC","q":"Hoàn thành tóm tắt. Nguyên liệu nấu bốn phần ăn ở nhà thường rẻ hơn ______ bữa ăn nhà hàng.","o":["hai","bốn","sáu","mười"],"options":["hai","bốn","sáu","mười"],"a":0,"why":"Đoạn B: nguyên liệu làm bốn phần ăn ở nhà thường rẻ hơn hai bữa ăn nhà hàng."},
{"type":"TFNG","q":"Theo các chuyên gia dinh dưỡng, vấn đề là ăn ngoài nói chung chứ không phải tần suất ăn ngoài.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn D: vấn đề không phải ăn ngoài nói chung mà là tần suất — khi ăn ngoài thành thói quen hằng ngày thì khác biệt cộng dồn → Sai."},
{"type":"MC","q":"Vì sao khẩu phần nhà hàng gây vấn đề?","o":["Vì khẩu phần quá nhỏ","Vì một phần mì nhà hàng có thể chứa gấp đôi năng lượng so với phần ăn ở nhà","Vì nhà hàng không dùng rau","Vì nhà hàng chỉ phục vụ đồ chiên"],"options":["Vì khẩu phần quá nhỏ","Vì một phần mì nhà hàng có thể chứa gấp đôi năng lượng so với phần ăn ở nhà","Vì nhà hàng không dùng rau","Vì nhà hàng chỉ phục vụ đồ chiên"],"a":1,"why":"Đoạn D: một phần mì nhà hàng có thể chứa gấp đôi năng lượng so với phần ăn ở nhà."},
{"type":"YNNG","q":"Theo tác giả, mọi người nên ngừng ăn ngoài hoàn toàn.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn E: mẫu tốt nhất là kết hợp chứ không phải quy tắc nghiêm ngặt — nấu ở nhà ngày thường, dành ăn ngoài cho cuối tuần → No."},
{"type":"MSEND","q":"Theo bài, điều giúp người ta nấu ăn thường xuyên hơn ý chí là","o":["mua đồ ăn đắt tiền","lên kế hoạch: quyết định bữa ăn cả tuần vào chủ nhật và trữ nguyên liệu cơ bản","xem nhiều video nấu ăn","ăn ngoài ít hơn"],"options":["mua đồ ăn đắt tiền","lên kế hoạch: quyết định bữa ăn cả tuần vào chủ nhật và trữ nguyên liệu cơ bản","xem nhiều video nấu ăn","ăn ngoài ít hơn"],"a":1,"why":"Đoạn E: lên kế hoạch giúp nhiều hơn ý chí — người quyết định bữa ăn cả tuần vào chủ nhật và trữ nguyên liệu cơ bản nấu thường xuyên hơn nhiều."},
{"type":"MC","q":"Bữa ăn đơn giản gồm cơm, rau và cá mất bao lâu theo bài?","o":["10 phút","20 phút","45 phút","60 phút"],"options":["10 phút","20 phút","45 phút","60 phút"],"a":1,"why":"Đoạn E: bữa ăn đơn giản gồm cơm, rau và cá chỉ mất hai mươi phút."},
{"type":"TFNG","q":"Đồ ăn nhà hàng thường có nhiều muối, đường và dầu hơn phiên bản nấu ở nhà của cùng món.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn D: đồ ăn nhà hàng thường có nhiều muối, đường và dầu hơn phiên bản nấu ở nhà của cùng món → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Ăn ngoài thành thói quen hằng ngày khiến cân nặng và ______ có xu hướng tăng.","o":["huyết áp","chiều cao","trí nhớ","thị lực"],"options":["huyết áp","chiều cao","trí nhớ","thị lực"],"a":0,"why":"Đoạn D: khi ăn ngoài thành thói quen hằng ngày, cân nặng và huyết áp có xu hướng tăng."},
{"type":"MATCH","q":"Ví dụ nào cho món người ta khó tự nấu được mà ăn ngoài mang lại?","o":["Cơm và rau","Sushi và pizza nướng củi","Trứng luộc","Bánh mì"],"options":["Cơm và rau","Sushi và pizza nướng củi","Trứng luộc","Bánh mì"],"a":1,"why":"Đoạn C: ăn ngoài cho thử món khó tự nấu như sushi và pizza nướng củi."}
],
"translation":"Ngày nay ở hầu hết thành phố, người làm việc về muộn có thể chọn nấu ở nhà hoặc đặt đồ ăn tới cửa trong chưa đầy ba mươi phút. Ứng dụng giao đồ ăn khiến ăn ngoài rẻ và nhanh hơn bao giờ hết, nhưng khảo sát vẫn thấy nghịch lý: người ta nói thích cơm nhà hơn mà vẫn đặt đồ ăn ngoài vài lần mỗi tuần — lý do liên quan tới thời gian, năng lượng và thói quen hơn là vị ngon. Nấu ở nhà mạnh nhất ở sự kiểm soát: người nấu quyết định lượng muối, dầu, đường, dùng rau tươi; người nấu ít nhất năm lần mỗi tuần ăn nhiều rau hơn, ít đồ chiên hơn và thường rẻ hơn. Ăn ngoài tiết kiệm thời gian và tạo dịp gặp gỡ, thử món khó tự nấu. Vấn đề không phải ăn ngoài mà là tần suất: đồ nhà hàng nhiều muối, đường, dầu và khẩu phần lớn hơn, ăn hằng ngày khiến cân nặng và huyết áp tăng. Mẫu tốt nhất là kết hợp: nấu ở nhà ngày thường, dành ăn ngoài cho cuối tuần; lên kế hoạch bữa ăn cả tuần giúp nhiều hơn ý chí.",
"phrases":[{"en":"several times a week","vi":"vài lần mỗi tuần"},{"en":"tend to eat","vi":"có xu hướng ăn"},{"en":"washing up","vi":"dọn dẹp, rửa bát"},{"en":"add up","vi":"cộng dồn"},{"en":"basic ingredients","vi":"nguyên liệu cơ bản"}]},
{"topic":"Thư viện nhỏ giúp khu phố","level":"Band 5.5","title":"How Small Libraries Help a Neighbourhood",
"text":"A. When the city council announced it would close the small library on Maple Street to save money, residents organised a campaign to keep it open. The library had only two rooms and about eight thousand books, far fewer than the central library downtown. Yet for the people living nearby, it was the place where children did homework after school, older residents read newspapers, and newcomers practised the local language with volunteers. The campaign succeeded, and the library stayed open — a result that surprised even its supporters.\n\nB. The value of a small library is hard to measure in money, but easy to see in daily life. Unlike a large central library, which people visit for a specific book, a neighbourhood library is part of a routine: parents stop there on the way home, students revise for exams at its tables, and retired teachers run reading clubs for children. Librarians know their readers by name and can suggest a book that fits a child's exact reading level, something a computer catalogue rarely does well.\n\nC. Small libraries also reduce inequality in a quiet way. Not every family can buy books, pay for fast internet, or provide a silent room for study. A free library gives all children the same starting point: the same stories, the same reference books and the same help with homework. Research in several countries has found that children who live near a library and use it regularly read more, and read better, than children in similar areas without one.\n\nD. Critics argue that in the age of the internet, libraries are no longer necessary, because almost any information can be found online. Librarians answer that the internet gives information, but not always understanding: a child searching online may find a thousand results and not know which one to trust. In a library, someone can ask a librarian, compare two books, and learn how to judge sources — skills that matter more, not less, when information is everywhere.\n\nE. The Maple Street library now opens six days a week and runs homework help, language practice and a small book club for teenagers. Its budget is still small, and volunteers do much of the work. But its story suggests a wider point: a neighbourhood does not only need roads and shops. It also needs a free, quiet place where anyone can learn, and where learning is treated as something shared, not bought.",
"questions":[
{"type":"MC","q":"Vì sao hội đồng thành phố muốn đóng cửa thư viện phố Maple?","o":["Vì thư viện quá cũ","Để tiết kiệm tiền","Vì ít người tới","Vì thư viện trung tâm lớn hơn"],"options":["Vì thư viện quá cũ","Để tiết kiệm tiền","Vì ít người tới","Vì thư viện trung tâm lớn hơn"],"a":1,"why":"Đoạn A: hội đồng tuyên bố đóng cửa thư viện nhỏ để tiết kiệm tiền."},
{"type":"MSEND","q":"Theo bài, thư viện phố Maple có quy mô như thế nào?","o":["Rất lớn, hàng trăm nghìn sách","Chỉ hai phòng và khoảng tám nghìn sách","Chỉ một phòng đọc báo","Chỉ phục vụ trẻ em"],"options":["Rất lớn, hàng trăm nghìn sách","Chỉ hai phòng và khoảng tám nghìn sách","Chỉ một phòng đọc báo","Chỉ phục vụ trẻ em"],"a":1,"why":"Đoạn A: thư viện chỉ có hai phòng và khoảng tám nghìn sách, ít hơn nhiều so với thư viện trung tâm."},
{"type":"TFNG","q":"Chiến dịch giữ thư viện đã thành công và thư viện vẫn mở cửa.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn A: chiến dịch thành công và thư viện vẫn mở cửa → Đúng."},
{"type":"MC","q":"Điểm khác biệt của thư viện khu phố so với thư viện trung tâm lớn là gì?","o":["Thư viện khu phố có nhiều sách hơn","Thư viện khu phố là một phần của thói quen hằng ngày","Thư viện trung tâm miễn phí còn thư viện khu phố thu phí","Thư viện khu phố chỉ mở cuối tuần"],"options":["Thư viện khu phố có nhiều sách hơn","Thư viện khu phố là một phần của thói quen hằng ngày","Thư viện trung tâm miễn phí còn thư viện khu phố thu phí","Thư viện khu phố chỉ mở cuối tuần"],"a":1,"why":"Đoạn B: khác với thư viện trung tâm mà người ta tới vì một cuốn sách cụ thể, thư viện khu phố là một phần của thói quen hằng ngày."},
{"type":"SC","q":"Hoàn thành tóm tắt. Thủ thư biết độc giả theo ______ và có thể gợi ý sách phù hợp với ______ đọc chính xác của trẻ.","o":["tên; trình độ","tuổi; sở thích","địa chỉ; trường học","nghề nghiệp; ngôn ngữ"],"options":["tên; trình độ","tuổi; sở thích","địa chỉ; trường học","nghề nghiệp; ngôn ngữ"],"a":0,"why":"Đoạn B: thủ thư biết độc giả theo tên và có thể gợi ý sách phù hợp với trình độ đọc chính xác của trẻ."},
{"type":"TFNG","q":"Thư viện nhỏ giúp giảm bất bình đẳng vì mọi gia đình đều có thể mua sách và internet nhanh.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn C: không phải gia đình nào cũng mua được sách hay trả tiền internet nhanh — thư viện miễn phí mới cho mọi trẻ cùng điểm xuất phát → Sai."},
{"type":"MC","q":"Nghiên cứu ở vài nước thấy gì về trẻ sống gần thư viện?","o":["Trẻ đọc ít hơn","Trẻ đọc nhiều hơn và đọc tốt hơn trẻ ở khu tương tự không có thư viện","Trẻ chỉ đọc truyện tranh","Trẻ không cần tới trường"],"options":["Trẻ đọc ít hơn","Trẻ đọc nhiều hơn và đọc tốt hơn trẻ ở khu tương tự không có thư viện","Trẻ chỉ đọc truyện tranh","Trẻ không cần tới trường"],"a":1,"why":"Đoạn C: trẻ sống gần thư viện và dùng thường xuyên đọc nhiều hơn và đọc tốt hơn trẻ ở khu tương tự không có thư viện."},
{"type":"YNNG","q":"Theo các nhà phê bình, thư viện không còn cần thiết vì mọi thông tin đều có trên mạng.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":0,"why":"Đoạn D: các nhà phê bình cho rằng thời đại internet khiến thư viện không còn cần thiết vì gần như mọi thông tin đều tìm được trên mạng → Yes (đúng là quan điểm của họ)."},
{"type":"MSEND","q":"Theo bài, thủ thư trả lời phê bình rằng internet cho thông tin nhưng không luôn cho","o":["sách miễn phí","sự hiểu biết: biết kết quả nào đáng tin và cách đánh giá nguồn","máy tính","chỗ ngồi yên tĩnh"],"options":["sách miễn phí","sự hiểu biết: biết kết quả nào đáng tin và cách đánh giá nguồn","máy tính","chỗ ngồi yên tĩnh"],"a":1,"why":"Đoạn D: internet cho thông tin nhưng không luôn cho sự hiểu biết — trẻ có thể không biết kết quả nào đáng tin; thư viện dạy cách đánh giá nguồn."},
{"type":"MC","q":"Hiện thư viện phố Maple mở cửa mấy ngày mỗi tuần?","o":["5 ngày","6 ngày","7 ngày","3 ngày"],"options":["5 ngày","6 ngày","7 ngày","3 ngày"],"a":1,"why":"Đoạn E: thư viện nay mở cửa sáu ngày mỗi tuần."},
{"type":"TFNG","q":"Tình nguyện viên làm phần lớn công việc ở thư viện phố Maple.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn E: ngân sách vẫn nhỏ và tình nguyện viên làm phần lớn công việc → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Thư viện chạy các hoạt động giúp làm bài tập, luyện ngôn ngữ và ______ cho thanh thiếu niên.","o":["câu lạc bộ sách nhỏ","lớp học bơi","phòng gym","quán cà phê"],"options":["câu lạc bộ sách nhỏ","lớp học bơi","phòng gym","quán cà phê"],"a":0,"why":"Đoạn E: thư viện chạy hoạt động giúp làm bài tập, luyện ngôn ngữ và một câu lạc bộ sách nhỏ cho thanh thiếu niên."},
{"type":"MATCH","q":"Ai tổ chức câu lạc bộ đọc cho trẻ em ở thư viện khu phố?","o":["Học sinh","Giáo viên đã nghỉ hưu","Hội đồng thành phố","Phụ huynh mới chuyển tới"],"options":["Học sinh","Giáo viên đã nghỉ hưu","Hội đồng thành phố","Phụ huynh mới chuyển tới"],"a":1,"why":"Đoạn B: giáo viên đã nghỉ hưu tổ chức câu lạc bộ đọc cho trẻ em."},
{"type":"MC","q":"Điểm rộng hơn rút ra từ câu chuyện thư viện phố Maple là gì?","o":["Khu phố chỉ cần đường và cửa hàng","Khu phố cần nơi miễn phí, yên tĩnh để ai cũng học được, và việc học được coi là thứ chia sẻ chứ không phải mua bán","Thư viện cần ngân sách lớn mới tồn tại","Chỉ trẻ em cần thư viện"],"options":["Khu phố chỉ cần đường và cửa hàng","Khu phố cần nơi miễn phí, yên tĩnh để ai cũng học được, và việc học được coi là thứ chia sẻ chứ không phải mua bán","Thư viện cần ngân sách lớn mới tồn tại","Chỉ trẻ em cần thư viện"],"a":1,"why":"Đoạn E: khu phố không chỉ cần đường và cửa hàng mà còn cần nơi miễn phí, yên tĩnh để ai cũng học được, nơi việc học được coi là thứ chia sẻ chứ không phải mua bán."}
],"translation":"Khi hội đồng thành phố tuyên bố đóng cửa thư viện nhỏ trên phố Maple để tiết kiệm tiền, cư dân tổ chức chiến dịch giữ nó mở cửa. Thư viện chỉ có hai phòng và khoảng tám nghìn sách, ít hơn nhiều so với thư viện trung tâm, nhưng với người dân gần đó, đó là nơi trẻ em làm bài tập sau giờ học, người lớn tuổi đọc báo và người mới tới luyện ngôn ngữ địa phương với tình nguyện viên. Chiến dịch thành công và thư viện vẫn mở cửa. Khác với thư viện trung tâm mà người ta tới vì một cuốn sách cụ thể, thư viện khu phố là một phần của thói quen hằng ngày: phụ huynh ghé trên đường về, học sinh ôn thi tại bàn, giáo viên đã nghỉ hưu tổ chức câu lạc bộ đọc cho trẻ em; thủ thư biết độc giả theo tên và gợi ý sách phù hợp trình độ đọc chính xác của trẻ. Thư viện nhỏ còn giảm bất bình đẳng một cách lặng lẽ: không phải gia đình nào cũng mua được sách hay trả tiền internet nhanh, thư viện miễn phí cho mọi trẻ cùng điểm xuất phát; nghiên cứu ở vài nước thấy trẻ sống gần thư viện và dùng thường xuyên đọc nhiều hơn và tốt hơn. Trước ý kiến thời đại internet khiến thư viện không cần thiết, thủ thư trả lời internet cho thông tin nhưng không luôn cho sự hiểu biết — cần biết kết quả nào đáng tin và cách đánh giá nguồn. Nay thư viện mở cửa sáu ngày mỗi tuần, chạy hoạt động giúp làm bài tập, luyện ngôn ngữ và câu lạc bộ sách nhỏ cho thanh thiếu niên; ngân sách vẫn nhỏ và tình nguyện viên làm phần lớn công việc.","phrases":[{"en": "keep it open", "vi": "giữ nó mở cửa"}, {"en": "part of a routine", "vi": "một phần của thói quen hằng ngày"}, {"en": "know their readers by name", "vi": "biết độc giả theo tên"}, {"en": "the same starting point", "vi": "cùng điểm xuất phát"}, {"en": "judge sources", "vi": "đánh giá nguồn"}]}]);
/* PHA 2 (a) — tiep: 3 bai Band 6.5 cho pool readingMock (13+13+14=40 cau). */
CONTENT.readingMock.push.apply(CONTENT.readingMock, [
{"topic":"Vì sao ong quan trọng hơn mật ong","level":"Band 6.5","title":"Why Bees Matter More Than Honey",
"text":"A. When people think of bees, they usually think of honey: golden jars on supermarket shelves and the familiar buzz on a summer afternoon. Yet honey is only a small part of what bees give us. Far more important is pollination, the process by which bees carry pollen from one flower to another as they collect nectar. Without this unpaid work, many of the fruits, vegetables and nuts we eat every day would become rare and expensive, and some would disappear from ordinary diets altogether.\n\nB. The scale of this work is easy to underestimate. A single honeybee colony can contain fifty thousand bees, and in one day its foragers may visit millions of flowers. Almonds, apples, blueberries, cucumbers and pumpkins all depend heavily on insect pollinators, and bees do most of that work. Farmers know this well: in several countries, orchards now rent hives during blossom season, paying beekeepers to place colonies beside the trees for a few crucial weeks.\n\nC. The trouble is that bee numbers are falling in many regions. The causes are connected rather than single: loss of wildflower meadows to intensive farming, diseases that spread quickly through stressed colonies, and pesticides that weaken bees' navigation so that foragers cannot find their way home. Climate change adds a further problem, because flowers may bloom earlier than usual while bees are still inactive, leaving both flowers unpollinated and bees without food.\n\nD. The decline matters beyond farming. Wild plants also depend on pollinators, and when pollinators vanish, the birds and animals that eat those plants' seeds and fruits decline too. Scientists describe this as a chain reaction: remove one link, the pollinator, and several other links weaken. Protecting bees is therefore not only about saving one insect, but about keeping whole food webs working.\n\nE. The response does not require everyone to become a beekeeper. Farmers can leave strips of wildflowers at field edges, cities can plant pollinator-friendly flowers in parks, and gardeners can avoid spraying pesticides during blossom time. Even a small balcony with lavender and herbs can feed passing bees. These steps are modest, but together they rebuild the flowery corridors that bees need to survive — and, by extension, protect the food on our own tables.",
"questions":[
{"type":"MC","q":"Theo bài, đóng góp quan trọng hơn mật ong của ong là gì?","o":["Làm sáp ong","Thụ phấn: mang phấn hoa từ hoa này sang hoa khác","Làm tổ đẹp","Tạo ra âm thanh vo ve"],"options":["Làm sáp ong","Thụ phấn: mang phấn hoa từ hoa này sang hoa khác","Làm tổ đẹp","Tạo ra âm thanh vo ve"],"a":1,"why":"Đoạn A: quan trọng hơn mật ong là thụ phấn — ong mang phấn hoa từ hoa này sang hoa khác khi lấy mật."},
{"type":"MSEND","q":"Theo bài, nếu không có công việc thụ phấn của ong, nhiều loại trái cây, rau và hạt sẽ","o":["rẻ hơn","trở nên hiếm và đắt, một số biến mất khỏi bữa ăn thường ngày","ngon hơn","mọc nhanh hơn"],"options":["rẻ hơn","trở nên hiếm và đắt, một số biến mất khỏi bữa ăn thường ngày","ngon hơn","mọc nhanh hơn"],"a":1,"why":"Đoạn A: nếu không có thụ phấn, nhiều trái cây, rau và hạt sẽ trở nên hiếm và đắt, một số biến mất khỏi bữa ăn thường ngày."},
{"type":"TFNG","q":"Một đàn ong mật có thể chứa năm mươi nghìn con ong.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn B: một đàn ong mật có thể chứa năm mươi nghìn con ong → Đúng."},
{"type":"MC","q":"Vì sao nông dân thuê tổ ong trong mùa hoa nở?","o":["Để lấy mật bán","Để đặt đàn ong cạnh cây trong vài tuần quan trọng cho thụ phấn","Để ong xua chim","Để làm du lịch"],"options":["Để lấy mật bán","Để đặt đàn ong cạnh cây trong vài tuần quan trọng cho thụ phấn","Để ong xua chim","Để làm du lịch"],"a":1,"why":"Đoạn B: vườn cây thuê tổ ong trong mùa hoa nở, trả tiền cho người nuôi ong để đặt đàn ong cạnh cây trong vài tuần quan trọng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Hạnh nhân, táo, việt quất, dưa chuột và bí ngô đều phụ thuộc nhiều vào ______, và ong làm phần lớn công việc đó.","o":["côn trùng thụ phấn","mưa","phân bón","máy móc"],"options":["côn trùng thụ phấn","mưa","phân bón","máy móc"],"a":0,"why":"Đoạn B: các loại cây này phụ thuộc nhiều vào côn trùng thụ phấn, và ong làm phần lớn công việc đó."},
{"type":"TFNG","q":"Số lượng ong giảm chỉ do một nguyên nhân duy nhất là thuốc trừ sâu.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn C: các nguyên nhân liên kết với nhau chứ không đơn lẻ — mất đồng cỏ hoa dại, bệnh tật, thuốc trừ sâu và biến đổi khí hậu → Sai."},
{"type":"MC","q":"Thuốc trừ sâu gây hại cho ong như thế nào theo bài?","o":["Giết ong ngay lập tức","Làm suy yếu khả năng định hướng khiến ong thợ không tìm được đường về","Khiến ong ngủ đông lâu hơn","Làm hoa nở sớm hơn"],"options":["Giết ong ngay lập tức","Làm suy yếu khả năng định hướng khiến ong thợ không tìm được đường về","Khiến ong ngủ đông lâu hơn","Làm hoa nở sớm hơn"],"a":1,"why":"Đoạn C: thuốc trừ sâu làm suy yếu khả năng định hướng của ong khiến ong thợ không tìm được đường về."},
{"type":"YNNG","q":"Theo tác giả, biến đổi khí hậu có thể khiến hoa nở sớm hơn trong khi ong vẫn chưa hoạt động.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":0,"why":"Đoạn C: biến đổi khí hậu khiến hoa có thể nở sớm hơn thường lệ trong khi ong vẫn chưa hoạt động → Yes."},
{"type":"MSEND","q":"Theo bài, các nhà khoa học mô tả sự suy giảm ong như","o":["một vấn đề chỉ của nông dân","một phản ứng dây chuyền: mất mắt xích thụ phấn, nhiều mắt xích khác suy yếu","một hiện tượng tạm thời","một vấn đề chỉ ở thành phố"],"options":["một vấn đề chỉ của nông dân","một phản ứng dây chuyền: mất mắt xích thụ phấn, nhiều mắt xích khác suy yếu","một hiện tượng tạm thời","một vấn đề chỉ ở thành phố"],"a":1,"why":"Đoạn D: các nhà khoa học mô tả đây là phản ứng dây chuyền — bỏ một mắt xích là loài thụ phấn, nhiều mắt xích khác suy yếu."},
{"type":"MC","q":"Người làm vườn có thể giúp ong bằng cách nào?","o":["Trồng hoa oải hương và thảo mộc, tránh phun thuốc trừ sâu trong mùa hoa nở","Nuôi ong trong nhà","Tưới nước mỗi ngày","Cắt hết cỏ dại"],"options":["Trồng hoa oải hương và thảo mộc, tránh phun thuốc trừ sâu trong mùa hoa nở","Nuôi ong trong nhà","Tưới nước mỗi ngày","Cắt hết cỏ dại"],"a":0,"why":"Đoạn E: người làm vườn có thể tránh phun thuốc trừ sâu trong mùa hoa nở; ngay cả ban công nhỏ với oải hương và thảo mộc cũng nuôi được ong qua đường."},
{"type":"TFNG","q":"Bảo vệ ong chỉ là cứu một loài côn trùng, không liên quan tới toàn bộ lưới thức ăn.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn D: bảo vệ ong không chỉ là cứu một loài côn trùng mà là giữ cho toàn bộ lưới thức ăn hoạt động → Sai."},
{"type":"SC","q":"Hoàn thành tóm tắt. Nông dân có thể để lại dải hoa dại ở ______, thành phố có thể trồng hoa thân thiện với loài thụ phấn ở ______.","o":["bìa ruộng; công viên","giữa ruộng; đường cao tốc","sân nhà; bãi đỗ xe","ven sông; sân bay"],"options":["bìa ruộng; công viên","giữa ruộng; đường cao tốc","sân nhà; bãi đỗ xe","ven sông; sân bay"],"a":0,"why":"Đoạn E: nông dân để lại dải hoa dại ở bìa ruộng, thành phố trồng hoa thân thiện với loài thụ phấn ở công viên."},
{"type":"MATCH","q":"Nhóm nào trả tiền cho người nuôi ong để đặt tổ cạnh cây?","o":["Người làm vườn ban công","Nông dân có vườn cây","Người bán mật","Nhà khoa học"],"options":["Người làm vườn ban công","Nông dân có vườn cây","Người bán mật","Nhà khoa học"],"a":1,"why":"Đoạn B: nông dân có vườn cây thuê tổ ong, trả tiền cho người nuôi ong để đặt đàn ong cạnh cây."}
],
"translation":"Khi nghĩ về ong, người ta thường nghĩ tới mật ong, nhưng mật chỉ là phần nhỏ trong những gì ong mang lại. Quan trọng hơn nhiều là thụ phấn — ong mang phấn hoa từ hoa này sang hoa khác khi lấy mật. Không có công việc không công này, nhiều trái cây, rau và hạt sẽ trở nên hiếm và đắt, một số biến mất khỏi bữa ăn thường ngày. Một đàn ong có thể chứa năm mươi nghìn con và trong một ngày ong thợ có thể thăm hàng triệu hoa; hạnh nhân, táo, việt quất, dưa chuột, bí ngô đều phụ thuộc nhiều vào côn trùng thụ phấn. Số lượng ong đang giảm ở nhiều vùng vì các nguyên nhân liên kết: mất đồng cỏ hoa dại, bệnh tật, thuốc trừ sâu làm suy yếu khả năng định hướng, và biến đổi khí hậu khiến hoa nở sớm khi ong chưa hoạt động. Sự suy giảm này còn kéo theo chim và thú ăn hạt, quả — một phản ứng dây chuyền. Cách ứng phó không đòi hỏi ai cũng nuôi ong: nông dân để lại dải hoa dại ở bìa ruộng, thành phố trồng hoa thân thiện với loài thụ phấn ở công viên, người làm vườn tránh phun thuốc trong mùa hoa nở.",
"phrases":[{"en":"carry pollen from one flower to another","vi":"mang phấn hoa từ hoa này sang hoa khác"},{"en":"depend heavily on","vi":"phụ thuộc nhiều vào"},{"en":"find their way home","vi":"tìm đường về tổ"},{"en":"a chain reaction","vi":"phản ứng dây chuyền"},{"en":"food webs","vi":"lưới thức ăn"}]},
{"topic":"Chi phí ẩn của thời trang nhanh","level":"Band 6.5","title":"The Hidden Cost of Fast Fashion",
"text":"A. A T-shirt that costs less than a cup of coffee seems like a bargain, but economists and environmentalists argue that its real price is paid elsewhere: by rivers polluted with dye, by garment workers earning very little, and by wardrobes full of clothes worn only a few times. Fast fashion — cheap clothes produced quickly in response to the latest trends — has changed how much we buy. In many countries, people now buy twice as many clothes as they did twenty years ago, and keep each item for half as long.\n\nB. The environmental cost begins with materials. Cotton, the most common fibre, needs enormous amounts of water: producing one cotton shirt can use as much water as one person drinks in two and a half years. Synthetic fibres such as polyester use less water but come from oil, and every wash releases tiny plastic fibres into rivers and seas. Dyeing adds a further burden, because factories in some countries release coloured wastewater into rivers, harming fish and the farmers who depend on that water.\n\nC. The human cost is harder to see on a price tag. Most fast-fashion clothes are sewn in countries where wages are low and labour laws are weakly enforced. Workers, often young women, may work twelve-hour days in hot buildings for pay that barely covers food and rent. When a brand demands a new design in three weeks instead of three months, factories rush, overtime grows, and safety checks are skipped. Campaigners do not blame shoppers alone; they blame a system that rewards speed and low prices above all else.\n\nD. A third cost is waste. Because clothes are cheap, throwing them away feels easy, and the average garment is now worn far fewer times before it is discarded. Most discarded clothes are not recycled into new clothes: fibres mixed together are hard to separate, so old garments are usually burned, buried, or shipped abroad, where they pile up in markets that cannot sell them. The result is a mountain of textile waste that grows every year.\n\nE. Change is possible without giving up fashion altogether. Buying fewer, better-made clothes and wearing them longer is the single most effective step, because it cuts all three costs at once. Choosing natural fibres, washing clothes less often and at lower temperatures, repairing instead of replacing, and buying second-hand all help. Some brands now publish factory lists and repair services, and shoppers who ask where clothes come from push the whole industry, slowly, towards prices that reflect the true cost.",
"questions":[
{"type":"MC","q":"Theo bài, giá thật của áo phông rẻ được trả ở đâu?","o":["Ở cửa hàng","Ở sông bị ô nhiễm thuốc nhuộm, công nhân lương thấp và tủ quần áo đầy đồ ít mặc","Ở thuế nhập khẩu","Ở chi phí quảng cáo"],"options":["Ở cửa hàng","Ở sông bị ô nhiễm thuốc nhuộm, công nhân lương thấp và tủ quần áo đầy đồ ít mặc","Ở thuế nhập khẩu","Ở chi phí quảng cáo"],"a":1,"why":"Đoạn A: giá thật được trả ở nơi khác — sông ô nhiễm thuốc nhuộm, công nhân lương rất thấp và tủ quần áo đầy đồ chỉ mặc vài lần."},
{"type":"MSEND","q":"Theo bài, so với hai mươi năm trước, người ta nay mua quần áo","o":["ít hơn một nửa","nhiều gấp đôi và giữ mỗi món chỉ bằng một nửa thời gian","cùng số lượng nhưng đắt hơn","ít hơn nhưng tốt hơn"],"options":["ít hơn một nửa","nhiều gấp đôi và giữ mỗi món chỉ bằng một nửa thời gian","cùng số lượng nhưng đắt hơn","ít hơn nhưng tốt hơn"],"a":1,"why":"Đoạn A: ở nhiều nước, người ta nay mua gấp đôi quần áo so với hai mươi năm trước và giữ mỗi món chỉ bằng một nửa thời gian."},
{"type":"TFNG","q":"Sản xuất một áo sơ mi cotton có thể dùng lượng nước bằng một người uống trong hai năm rưỡi.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn B: sản xuất một áo cotton có thể dùng lượng nước bằng một người uống trong hai năm rưỡi → Đúng."},
{"type":"MC","q":"Sợi tổng hợp như polyester có vấn đề gì?","o":["Cần rất nhiều nước","Làm từ dầu và mỗi lần giặt thải sợi nhựa nhỏ ra sông, biển","Không nhuộm được","Quá đắt"],"options":["Cần rất nhiều nước","Làm từ dầu và mỗi lần giặt thải sợi nhựa nhỏ ra sông, biển","Không nhuộm được","Quá đắt"],"a":1,"why":"Đoạn B: sợi tổng hợp như polyester dùng ít nước hơn nhưng làm từ dầu, và mỗi lần giặt thải sợi nhựa nhỏ ra sông và biển."},
{"type":"SC","q":"Hoàn thành tóm tắt. Nhuộm vải gây thêm gánh nặng vì nhà máy ở một số nước xả nước thải có màu ra sông, gây hại cho ______ và ______ phụ thuộc vào nguồn nước đó.","o":["cá; nông dân","chim; thợ may","cá; chủ thương hiệu","cây; khách hàng"],"options":["cá; nông dân","chim; thợ may","cá; chủ thương hiệu","cây; khách hàng"],"a":0,"why":"Đoạn B: nhà máy xả nước thải có màu ra sông, gây hại cho cá và nông dân phụ thuộc vào nguồn nước đó."},
{"type":"TFNG","q":"Công nhân may thời trang nhanh thường làm việc 12 giờ mỗi ngày trong tòa nhà nóng với lương vừa đủ ăn và thuê nhà.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn C: công nhân, thường là phụ nữ trẻ, có thể làm việc 12 giờ mỗi ngày trong tòa nhà nóng với lương vừa đủ ăn và thuê nhà → Đúng."},
{"type":"MC","q":"Khi thương hiệu đòi mẫu mới trong ba tuần thay vì ba tháng, điều gì xảy ra?","o":["Lương công nhân tăng","Nhà máy vội vã, tăng ca nhiều hơn và bỏ qua kiểm tra an toàn","Chất lượng vải tốt hơn","Giá bán tăng"],"options":["Lương công nhân tăng","Nhà máy vội vã, tăng ca nhiều hơn và bỏ qua kiểm tra an toàn","Chất lượng vải tốt hơn","Giá bán tăng"],"a":1,"why":"Đoạn C: khi thương hiệu đòi mẫu mới trong ba tuần thay vì ba tháng, nhà máy vội vã, tăng ca nhiều hơn và kiểm tra an toàn bị bỏ qua."},
{"type":"YNNG","q":"Theo các nhà vận động, chỉ người mua sắm mới đáng trách cho hệ thống thời trang nhanh.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn C: các nhà vận động không chỉ trách người mua sắm; họ trách hệ thống thưởng cho tốc độ và giá rẻ trên hết → No."},
{"type":"MSEND","q":"Theo bài, vì sao quần áo cũ hiếm khi được tái chế thành quần áo mới?","o":["Vì không ai muốn mặc đồ cũ","Vì sợi trộn lẫn khó tách ra","Vì tái chế bị cấm","Vì đồ cũ quá bẩn"],"options":["Vì không ai muốn mặc đồ cũ","Vì sợi trộn lẫn khó tách ra","Vì tái chế bị cấm","Vì đồ cũ quá bẩn"],"a":1,"why":"Đoạn D: hầu hết quần áo bỏ đi không được tái chế thành quần áo mới vì sợi trộn lẫn khó tách ra."},
{"type":"MC","q":"Bước hiệu quả nhất để thay đổi theo bài là gì?","o":["Ngừng mua quần áo hoàn toàn","Mua ít hơn, đồ tốt hơn và mặc lâu hơn","Chỉ mua đồ đắt tiền","Giặt quần áo mỗi ngày"],"options":["Ngừng mua quần áo hoàn toàn","Mua ít hơn, đồ tốt hơn và mặc lâu hơn","Chỉ mua đồ đắt tiền","Giặt quần áo mỗi ngày"],"a":1,"why":"Đoạn E: mua ít hơn, đồ tốt hơn và mặc lâu hơn là bước hiệu quả nhất vì cắt cả ba chi phí cùng lúc."},
{"type":"TFNG","q":"Giặt quần áo ít lần hơn và ở nhiệt độ thấp hơn giúp ích.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn E: chọn sợi tự nhiên, giặt ít lần hơn và ở nhiệt độ thấp hơn, sửa thay vì thay mới, mua đồ cũ đều giúp ích → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Quần áo cũ thường bị đốt, chôn hoặc vận chuyển ra nước ngoài, nơi chúng chất đống ở các chợ ______ bán được chúng.","o":["không thể","có thể dễ dàng","chỉ","luôn"],"options":["không thể","có thể dễ dàng","chỉ","luôn"],"a":0,"why":"Đoạn D: quần áo cũ thường bị đốt, chôn hoặc vận chuyển ra nước ngoài, nơi chúng chất đống ở các chợ không thể bán được chúng."},
{"type":"MATCH","q":"Ai công bố danh sách nhà máy và dịch vụ sửa chữa theo bài?","o":["Người mua sắm","Một số thương hiệu","Chính phủ","Công nhân"],"options":["Người mua sắm","Một số thương hiệu","Chính phủ","Công nhân"],"a":1,"why":"Đoạn E: một số thương hiệu nay công bố danh sách nhà máy và dịch vụ sửa chữa."}
],
"translation":"Một chiếc áo phông rẻ hơn cốc cà phê có vẻ là món hời, nhưng các nhà kinh tế và môi trường cho rằng giá thật của nó được trả ở nơi khác: sông ô nhiễm thuốc nhuộm, công nhân lương rất thấp và tủ quần áo đầy đồ chỉ mặc vài lần. Thời trang nhanh đã thay đổi lượng mua sắm: ở nhiều nước, người ta nay mua gấp đôi quần áo so với hai mươi năm trước và giữ mỗi món chỉ bằng một nửa thời gian. Về môi trường, cotton cần lượng nước khổng lồ — một áo cotton có thể dùng lượng nước bằng một người uống trong hai năm rưỡi; sợi tổng hợp làm từ dầu và thải sợi nhựa khi giặt; nhuộm vải xả nước thải có màu ra sông. Về con người, công nhân may, thường là phụ nữ trẻ, có thể làm việc 12 giờ mỗi ngày trong tòa nhà nóng với lương vừa đủ ăn và thuê nhà; khi thương hiệu đòi mẫu mới trong ba tuần, nhà máy vội vã và bỏ qua kiểm tra an toàn. Về rác thải, quần áo rẻ dễ bị vứt, sợi trộn lẫn khó tách nên đồ cũ thường bị đốt, chôn hoặc chất đống ở chợ nước ngoài. Thay đổi khả thi mà không từ bỏ thời trang: mua ít hơn, đồ tốt hơn, mặc lâu hơn; chọn sợi tự nhiên, giặt ít và ở nhiệt độ thấp, sửa thay vì thay mới, mua đồ cũ.",
"phrases":[{"en":"a bargain","vi":"món hời"},{"en":"labour laws are weakly enforced","vi":"luật lao động thực thi yếu"},{"en":"overtime grows","vi":"tăng ca nhiều hơn"},{"en":"textile waste","vi":"rác thải dệt may"},{"en":"second-hand","vi":"đồ cũ, đồ second-hand"}]},
{"topic":"Thành phố tự làm mát không cần điều hòa","level":"Band 6.5","title":"How Cities Cool Themselves Without Air Conditioners",
"text":"A. On a hot summer night, the centre of a large city can be five degrees warmer than the countryside around it. Concrete, asphalt and glass absorb heat during the day and release it slowly after dark, while cars and air conditioners pump out even more warmth. This urban heat island effect makes heatwaves more dangerous, especially for older people and young children, and it drives a costly cycle: the hotter the city, the more air conditioners run, and the more air conditioners run, the hotter the streets become.\n\nB. The oldest cooling technology is also the simplest: trees. A single large tree can cool the air around it as effectively as several small air conditioners, through shade and through evaporation from its leaves. Streets lined with trees have been measured several degrees cooler than bare streets nearby. Trees also clean the air, reduce noise and give birds somewhere to live — benefits no machine can offer at the same time.\n\nC. Water cools cities in a similar way. Fountains, ponds and even narrow canals lower the temperature of surrounding air as water evaporates. In several hot cities, planners have reopened buried streams and built shallow pools in public squares, not for swimming but for cooling. Light-coloured surfaces help too: white roofs and pale pavements reflect sunlight instead of absorbing it, and some cities now require reflective roofs on new public buildings.\n\nD. The design of buildings matters as much as parks and water. Traditional houses in hot regions often have thick walls, small windows facing the sun, and courtyards that catch evening breezes. Modern architects are rediscovering these ideas: narrow streets that stay shaded for most of the day, buildings placed to channel wind, and rooftop gardens that insulate against heat. A well-designed district can stay comfortable with far less mechanical cooling than a district of glass towers standing in full sun.\n\nE. None of these measures works alone, and none works overnight: a tree needs years to grow large, and redesigning a district takes decades. But cities that combine shade, water, reflective surfaces and wind-aware design reduce both temperatures and electricity bills, and they become more pleasant places to live. The alternative — more air conditioners in ever hotter streets — cools one room while warming the city around it, a bargain that grows worse every summer.",
"questions":[
{"type":"MC","q":"Hiệu ứng đảo nhiệt đô thị là gì theo bài?","o":["Thành phố lạnh hơn nông thôn","Trung tâm thành phố nóng hơn vùng nông thôn xung quanh tới 5 độ vào đêm hè nóng","Điều hòa làm thành phố mát hơn","Cây xanh làm thành phố nóng hơn"],"options":["Thành phố lạnh hơn nông thôn","Trung tâm thành phố nóng hơn vùng nông thôn xung quanh tới 5 độ vào đêm hè nóng","Điều hòa làm thành phố mát hơn","Cây xanh làm thành phố nóng hơn"],"a":1,"why":"Đoạn A: vào đêm hè nóng, trung tâm thành phố lớn có thể nóng hơn vùng nông thôn xung quanh năm độ."},
{"type":"MSEND","q":"Theo bài, vòng luẩn quẩn tốn kém của điều hòa là","o":["thành phố càng nóng, điều hòa càng chạy nhiều, và điều hòa càng chạy, đường phố càng nóng","điều hòa càng chạy, thành phố càng mát","cây càng nhiều, điều hòa càng ít","đêm càng dài, thành phố càng nóng"],"options":["thành phố càng nóng, điều hòa càng chạy nhiều, và điều hòa càng chạy, đường phố càng nóng","điều hòa càng chạy, thành phố càng mát","cây càng nhiều, điều hòa càng ít","đêm càng dài, thành phố càng nóng"],"a":0,"why":"Đoạn A: thành phố càng nóng, điều hòa càng chạy nhiều, và điều hòa càng chạy, đường phố càng nóng."},
{"type":"TFNG","q":"Một cây lớn có thể làm mát không khí xung quanh hiệu quả như vài máy điều hòa nhỏ.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn B: một cây lớn có thể làm mát không khí xung quanh hiệu quả như vài máy điều hòa nhỏ, qua bóng râm và bốc hơi từ lá → Đúng."},
{"type":"MC","q":"Cây làm mát bằng cách nào?","o":["Chỉ bằng bóng râm","Bằng bóng râm và bốc hơi từ lá","Bằng cách hút nước mưa","Bằng cách chắn gió"],"options":["Chỉ bằng bóng râm","Bằng bóng râm và bốc hơi từ lá","Bằng cách hút nước mưa","Bằng cách chắn gió"],"a":1,"why":"Đoạn B: cây làm mát qua bóng râm và bốc hơi từ lá."},
{"type":"SC","q":"Hoàn thành tóm tắt. Đường phố có cây được đo mát hơn vài độ so với đường phố ______ gần đó.","o":["trống trải","đông đúc","rộng","mới xây"],"options":["trống trải","đông đúc","rộng","mới xây"],"a":0,"why":"Đoạn B: đường phố có cây được đo mát hơn vài độ so với đường phố trống trải gần đó."},
{"type":"TFNG","q":"Đài phun nước, ao hồ và kênh hẹp làm tăng nhiệt độ không khí xung quanh.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn C: đài phun nước, ao hồ và kênh hẹp làm giảm nhiệt độ không khí xung quanh khi nước bốc hơi → Sai."},
{"type":"MC","q":"Vì sao mái trắng và vỉa hè màu nhạt giúp làm mát?","o":["Vì chúng hấp thụ ánh nắng","Vì chúng phản xạ ánh nắng thay vì hấp thụ","Vì chúng rẻ hơn","Vì chúng giữ nước mưa"],"options":["Vì chúng hấp thụ ánh nắng","Vì chúng phản xạ ánh nắng thay vì hấp thụ","Vì chúng rẻ hơn","Vì chúng giữ nước mưa"],"a":1,"why":"Đoạn C: mái trắng và vỉa hè màu nhạt phản xạ ánh nắng thay vì hấp thụ nó."},
{"type":"YNNG","q":"Theo tác giả, mọi thành phố nay đều bắt buộc mái phản xạ trên tòa nhà công mới.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":2,"why":"Bài chỉ nói một số thành phố nay yêu cầu mái phản xạ trên tòa nhà công mới, không nói mọi thành phố → Not Given."},
{"type":"MSEND","q":"Theo bài, nhà truyền thống ở vùng nóng thường có","o":["tường mỏng và cửa sổ lớn hướng nắng","tường dày, cửa sổ nhỏ hướng nắng và sân trong đón gió chiều","mái kính và điều hòa","tường kính"],"options":["tường mỏng và cửa sổ lớn hướng nắng","tường dày, cửa sổ nhỏ hướng nắng và sân trong đón gió chiều","mái kính và điều hòa","tường kính"],"a":1,"why":"Đoạn D: nhà truyền thống ở vùng nóng thường có tường dày, cửa sổ nhỏ hướng nắng và sân trong đón gió chiều."},
{"type":"MC","q":"Khu phố thiết kế tốt có thể làm gì?","o":["Loại bỏ hoàn toàn điều hòa","Duy trì thoải mái với ít làm mát cơ học hơn nhiều so với khu tháp kính dưới nắng gắt","Tăng hóa đơn điện","Làm đường phố nóng hơn"],"options":["Loại bỏ hoàn toàn điều hòa","Duy trì thoải mái với ít làm mát cơ học hơn nhiều so với khu tháp kính dưới nắng gắt","Tăng hóa đơn điện","Làm đường phố nóng hơn"],"a":1,"why":"Đoạn D: khu phố thiết kế tốt có thể duy trì thoải mái với ít làm mát cơ học hơn nhiều so với khu tháp kính đứng dưới nắng gắt."},
{"type":"TFNG","q":"Một cái cây cần nhiều năm để lớn, và thiết kế lại một khu phố mất nhiều thập kỷ.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn E: cây cần nhiều năm để lớn, và thiết kế lại một khu phố mất nhiều thập kỷ → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Thành phố kết hợp bóng râm, nước, bề mặt phản xạ và thiết kế đón gió sẽ giảm cả ______ và ______ điện.","o":["nhiệt độ; hóa đơn","dân số; thuế","mưa; gió","cây; nước"],"options":["nhiệt độ; hóa đơn","dân số; thuế","mưa; gió","cây; nước"],"a":0,"why":"Đoạn E: thành phố kết hợp các biện pháp giảm cả nhiệt độ và hóa đơn điện."},
{"type":"MATCH","q":"Nhóm nào dễ bị tổn thương nhất trong đợt nắng nóng theo bài?","o":["Người trẻ khỏe","Người lớn tuổi và trẻ nhỏ","Du khách","Công nhân văn phòng"],"options":["Người lớn tuổi và trẻ nhỏ","Du khách","Công nhân văn phòng","Người trẻ khỏe"],"a":0,"why":"Đoạn A: hiệu ứng đảo nhiệt khiến đợt nắng nóng nguy hiểm hơn, đặc biệt với người lớn tuổi và trẻ nhỏ."},
{"type":"MC","q":"Vì sao dùng nhiều điều hòa hơn là “món hời ngày càng tệ”?","o":["Vì điều hòa tốn điện","Vì điều hòa làm mát một phòng trong khi làm nóng thành phố xung quanh","Vì điều hòa gây ồn","Vì điều hòa cần sửa chữa"],"options":["Vì điều hòa tốn điện","Vì điều hòa làm mát một phòng trong khi làm nóng thành phố xung quanh","Vì điều hòa gây ồn","Vì điều hòa cần sửa chữa"],"a":1,"why":"Đoạn E: phương án nhiều điều hòa hơn làm mát một phòng trong khi làm nóng thành phố xung quanh — món hời ngày càng tệ mỗi mùa hè."}
],"translation":"Vào đêm hè nóng, trung tâm thành phố lớn có thể nóng hơn vùng nông thôn xung quanh năm độ. Bê tông, nhựa đường và kính hấp thụ nhiệt ban ngày và tỏa ra chậm sau khi trời tối, trong khi xe hơi và điều hòa bơm thêm hơi nóng — hiệu ứng đảo nhiệt đô thị khiến đợt nắng nóng nguy hiểm hơn, đặc biệt với người lớn tuổi và trẻ nhỏ, và tạo vòng luẩn quẩn tốn kém: thành phố càng nóng, điều hòa càng chạy nhiều, điều hòa càng chạy, đường phố càng nóng. Công nghệ làm mát cổ xưa nhất cũng đơn giản nhất: cây xanh. Một cây lớn có thể làm mát không khí xung quanh hiệu quả như vài máy điều hòa nhỏ qua bóng râm và bốc hơi từ lá; đường phố có cây được đo mát hơn vài độ so với đường phố trống trải gần đó, cây còn lọc không khí, giảm tiếng ồn và cho chim nơi sinh sống. Nước cũng làm mát tương tự: đài phun nước, ao hồ và kênh hẹp làm giảm nhiệt độ khi nước bốc hơi; vài thành phố nóng đã mở lại dòng suối bị chôn và xây hồ nông ở quảng trường công cộng không phải để bơi mà để làm mát; mái trắng và vỉa hè màu nhạt phản xạ ánh nắng thay vì hấp thụ. Thiết kế tòa nhà cũng quan trọng: nhà truyền thống ở vùng nóng thường có tường dày, cửa sổ nhỏ hướng nắng và sân trong đón gió chiều; kiến trúc sư hiện đại đang khám phá lại ý tưởng này — đường phố hẹp râm mát phần lớn thời gian, tòa nhà bố trí để dẫn gió, vườn trên mái cách nhiệt. Không biện pháp nào hiệu quả một mình hay trong một đêm: cây cần nhiều năm để lớn, thiết kế lại khu phố mất nhiều thập kỷ; nhưng thành phố kết hợp bóng râm, nước, bề mặt phản xạ và thiết kế đón gió sẽ giảm cả nhiệt độ và hóa đơn điện, đồng thời dễ sống hơn.","phrases":[{"en": "urban heat island effect", "vi": "hiệu ứng đảo nhiệt đô thị"}, {"en": "through shade and evaporation", "vi": "qua bóng râm và bốc hơi"}, {"en": "reflect sunlight", "vi": "phản xạ ánh nắng"}, {"en": "catch evening breezes", "vi": "đón gió chiều"}, {"en": "wind-aware design", "vi": "thiết kế đón gió"}]}]);
/* PHA 2 (a) — not: 3 bai Band 7.5+ cho pool readingMock (13+13+14=40 cau). */
CONTENT.readingMock.push.apply(CONTENT.readingMock, [
{"topic":"Khi một ngôn ngữ chỉ còn vài người nói","level":"Band 7.5+","title":"When a Language Has Only a Few Speakers Left",
"text":"A. Every two weeks, by one common estimate, another of the world's languages falls silent: its last fluent speaker dies, and with them goes a way of describing the world that may never be recovered. Of the roughly seven thousand languages spoken today, linguists warn that half could disappear by the end of this century. The loss is rarely sudden. It begins quietly, when parents stop speaking their mother tongue to their children, believing that a bigger language will give them better jobs and schools.\n\nB. What disappears with a language is more than words. A language carries a community's knowledge of its environment: names for dozens of kinds of snow, wind or medicinal plants that no other language distinguishes. It carries jokes, proverbs and stories that explain how people should live together. When children grow up without that language, they may still learn the facts in another tongue, but they lose the particular way their grandparents framed those facts — the metaphors, the politeness rules, the sense of what is funny or sacred.\n\nC. Revival is possible, but it is slow and rarely complete. In Wales, decades of bilingual schooling and Welsh-language television have turned a language once predicted to die into one spoken daily by hundreds of thousands of people. In Hawaii, immersion schools where children learn entirely in Hawaiian have produced a new generation of young speakers. Yet in both cases, the revived language is different from the old one: it borrows words from English, it is used more in classrooms than in kitchens, and some of its oldest expressions survive only in recordings.\n\nD. Critics of revival efforts ask whether the money would be better spent on schools, clinics or roads. Supporters answer that a language is not a luxury but part of what makes a community itself: people do not only need food and medicine, they need to recognise themselves in the words they speak. Moreover, linguistic diversity, like biological diversity, is a resource for everyone. A language that seems small today may hold a way of thinking — about time, about nature, about obligation — that larger languages have never developed.\n\nE. The most effective protection, researchers agree, is not a museum or a dictionary alone, but daily use: children hearing the language at home, songs and stories in it, and a reason to speak it outside school. Documentation matters — recording the last speakers before they are gone — but a recording is a photograph, not a living speaker. A language survives only as long as someone, somewhere, still chooses to speak it to a child.",
"questions":[
{"type":"MC","q":"Theo một ước tính chung trong bài, tần suất một ngôn ngữ biến mất là bao nhiêu?","o":["Mỗi năm một ngôn ngữ","Mỗi hai tuần một ngôn ngữ","Mỗi tháng một ngôn ngữ","Mỗi thập kỷ một ngôn ngữ"],"options":["Mỗi năm một ngôn ngữ","Mỗi hai tuần một ngôn ngữ","Mỗi tháng một ngôn ngữ","Mỗi thập kỷ một ngôn ngữ"],"a":1,"why":"Đoạn A: theo một ước tính chung, cứ hai tuần lại có một ngôn ngữ trên thế giới lặng im."},
{"type":"MSEND","q":"Theo bài, sự biến mất của ngôn ngữ thường bắt đầu lặng lẽ khi","o":["chính phủ cấm ngôn ngữ đó","cha mẹ ngừng nói tiếng mẹ đẻ với con vì tin ngôn ngữ lớn hơn cho công việc và trường học tốt hơn","người nói cuối cùng qua đời","trường học đóng cửa"],"options":["chính phủ cấm ngôn ngữ đó","cha mẹ ngừng nói tiếng mẹ đẻ với con vì tin ngôn ngữ lớn hơn cho công việc và trường học tốt hơn","người nói cuối cùng qua đời","trường học đóng cửa"],"a":1,"why":"Đoạn A: sự mất mát bắt đầu lặng lẽ khi cha mẹ ngừng nói tiếng mẹ đẻ với con, tin rằng ngôn ngữ lớn hơn sẽ cho công việc và trường học tốt hơn."},
{"type":"TFNG","q":"Các nhà ngôn ngữ học cảnh báo một nửa trong khoảng bảy nghìn ngôn ngữ hiện nay có thể biến mất vào cuối thế kỷ này.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn A: các nhà ngôn ngữ học cảnh báo một nửa trong khoảng bảy nghìn ngôn ngữ hiện nay có thể biến mất vào cuối thế kỷ này → Đúng."},
{"type":"MC","q":"Ngoài từ ngữ, một ngôn ngữ còn mang theo gì theo bài?","o":["Chỉ ngữ pháp","Tri thức của cộng đồng về môi trường, truyện cười, tục ngữ và câu chuyện về cách sống cùng nhau","Chỉ bài hát","Tiền bạc và đất đai"],"options":["Chỉ ngữ pháp","Tri thức của cộng đồng về môi trường, truyện cười, tục ngữ và câu chuyện về cách sống cùng nhau","Chỉ bài hát","Tiền bạc và đất đai"],"a":1,"why":"Đoạn B: ngôn ngữ mang tri thức của cộng đồng về môi trường, truyện cười, tục ngữ và câu chuyện giải thích cách sống cùng nhau."},
{"type":"SC","q":"Hoàn thành tóm tắt. Khi trẻ lớn lên không có ngôn ngữ đó, các em có thể vẫn học sự kiện bằng ngôn ngữ khác nhưng mất ______ mà ông bà đã dùng để đóng khung các sự kiện đó.","o":["cách riêng","ngữ pháp","bảng chữ cái","tiền bạc"],"options":["cách riêng","ngữ pháp","bảng chữ cái","tiền bạc"],"a":0,"why":"Đoạn B: trẻ có thể vẫn học sự kiện bằng ngôn ngữ khác nhưng mất cách riêng mà ông bà đã dùng để đóng khung các sự kiện đó — ẩn dụ, quy tắc lịch sự, cảm giác về cái hài hước hay thiêng liêng."},
{"type":"TFNG","q":"Ở Wales, trường song ngữ và truyền hình tiếng Wales đã biến ngôn ngữ từng được dự đoán sẽ chết thành ngôn ngữ được hàng trăm nghìn người nói hằng ngày.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn C: ở Wales, nhiều thập kỷ trường song ngữ và truyền hình tiếng Wales đã biến ngôn ngữ từng được dự đoán sẽ chết thành ngôn ngữ được hàng trăm nghìn người nói hằng ngày → Đúng."},
{"type":"MC","q":"Trường immersion ở Hawaii làm gì?","o":["Dạy trẻ hoàn toàn bằng tiếng Hawaii","Dạy trẻ chỉ bằng tiếng Anh","Đóng cửa trường tiếng Hawaii","Chỉ ghi âm người nói cuối cùng"],"options":["Dạy trẻ hoàn toàn bằng tiếng Hawaii","Dạy chỉ bằng tiếng Anh","Đóng cửa trường tiếng Hawaii","Chỉ ghi âm người nói cuối cùng"],"a":0,"why":"Đoạn C: ở Hawaii, trường immersion nơi trẻ học hoàn toàn bằng tiếng Hawaii đã tạo ra thế hệ người nói trẻ mới."},
{"type":"YNNG","q":"Theo tác giả, ngôn ngữ được hồi sinh giống hệt ngôn ngữ cũ.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn C: ngôn ngữ được hồi sinh khác với ngôn ngữ cũ — vay mượn từ tiếng Anh, dùng nhiều trong lớp học hơn trong bếp → No."},
{"type":"MSEND","q":"Theo bài, người ủng hộ hồi sinh ngôn ngữ trả lời phê bình rằng ngôn ngữ là","o":["một thứ xa xỉ","một phần tạo nên chính cộng đồng: con người cần nhận ra mình trong lời nói","chỉ quan trọng với nhà ngôn ngữ học","một cách kiếm tiền"],"options":["một thứ xa xỉ","một phần tạo nên chính cộng đồng: con người cần nhận ra mình trong lời nói","chỉ quan trọng với nhà ngôn ngữ học","một cách kiếm tiền"],"a":1,"why":"Đoạn D: người ủng hộ trả lời ngôn ngữ không phải xa xỉ mà là một phần tạo nên chính cộng đồng — con người không chỉ cần thức ăn và thuốc mà cần nhận ra mình trong lời nói."},
{"type":"MC","q":"Vì sao đa dạng ngôn ngữ là tài nguyên cho mọi người theo bài?","o":["Vì ngôn ngữ nhỏ dễ học","Vì ngôn ngữ có vẻ nhỏ hôm nay có thể giữ cách tư duy mà ngôn ngữ lớn chưa từng phát triển","Vì mọi ngôn ngữ đều có cùng từ vựng","Vì ngôn ngữ nhỏ giúp du lịch"],"options":["Vì ngôn ngữ nhỏ dễ học","Vì ngôn ngữ có vẻ nhỏ hôm nay có thể giữ cách tư duy mà ngôn ngữ lớn chưa từng phát triển","Vì mọi ngôn ngữ đều có cùng từ vựng","Vì ngôn ngữ nhỏ giúp du lịch"],"a":1,"why":"Đoạn D: ngôn ngữ có vẻ nhỏ hôm nay có thể giữ cách tư duy — về thời gian, thiên nhiên, nghĩa vụ — mà ngôn ngữ lớn chưa từng phát triển."},
{"type":"TFNG","q":"Một bản ghi âm là một bức ảnh, không phải người nói sống.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn E: ghi chép quan trọng nhưng bản ghi âm là một bức ảnh, không phải người nói sống → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Cách bảo vệ hiệu quả nhất không chỉ là bảo tàng hay từ điển mà là ______: trẻ nghe ngôn ngữ ở nhà, bài hát và câu chuyện bằng nó, và lý do nói nó ngoài trường học.","o":["sử dụng hằng ngày","ghi âm","dạy ngữ pháp","dịch thuật"],"options":["sử dụng hằng ngày","ghi âm","dạy ngữ pháp","dịch thuật"],"a":0,"why":"Đoạn E: cách bảo vệ hiệu quả nhất không chỉ là bảo tàng hay từ điển mà là sử dụng hằng ngày."},
{"type":"MATCH","q":"Ví dụ nào cho tri thức môi trường mà ngôn ngữ mang theo?","o":["Tên của hàng chục loại tuyết, gió hay cây thuốc mà ngôn ngữ khác không phân biệt","Tên các thành phố lớn","Công thức nấu ăn quốc tế","Lịch sử chiến tranh"],"options":["Tên của hàng chục loại tuyết, gió hay cây thuốc mà ngôn ngữ khác không phân biệt","Tên các thành phố lớn","Công thức nấu ăn quốc tế","Lịch sử chiến tranh"],"a":0,"why":"Đoạn B: ngôn ngữ mang tên của hàng chục loại tuyết, gió hay cây thuốc mà không ngôn ngữ nào khác phân biệt."}
],
"translation":"Cứ hai tuần, theo một ước tính chung, lại có một ngôn ngữ trên thế giới lặng im: người nói thành thạo cuối cùng qua đời, và cùng họ là một cách mô tả thế giới có thể không bao giờ khôi phục được. Trong khoảng bảy nghìn ngôn ngữ hiện nay, các nhà ngôn ngữ học cảnh báo một nửa có thể biến mất vào cuối thế kỷ này. Sự mất mát hiếm khi đột ngột: nó bắt đầu lặng lẽ khi cha mẹ ngừng nói tiếng mẹ đẻ với con vì tin ngôn ngữ lớn hơn cho công việc và trường học tốt hơn. Cùng với ngôn ngữ biến mất không chỉ là từ ngữ mà còn là tri thức của cộng đồng về môi trường, truyện cười, tục ngữ và câu chuyện về cách sống cùng nhau. Phục hồi là có thể nhưng chậm và hiếm khi trọn vẹn: ở Wales, trường song ngữ và truyền hình tiếng Wales đã cứu ngôn ngữ từng được dự đoán sẽ chết; ở Hawaii, trường immersion tạo ra thế hệ người nói trẻ mới — nhưng ngôn ngữ hồi sinh khác với ngôn ngữ cũ. Người phê bình hỏi tiền có nên dùng cho trường học, phòng khám hay đường sá; người ủng hộ trả lời ngôn ngữ là một phần tạo nên chính cộng đồng, và đa dạng ngôn ngữ như đa dạng sinh học là tài nguyên cho mọi người. Cách bảo vệ hiệu quả nhất không chỉ là bảo tàng hay từ điển mà là sử dụng hằng ngày: trẻ nghe ngôn ngữ ở nhà, bài hát và câu chuyện bằng nó, và lý do nói nó ngoài trường học.",
"phrases":[{"en":"falls silent","vi":"lặng im, biến mất"},{"en":"a way of describing the world","vi":"một cách mô tả thế giới"},{"en":"immersion schools","vi":"trường immersion (học hoàn toàn bằng ngôn ngữ đó)"},{"en":"linguistic diversity","vi":"đa dạng ngôn ngữ"},{"en":"daily use","vi":"sử dụng hằng ngày"}]},
{"topic":"Sức mạnh lặng lẽ của sự buồn chán","level":"Band 7.5+","title":"The Quiet Power of Boredom",
"text":"A. Boredom has a bad reputation. Parents worry when children say they are bored, workers apologise for boring afternoons, and whole industries promise to eliminate every empty moment with feeds, videos and games. Yet psychologists increasingly argue that boredom is not a failure of character but a signal: it tells us that what we are doing no longer engages us, and it pushes us, uncomfortably, towards something more meaningful. A life with no boredom at all, they suggest, may also be a life with no quiet space in which new ideas can form.\n\nB. The evidence comes from experiments that sound almost like jokes. In one well-known study, participants who first copied numbers from a phone book — a deliberately dull task — later produced more creative uses for a paper cup than participants who went straight to the creative task. The bored group, researchers concluded, had minds that were already searching for stimulation, and that search carried over into the next activity. Boredom, in other words, did not switch the mind off; it switched it to a different kind of looking.\n\nC. History offers larger examples. Many writers and scientists describe their best ideas arriving not at their desks but during walks, train journeys or long periods of waiting — moments when the mind was, by modern standards, bored. The composer who hummed a tune while waiting for a delayed train, or the chemist whose daydream about a snake biting its own tail suggested the ring structure of benzene, was not wasting time. The empty time allowed the brain to connect ideas that focused work keeps apart, a process psychologists call mind-wandering.\n\nD. This does not mean boredom is always good. Chronic boredom — the feeling of being trapped for months in work or study that offers no choice and no progress — is linked to anxiety, poor sleep and risky behaviour. The difference lies in control: boredom that we can escape by choosing a new activity tends to spark creativity, while boredom imposed without any way out tends to drain energy. A child told to sit still with nothing to do for an hour may invent a game; a worker forbidden to change a monotonous task for a year may simply give up.\n\nE. The practical lesson is therefore not to seek boredom, but to stop fearing short periods of it. Leaving a phone in another room during a walk, allowing children an afternoon without scheduled activities, or simply staring out of a train window without reaching for entertainment, can be surprisingly productive. Boredom, handled well, is not the enemy of a full life. It is the pause that lets the mind decide what the full life should contain.",
"questions":[
{"type":"MC","q":"Theo các nhà tâm lý học trong bài, buồn chán là gì?","o":["Thất bại về tính cách","Một tín hiệu: cho biết việc đang làm không còn cuốn hút và thúc đẩy tìm thứ ý nghĩa hơn","Bệnh cần chữa","Dấu hiệu lười biếng"],"options":["Thất bại về tính cách","Một tín hiệu: cho biết việc đang làm không còn cuốn hút và thúc đẩy tìm thứ ý nghĩa hơn","Bệnh cần chữa","Dấu hiệu lười biếng"],"a":1,"why":"Đoạn A: các nhà tâm lý học cho rằng buồn chán không phải thất bại về tính cách mà là tín hiệu — nó cho biết việc đang làm không còn cuốn hút và thúc đẩy tìm thứ ý nghĩa hơn."},
{"type":"MSEND","q":"Theo bài, cuộc sống hoàn toàn không có buồn chán có thể cũng là cuộc sống không có","o":["công việc","không gian yên tĩnh để ý tưởng mới hình thành","bạn bè","tiền bạc"],"options":["công việc","không gian yên tĩnh để ý tưởng mới hình thành","bạn bè","tiền bạc"],"a":1,"why":"Đoạn A: cuộc sống hoàn toàn không có buồn chán có thể cũng là cuộc sống không có không gian yên tĩnh để ý tưởng mới hình thành."},
{"type":"TFNG","q":"Trong nghiên cứu nổi tiếng, nhóm buồn chán trước đó đưa ra nhiều cách dùng sáng tạo cho cốc giấy hơn nhóm làm trực tiếp nhiệm vụ sáng tạo.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn B: nhóm chép số từ danh bạ điện thoại trước đó đưa ra nhiều cách dùng sáng tạo cho cốc giấy hơn nhóm làm trực tiếp → Đúng."},
{"type":"MC","q":"Các nhà nghiên cứu kết luận gì về nhóm buồn chán?","o":["Trí óc họ đã tắt","Trí óc họ đã tìm kiếm kích thích và sự tìm kiếm đó kéo sang hoạt động tiếp theo","Họ mệt mỏi nên kém sáng tạo","Họ không hiểu nhiệm vụ"],"options":["Trí óc họ đã tắt","Trí óc họ đã tìm kiếm kích thích và sự tìm kiếm đó kéo sang hoạt động tiếp theo","Họ mệt mỏi nên kém sáng tạo","Họ không hiểu nhiệm vụ"],"a":1,"why":"Đoạn B: nhóm buồn chán có trí óc đã tìm kiếm kích thích, và sự tìm kiếm đó kéo sang hoạt động tiếp theo."},
{"type":"SC","q":"Hoàn thành tóm tắt. Buồn chán không tắt trí óc; nó chuyển trí óc sang ______ khác.","o":["cách nhìn","giấc ngủ","công việc","trò chơi"],"options":["cách nhìn","giấc ngủ","công việc","trò chơi"],"a":0,"why":"Đoạn B: buồn chán không tắt trí óc; nó chuyển trí óc sang một cách nhìn khác."},
{"type":"TFNG","q":"Nhiều nhà văn và nhà khoa học mô tả ý tưởng hay nhất tới khi đang ngồi làm việc tập trung tại bàn.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn C: nhiều nhà văn và nhà khoa học mô tả ý tưởng hay nhất tới không phải tại bàn làm việc mà trong lúc đi bộ, đi tàu hay chờ đợi lâu → Sai."},
{"type":"MC","q":"Ví dụ về nhà hóa học trong bài minh họa điều gì?","o":["Mơ mộng về rắn cắn đuôi mình gợi ý cấu trúc vòng của benzen","Ngủ trong phòng thí nghiệm","Đọc sách trong lúc chờ tàu","Nghe nhạc khi làm việc"],"options":["Mơ mộng về rắn cắn đuôi mình gợi ý cấu trúc vòng của benzen","Ngủ trong phòng thí nghiệm","Đọc sách trong lúc chờ tàu","Nghe nhạc khi làm việc"],"a":0,"why":"Đoạn C: nhà hóa học mơ mộng về rắn cắn đuôi mình đã gợi ý cấu trúc vòng của benzen."},
{"type":"YNNG","q":"Theo tác giả, buồn chán mạn tính luôn thúc đẩy sáng tạo.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn D: buồn chán mạn tính — cảm giác bị kẹt nhiều tháng trong công việc không có lựa chọn và tiến bộ — liên quan tới lo âu, ngủ kém và hành vi rủi ro → No."},
{"type":"MSEND","q":"Theo bài, khác biệt quyết định giữa buồn chán tốt và xấu nằm ở","o":["tuổi tác","sự kiểm soát: buồn chán có thể thoát bằng cách chọn hoạt động mới thì khơi sáng tạo, buồn chán áp đặt không lối thoát thì rút cạn năng lượng","thời tiết","nghề nghiệp"],"options":["tuổi tác","sự kiểm soát: buồn chán có thể thoát bằng cách chọn hoạt động mới thì khơi sáng tạo, buồn chán áp đặt không lối thoát thì rút cạn năng lượng","thời tiết","nghề nghiệp"],"a":1,"why":"Đoạn D: khác biệt nằm ở sự kiểm soát — buồn chán có thể thoát bằng cách chọn hoạt động mới thì khơi sáng tạo, buồn chán áp đặt không lối thoát thì rút cạn năng lượng."},
{"type":"MC","q":"Bài học thực tế rút ra là gì?","o":["Nên tìm kiếm buồn chán càng nhiều càng tốt","Không tìm kiếm buồn chán mà ngừng sợ những khoảng buồn chán ngắn","Nên lấp đầy mọi khoảnh khắc trống bằng giải trí","Trẻ em không bao giờ nên buồn chán"],"options":["Nên tìm kiếm buồn chán càng nhiều càng tốt","Không tìm kiếm buồn chán mà ngừng sợ những khoảng buồn chán ngắn","Nên lấp đầy mọi khoảnh khắc trống bằng giải trí","Trẻ em không bao giờ nên buồn chán"],"a":1,"why":"Đoạn E: bài học thực tế không phải tìm kiếm buồn chán mà là ngừng sợ những khoảng buồn chán ngắn."},
{"type":"TFNG","q":"Để điện thoại ở phòng khác trong lúc đi bộ có thể mang lại hiệu quả bất ngờ.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn E: để điện thoại ở phòng khác trong lúc đi bộ, cho trẻ một buổi chiều không hoạt động lên lịch, hay nhìn ra cửa sổ tàu mà không tìm giải trí có thể mang lại hiệu quả bất ngờ → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Quá trình não kết nối các ý tưởng mà công việc tập trung giữ tách biệt được gọi là ______.","o":["mind-wandering (tâm trí lang thang)","giấc ngủ","ghi nhớ","tập trung"],"options":["mind-wandering (tâm trí lang thang)","giấc ngủ","ghi nhớ","tập trung"],"a":0,"why":"Đoạn C: quá trình này được các nhà tâm lý học gọi là mind-wandering."},
{"type":"MATCH","q":"Ví dụ nào cho buồn chán có thể thoát được?","o":["Công nhân bị cấm đổi nhiệm vụ đơn điệu trong một năm","Trẻ được bảo ngồi yên không có gì làm trong một giờ có thể nghĩ ra trò chơi","Người làm việc không có lựa chọn trong nhiều tháng","Người bị kẹt trong công việc không tiến bộ"],"options":["Công nhân bị cấm đổi nhiệm vụ đơn điệu trong một năm","Trẻ được bảo ngồi yên không có gì làm trong một giờ có thể nghĩ ra trò chơi","Người làm việc không có lựa chọn trong nhiều tháng","Người bị kẹt trong công việc không tiến bộ"],"a":1,"why":"Đoạn D: trẻ được bảo ngồi yên không có gì làm trong một giờ có thể nghĩ ra trò chơi — ví dụ cho buồn chán có thể thoát bằng hoạt động mới."}
],
"translation":"Buồn chán mang tiếng xấu: cha mẹ lo khi con nói chán, người làm việc xin lỗi vì buổi chiều nhàm chán, và cả ngành công nghiệp hứa loại bỏ mọi khoảnh khắc trống bằng tin tức, video và trò chơi. Nhưng các nhà tâm lý học ngày càng cho rằng buồn chán không phải thất bại về tính cách mà là tín hiệu — nó cho biết việc đang làm không còn cuốn hút và thúc đẩy tìm thứ ý nghĩa hơn. Cuộc sống hoàn toàn không có buồn chán có thể cũng là cuộc sống không có không gian yên tĩnh để ý tưởng mới hình thành. Bằng chứng tới từ thí nghiệm nghe như trò đùa: người chép số từ danh bạ điện thoại trước đó đưa ra nhiều cách dùng sáng tạo cho cốc giấy hơn — trí óc họ đã tìm kiếm kích thích và sự tìm kiếm đó kéo sang hoạt động tiếp theo. Lịch sử cũng có ví dụ lớn hơn: nhiều nhà văn và nhà khoa học có ý tưởng hay nhất không phải tại bàn làm việc mà trong lúc đi bộ, đi tàu hay chờ đợi lâu; nhà soạn nhạc ngâm nga giai điệu khi chờ tàu trễ, nhà hóa học mơ về rắn cắn đuôi mình gợi ý cấu trúc vòng của benzen. Thời gian trống cho phép não kết nối các ý tưởng mà công việc tập trung giữ tách biệt — quá trình gọi là mind-wandering. Nhưng buồn chán không phải lúc nào cũng tốt: buồn chán mạn tính — kẹt nhiều tháng trong công việc không lựa chọn và tiến bộ — liên quan tới lo âu, ngủ kém và hành vi rủi ro. Khác biệt nằm ở sự kiểm soát. Bài học thực tế không phải tìm kiếm buồn chán mà là ngừng sợ những khoảng buồn chán ngắn: để điện thoại ở phòng khác khi đi bộ, cho trẻ một buổi chiều không hoạt động lên lịch, hay nhìn ra cửa sổ tàu mà không tìm giải trí có thể mang lại hiệu quả bất ngờ.",
"phrases":[{"en":"a bad reputation","vi":"tiếng xấu"},{"en":"no longer engages us","vi":"không còn cuốn hút chúng ta"},{"en":"carried over into","vi":"kéo sang"},{"en":"mind-wandering","vi":"tâm trí lang thang"},{"en":"without any way out","vi":"không có lối thoát"}]},
{"topic":"Vì sao ta nhớ câu chuyện hơn sự kiện","level":"Band 7.5+","title":"Why We Remember Stories Better Than Facts",
"text":"A. Ask a student a week after a history lesson to recall a list of dates, and most will struggle. Ask the same student about the story of a young queen who lost her throne, and the details return with surprising ease: the betrayal, the escape, the final speech. This difference is not a mystery of talent but a feature of memory itself. Human brains did not evolve to store isolated facts; they evolved to remember what happened, to whom, and why it mattered — in other words, to remember stories.\n\nB. The reason lies in how memory organises information. A single fact, such as a date, has few connections to anything else, so it is easily lost. A story, by contrast, is a web: characters have motives, events have causes, and each scene gives a clue to the next. When we try to recall one part, the rest of the web pulls it back. Psychologists call this elaborative encoding: the more links an item has to what we already know, the more routes there are back to it.\n\nC. Emotion strengthens the web further. We remember moments that made us afraid, amused or moved, because the brain treats emotional events as important and stores them more deeply. Storytellers have always known this, which is why histories are told through heroes and villains rather than through tables of figures. A number on a page rarely makes anyone feel anything; a character facing a difficult choice does, and feeling is a powerful glue for memory.\n\nD. Stories also help us understand, not merely recall. A list of facts about a war tells us what happened, but a story about a soldier's decision tells us why it happened and what it cost. That understanding transfers: a student who grasps why a historical figure acted can reason about similar choices in new situations, while a student who only memorised dates cannot. Teachers who turn lessons into narratives therefore do more than entertain; they give students a structure for thinking.\n\nE. None of this means facts do not matter. A story without accurate facts is a myth, and a student who remembers only the drama may repeat errors with confidence. The best learning, research suggests, combines both: stories to carry meaning and to make facts memorable, and precise facts to anchor stories in truth. When a date is tied to a betrayal, an escape and a speech, it stops being a number to forget and becomes a moment in a story worth remembering.",
"questions":[
{"type":"MC","q":"Theo bài, vì sao học sinh nhớ câu chuyện về nữ hoàng trẻ dễ hơn danh sách ngày tháng?","o":["Vì câu chuyện ngắn hơn","Vì não người tiến hóa để nhớ chuyện gì xảy ra, với ai và vì sao nó quan trọng — tức là nhớ câu chuyện","Vì nữ hoàng nổi tiếng","Vì ngày tháng khó đọc"],"options":["Vì câu chuyện ngắn hơn","Vì não người tiến hóa để nhớ chuyện gì xảy ra, với ai và vì sao nó quan trọng — tức là nhớ câu chuyện","Vì nữ hoàng nổi tiếng","Vì ngày tháng khó đọc"],"a":1,"why":"Đoạn A: não người không tiến hóa để lưu sự kiện rời rạc mà để nhớ chuyện gì xảy ra, với ai và vì sao nó quan trọng — tức là nhớ câu chuyện."},
{"type":"MSEND","q":"Theo bài, một sự kiện đơn lẻ như ngày tháng dễ bị quên vì","o":["nó quá khó","nó có ít liên kết với thứ khác","nó quá dài","nó không có trong sách"],"options":["nó quá khó","nó có ít liên kết với thứ khác","nó quá dài","nó không có trong sách"],"a":1,"why":"Đoạn B: một sự kiện đơn lẻ như ngày tháng có ít liên kết với thứ khác nên dễ bị mất."},
{"type":"TFNG","q":"Câu chuyện là một mạng lưới: nhân vật có động cơ, sự kiện có nguyên nhân, mỗi cảnh gợi ý cho cảnh tiếp theo.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn B: câu chuyện là một mạng lưới — nhân vật có động cơ, sự kiện có nguyên nhân, mỗi cảnh gợi ý cho cảnh tiếp theo → Đúng."},
{"type":"MC","q":"Elaborative encoding có nghĩa là gì theo bài?","o":["Học thuộc lòng","Một mục càng có nhiều liên kết với thứ đã biết thì càng có nhiều đường quay lại nó","Viết lại nhiều lần","Nghe giảng nhiều lần"],"options":["Học thuộc lòng","Một mục càng có nhiều liên kết với thứ đã biết thì càng có nhiều đường quay lại nó","Viết lại nhiều lần","Nghe giảng nhiều lần"],"a":1,"why":"Đoạn B: elaborative encoding — một mục càng có nhiều liên kết với thứ đã biết thì càng có nhiều đường quay lại nó."},
{"type":"SC","q":"Hoàn thành tóm tắt. Khi cố nhớ một phần của câu chuyện, ______ còn lại của mạng lưới kéo nó trở lại.","o":["phần","nhân vật","cảm xúc","ngày tháng"],"options":["phần","nhân vật","cảm xúc","ngày tháng"],"a":0,"why":"Đoạn B: khi cố nhớ một phần, phần còn lại của mạng lưới kéo nó trở lại."},
{"type":"TFNG","q":"Cảm xúc làm suy yếu trí nhớ vì não coi sự kiện cảm xúc là không quan trọng.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":1,"why":"Đoạn C: cảm xúc củng cố mạng lưới hơn nữa vì não coi sự kiện cảm xúc là quan trọng và lưu sâu hơn → Sai."},
{"type":"MC","q":"Vì sao lịch sử được kể qua anh hùng và nhân vật phản diện thay vì bảng số liệu?","o":["Vì số liệu khó in","Vì con số hiếm khi khiến ai cảm thấy gì; nhân vật đối mặt lựa chọn khó khiến người ta cảm thấy, và cảm xúc là chất keo mạnh cho trí nhớ","Vì anh hùng dễ vẽ hơn","Vì bảng số liệu quá dài"],"options":["Vì số liệu khó in","Vì con số hiếm khi khiến ai cảm thấy gì; nhân vật đối mặt lựa chọn khó khiến người ta cảm thấy, và cảm xúc là chất keo mạnh cho trí nhớ","Vì anh hùng dễ vẽ hơn","Vì bảng số liệu quá dài"],"a":1,"why":"Đoạn C: con số hiếm khi khiến ai cảm thấy gì; nhân vật đối mặt lựa chọn khó khiến người ta cảm thấy, và cảm xúc là chất keo mạnh cho trí nhớ."},
{"type":"YNNG","q":"Theo tác giả, học sinh chỉ ghi nhớ ngày tháng có thể suy luận về lựa chọn tương tự trong tình huống mới.","o":["Yes","No","Not Given"],"options":["Yes","No","Not Given"],"a":1,"why":"Đoạn D: học sinh chỉ ghi nhớ ngày tháng thì không thể suy luận về lựa chọn tương tự trong tình huống mới → No."},
{"type":"MSEND","q":"Theo bài, giáo viên biến bài học thành câu chuyện không chỉ giải trí mà còn","o":["giúp học sinh ngủ ngon","cho học sinh một cấu trúc để tư duy","giảm số lượng bài kiểm tra","khiến bài học ngắn hơn"],"options":["giúp học sinh ngủ ngon","cho học sinh một cấu trúc để tư duy","giảm số lượng bài kiểm tra","khiến bài học ngắn hơn"],"a":1,"why":"Đoạn D: giáo viên biến bài học thành câu chuyện không chỉ giải trí; họ cho học sinh một cấu trúc để tư duy."},
{"type":"MC","q":"Sự kết hợp học tập tốt nhất theo nghiên cứu là gì?","o":["Chỉ câu chuyện","Chỉ sự kiện chính xác","Câu chuyện để mang ý nghĩa và khiến sự kiện đáng nhớ, và sự kiện chính xác để neo câu chuyện vào sự thật","Chỉ ngày tháng"],"options":["Chỉ câu chuyện","Chỉ sự kiện chính xác","Câu chuyện để mang ý nghĩa và khiến sự kiện đáng nhớ, và sự kiện chính xác để neo câu chuyện vào sự thật","Chỉ ngày tháng"],"a":2,"why":"Đoạn E: cách học tốt nhất kết hợp cả hai — câu chuyện để mang ý nghĩa và khiến sự kiện đáng nhớ, và sự kiện chính xác để neo câu chuyện vào sự thật."},
{"type":"TFNG","q":"Câu chuyện không có sự kiện chính xác là huyền thoại, và học sinh chỉ nhớ kịch tính có thể lặp lại sai lầm một cách tự tin.","o":["True","False","Not Given"],"options":["True","False","Not Given"],"a":0,"why":"Đoạn E: câu chuyện không có sự kiện chính xác là huyền thoại, và học sinh chỉ nhớ kịch tính có thể lặp lại sai lầm một cách tự tin → Đúng."},
{"type":"SC","q":"Hoàn thành tóm tắt. Khi ngày tháng gắn với sự phản bội, cuộc trốn thoát và bài diễn văn, nó không còn là con số để quên mà trở thành ______ trong câu chuyện đáng nhớ.","o":["một khoảnh khắc","một bảng số liệu","một huyền thoại","một giấc mơ"],"options":["một khoảnh khắc","một bảng số liệu","một huyền thoại","một giấc mơ"],"a":0,"why":"Đoạn E: khi ngày tháng gắn với sự phản bội, cuộc trốn thoát và bài diễn văn, nó trở thành một khoảnh khắc trong câu chuyện đáng nhớ."},
{"type":"MATCH","q":"Ví dụ nào cho “hiểu” chứ không chỉ “nhớ” trong bài?","o":["Nhớ danh sách ngày tháng","Câu chuyện về quyết định của người lính cho biết vì sao chiến tranh xảy ra và cái giá của nó","Nhớ tên nữ hoàng","Đếm số trận đánh"],"options":["Nhớ danh sách ngày tháng","Câu chuyện về quyết định của người lính cho biết vì sao chiến tranh xảy ra và cái giá của nó","Nhớ tên nữ hoàng","Đếm số trận đánh"],"a":1,"why":"Đoạn D: câu chuyện về quyết định của người lính cho biết vì sao chiến tranh xảy ra và cái giá của nó — đó là hiểu chứ không chỉ nhớ."},
{"type":"MC","q":"Theo bài, cảm xúc là gì đối với trí nhớ?","o":["Chất gây nhiễu","Chất keo mạnh cho trí nhớ","Không liên quan","Chỉ có hại"],"options":["Chất gây nhiễu","Chất keo mạnh cho trí nhớ","Không liên quan","Chỉ có hại"],"a":1,"why":"Đoạn C: cảm xúc là chất keo mạnh cho trí nhớ."}
],"translation":"Hỏi học sinh một tuần sau giờ học lịch sử để nhớ danh sách ngày tháng, hầu hết sẽ chật vật. Hỏi cùng học sinh đó về câu chuyện nữ hoàng trẻ mất ngai vàng, chi tiết trở lại dễ dàng đáng ngạc nhiên: sự phản bội, cuộc trốn thoát, bài diễn văn cuối cùng. Khác biệt này không phải bí ẩn về tài năng mà là đặc điểm của trí nhớ: não người không tiến hóa để lưu sự kiện rời rạc mà để nhớ chuyện gì xảy ra, với ai và vì sao nó quan trọng — tức là nhớ câu chuyện. Một sự kiện đơn lẻ như ngày tháng có ít liên kết với thứ khác nên dễ bị mất; câu chuyện ngược lại là một mạng lưới — nhân vật có động cơ, sự kiện có nguyên nhân, mỗi cảnh gợi ý cho cảnh tiếp theo; khi cố nhớ một phần, phần còn lại kéo nó trở lại. Các nhà tâm lý học gọi đây là elaborative encoding: một mục càng có nhiều liên kết với thứ đã biết thì càng có nhiều đường quay lại nó. Cảm xúc củng cố mạng lưới hơn nữa vì não coi sự kiện cảm xúc là quan trọng và lưu sâu hơn; người kể chuyện luôn biết điều này nên lịch sử được kể qua anh hùng và nhân vật phản diện thay vì bảng số liệu — con số hiếm khi khiến ai cảm thấy gì, nhân vật đối mặt lựa chọn khó thì có, và cảm xúc là chất keo mạnh cho trí nhớ. Câu chuyện còn giúp hiểu chứ không chỉ nhớ: danh sách sự kiện về chiến tranh cho biết chuyện gì xảy ra, câu chuyện về quyết định của người lính cho biết vì sao và cái giá của nó; sự hiểu biết đó chuyển giao được, trong khi học sinh chỉ ghi nhớ ngày tháng thì không thể suy luận về lựa chọn tương tự trong tình huống mới. Tuy vậy sự kiện vẫn quan trọng: câu chuyện không có sự kiện chính xác là huyền thoại, và học sinh chỉ nhớ kịch tính có thể lặp lại sai lầm một cách tự tin. Cách học tốt nhất kết hợp cả hai: câu chuyện mang ý nghĩa và khiến sự kiện đáng nhớ, sự kiện chính xác neo câu chuyện vào sự thật.","phrases":[{"en": "isolated facts", "vi": "sự kiện rời rạc"}, {"en": "elaborative encoding", "vi": "mã hóa liên kết (elaborative encoding)"}, {"en": "a powerful glue for memory", "vi": "chất keo mạnh cho trí nhớ"}, {"en": "transfers", "vi": "chuyển giao được"}, {"en": "anchor stories in truth", "vi": "neo câu chuyện vào sự thật"}]}]);
// Pha 2 (c) — Phan he HSK chang 5 (tu soan 100%, theo mau chang 4).
// Ghi chu: khong them bo zhVocab moi (ghim 18 bo); chi them phan he ZH_*.
var ZH_S5_NOTE = "Bài tự soạn theo chủ đề đời sống trình độ HSK5, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách.";
ZH_GRAMMAR.push(
{ "id": "s5-chufei", "stage": 5, "title": "除非…否则 — trừ phi… nếu không…", "hook": "“除非你告诉我，否则我不知道” — trừ phi bạn nói cho tôi, nếu không tôi không biết: điều kiện duy nhất.", "examples": [ "除非你告诉我，否则我不知道。(Chúfēi nǐ gàosu wǒ, fǒuzé wǒ bù zhīdào.) — Trừ phi bạn nói cho tôi, nếu không tôi không biết.", "除非努力学习，否则很难通过考试。(Chúfēi nǔlì xuéxí, fǒuzé hěn nán tōngguò kǎoshì.) — Trừ phi học chăm chỉ, nếu không rất khó qua kỳ thi.", "除非下雨，否则我们明天去爬山。(Chúfēi xià yǔ, fǒuzé wǒmen míngtiān qù pá shān.) — Trừ phi trời mưa, nếu không ngày mai chúng tôi đi leo núi.", "除非你早点来，否则就没有座位了。(Chúfēi nǐ zǎo diǎn lái, fǒuzé jiù méiyǒu zuòwèi le.) — Trừ phi bạn đến sớm, nếu không sẽ không còn chỗ ngồi." ], "speak": "除非你告诉我，否则我不知道。除非努力学习，否则很难通过考试。除非下雨，否则我们明天去爬山。除非你早点来，否则就没有座位了。", "rule": "除非 nêu điều kiện duy nhất ở vế đầu, 否则 nêu kết quả xấu nếu điều kiện không xảy ra ở vế sau. Hai chữ đi thành cặp.", "tip": "Hãy nhớ: 除非 là “trừ phi”, 否则 là “nếu không” — chỉ có một cách duy nhất thì mới dùng 除非.", "note": ZH_S5_NOTE, "quiz": [
{ "q": "Câu nào dùng 除非…否则 đúng?", "o": [ "除非你告诉我，否则我不知道。", "除非你告诉我，但是我不知道。", "除非你告诉我，所以我不知道。", "除非你告诉我，可是我不知道。" ], "a": 0, "why": "除非 đi cặp với 否则: trừ phi bạn nói, nếu không tôi không biết." },
{ "q": "Điền vào chỗ trống: 除非努力学习，___ 很难通过考试。", "o": [ "否则", "但是", "所以", "可是" ], "a": 0, "why": "Vế sau là kết quả xấu khi điều kiện không xảy ra, dùng 否则." },
{ "q": "“Trừ phi trời mưa, nếu không ngày mai chúng tôi đi leo núi” viết thế nào?", "o": [ "除非下雨，否则我们明天去爬山。", "除非下雨，但是我们明天去爬山。", "如果下雨，我们明天去爬山。", "虽然下雨，我们明天去爬山。" ], "a": 0, "why": "“Trừ phi… nếu không…” là 除非…否则, không phải 虽然 hay 如果." },
{ "q": "除非 trong câu có nghĩa là gì?", "o": [ "Trừ phi", "Mặc dù", "Nếu", "Vì" ], "a": 0, "why": "除非 = trừ phi, nêu điều kiện duy nhất." },
{ "q": "Câu nào SAI?", "o": [ "除非你来，否则我不去。", "除非你来，但是我不去。", "除非努力，否则很难成功。", "除非早点来，否则没有座位。" ], "a": 1, "why": "除非 phải đi với 否则, không đi với 但是." },
{ "q": "“Trừ phi bạn đến sớm, nếu không sẽ hết chỗ” — từ “nếu không” là:", "o": [ "否则", "但是", "所以", "因为" ], "a": 0, "why": "否则 = nếu không, đi cặp với 除非." } ] },
{ "id": "s5-jiran", "stage": 5, "title": "既然…就 — đã… thì…", "hook": "“既然你来了，就留下来吃饭吧” — đã đến rồi thì ở lại ăn cơm: chuyện đã rõ thì quyết luôn.", "examples": [ "既然你来了，就留下来吃饭吧。(Jìrán nǐ lái le, jiù liú xià lái chī fàn ba.) — Đã đến rồi thì ở lại ăn cơm nhé.", "既然天气这么好，我们就去公园吧。(Jìrán tiānqì zhème hǎo, wǒmen jiù qù gōngyuán ba.) — Thời tiết đã đẹp thế này thì chúng ta đi công viên nhé.", "既然你不想去，我就不勉强你了。(Jìrán nǐ bù xiǎng qù, wǒ jiù bù miǎnqiǎng nǐ le.) — Đã không muốn đi thì tôi không ép bạn nữa.", "既然已经决定了，就不要后悔。(Jìrán yǐjīng juédìng le, jiù bù yào hòuhuǐ.) — Đã quyết rồi thì đừng hối hận." ], "speak": "既然你来了，就留下来吃饭吧。既然天气这么好，我们就去公园吧。既然你不想去，我就不勉强你了。既然已经决定了，就不要后悔。", "rule": "既然 nêu lý do đã rõ ở vế đầu, 就 nêu quyết định theo đó ở vế sau. Đã có lý do thì quyết luôn, không chần chừ.", "tip": "Hãy nhớ: 既然 là “đã…”, 就 là “thì…” — lý do đã rõ ràng rồi mới dùng 既然.", "note": ZH_S5_NOTE, "quiz": [
{ "q": "Câu nào dùng 既然…就 đúng?", "o": [ "既然你来了，就留下来吃饭吧。", "既然你来了，但是留下来吃饭吧。", "既然你来了，所以留下来吃饭吧。", "既然你来了，可是留下来吃饭吧。" ], "a": 0, "why": "既然 đi cặp với 就: đã đến rồi thì ở lại ăn cơm." },
{ "q": "Điền vào chỗ trống: 既然天气这么好，我们 ___ 去公园吧。", "o": [ "就", "但是", "否则", "虽然" ], "a": 0, "why": "Vế sau là quyết định theo lý do đã rõ, dùng 就." },
{ "q": "“Đã quyết rồi thì đừng hối hận” viết thế nào?", "o": [ "既然已经决定了，就不要后悔。", "虽然已经决定了，就不要后悔。", "如果已经决定了，就不要后悔。", "除非已经决定了，就不要后悔。" ], "a": 0, "why": "“Đã… thì…” là 既然…就." },
{ "q": "既然 có nghĩa là gì?", "o": [ "Đã… (lý do đã rõ)", "Mặc dù", "Trừ phi", "Nếu" ], "a": 0, "why": "既然 nêu lý do đã rõ ràng, khác với 如果 (giả thiết)." },
{ "q": "Câu nào SAI?", "o": [ "既然你不想去，我就不勉强你了。", "既然你不想去，但是我不勉强你了。", "既然天气好，我们就去公园。", "既然来了，就留下来吧。" ], "a": 1, "why": "既然 đi với 就, không đi với 但是." },
{ "q": "“Thời tiết đã đẹp thế này thì đi công viên nhé” — “thì” là:", "o": [ "就", "但是", "否则", "所以" ], "a": 0, "why": "就 ở đây là “thì”, đi cặp với 既然." } ] },
{ "id": "s5-ningke", "stage": 5, "title": "宁可…也不 — thà… chứ không…", "hook": "“宁可走路，也不坐车” — thà đi bộ chứ không đi xe: chọn cái khó hơn vì muốn thế.", "examples": [ "宁可走路，也不坐车。(Nìngkě zǒu lù, yě bù zuò chē.) — Thà đi bộ chứ không đi xe.", "他宁可少赚钱，也不做自己不喜欢的工作。(Tā nìngkě shǎo zhuàn qián, yě bù zuò zìjǐ bù xǐhuan de gōngzuò.) — Anh ấy thà kiếm ít tiền chứ không làm việc mình không thích.", "我宁可早起，也不迟到。(Wǒ nìngkě zǎo qǐ, yě bù chídào.) — Tôi thà dậy sớm chứ không đi muộn.", "宁可慢一点，也要把事情做好。(Nìngkě màn yì diǎn, yě yào bǎ shìqing zuò hǎo.) — Thà chậm một chút cũng phải làm việc cho tốt." ], "speak": "宁可走路，也不坐车。他宁可少赚钱，也不做自己不喜欢的工作。我宁可早起，也不迟到。宁可慢一点，也要把事情做好。", "rule": "宁可 nêu lựa chọn mình chấp nhận ở vế đầu, 也不 nêu điều mình từ chối ở vế sau. Vế sau thường có 不 hoặc 也要.", "tip": "Hãy nhớ: 宁可 là “thà…”, 也不 là “chứ không…” — nói cái mình chọn trước, cái mình từ chối sau.", "note": ZH_S5_NOTE, "quiz": [
{ "q": "Câu nào dùng 宁可…也不 đúng?", "o": [ "宁可走路，也不坐车。", "宁可走路，但是坐车。", "宁可走路，所以坐车。", "宁可走路，可是坐车。" ], "a": 0, "why": "宁可 đi cặp với 也不: thà đi bộ chứ không đi xe." },
{ "q": "Điền vào chỗ trống: 我宁可早起，___ 迟到。", "o": [ "也不", "但是", "否则", "所以" ], "a": 0, "why": "Vế sau là điều từ chối, dùng 也不." },
{ "q": "“Anh ấy thà kiếm ít tiền chứ không làm việc mình không thích” viết thế nào?", "o": [ "他宁可少赚钱，也不做自己不喜欢的工作。", "他宁可少赚钱，但是做自己不喜欢的工作。", "他宁可少赚钱，所以做自己不喜欢的工作。", "他虽然少赚钱，也做自己不喜欢的工作。" ], "a": 0, "why": "“Thà… chứ không…” là 宁可…也不." },
{ "q": "宁可 có nghĩa là gì?", "o": [ "Thà…", "Mặc dù", "Trừ phi", "Vì" ], "a": 0, "why": "宁可 = thà, nêu lựa chọn mình chấp nhận." },
{ "q": "Câu nào SAI?", "o": [ "宁可慢一点，也要把事情做好。", "宁可慢一点，但是把事情做好。", "我宁可早起，也不迟到。", "宁可走路，也不坐车。" ], "a": 1, "why": "宁可 đi với 也不 hoặc 也要, không đi với 但是." },
{ "q": "“Thà chậm một chút cũng phải làm tốt” — “cũng phải” là:", "o": [ "也要", "但是", "否则", "所以" ], "a": 0, "why": "也要 = cũng phải, dùng sau 宁可 khi vế sau là quyết tâm." } ] },
{ "id": "s5-buguan", "stage": 5, "title": "不管…都 — dù… đều…", "hook": "“不管多忙，他都坚持锻炼” — dù bận thế nào anh ấy đều kiên trì tập: điều kiện nào cũng không đổi.", "examples": [ "不管多忙，他都坚持锻炼。(Bùguǎn duō máng, tā dōu jiānchí duànliàn.) — Dù bận thế nào, anh ấy đều kiên trì tập luyện.", "不管天气怎么样，我们都去爬山。(Bùguǎn tiānqì zěnmeyàng, wǒmen dōu qù pá shān.) — Dù thời tiết thế nào, chúng tôi đều đi leo núi.", "不管你说什么，我都不同意。(Bùguǎn nǐ shuō shénme, wǒ dōu bù tóngyì.) — Dù bạn nói gì, tôi đều không đồng ý.", "不管多难，我们都要把这个项目做完。(Bùguǎn duō nán, wǒmen dōu yào bǎ zhège xiàngmù zuò wán.) — Dù khó thế nào, chúng tôi đều phải làm xong dự án này." ], "speak": "不管多忙，他都坚持锻炼。不管天气怎么样，我们都去爬山。不管你说什么，我都不同意。不管多难，我们都要把这个项目做完。", "rule": "不管 nêu điều kiện bất kỳ ở vế đầu (thường có 多, 什么, 怎么样), 都 nêu kết quả không đổi ở vế sau.", "tip": "Hãy nhớ: 不管 là “dù…”, 都 là “đều…” — điều kiện thay đổi mà kết quả vẫn vậy mới dùng 不管.", "note": ZH_S5_NOTE, "quiz": [
{ "q": "Câu nào dùng 不管…都 đúng?", "o": [ "不管多忙，他都坚持锻炼。", "不管多忙，但是他坚持锻炼。", "不管多忙，所以他坚持锻炼。", "不管多忙，可是他坚持锻炼。" ], "a": 0, "why": "不管 đi cặp với 都: dù bận thế nào đều kiên trì tập." },
{ "q": "Điền vào chỗ trống: 不管天气怎么样，我们 ___ 去爬山。", "o": [ "都", "但是", "否则", "所以" ], "a": 0, "why": "Vế sau là kết quả không đổi, dùng 都." },
{ "q": "“Dù bạn nói gì, tôi đều không đồng ý” viết thế nào?", "o": [ "不管你说什么，我都不同意。", "不管你说什么，但是我不同意。", "如果说什么，我都不同意。", "虽然你说什么，我都不同意。" ], "a": 0, "why": "“Dù… đều…” là 不管…都." },
{ "q": "不管 có nghĩa là gì?", "o": [ "Dù… (bất kể)", "Mặc dù", "Trừ phi", "Đã…" ], "a": 0, "why": "不管 = dù, bất kể điều kiện nào." },
{ "q": "Câu nào SAI?", "o": [ "不管多难，我们都要把这个项目做完。", "不管多难，但是我们要把这个项目做完。", "不管你说什么，我都不同意。", "不管多忙，他都坚持锻炼。" ], "a": 1, "why": "不管 đi với 都 hoặc 都要, không đi với 但是." },
{ "q": "“Dù khó thế nào chúng tôi đều phải làm xong” — “đều phải” là:", "o": [ "都要", "但是", "否则", "所以" ], "a": 0, "why": "都要 = đều phải, dùng sau 不管 khi vế sau là quyết tâm." } ] },
{ "id": "s5-suizhe", "stage": 5, "title": "随着 — theo cùng với…", "hook": "“随着科技的发展，生活越来越方便” — theo cùng sự phát triển của công nghệ, cuộc sống ngày càng tiện lợi.", "examples": [ "随着科技的发展，生活越来越方便。(Suízhe kējì de fāzhǎn, shēnghuó yuè lái yuè fāngbiàn.) — Theo cùng sự phát triển của công nghệ, cuộc sống ngày càng tiện lợi.", "随着年龄的增长，他越来越懂事。(Suízhe niánlíng de zēngzhǎng, tā yuè lái yuè dǒngshì.) — Theo cùng tuổi tác tăng lên, anh ấy ngày càng hiểu chuyện.", "随着城市的发展，交通也越来越方便。(Suízhe chéngshì de fāzhǎn, jiāotōng yě yuè lái yuè fāngbiàn.) — Theo cùng sự phát triển của thành phố, giao thông cũng ngày càng tiện lợi.", "随着学习的深入，我对中国文化越来越感兴趣。(Suízhe xuéxí de shēnrù, wǒ duì Zhōngguó wénhuà yuè lái yuè gǎn xìngqù.) — Theo cùng việc học đi sâu, tôi ngày càng hứng thú với văn hóa Trung Quốc." ], "speak": "随着科技的发展，生活越来越方便。随着年龄的增长，他越来越懂事。随着城市的发展，交通也越来越方便。随着学习的深入，我对中国文化越来越感兴趣。", "rule": "随着 + danh từ (sự phát triển, sự tăng lên…) mở đầu câu, vế sau thường có 越来越 (ngày càng…) nói thay đổi đi cùng.", "tip": "Hãy nhớ: 随着 là “theo cùng với…” — sau 随着 là một quá trình đang diễn ra, không phải một việc đã xong.", "note": ZH_S5_NOTE, "quiz": [
{ "q": "Câu nào dùng 随着 đúng?", "o": [ "随着科技的发展，生活越来越方便。", "随着科技的发展，生活但是方便。", "随着科技的发展，生活所以方便。", "随着科技的发展，生活可是方便。" ], "a": 0, "why": "随着 mở đầu bằng một quá trình, vế sau dùng 越来越 nói thay đổi đi cùng." },
{ "q": "Điền vào chỗ trống: 随着年龄的增长，他 ___ 懂事。", "o": [ "越来越", "但是", "否则", "所以" ], "a": 0, "why": "随着 thường đi với 越来越 ở vế sau." },
{ "q": "“Theo cùng sự phát triển của thành phố, giao thông cũng ngày càng tiện lợi” viết thế nào?", "o": [ "随着城市的发展，交通也越来越方便。", "虽然城市的发展，交通也越来越方便。", "如果城市的发展，交通也越来越方便。", "因为城市的发展，交通也越来越方便。" ], "a": 0, "why": "“Theo cùng với…” là 随着." },
{ "q": "随着 có nghĩa là gì?", "o": [ "Theo cùng với…", "Mặc dù", "Trừ phi", "Vì" ], "a": 0, "why": "随着 = theo cùng với một quá trình đang diễn ra." },
{ "q": "Câu nào SAI?", "o": [ "随着学习的深入，我对中国文化越来越感兴趣。", "随着学习完了，我对中国文化感兴趣。", "随着科技的发展，生活越来越方便。", "随着年龄的增长，他越来越懂事。" ], "a": 1, "why": "Sau 随着 phải là một quá trình (学习的深入), không phải việc đã xong (学习完了)." },
{ "q": "Sau 随着 thường là loại từ nào?", "o": [ "Một quá trình (phát triển, tăng lên…)", "Một việc đã xong", "Một người", "Một con số" ], "a": 0, "why": "随着 + quá trình, vế sau nói thay đổi đi cùng." } ] },
{ "id": "s5-shenzhi", "stage": 5, "title": "甚至 — thậm chí", "hook": "“他甚至忘了吃饭” — anh ấy thậm chí quên cả ăn cơm: mức độ vượt quá mong đợi.", "examples": [ "他甚至忘了吃饭。(Tā shènzhì wàng le chī fàn.) — Anh ấy thậm chí quên cả ăn cơm.", "这个问题甚至连老师也不会。(Zhège wèntí shènzhì lián lǎoshī yě bù huì.) — Câu hỏi này thậm chí cả thầy giáo cũng không biết.", "她忙得甚至没有时间喝水。(Tā máng de shènzhì méiyǒu shíjiān hē shuǐ.) — Cô ấy bận đến mức thậm chí không có thời gian uống nước.", "这个消息甚至上了电视新闻。(Zhège xiāoxi shènzhì shàng le diànshì xīnwén.) — Tin này thậm chí đã lên tin tức truyền hình." ], "speak": "他甚至忘了吃饭。这个问题甚至连老师也不会。她忙得甚至没有时间喝水。这个消息甚至上了电视新闻。", "rule": "甚至 đứng trước động từ hoặc cụm từ, nhấn mạnh mức độ vượt quá mong đợi; thường đi với 连…也 (thậm chí cả… cũng…).", "tip": "Hãy nhớ: 甚至 là “thậm chí” — dùng khi sự việc vượt quá mức bình thường, gây bất ngờ.", "note": ZH_S5_NOTE, "quiz": [
{ "q": "Câu nào dùng 甚至 đúng?", "o": [ "他甚至忘了吃饭。", "他但是忘了吃饭。", "他所以忘了吃饭。", "他可是忘了吃饭。" ], "a": 0, "why": "甚至 = thậm chí, đứng trước động từ 忘了." },
{ "q": "Điền vào chỗ trống: 这个问题 ___ 连老师也不会。", "o": [ "甚至", "但是", "否则", "所以" ], "a": 0, "why": "甚至…连…也: thậm chí cả thầy giáo cũng không biết." },
{ "q": "“Cô ấy bận đến mức thậm chí không có thời gian uống nước” viết thế nào?", "o": [ "她忙得甚至没有时间喝水。", "她忙得但是没有时间喝水。", "她忙得所以没有时间喝水。", "她忙得可是没有时间喝水。" ], "a": 0, "why": "“Thậm chí” là 甚至." },
{ "q": "甚至 có nghĩa là gì?", "o": [ "Thậm chí", "Mặc dù", "Trừ phi", "Vì" ], "a": 0, "why": "甚至 = thậm chí, nhấn mạnh mức độ vượt mong đợi." },
{ "q": "Câu nào SAI?", "o": [ "这个消息甚至上了电视新闻。", "这个消息但是上了电视新闻。", "他甚至忘了吃饭。", "她忙得甚至没有时间喝水。" ], "a": 1, "why": "甚至 không thay bằng 但是 ở đây." },
{ "q": "甚至 thường đi với cặp nào?", "o": [ "连…也", "但是…所以", "如果…就", "虽然…但是" ], "a": 0, "why": "甚至…连…也 là cặp nhấn mạnh quen thuộc." } ] }
);
ZH_READING.push(
{ "id": "s5-reading-hocxa", "stage": 5, "title": "Năm đầu học xa nhà", "topic": "Học tập", "text": "小林去年离开家乡，到北京上大学。这是他第一次一个人生活。刚开始的时候，他什么都不会：不会做饭，不会洗衣服，连去超市买东西都觉得紧张。每天晚上，他都给妈妈打电话，告诉她今天吃了什么，学了什么。一个月以后，他开始习惯了。他学会了做简单的饭菜，也交了几个好朋友。有一天，他生病了，朋友们轮流照顾他，帮他买药、做饭。那一刻，他突然明白：离开家不是失去依靠，而是学会独立。现在，他已经能一个人处理很多事情了。他说，大学生活最大的收获不是知识，而是成长。", "pinyin": "Xiǎo Lín qùnián líkāi jiāxiāng, dào Běijīng shàng dàxué. Zhè shì tā dì yí cì yí ge rén shēnghuó. Gāng kāishǐ de shíhou, tā shénme dōu bù huì: bù huì zuò fàn, bù huì xǐ yīfu, lián qù chāoshì mǎi dōngxi dōu juéde jǐnzhāng. Měitiān wǎnshang, tā dōu gěi māma dǎ diànhuà, gàosu tā jīntiān chī le shénme, xué le shénme. Yí ge yuè yǐhòu, tā kāishǐ xíguàn le. Tā xuéhuì le zuò jiǎndān de fàncài, yě jiāo le jǐ ge hǎo péngyou. Yǒu yì tiān, tā shēng bìng le, péngyoumen lúnliú zhàogu tā, bāng tā mǎi yào, zuò fàn. Nà yí kè, tā tūrán míngbai: líkāi jiā bù shì shīqù yīkào, ér shì xuéhuì dúlì. Xiànzài, tā yǐjīng néng yí ge rén chǔlǐ hěn duō shìqing le. Tā shuō, dàxué shēnghuó zuì dà de shōuhuò bù shì zhīshi, ér shì chéngzhǎng.", "vi": "Tiểu Lâm năm ngoái rời quê lên Bắc Kinh học đại học, lần đầu sống một mình. Ban đầu cậu chẳng biết gì: không biết nấu ăn, giặt đồ, đi siêu thị cũng căng thẳng. Sau một tháng cậu quen dần, biết nấu món đơn giản và có bạn mới. Có lần ốm, bạn bè thay nhau chăm sóc cậu. Từ đó cậu hiểu: rời nhà không phải mất chỗ dựa mà là học độc lập. Thu hoạch lớn nhất của đời sinh viên không phải kiến thức mà là trưởng thành.", "note": ZH_S5_NOTE, "questions": [
{ "q": "小林去年去哪里上大学？", "o": [ "北京", "上海", "广州", "杭州" ], "a": 0, "why": "Bài viết: 到北京上大学 — đến Bắc Kinh học đại học." },
{ "q": "刚开始的时候，小林觉得怎么样？", "o": [ "什么都不会，连买东西都紧张", "什么都会，很轻松", "不想上学", "只想回家" ], "a": 0, "why": "Bài viết: 什么都不会…连去超市买东西都觉得紧张." },
{ "q": "小林生病的时候，谁照顾他？", "o": [ "朋友们轮流照顾他", "妈妈来北京", "老师照顾他", "没有人照顾他" ], "a": 0, "why": "Bài viết: 朋友们轮流照顾他，帮他买药、做饭." },
{ "q": "小林明白了什么？", "o": [ "离开家是学会独立", "离开家是失去依靠", "大学生活很难", "不应该离开家" ], "a": 0, "why": "Bài viết: 离开家不是失去依靠，而是学会独立." },
{ "q": "小林说大学生活最大的收获是什么？", "o": [ "成长", "知识", "朋友", "金钱" ], "a": 0, "why": "Bài viết: 最大的收获不是知识，而是成长." } ] },
{ "id": "s5-reading-lamviecnhom", "stage": 5, "title": "Làm việc nhóm khó hay dễ?", "topic": "Công việc", "text": "很多人觉得一个人工作更快，因为不用跟别人商量。但是，一个项目往往需要很多人的努力。小张的公司最近做一个新产品，团队有五个人。刚开始，大家意见不一样，开会常常吵架。后来，经理让每个人先写下自己的想法，再一起讨论。这样一来，大家发现：每个人的想法都有道理，只是角度不同。最后，他们把五个人的想法合在一起，做出了一个很好的产品。小张说，团队合作最难的不是做事，而是听别人说话。学会听别人说话，工作就成功了一半。", "pinyin": "Hěn duō rén juéde yí ge rén gōngzuò gèng kuài, yīnwèi bù yòng gēn biéren shāngliang. Dànshì, yí ge xiàngmù wǎngwǎng xūyào hěn duō rén de nǔlì. Xiǎo Zhāng de gōngsī zuìjìn zuò yí ge xīn chǎnpǐn, tuánduì yǒu wǔ ge rén. Gāng kāishǐ, dàjiā yìjiàn bù yí yàng, kāi huì chángcháng chǎo jià. Hòulái, jīnglǐ ràng měi ge rén xiān xiě xià zìjǐ de xiǎngfǎ, zài yì qǐ tǎolùn. Zhèyàng yì lái, dàjiā fāxiàn: měi ge rén de xiǎngfǎ dōu yǒu dàolǐ, zhǐ shì jiǎodù bù tóng. Zuìhòu, tāmen bǎ wǔ ge rén de xiǎngfǎ hé zài yì qǐ, zuò chū le yí ge hěn hǎo de chǎnpǐn. Xiǎo Zhāng shuō, tuánduì hézuò zuì nán de bù shì zuò shì, ér shì tīng biéren shuō huà. Xuéhuì tīng biéren shuō huà, gōngzuò jiù chénggōng le yí bàn.", "vi": "Nhiều người thấy làm một mình nhanh hơn vì không cần bàn bạc. Nhưng một dự án thường cần nhiều người. Nhóm của Tiểu Trương có 5 người, ban đầu ý kiến khác nhau, họp hay cãi nhau. Sau đó quản lý cho mỗi người viết ý tưởng trước rồi cùng thảo luận. Mọi người nhận ra: ý tưởng ai cũng có lý, chỉ khác góc nhìn. Cuối cùng họ gộp 5 ý tưởng thành một sản phẩm tốt. Tiểu Trương nói: hợp tác nhóm khó nhất không phải làm việc mà là nghe người khác nói.", "note": ZH_S5_NOTE, "questions": [
{ "q": "为什么很多人觉得一个人工作更快？", "o": [ "因为不用跟别人商量", "因为一个人更聪明", "因为没有经理", "因为工作很简单" ], "a": 0, "why": "Bài viết: 不用跟别人商量 — không cần bàn với người khác." },
{ "q": "小张的团队有几个人？", "o": [ "五个人", "三个人", "四个人", "六个人" ], "a": 0, "why": "Bài viết: 团队有五个人." },
{ "q": "经理用什么办法解决吵架的问题？", "o": [ "让每个人先写下想法，再一起讨论", "让大家不要说话", "换一个经理", "把团队分开" ], "a": 0, "why": "Bài viết: 让每个人先写下自己的想法，再一起讨论." },
{ "q": "大家最后发现了什么？", "o": [ "每个人的想法都有道理，只是角度不同", "只有一个人的想法对", "大家的想法都错了", "不需要讨论" ], "a": 0, "why": "Bài viết: 每个人的想法都有道理，只是角度不同." },
{ "q": "小张说团队合作最难的是什么？", "o": [ "听别人说话", "做事", "开会", "写报告" ], "a": 0, "why": "Bài viết: 最难的不是做事，而是听别人说话." } ] },
{ "id": "s5-reading-xedap", "stage": 5, "title": "Thành phố và xe đạp", "topic": "Đời sống", "text": "现在，越来越多的城市鼓励大家骑自行车。自行车不用油，不排废气，还能锻炼身体。小李每天骑车去上班，路上要二十分钟。他说，骑车比开车快，因为不用等红灯，也不用找停车的地方。但是，骑车也有问题：下雨的时候很不方便，夏天又热又晒。城市为了解决这些问题，修了很多自行车道，还在地铁站旁边建了停车的地方。专家说，如果一半的人都骑车上班，城市的空气会干净很多，交通也不会那么堵。小李希望，以后会有更多人选择自行车。", "pinyin": "Xiànzài, yuè lái yuè duō de chéngshì gǔlì dàjiā qí zìxíngchē. Zìxíngchē bù yòng yóu, bù pái fèiqì, hái néng duànliàn shēntǐ. Xiǎo Lǐ měitiān qí chē qù shàng bān, lùshang yào èrshí fēnzhōng. Tā shuō, qí chē bǐ kāi chē kuài, yīnwèi bù yòng děng hóng dēng, yě bù yòng zhǎo tíng chē de dìfang. Dànshì, qí chē yě yǒu wèntí: xià yǔ de shíhou hěn bù fāngbiàn, xiàtiān yòu rè yòu shài. Chéngshì wèi le jiějué zhèxiē wèntí, xiū le hěn duō zìxíngchē dào, hái zài dìtiě zhàn pángbiān jiàn le tíng chē de dìfang. Zhuānjiā shuō, rúguǒ yí bàn de rén dōu qí chē shàng bān, chéngshì de kōngqì huì gānjìng hěn duō, jiāotōng yě bù huì nàme dǔ. Xiǎo Lǐ xīwàng, yǐhòu huì yǒu gèng duō rén xuǎnzé zìxíngchē.", "vi": "Ngày nay ngày càng nhiều thành phố khuyến khích đi xe đạp. Xe đạp không dùng xăng, không xả khí thải, còn rèn luyện sức khỏe. Tiểu Lý đạp xe đi làm mỗi ngày mất 20 phút, nhanh hơn ô tô vì không chờ đèn đỏ, không tìm chỗ đỗ. Nhưng đạp xe cũng có vấn đề: mưa thì bất tiện, mùa hè vừa nóng vừa nắng. Thành phố đã làm nhiều làn xe đạp và chỗ đỗ cạnh ga tàu điện. Chuyên gia nói: nếu một nửa số người đạp xe đi làm, không khí sẽ sạch hơn nhiều và giao thông bớt tắc.", "note": ZH_S5_NOTE, "questions": [
{ "q": "骑自行车有什么好处？", "o": [ "不用油，不排废气，还能锻炼身体", "比开车贵", "不用学习", "可以睡觉" ], "a": 0, "why": "Bài viết: 不用油，不排废气，还能锻炼身体." },
{ "q": "小李为什么说骑车比开车快？", "o": [ "因为不用等红灯，也不用找停车的地方", "因为自行车很快", "因为路上没有车", "因为他不喜欢开车" ], "a": 0, "why": "Bài viết: 不用等红灯，也不用找停车的地方." },
{ "q": "骑车有什么问题？", "o": [ "下雨不方便，夏天又热又晒", "自行车太贵", "自行车太慢", "没有自行车道" ], "a": 0, "why": "Bài viết: 下雨的时候很不方便，夏天又热又晒." },
{ "q": "城市为了解决问题做了什么？", "o": [ "修自行车道，在地铁站旁建停车的地方", "不让大家骑车", "把自行车都收起来", "只让开车" ], "a": 0, "why": "Bài viết: 修了很多自行车道，还在地铁站旁边建了停车的地方." },
{ "q": "专家说如果一半的人骑车上班会怎么样？", "o": [ "空气干净很多，交通不那么堵", "城市会变小", "大家都会迟到", "自行车会不够用" ], "a": 0, "why": "Bài viết: 空气会干净很多，交通也不会那么堵." } ] },
{ "id": "s5-reading-thoiquen", "stage": 5, "title": "Thói quen đọc sách", "topic": "Học tập", "text": "小王以前不喜欢读书，他觉得读书很无聊。去年，他的好朋友送给他一本小说，讲一个年轻人去农村教书的故事。他一开始只是随便翻翻，没想到越看越有意思，三天就看完了。从那以后，他开始每天晚上读半个小时书。有的书讲历史，有的书讲科学，还有的书讲怎么跟人相处。他说，读书最大的好处不是记住很多知识，而是学会从别人的角度看问题。现在，他的书架上已经有一百多本书了。他希望，身边的人也能养成读书的习惯，因为一本书可能改变一个人的想法。", "pinyin": "Xiǎo Wáng yǐqián bù xǐhuan dú shū, tā juéde dú shū hěn wúliáo. Qùnián, tā de hǎo péngyou sòng gěi tā yì běn xiǎoshuō, jiǎng yí ge niánqīng rén qù nóngcūn jiāo shū de gùshi. Tā yì kāishǐ zhǐ shì suíbiàn fān fan, méi xiǎngdào yuè kàn yuè yǒu yìsi, sān tiān jiù kàn wán le. Cóng nà yǐhòu, tā kāishǐ měitiān wǎnshang dú bàn ge xiǎoshí shū. Yǒu de shū jiǎng lìshǐ, yǒu de shū jiǎng kēxué, hái yǒu de shū jiǎng zěnme gēn rén xiāngchǔ. Tā shuō, dú shū zuì dà de hǎochù bù shì jìzhù hěn duō zhīshi, ér shì xuéhuì cóng biéren de jiǎodù kàn wèntí. Xiànzài, tā de shūjià shang yǐjīng yǒu yì bǎi duō běn shū le. Tā xīwàng, shēnbiān de rén yě néng yǎngchéng dú shū de xíguàn, yīnwèi yì běn shū kěnéng gǎibiàn yí ge rén de xiǎngfǎ.", "vi": "Tiểu Vương trước đây không thích đọc sách, thấy đọc sách chán. Năm ngoái bạn thân tặng cậu một cuốn tiểu thuyết kể chuyện một thanh niên về nông thôn dạy học. Ban đầu cậu chỉ lật xem qua, không ngờ càng đọc càng hay, ba ngày đã đọc xong. Từ đó cậu bắt đầu đọc nửa tiếng mỗi tối: sách lịch sử, sách khoa học, sách về cách ứng xử. Cậu nói: lợi ích lớn nhất của đọc sách không phải nhớ nhiều kiến thức mà là học nhìn vấn đề từ góc độ người khác. Giờ giá sách của cậu đã có hơn 100 cuốn.", "note": ZH_S5_NOTE, "questions": [
{ "q": "小王以前觉得读书怎么样？", "o": [ "很无聊", "很有意思", "很难", "很贵" ], "a": 0, "why": "Bài viết: 他觉得读书很无聊." },
{ "q": "谁送给小王一本小说？", "o": [ "他的好朋友", "他的老师", "他的妈妈", "他自己买的" ], "a": 0, "why": "Bài viết: 他的好朋友送给他一本小说." },
{ "q": "小王用了几天看完这本小说？", "o": [ "三天", "一天", "一个月", "一个星期" ], "a": 0, "why": "Bài viết: 三天就看完了." },
{ "q": "现在小王每天晚上读多久的书？", "o": [ "半个小时", "一个小时", "十分钟", "两个小时" ], "a": 0, "why": "Bài viết: 每天晚上读半个小时书." },
{ "q": "小王说读书最大的好处是什么？", "o": [ "学会从别人的角度看问题", "记住很多知识", "书架上有很多书", "可以送给朋友" ], "a": 0, "why": "Bài viết: 最大的好处不是记住很多知识，而是学会从别人的角度看问题." } ] }
);
ZH_LISTENING.push(
{ "id": "s5-listen-hopdong", "stage": 5, "title": "Ký hợp đồng làm việc", "topic": "Công việc", "lines": [
{ "sp": "A", "han": "你好，我是来签合同的。", "py": "Nǐ hǎo, wǒ shì lái qiān hétong de.", "vi": "Chào bạn, tôi đến để ký hợp đồng." },
{ "sp": "B", "han": "你好，请先看一下合同的内容，有问题可以问我。", "py": "Nǐ hǎo, qǐng xiān kàn yí xià hétong de nèiróng, yǒu wèntí kěyǐ wèn wǒ.", "vi": "Chào bạn, hãy xem trước nội dung hợp đồng, có vấn đề gì cứ hỏi tôi." },
{ "sp": "A", "han": "工作时间是几点到几点？", "py": "Gōngzuò shíjiān shì jǐ diǎn dào jǐ diǎn?", "vi": "Giờ làm việc là từ mấy giờ đến mấy giờ?" },
{ "sp": "B", "han": "上午九点到下午六点，中午休息一个小时。", "py": "Shàngwǔ jiǔ diǎn dào xiàwǔ liù diǎn, zhōngwǔ xiūxi yí ge xiǎoshí.", "vi": "Từ 9 giờ sáng đến 6 giờ chiều, trưa nghỉ một tiếng." },
{ "sp": "A", "han": "试用期是多长时间？", "py": "Shìyòngqī shì duō cháng shíjiān?", "vi": "Thời gian thử việc là bao lâu?" },
{ "sp": "B", "han": "试用期是三个月，三个月以后工资会提高。", "py": "Shìyòngqī shì sān ge yuè, sān ge yuè yǐhòu gōngzī huì tígāo.", "vi": "Thử việc ba tháng, sau ba tháng lương sẽ tăng." } ], "note": ZH_S5_NOTE, "questions": [
{ "q": "A来做什么？", "o": [ "签合同", "面试", "辞职", "请假" ], "a": 0, "why": "A nói: 我是来签合同的 — tôi đến ký hợp đồng." },
{ "q": "工作时间是几点到几点？", "o": [ "上午九点到下午六点", "上午八点到下午五点", "上午十点到下午七点", "上午九点到下午五点" ], "a": 0, "why": "B nói: 上午九点到下午六点." },
{ "q": "中午休息多长时间？", "o": [ "一个小时", "半个小时", "两个小时", "不休息" ], "a": 0, "why": "B nói: 中午休息一个小时." },
{ "q": "试用期以后会怎么样？", "o": [ "工资会提高", "工资会降低", "工作时间变长", "没有变化" ], "a": 0, "why": "B nói: 三个月以后工资会提高." } ] },
{ "id": "s5-listen-khieunai", "stage": 5, "title": "Khiếu nại dịch vụ giao hàng", "topic": "Đời sống", "lines": [
{ "sp": "A", "han": "你好，我要投诉，我的包裹三天了还没到。", "py": "Nǐ hǎo, wǒ yào tóusù, wǒ de bāoguǒ sān tiān le hái méi dào.", "vi": "Chào bạn, tôi muốn khiếu nại, bưu kiện của tôi ba ngày rồi vẫn chưa tới." },
{ "sp": "B", "han": "对不起，请告诉我你的订单号，我帮你查一下。", "py": "Duìbuqǐ, qǐng gàosu wǒ nǐ de dìngdān hào, wǒ bāng nǐ chá yí xià.", "vi": "Xin lỗi, hãy cho tôi mã đơn hàng, tôi kiểm tra giúp bạn." },
{ "sp": "A", "han": "订单号是八五三六，我急着用里面的东西。", "py": "Dìngdān hào shì bā wǔ sān liù, wǒ jí zhe yòng lǐmiàn de dōngxi.", "vi": "Mã đơn là 8536, tôi đang cần gấp đồ bên trong." },
{ "sp": "B", "han": "我查到了，包裹在路上，明天上午一定送到。", "py": "Wǒ chá dào le, bāoguǒ zài lùshang, míngtiān shàngwǔ yí dìng sòng dào.", "vi": "Tôi kiểm tra được rồi, bưu kiện đang trên đường, sáng mai nhất định giao tới." },
{ "sp": "A", "han": "那好吧，如果明天还没到，我再打电话。", "py": "Nà hǎo ba, rúguǒ míngtiān hái méi dào, wǒ zài dǎ diànhuà.", "vi": "Vậy được, nếu ngày mai vẫn chưa tới, tôi sẽ gọi lại." },
{ "sp": "B", "han": "好的，给你带来不方便，真的很抱歉。", "py": "Hǎo de, gěi nǐ dài lái bù fāngbiàn, zhēn de hěn bàoqiàn.", "vi": "Vâng, gây bất tiện cho bạn, thật sự xin lỗi." } ], "note": ZH_S5_NOTE, "questions": [
{ "q": "A为什么投诉？", "o": [ "包裹三天了还没到", "包裹送错了", "包裹坏了", "价格太贵" ], "a": 0, "why": "A nói: 我的包裹三天了还没到." },
{ "q": "A的订单号是多少？", "o": [ "八五三六", "八三五六", "五八三六", "六三五八" ], "a": 0, "why": "A nói: 订单号是八五三六." },
{ "q": "B说包裹什么时候送到？", "o": [ "明天上午", "今天晚上", "后天", "下个星期" ], "a": 0, "why": "B nói: 明天上午一定送到." },
{ "q": "如果明天还没到，A会怎么样？", "o": [ "再打电话", "去商店", "不要包裹了", "报警" ], "a": 0, "why": "A nói: 如果明天还没到，我再打电话." } ] },
{ "id": "s5-listen-datve", "stage": 5, "title": "Đặt vé tàu", "topic": "Đi lại", "lines": [
{ "sp": "A", "han": "你好，我想买一张后天去上海的火车票。", "py": "Nǐ hǎo, wǒ xiǎng mǎi yì zhāng hòutiān qù Shànghǎi de huǒchē piào.", "vi": "Chào bạn, tôi muốn mua một vé tàu đi Thượng Hải ngày kia." },
{ "sp": "B", "han": "好的，你想坐上午的还是下午的？", "py": "Hǎo de, nǐ xiǎng zuò shàngwǔ de háishi xiàwǔ de?", "vi": "Vâng, bạn muốn đi buổi sáng hay buổi chiều?" },
{ "sp": "A", "han": "上午的吧，越早越好。", "py": "Shàngwǔ de ba, yuè zǎo yuè hǎo.", "vi": "Buổi sáng đi, càng sớm càng tốt." },
{ "sp": "B", "han": "上午八点有一班，十一点半到上海，你看可以吗？", "py": "Shàngwǔ bā diǎn yǒu yì bān, shíyī diǎn bàn dào Shànghǎi, nǐ kàn kěyǐ ma?", "vi": "8 giờ sáng có một chuyến, 11 giờ rưỡi tới Thượng Hải, bạn thấy được không?" },
{ "sp": "A", "han": "可以，就要这张吧，多少钱？", "py": "Kěyǐ, jiù yào zhè zhāng ba, duōshao qián?", "vi": "Được, lấy vé này, bao nhiêu tiền?" },
{ "sp": "B", "han": "二百五十块，请出示你的身份证。", "py": "Èr bǎi wǔshí kuài, qǐng chūshì nǐ de shēnfènzhèng.", "vi": "250 tệ, xin xuất trình chứng minh thư của bạn." } ], "note": ZH_S5_NOTE, "questions": [
{ "q": "A想买去哪里的票？", "o": [ "上海", "北京", "广州", "杭州" ], "a": 0, "why": "A nói: 后天去上海的火车票." },
{ "q": "A想坐什么时候的车？", "o": [ "上午的，越早越好", "下午的", "晚上的", "半夜的" ], "a": 0, "why": "A nói: 上午的吧，越早越好." },
{ "q": "这班车几点到上海？", "o": [ "十一点半", "十点半", "十二点", "十一点" ], "a": 0, "why": "B nói: 十一点半到上海." },
{ "q": "这张票多少钱？", "o": [ "二百五十块", "一百五十块", "三百块", "二百块" ], "a": 0, "why": "B nói: 二百五十块." } ] },
{ "id": "s5-listen-hoithao", "stage": 5, "title": "Đăng ký hội thảo", "topic": "Học tập", "lines": [
{ "sp": "A", "han": "你好，我想报名参加下个星期的研讨会。", "py": "Nǐ hǎo, wǒ xiǎng bàomíng cānjiā xià ge xīngqī de yántǎohuì.", "vi": "Chào bạn, tôi muốn đăng ký tham gia hội thảo tuần sau." },
{ "sp": "B", "han": "好的，研讨会的主题是“怎么学好中文”，星期六上午九点开始。", "py": "Hǎo de, yántǎohuì de zhǔtí shì “zěnme xué hǎo Zhōngwén”, xīngqī liù shàngwǔ jiǔ diǎn kāishǐ.", "vi": "Vâng, chủ đề hội thảo là “học tốt tiếng Trung thế nào”, sáng thứ bảy 9 giờ bắt đầu." },
{ "sp": "A", "han": "需要准备什么吗？", "py": "Xūyào zhǔnbèi shénme ma?", "vi": "Cần chuẩn bị gì không?" },
{ "sp": "B", "han": "不用准备，只要带上你的学生证就行了。", "py": "Bù yòng zhǔnbèi, zhǐ yào dài shang nǐ de xuéshēng zhèng jiù xíng le.", "vi": "Không cần chuẩn bị, chỉ cần mang thẻ sinh viên là được." },
{ "sp": "A", "han": "那我现在报名可以吗？", "py": "Nà wǒ xiànzài bàomíng kěyǐ ma?", "vi": "Vậy bây giờ tôi đăng ký được không?" },
{ "sp": "B", "han": "可以，请写下你的名字和电话号码。", "py": "Kěyǐ, qǐng xiě xià nǐ de míngzi hé diànhuà hàomǎ.", "vi": "Được, xin viết tên và số điện thoại của bạn." } ], "note": ZH_S5_NOTE, "questions": [
{ "q": "研讨会的主题是什么？", "o": [ "怎么学好中文", "怎么学好英文", "怎么找工作", "怎么学做饭" ], "a": 0, "why": "B nói: 主题是“怎么学好中文”." },
{ "q": "研讨会什么时候开始？", "o": [ "星期六上午九点", "星期天上午九点", "星期六下午三点", "星期五上午九点" ], "a": 0, "why": "B nói: 星期六上午九点开始." },
{ "q": "参加研讨会需要带什么？", "o": [ "学生证", "身份证", "书", "电脑" ], "a": 0, "why": "B nói: 只要带上你的学生证就行了." },
{ "q": "报名要写下什么？", "o": [ "名字和电话号码", "名字和地址", "电话号码和邮箱", "名字和年龄" ], "a": 0, "why": "B nói: 请写下你的名字和电话号码." } ] },
{ "id": "s5-listen-thuctap", "stage": 5, "title": "Hỏi về thực tập", "topic": "Công việc", "lines": [
{ "sp": "A", "han": "老师，我想问一下，暑假可以去公司实习吗？", "py": "Lǎoshī, wǒ xiǎng wèn yí xià, shǔjià kěyǐ qù gōngsī shíxí ma?", "vi": "Thưa thầy, em muốn hỏi, hè có thể đến công ty thực tập không?" },
{ "sp": "B", "han": "可以，学校跟几家公司有合作，你想去哪种公司？", "py": "Kěyǐ, xuéxiào gēn jǐ jiā gōngsī yǒu hézuò, nǐ xiǎng qù nǎ zhǒng gōngsī?", "vi": "Được, trường hợp tác với vài công ty, em muốn đến loại công ty nào?" },
{ "sp": "A", "han": "我想去一家做教育的公司，锻炼一下自己。", "py": "Wǒ xiǎng qù yì jiā zuò jiàoyù de gōngsī, duànliàn yí xià zìjǐ.", "vi": "Em muốn đến một công ty làm giáo dục, để rèn luyện bản thân." },
{ "sp": "B", "han": "好，我帮你联系，实习一般是两个月。", "py": "Hǎo, wǒ bāng nǐ liánxì, shíxí yìbān shì liǎng ge yuè.", "vi": "Được, thầy giúp em liên hệ, thực tập thường là hai tháng." },
{ "sp": "A", "han": "谢谢老师，实习期间有工资吗？", "py": "Xièxie lǎoshī, shíxí qījiān yǒu gōngzī ma?", "vi": "Cảm ơn thầy, trong thời gian thực tập có lương không?" },
{ "sp": "B", "han": "有的，虽然不多，但是可以学到很多东西。", "py": "Yǒu de, suīrán bù duō, dànshì kěyǐ xué dào hěn duō dōngxi.", "vi": "Có, tuy không nhiều nhưng có thể học được nhiều thứ." } ], "note": ZH_S5_NOTE, "questions": [
{ "q": "A想在什么时候去公司实习？", "o": [ "暑假", "寒假", "周末", "平时" ], "a": 0, "why": "A nói: 暑假可以去公司实习吗？ — hè." },
{ "q": "A想去哪种公司？", "o": [ "做教育的公司", "做衣服的公司", "做饭的公司", "做车的公司" ], "a": 0, "why": "A nói: 我想去一家做教育的公司." },
{ "q": "实习一般是多长时间？", "o": [ "两个月", "一个月", "三个月", "半年" ], "a": 0, "why": "B nói: 实习一般是两个月." },
{ "q": "实习期间有工资吗？", "o": [ "有的，虽然不多", "没有", "很多", "不知道" ], "a": 0, "why": "B nói: 有的，虽然不多." } ] }
);
ZH_SPEAK.push(
{ "id": "s5-speak-thuyettrinh", "stage": 5, "title": "Thuyết trình về dự án", "topic": "Công việc", "hook": "“大家好，今天我来介绍我们的项目” — mở đầu thuyết trình bằng lời chào và giới thiệu chủ đề.", "lines": [
{ "sp": "A", "han": "大家好，今天我来介绍我们的项目。", "py": "Dàjiā hǎo, jīntiān wǒ lái jièshào wǒmen de xiàngmù.", "vi": "Chào mọi người, hôm nay tôi giới thiệu dự án của chúng tôi." },
{ "sp": "A", "han": "这个项目的目的是帮助学生更好地学习中文。", "py": "Zhège xiàngmù de mùdì shì bāngzhù xuésheng gèng hǎo de xuéxí Zhōngwén.", "vi": "Mục đích của dự án này là giúp học sinh học tiếng Trung tốt hơn." },
{ "sp": "A", "han": "我们先调查了学生的需要，然后设计了三个部分。", "py": "Wǒmen xiān diàochá le xuésheng de xūyào, ránhòu shèjì le sān ge bùfen.", "vi": "Chúng tôi đã khảo sát nhu cầu của học sinh trước, rồi thiết kế ba phần." },
{ "sp": "A", "han": "第一部分是词汇，第二部分是语法，第三部分是练习。", "py": "Dì yí bùfen shì cíhuì, dì èr bùfen shì yǔfǎ, dì sān bùfen shì liànxí.", "vi": "Phần đầu là từ vựng, phần hai là ngữ pháp, phần ba là luyện tập." },
{ "sp": "A", "han": "谢谢大家，有问题可以问我。", "py": "Xièxie dàjiā, yǒu wèntí kěyǐ wèn wǒ.", "vi": "Cảm ơn mọi người, có câu hỏi cứ hỏi tôi." } ], "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK5, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp." },
{ "id": "s5-speak-tranhluan", "stage": 5, "title": "Tranh luận: học online hay học trực tiếp", "topic": "Học tập", "hook": "“我觉得网上学习更方便” — tranh luận bắt đầu bằng việc nêu ý kiến của mình.", "lines": [
{ "sp": "A", "han": "我觉得网上学习更方便，在家里就能上课。", "py": "Wǒ juéde wǎngshang xuéxí gèng fāngbiàn, zài jiā lǐ jiù néng shàng kè.", "vi": "Tôi thấy học online tiện hơn, ở nhà cũng học được." },
{ "sp": "B", "han": "但是在家里学习很容易分心，没有课堂的气氛。", "py": "Dànshì zài jiā lǐ xuéxí hěn róngyì fēn xīn, méiyǒu kètáng de qìfēn.", "vi": "Nhưng học ở nhà rất dễ mất tập trung, không có không khí lớp học." },
{ "sp": "A", "han": "网上学习可以看回放，不懂的地方可以多看几遍。", "py": "Wǎngshang xuéxí kěyǐ kàn huífàng, bù dǒng de dìfang kěyǐ duō kàn jǐ biàn.", "vi": "Học online có thể xem lại, chỗ không hiểu có thể xem nhiều lần." },
{ "sp": "B", "han": "可是面对面学习可以直接问老师，马上得到回答。", "py": "Kěshì miàn duì miàn xuéxí kěyǐ zhíjiē wèn lǎoshī, mǎshàng dédào huídá.", "vi": "Nhưng học trực tiếp có thể hỏi thầy ngay, được trả lời ngay." },
{ "sp": "A", "han": "我同意，两种方式各有好处，最重要的是适合自己。", "py": "Wǒ tóngyì, liǎng zhǒng fāngshì gè yǒu hǎochù, zuì zhòngyào de shì shìhé zìjǐ.", "vi": "Tôi đồng ý, hai cách đều có lợi, quan trọng nhất là phù hợp với mình." } ], "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK5, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp." },
{ "id": "s5-speak-kechuyen", "stage": 5, "title": "Kể chuyện ngày đầu đi làm", "topic": "Công việc", "hook": "“我第一天上班的时候，特别紧张” — kể chuyện bắt đầu bằng thời gian và cảm xúc.", "lines": [
{ "sp": "A", "han": "我第一天上班的时候，特别紧张。", "py": "Wǒ dì yì tiān shàng bān de shíhou, tèbié jǐnzhāng.", "vi": "Ngày đầu đi làm, tôi đặc biệt căng thẳng." },
{ "sp": "A", "han": "早上，我提前半个小时就到了公司。", "py": "Zǎoshang, wǒ tíqián bàn ge xiǎoshí jiù dào le gōngsī.", "vi": "Buổi sáng, tôi đến công ty sớm nửa tiếng." },
{ "sp": "A", "han": "经理先带我认识了同事，然后告诉我今天的任务。", "py": "Jīnglǐ xiān dài wǒ rènshi le tóngshì, ránhòu gàosu wǒ jīntiān de rènwu.", "vi": "Quản lý dẫn tôi làm quen đồng nghiệp trước, rồi nói nhiệm vụ hôm nay." },
{ "sp": "A", "han": "中午，同事们请我一起吃饭，我就不紧张了。", "py": "Zhōngwǔ, tóngshìmen qǐng wǒ yì qǐ chī fàn, wǒ jiù bù jǐnzhāng le.", "vi": "Trưa, đồng nghiệp mời tôi ăn cùng, tôi hết căng thẳng." },
{ "sp": "A", "han": "现在想起来，那一天过得很快，也很有意思。", "py": "Xiànzài xiǎng qǐlái, nà yì tiān guò de hěn kuài, yě hěn yǒu yìsi.", "vi": "Giờ nghĩ lại, ngày đó trôi rất nhanh và cũng rất thú vị." } ], "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK5, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp." },
{ "id": "s5-speak-gioithieubanthan", "stage": 5, "title": "Giới thiệu bản thân khi phỏng vấn", "topic": "Công việc", "hook": "“我叫小李，去年大学毕业” — phỏng vấn bắt đầu bằng tên và học vấn.", "lines": [
{ "sp": "A", "han": "我叫小李，去年大学毕业，学的是教育。", "py": "Wǒ jiào Xiǎo Lǐ, qùnián dàxué bìyè, xué de shì jiàoyù.", "vi": "Tôi tên Tiểu Lý, năm ngoái tốt nghiệp đại học, học ngành giáo dục." },
{ "sp": "A", "han": "毕业以后，我在一家公司做了一年销售。", "py": "Bìyè yǐhòu, wǒ zài yì jiā gōngsī zuò le yì nián xiāoshòu.", "vi": "Sau khi tốt nghiệp, tôi làm bán hàng một năm ở một công ty." },
{ "sp": "A", "han": "这份工作让我学会了怎么跟不同的人交流。", "py": "Zhè fèn gōngzuò ràng wǒ xuéhuì le zěnme gēn bù tóng de rén jiāoliú.", "vi": "Công việc này dạy tôi cách giao tiếp với những người khác nhau." },
{ "sp": "A", "han": "我希望能在这个公司继续学习，做出成绩。", "py": "Wǒ xīwàng néng zài zhège gōngsī jìxù xuéxí, zuò chū chéngjì.", "vi": "Tôi hy vọng được tiếp tục học hỏi ở công ty này và đạt thành tích." },
{ "sp": "A", "han": "谢谢你们给我这个机会。", "py": "Xièxie nǐmen gěi wǒ zhège jīhuì.", "vi": "Cảm ơn các bạn đã cho tôi cơ hội này." } ], "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK5, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp." },
{ "id": "s5-speak-kehoach", "stage": 5, "title": "Kế hoạch cuối tuần", "topic": "Đời sống", "hook": "“这个周末你有什么计划？” — nói về kế hoạch bắt đầu bằng câu hỏi.", "lines": [
{ "sp": "A", "han": "这个周末你有什么计划？", "py": "Zhège zhōumò nǐ yǒu shénme jìhuà?", "vi": "Cuối tuần này bạn có kế hoạch gì?" },
{ "sp": "B", "han": "星期六上午我想去图书馆看书，下午去公园跑步。", "py": "Xīngqī liù shàngwǔ wǒ xiǎng qù túshūguǎn kàn shū, xiàwǔ qù gōngyuán pǎo bù.", "vi": "Sáng thứ bảy tôi muốn đến thư viện đọc sách, chiều đi công viên chạy bộ." },
{ "sp": "A", "han": "星期天呢？", "py": "Xīngqī tiān ne?", "vi": "Chủ nhật thì sao?" },
{ "sp": "B", "han": "星期天我打算在家休息，顺便整理一下房间。", "py": "Xīngqī tiān wǒ dǎsuàn zài jiā xiūxi, shùnbiàn zhěnglǐ yí xià fángjiān.", "vi": "Chủ nhật tôi định ở nhà nghỉ, tiện thể dọn dẹp phòng." },
{ "sp": "A", "han": "好计划，周末过后我们再一起去爬山吧。", "py": "Hǎo jìhuà, zhōumò guò hòu wǒmen zài yì qǐ qù pá shān ba.", "vi": "Kế hoạch hay, sau cuối tuần chúng ta lại cùng đi leo núi nhé." } ], "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK5, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp." },
{ "id": "s5-speak-congnghe", "stage": 5, "title": "Ý kiến về công nghệ", "topic": "Đời sống", "hook": "“现在的生活离不开手机” — nói ý kiến bắt đầu bằng một nhận xét chung.", "lines": [
{ "sp": "A", "han": "现在的生活离不开手机，什么事都能在手机上做。", "py": "Xiànzài de shēnghuó lí bù kāi shǒujī, shénme shì dōu néng zài shǒujī shang zuò.", "vi": "Cuộc sống bây giờ không thể thiếu điện thoại, việc gì cũng làm được trên điện thoại." },
{ "sp": "B", "han": "是啊，买东西、学习、跟朋友聊天都很方便。", "py": "Shì a, mǎi dōngxi, xuéxí, gēn péngyou liáotiān dōu hěn fāngbiàn.", "vi": "Đúng vậy, mua đồ, học tập, trò chuyện với bạn bè đều rất tiện." },
{ "sp": "A", "han": "但是，很多人每天看手机的时间太长了，对眼睛不好。", "py": "Dànshì, hěn duō rén měitiān kàn shǒujī de shíjiān tài cháng le, duì yǎnjing bù hǎo.", "vi": "Nhưng nhiều người xem điện thoại quá lâu mỗi ngày, không tốt cho mắt." },
{ "sp": "B", "han": "你说得对，我们应该控制时间，多出去走走。", "py": "Nǐ shuō de duì, wǒmen yīnggāi kòngzhì shíjiān, duō chū qù zǒu zou.", "vi": "Bạn nói đúng, chúng ta nên kiểm soát thời gian, ra ngoài đi dạo nhiều hơn." },
{ "sp": "A", "han": "科技是好东西，关键是怎么用它。", "py": "Kējì shì hǎo dōngxi, guānjiàn shì zěnme yòng tā.", "vi": "Công nghệ là thứ tốt, quan trọng là dùng nó thế nào." } ], "note": "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK5, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp." }
);
ZH_ROLE.push(
{ "id": "s5-role-thuongluong", "stage": 5, "title": "Thương lượng lương", "setting": "Văn phòng công ty", "you": "Ứng viên xin việc", "partner": "Quản lý nhân sự", "goal": "Nêu mức lương mong muốn, nghe đề nghị của công ty, chốt thỏa thuận lịch sự.", "turns": [
{ "from": "partner", "han": "我们对你的表现很满意，现在谈一下工资吧。", "py": "Wǒmen duì nǐ de biǎoxiàn hěn mǎnyì, xiànzài tán yí xià gōngzī ba.", "vi": "Chúng tôi rất hài lòng với thể hiện của bạn, giờ nói về lương nhé." },
{ "from": "you", "han": "谢谢，我希望每个月能拿到一万块。", "py": "Xièxie, wǒ xīwàng měi ge yuè néng ná dào yí wàn kuài.", "vi": "Cảm ơn, tôi hy vọng mỗi tháng được 10 nghìn tệ." },
{ "from": "partner", "han": "一万块有点高，我们一般给新员工八千块。", "py": "Yí wàn kuài yǒu diǎn gāo, wǒmen yìbān gěi xīn yuángōng bā qiān kuài.", "vi": "10 nghìn hơi cao, chúng tôi thường trả nhân viên mới 8 nghìn." },
{ "from": "you", "han": "我理解，但是我有一年的工作经验，能不能给九千块？", "py": "Wǒ lǐjiě, dànshì wǒ yǒu yì nián de gōngzuò jīngyàn, néng bù néng gěi jiǔ qiān kuài?", "vi": "Tôi hiểu, nhưng tôi có một năm kinh nghiệm, có thể trả 9 nghìn không?" },
{ "from": "partner", "han": "好吧，九千块可以，三个月以后看表现再提高。", "py": "Hǎo ba, jiǔ qiān kuài kěyǐ, sān ge yuè yǐhòu kàn biǎoxiàn zài tígāo.", "vi": "Được, 9 nghìn được, sau ba tháng xem thể hiện rồi tăng tiếp." },
{ "from": "you", "han": "好的，谢谢你们，我会努力工作的。", "py": "Hǎo de, xièxie nǐmen, wǒ huì nǔlì gōngzuò de.", "vi": "Vâng, cảm ơn các bạn, tôi sẽ làm việc chăm chỉ." } ], "tip": "Thương lượng lương: nói con số mong muốn trước, nghe đề nghị của công ty, rồi đưa ra con số ở giữa — luôn giữ giọng lịch sự.", "chunks": [ "我希望每个月能拿到…块。", "能不能给…块？", "我会努力工作的。" ], "note": "Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt." },
{ "id": "s5-role-trahang", "stage": 5, "title": "Trả hàng lỗi", "setting": "Cửa hàng", "you": "Khách hàng", "partner": "Nhân viên cửa hàng", "goal": "Nêu lỗi của hàng, yêu cầu đổi hoặc trả, kết thúc lịch sự.", "turns": [
{ "from": "you", "han": "你好，我昨天买的这件衣服有问题，拉链坏了。", "py": "Nǐ hǎo, wǒ zuótiān mǎi de zhè jiàn yīfu yǒu wèntí, lā liàn huài le.", "vi": "Chào bạn, chiếc áo tôi mua hôm qua có vấn đề, khóa kéo hỏng rồi." },
{ "from": "partner", "han": "对不起，让我看一下。嗯，拉链确实坏了。", "py": "Duìbuqǐ, ràng wǒ kàn yí xià. Ng, lā liàn quèshí huài le.", "vi": "Xin lỗi, để tôi xem. Ừ, khóa kéo đúng là hỏng rồi." },
{ "from": "you", "han": "我想换一件新的，可以吗？", "py": "Wǒ xiǎng huàn yí jiàn xīn de, kěyǐ ma?", "vi": "Tôi muốn đổi một chiếc mới, được không?" },
{ "from": "partner", "han": "可以，你想要同样的颜色还是别的颜色？", "py": "Kěyǐ, nǐ xiǎng yào tóngyàng de yánsè háishi bié de yánsè?", "vi": "Được, bạn muốn cùng màu hay màu khác?" },
{ "from": "you", "han": "同样的颜色吧，谢谢。", "py": "Tóngyàng de yánsè ba, xièxie.", "vi": "Cùng màu đi, cảm ơn." },
{ "from": "partner", "han": "好的，这是新的，请检查一下。", "py": "Hǎo de, zhè shì xīn de, qǐng jiǎnchá yí xià.", "vi": "Vâng, đây là chiếc mới, xin kiểm tra giúp." },
{ "from": "you", "han": "没问题，谢谢你的帮助。", "py": "Méi wèntí, xièxie nǐ de bāngzhù.", "vi": "Không vấn đề gì, cảm ơn bạn đã giúp." } ], "tip": "Trả hàng: nêu lỗi cụ thể trước, nói rõ muốn đổi hay trả, rồi cảm ơn — không cần to tiếng.", "chunks": [ "我买的这件衣服有问题。", "我想换一件新的，可以吗？", "谢谢你的帮助。" ], "note": "Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt." },
{ "id": "s5-role-hoptac", "stage": 5, "title": "Hợp tác dự án", "setting": "Phòng họp", "you": "Nhân viên dự án", "partner": "Đồng nghiệp nhóm khác", "goal": "Chia việc rõ ràng, chốt thời hạn, xác nhận lại kế hoạch.", "turns": [
{ "from": "you", "han": "这个项目下个月就要交了，我们先分一下工作吧。", "py": "Zhège xiàngmù xià ge yuè jiù yào jiāo le, wǒmen xiān fēn yí xià gōngzuò ba.", "vi": "Dự án này tháng sau phải nộp rồi, chúng ta chia việc trước nhé." },
{ "from": "partner", "han": "好，你负责写报告，我负责做表格，怎么样？", "py": "Hǎo, nǐ fùzé xiě bàogào, wǒ fùzé zuò biǎogé, zěnmeyàng?", "vi": "Được, bạn phụ trách viết báo cáo, tôi phụ trách làm bảng, thấy sao?" },
{ "from": "you", "han": "可以，不过报告需要你提供的数据，你星期五能给我吗？", "py": "Kěyǐ, bùguò bàogào xūyào nǐ tígōng de shùjù, nǐ xīngqī wǔ néng gěi wǒ ma?", "vi": "Được, nhưng báo cáo cần số liệu bạn cung cấp, thứ sáu bạn đưa tôi được không?" },
{ "from": "partner", "han": "没问题，星期五上午我就发给你。", "py": "Méi wèntí, xīngqī wǔ shàngwǔ wǒ jiù fā gěi nǐ.", "vi": "Không vấn đề, sáng thứ sáu tôi gửi cho bạn." },
{ "from": "you", "han": "那我们下星期三再开会检查一次进度。", "py": "Nà wǒmen xià xīngqī sān zài kāi huì jiǎnchá yí cì jìndù.", "vi": "Vậy thứ tư tuần sau chúng ta họp lại kiểm tra tiến độ một lần." },
{ "from": "partner", "han": "好的，合作愉快。", "py": "Hǎo de, hézuò yúkuài.", "vi": "Vâng, hợp tác vui vẻ." } ], "tip": "Hợp tác: chia việc kèm thời hạn cụ thể, xác nhận lại bằng câu tóm tắt — tránh “ai cũng tưởng người kia làm”.", "chunks": [ "我们先分一下工作吧。", "你星期五能给我吗？", "我们下星期三再开会检查一次进度。" ], "note": "Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt." },
{ "id": "s5-role-tuvan", "stage": 5, "title": "Tư vấn chọn khóa học", "setting": "Trung tâm tư vấn", "you": "Học viên", "partner": "Nhân viên tư vấn", "goal": "Nêu nhu cầu và trình độ, nghe tư vấn, chọn khóa phù hợp.", "turns": [
{ "from": "you", "han": "你好，我想学中文，但是不知道从哪里开始。", "py": "Nǐ hǎo, wǒ xiǎng xué Zhōngwén, dànshì bù zhīdào cóng nǎlǐ kāishǐ.", "vi": "Chào bạn, tôi muốn học tiếng Trung nhưng không biết bắt đầu từ đâu." },
{ "from": "partner", "han": "你以前学过中文吗？大概是什么水平？", "py": "Nǐ yǐqián xué guo Zhōngwén ma? Dàgài shì shénme shuǐpíng?", "vi": "Trước đây bạn đã học tiếng Trung chưa? Đại khái trình độ nào?" },
{ "from": "you", "han": "我自学过半年，会说一些简单的句子，但是不会写汉字。", "py": "Wǒ zìxué guo bàn nián, huì shuō yì xiē jiǎndān de jùzi, dànshì bù huì xiě Hànzì.", "vi": "Tôi tự học nửa năm, nói được vài câu đơn giản nhưng không biết viết chữ Hán." },
{ "from": "partner", "han": "那我建议你从初级班开始，初级班先学拼音和常用汉字。", "py": "Nà wǒ jiànyì nǐ cóng chūjí bān kāishǐ, chūjí bān xiān xué pīnyīn hé chángyòng Hànzì.", "vi": "Vậy tôi khuyên bạn bắt đầu từ lớp sơ cấp, lớp sơ cấp học pinyin và chữ Hán thường dùng trước." },
{ "from": "you", "han": "初级班一个星期上几次课？", "py": "Chūjí bān yí ge xīngqī shàng jǐ cì kè?", "vi": "Lớp sơ cấp một tuần học mấy buổi?" },
{ "from": "partner", "han": "一个星期三次，星期一、星期三和星期五晚上。", "py": "Yí ge xīngqī sān cì, xīngqī yī, xīngqī sān hé xīngqī wǔ wǎnshang.", "vi": "Một tuần ba buổi, tối thứ hai, thứ tư và thứ sáu." },
{ "from": "you", "han": "好的，我就报初级班，谢谢你的建议。", "py": "Hǎo de, wǒ jiù bào chūjí bān, xièxie nǐ de jiànyì.", "vi": "Được, tôi đăng ký lớp sơ cấp, cảm ơn lời khuyên của bạn." } ], "tip": "Tư vấn: nói rõ trình độ thật của mình trước, rồi hỏi lịch học và nội dung — chọn lớp vừa sức, đừng chọn lớp quá khó.", "chunks": [ "我想学中文，但是不知道从哪里开始。", "我建议你从初级班开始。", "一个星期上几次课？" ], "note": "Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt." }
);
ZH_WRITE.push(
{ "id": "s5-write-sapxep-chufei", "stage": 5, "title": "Sắp xếp: Câu 除非…否则", "kind": "order", "prompt": "Sắp xếp các từ thành câu đúng: trừ phi bạn cố gắng, nếu không bạn không thể thành công.", "words": [ "除非", "你", "努力", "否则", "你", "不能", "成功" ], "why": "Trật tự đúng: 除非 + điều kiện 你努力 → 否则 + kết quả 你不能成功.", "note": ZH_S5_NOTE },
{ "id": "s5-write-sapxep-buguan", "stage": 5, "title": "Sắp xếp: Câu 不管…都", "kind": "order", "prompt": "Sắp xếp các từ thành câu đúng: dù bận thế nào, anh ấy đều kiên trì tập luyện.", "words": [ "不管", "多忙", "他", "都", "坚持", "锻炼" ], "why": "Trật tự đúng: 不管 + điều kiện 多忙 → 他 + 都 + 坚持锻炼.", "note": ZH_S5_NOTE },
{ "id": "s5-write-dientu-hocxa", "stage": 5, "title": "Điền từ: Học xa nhà", "kind": "fill", "prompt": "Chọn từ đúng điền vào câu về học xa nhà.", "questions": [
{ "q": "他去年离开家乡，到北京 ___ 大学。", "o": [ "上", "吃", "买", "跑" ], "a": 0, "why": "上大学: lên đại học, động từ 上 dùng với trường học." },
{ "q": "离开家不是失去依靠，而是学会 ___ 。", "o": [ "独立", "回家", "睡觉", "吃饭" ], "a": 0, "why": "学会独立: học độc lập — ý chính của bài học xa nhà." } ], "note": ZH_S5_NOTE },
{ "id": "s5-write-viet-thoiquen", "stage": 5, "title": "Viết: Thói quen đọc sách của tôi", "kind": "free", "prompt": "Viết một đoạn ngắn (6-10 câu) về thói quen đọc sách của bạn: trước đây thế nào, bắt đầu đọc từ khi nào, đọc loại sách gì, đọc sách thay đổi bạn ra sao.", "model": "我以前不喜欢读书，觉得读书很无聊。去年，朋友送给我一本小说，我三天就看完了。从那以后，我每天晚上读半个小时书。有的书讲历史，有的书讲科学，还有的书讲怎么跟人相处。读书让我学会从别人的角度看问题。现在，我的书架上已经有一百多本书了。我希望身边的人也能养成读书的习惯。", "analysis": "Đoạn mẫu mở đầu bằng quá khứ (以前不喜欢), rồi kể bước ngoặt (朋友送书 — 三天看完), rồi thói quen hiện tại (每天晚上读半个小时), cuối cùng nói thay đổi và mong muốn. Viết theo khung quá khứ — bước ngoặt — hiện tại — thay đổi thì đoạn văn có mạch rõ ràng.", "phrases": [ "我以前不喜欢…，觉得…很无聊。", "从那以后，我每天晚上…。", "…让我学会从别人的角度看问题。" ], "note": "Bài tự soạn theo chủ đề đời sống trình độ HSK5, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Bài viết tự do đối chiếu với đoạn mẫu, không chấm điểm tự động. Phần này chỉ đối chiếu bài mẫu, chưa có AI chấm tiếng Trung — AI chấm đang chờ nâng cấp, không có điểm, không tính đạt cũng không tính chưa đạt." }
);
// Pha 2 (c) — Phan he HSK chang 6 (tu soan 100%, theo mau chang 4/5).
var ZH_S6_NOTE = "Bài tự soạn theo chủ đề đời sống trình độ HSK6, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Chấm đúng/sai ngay theo đáp án; câu sai vào Sổ lỗi sai để ôn giãn cách.";
var ZH_S6_NOTE_SPEAK = "Kịch bản tự soạn theo chủ đề đời sống trình độ HSK6, không trích nguyên văn giáo trình; nghe bằng giọng đọc máy zh-CN, không phải audio thu sẵn. Nhãn HSK là mức đặt theo chủ đề/trình độ. Bài này là tự luyện nói nhại, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp.";
var ZH_S6_NOTE_ROLE = "Bài này là tự luyện nhập vai, chưa chấm điểm — AI chấm tiếng Trung đang chờ nâng cấp, không tính đạt.";
var ZH_S6_NOTE_FREE = "Bài tự soạn theo chủ đề đời sống trình độ HSK6, không trích nguyên văn giáo trình; nhãn HSK là mức đặt theo chủ đề/trình độ, không phải xác nhận từng từ nằm trong khung từ vựng HSK 2.0 chính thức. Bài viết tự do đối chiếu với đoạn mẫu, không chấm điểm tự động. Phần này chỉ đối chiếu bài mẫu, chưa có AI chấm tiếng Trung — AI chấm đang chờ nâng cấp, không có điểm, không tính đạt cũng không tính chưa đạt.";
ZH_GRAMMAR.push(
{ "id": "s6-jinguan", "stage": 6, "title": "尽管…还是 — dù… vẫn…", "hook": "“尽管下雨，他还是来了” — dù trời mưa, anh ấy vẫn đến: khó khăn không đổi quyết định.", "examples": [ "尽管下雨，他还是来了。(Jǐnguǎn xià yǔ, tā háishi lái le.) — Dù trời mưa, anh ấy vẫn đến.", "尽管工作很忙，她还是坚持每天读书。(Jǐnguǎn gōngzuò hěn máng, tā háishi jiānchí měitiān dú shū.) — Dù công việc rất bận, cô ấy vẫn kiên trì đọc sách mỗi ngày.", "尽管路很远，我们还是走到了山顶。(Jǐnguǎn lù hěn yuǎn, wǒmen háishi zǒu dào le shāndǐng.) — Dù đường rất xa, chúng tôi vẫn đi đến đỉnh núi.", "尽管大家都反对，他还是决定试一试。(Jǐnguǎn dàjiā dōu fǎnduì, tā háishi juédìng shì yí shì.) — Dù mọi người đều phản đối, anh ấy vẫn quyết định thử một lần." ], "speak": "尽管下雨，他还是来了。尽管工作很忙，她还是坚持每天读书。尽管路很远，我们还是走到了山顶。尽管大家都反对，他还是决定试一试。", "rule": "尽管 nêu khó khăn ở vế đầu, 还是 nêu quyết định không đổi ở vế sau. Khác với 虽然 ở chỗ 尽管 nhấn mạnh khó khăn lớn hơn.", "tip": "Hãy nhớ: 尽管 là “dù…”, 还是 là “vẫn…” — khó khăn càng lớn càng hợp với 尽管.", "note": ZH_S6_NOTE, "quiz": [
{ "q": "Câu nào dùng 尽管…还是 đúng?", "o": [ "尽管下雨，他还是来了。", "尽管下雨，但是他来了。", "尽管下雨，所以他来了。", "尽管下雨，可是他来了。" ], "a": 0, "why": "尽管 đi cặp với 还是: dù mưa vẫn đến." },
{ "q": "Điền vào chỗ trống: 尽管工作很忙，她 ___ 坚持每天读书。", "o": [ "还是", "但是", "否则", "所以" ], "a": 0, "why": "Vế sau là quyết định không đổi, dùng 还是." },
{ "q": "“Dù đường rất xa, chúng tôi vẫn đi đến đỉnh núi” viết thế nào?", "o": [ "尽管路很远，我们还是走到了山顶。", "尽管路很远，但是我们走到了山顶。", "如果路很远，我们走到了山顶。", "虽然路很远，我们走到了山顶。" ], "a": 0, "why": "“Dù… vẫn…” nhấn mạnh khó khăn là 尽管…还是." },
{ "q": "尽管 có nghĩa là gì?", "o": [ "Dù… (khó khăn lớn)", "Mặc dù (nhẹ)", "Trừ phi", "Đã…" ], "a": 0, "why": "尽管 = dù, nhấn mạnh khó khăn lớn hơn 虽然." },
{ "q": "Câu nào SAI?", "o": [ "尽管大家都反对，他还是决定试一试。", "尽管大家都反对，但是他决定试一试。", "尽管下雨，他还是来了。", "尽管路很远，我们还是走到了山顶。" ], "a": 1, "why": "尽管 đi với 还是, không đi với 但是." },
{ "q": "“Dù mọi người phản đối, anh ấy vẫn thử” — “vẫn” là:", "o": [ "还是", "但是", "否则", "所以" ], "a": 0, "why": "还是 = vẫn, đi cặp với 尽管." } ] },
{ "id": "s6-nanmian", "stage": 6, "title": "难免 — khó tránh khỏi", "hook": "“刚开始工作，难免会出错” — mới bắt đầu làm việc, khó tránh khỏi sai sót: chuyện bình thường.", "examples": [ "刚开始工作，难免会出错。(Gāng kāishǐ gōngzuò, nánmiǎn huì chū cuò.) — Mới bắt đầu làm việc, khó tránh khỏi sai sót.", "学习一门新语言，难免会遇到困难。(Xuéxí yì mén xīn yǔyán, nánmiǎn huì yùdào kùnnan.) — Học một ngôn ngữ mới, khó tránh khỏi gặp khó khăn.", "人多的时候，难免会有不同的意见。(Rén duō de shíhou, nánmiǎn huì yǒu bù tóng de yìjiàn.) — Khi đông người, khó tránh khỏi có ý kiến khác nhau.", "搬到一个新城市，难免会想家。(Bān dào yí ge xīn chéngshì, nánmiǎn huì xiǎng jiā.) — Chuyển đến một thành phố mới, khó tránh khỏi nhớ nhà." ], "speak": "刚开始工作，难免会出错。学习一门新语言，难免会遇到困难。人多的时候，难免会有不同的意见。搬到一个新城市，难免会想家。", "rule": "难免 đứng trước động từ, nói một kết quả khó tránh trong hoàn cảnh đó. Dùng để an ủi hoặc giải thích chuyện bình thường.", "tip": "Hãy nhớ: 难免 là “khó tránh khỏi” — chuyện ai cũng gặp thì mới dùng 难免.", "note": ZH_S6_NOTE, "quiz": [
{ "q": "Câu nào dùng 难免 đúng?", "o": [ "刚开始工作，难免会出错。", "刚开始工作，但是会出错。", "刚开始工作，所以会出错。", "刚开始工作，可是会出错。" ], "a": 0, "why": "难免 = khó tránh khỏi, đứng trước 会出错." },
{ "q": "Điền vào chỗ trống: 学习一门新语言，___ 会遇到困难。", "o": [ "难免", "但是", "否则", "所以" ], "a": 0, "why": "Gặp khó khăn khi học ngôn ngữ mới là chuyện khó tránh, dùng 难免." },
{ "q": "“Chuyển đến thành phố mới, khó tránh khỏi nhớ nhà” viết thế nào?", "o": [ "搬到一个新城市，难免会想家。", "搬到一个新城市，但是会想家。", "搬到一个新城市，所以会想家。", "搬到一个新城市，可是会想家。" ], "a": 0, "why": "“Khó tránh khỏi” là 难免." },
{ "q": "难免 có nghĩa là gì?", "o": [ "Khó tránh khỏi", "Mặc dù", "Trừ phi", "Chắc chắn không" ], "a": 0, "why": "难免 = khó tránh khỏi, chuyện bình thường ai cũng gặp." },
{ "q": "Câu nào SAI?", "o": [ "人多的时候，难免会有不同的意见。", "人多的时候，但是会有不同的意见。", "刚开始工作，难免会出错。", "搬到一个新城市，难免会想家。" ], "a": 1, "why": "难免 không thay bằng 但是 ở đây." },
{ "q": "难免 thường dùng để làm gì?", "o": [ "An ủi hoặc giải thích chuyện bình thường", "Ra lệnh", "Hỏi đường", "Chê trách" ], "a": 0, "why": "难免 nói chuyện khó tránh, mang ý an ủi hoặc giải thích." } ] },
{ "id": "s6-nanguai", "stage": 6, "title": "难怪 — thảo nào", "hook": "“难怪他今天这么高兴，原来考试通过了” — thảo nào hôm nay anh ấy vui thế, hóa ra thi đỗ rồi.", "examples": [ "难怪他今天这么高兴，原来考试通过了。(Nánguài tā jīntiān zhème gāoxìng, yuánlái kǎoshì tōngguò le.) — Thảo nào hôm nay anh ấy vui thế, hóa ra thi đỗ rồi.", "难怪这家店这么受欢迎，原来东西又便宜又好吃。(Nánguài zhè jiā diàn zhème shòu huānyíng, yuánlái dōngxi yòu piányi yòu hǎochī.) — Thảo nào quán này đông khách thế, hóa ra đồ vừa rẻ vừa ngon.", "难怪你感冒了，昨天穿得那么少。(Nánguài nǐ gǎnmào le, zuótiān chuān de nàme shǎo.) — Thảo nào bạn bị cảm, hôm qua mặc ít thế.", "难怪大家都喜欢她，她总是乐于帮助别人。(Nánguài dàjiā dōu xǐhuan tā, tā zǒngshì lèyú bāngzhù biéren.) — Thảo nào mọi người đều thích cô ấy, cô ấy luôn sẵn lòng giúp người khác." ], "speak": "难怪他今天这么高兴，原来考试通过了。难怪这家店这么受欢迎，原来东西又便宜又好吃。难怪你感冒了，昨天穿得那么少。难怪大家都喜欢她，她总是乐于帮助别人。", "rule": "难怪 mở đầu câu cảm thán, vế sau thường có 原来 nêu lý do vừa phát hiện. Dùng khi vừa hiểu ra nguyên nhân.", "tip": "Hãy nhớ: 难怪 là “thảo nào” — nói khi vừa phát hiện lý do của một chuyện lạ.", "note": ZH_S6_NOTE, "quiz": [
{ "q": "Câu nào dùng 难怪 đúng?", "o": [ "难怪他今天这么高兴，原来考试通过了。", "难怪他今天这么高兴，但是考试通过了。", "难怪他今天这么高兴，所以考试通过了。", "难怪他今天这么高兴，可是考试通过了。" ], "a": 0, "why": "难怪 đi với 原来: thảo nào vui thế, hóa ra thi đỗ." },
{ "q": "Điền vào chỗ trống: 难怪这家店这么受欢迎，___ 东西又便宜又好吃。", "o": [ "原来", "但是", "否则", "所以" ], "a": 0, "why": "Vế sau nêu lý do vừa phát hiện, dùng 原来." },
{ "q": "“Thảo nào bạn bị cảm, hôm qua mặc ít thế” viết thế nào?", "o": [ "难怪你感冒了，昨天穿得那么少。", "难怪你感冒了，但是昨天穿得那么少。", "如果感冒了，昨天穿得那么少。", "虽然感冒了，昨天穿得那么少。" ], "a": 0, "why": "“Thảo nào” là 难怪." },
{ "q": "难怪 có nghĩa là gì?", "o": [ "Thảo nào", "Mặc dù", "Trừ phi", "Chắc chắn" ], "a": 0, "why": "难怪 = thảo nào, dùng khi vừa hiểu ra nguyên nhân." },
{ "q": "Câu nào SAI?", "o": [ "难怪大家都喜欢她，她总是乐于帮助别人。", "难怪大家都喜欢她，但是她总是乐于帮助别人。", "难怪你感冒了，昨天穿得那么少。", "难怪他今天这么高兴，原来考试通过了。" ], "a": 1, "why": "难怪 đi với 原来 hoặc trực tiếp nêu lý do, không đi với 但是." },
{ "q": "难怪 thường đi với từ nào ở vế sau?", "o": [ "原来", "但是", "否则", "如果" ], "a": 0, "why": "原来 = hóa ra, nêu lý do vừa phát hiện." } ] },
{ "id": "s6-xingkui", "stage": 6, "title": "幸亏 — may mà", "hook": "“幸亏你提醒我，不然我就迟到了” — may mà bạn nhắc tôi, không thì tôi đã muộn rồi.", "examples": [ "幸亏你提醒我，不然我就迟到了。(Xìngkuī nǐ tíxǐng wǒ, bùrán wǒ jiù chídào le.) — May mà bạn nhắc tôi, không thì tôi đã muộn rồi.", "幸亏今天带了伞，不然就淋雨了。(Xìngkuī jīntiān dài le sǎn, bùrán jiù lín yǔ le.) — May mà hôm nay mang ô, không thì đã ướt mưa rồi.", "幸亏朋友借给我钱，我才能买到这本书。(Xìngkuī péngyou jiè gěi wǒ qián, wǒ cái néng mǎi dào zhè běn shū.) — May mà bạn cho tôi mượn tiền, tôi mới mua được cuốn sách này.", "幸亏发现得早，问题很快就解决了。(Xìngkuī fāxiàn de zǎo, wèntí hěn kuài jiù jiějué le.) — May mà phát hiện sớm, vấn đề nhanh chóng được giải quyết." ], "speak": "幸亏你提醒我，不然我就迟到了。幸亏今天带了伞，不然就淋雨了。幸亏朋友借给我钱，我才能买到这本书。幸亏发现得早，问题很快就解决了。", "rule": "幸亏 nêu điều may mắn ở vế đầu, vế sau thường có 不然 (không thì…) nói hậu quả đã tránh được, hoặc 才 nói kết quả nhờ đó.", "tip": "Hãy nhớ: 幸亏 là “may mà” — nói khi suýt xảy ra chuyện xấu nhưng đã tránh được.", "note": ZH_S6_NOTE, "quiz": [
{ "q": "Câu nào dùng 幸亏 đúng?", "o": [ "幸亏你提醒我，不然我就迟到了。", "幸亏你提醒我，但是我就迟到了。", "幸亏你提醒我，所以我就迟到了。", "幸亏你提醒我，可是我就迟到了。" ], "a": 0, "why": "幸亏 đi với 不然: may mà nhắc, không thì đã muộn." },
{ "q": "Điền vào chỗ trống: 幸亏今天带了伞，___ 就淋雨了。", "o": [ "不然", "但是", "否则", "所以" ], "a": 0, "why": "Vế sau là hậu quả đã tránh được, dùng 不然." },
{ "q": "“May mà bạn cho tôi mượn tiền, tôi mới mua được cuốn sách” viết thế nào?", "o": [ "幸亏朋友借给我钱，我才能买到这本书。", "幸亏朋友借给我钱，但是我买到这本书。", "如果朋友借给我钱，我买到这本书。", "虽然朋友借给我钱，我买到这本书。" ], "a": 0, "why": "“May mà… mới…” là 幸亏…才." },
{ "q": "幸亏 có nghĩa là gì?", "o": [ "May mà", "Mặc dù", "Trừ phi", "Chắc chắn" ], "a": 0, "why": "幸亏 = may mà, nói chuyện xấu suýt xảy ra nhưng đã tránh được." },
{ "q": "Câu nào SAI?", "o": [ "幸亏发现得早，问题很快就解决了。", "幸亏发现得早，但是问题解决了。", "幸亏你提醒我，不然我就迟到了。", "幸亏今天带了伞，不然就淋雨了。" ], "a": 1, "why": "幸亏 không đi với 但是 ở đây." },
{ "q": "幸亏 thường đi với từ nào ở vế sau?", "o": [ "不然", "但是", "如果", "虽然" ], "a": 0, "why": "不然 = không thì, nói hậu quả đã tránh được." } ] },
{ "id": "s6-bufang", "stage": 6, "title": "不妨 — ngại gì mà không…", "hook": "“你不妨试一试，说不定就成功了” — bạn ngại gì mà không thử một lần, biết đâu lại thành công.", "examples": [ "你不妨试一试，说不定就成功了。(Nǐ bùfáng shì yí shì, shuō bu dìng jiù chénggōng le.) — Bạn ngại gì mà không thử một lần, biết đâu lại thành công.", "有问题不妨直接问老师，老师会很高兴的。(Yǒu wèntí bùfáng zhíjiē wèn lǎoshī, lǎoshī huì hěn gāoxìng de.) — Có vấn đề ngại gì mà không hỏi thẳng thầy, thầy sẽ rất vui.", "周末不妨去公园走走，放松一下。(Zhōumò bùfáng qù gōngyuán zǒu zou, fàngsōng yí xià.) — Cuối tuần ngại gì mà không đi công viên dạo một chút, thư giãn một chút.", "你不妨先听听别人的意见，再做决定。(Nǐ bùfáng xiān tīng ting biéren de yìjiàn, zài zuò juédìng.) — Bạn ngại gì mà không nghe ý kiến người khác trước, rồi mới quyết định." ], "speak": "你不妨试一试，说不定就成功了。有问题不妨直接问老师，老师会很高兴的。周末不妨去公园走走，放松一下。你不妨先听听别人的意见，再做决定。", "rule": "不妨 đứng trước động từ, đưa ra gợi ý nhẹ nhàng: làm việc đó cũng không sao, có khi lại tốt. Dùng để khuyên mà không ép.", "tip": "Hãy nhớ: 不妨 là “ngại gì mà không…” — gợi ý nhẹ nhàng, không ép buộc.", "note": ZH_S6_NOTE, "quiz": [
{ "q": "Câu nào dùng 不妨 đúng?", "o": [ "你不妨试一试，说不定就成功了。", "你但是试一试，说不定就成功了。", "你所以试一试，说不定就成功了。", "你可是试一试，说不定就成功了。" ], "a": 0, "why": "不妨 = ngại gì mà không, đứng trước 试一试." },
{ "q": "Điền vào chỗ trống: 有问题 ___ 直接问老师，老师会很高兴的。", "o": [ "不妨", "但是", "否则", "所以" ], "a": 0, "why": "Gợi ý nhẹ nhàng: ngại gì mà không hỏi thẳng thầy." },
{ "q": "“Cuối tuần ngại gì mà không đi công viên dạo một chút” viết thế nào?", "o": [ "周末不妨去公园走走，放松一下。", "周末但是去公园走走，放松一下。", "周末所以去公园走走，放松一下。", "周末可是去公园走走，放松一下。" ], "a": 0, "why": "“Ngại gì mà không…” là 不妨." },
{ "q": "不妨 có nghĩa là gì?", "o": [ "Ngại gì mà không…", "Mặc dù", "Trừ phi", "Không được" ], "a": 0, "why": "不妨 = ngại gì mà không, gợi ý nhẹ nhàng." },
{ "q": "Câu nào SAI?", "o": [ "你不妨先听听别人的意见，再做决定。", "你但是先听听别人的意见，再做决定。", "周末不妨去公园走走，放松一下。", "你不妨试一试，说不定就成功了。" ], "a": 1, "why": "不妨 không thay bằng 但是." },
{ "q": "不妨 dùng để làm gì?", "o": [ "Gợi ý nhẹ nhàng, không ép buộc", "Ra lệnh", "Cấm đoán", "Hỏi đường" ], "a": 0, "why": "不妨 đưa ra gợi ý nhẹ nhàng." } ] },
{ "id": "s6-guran", "stage": 6, "title": "固然…但是 — đúng là… nhưng…", "hook": "“这个办法固然简单，但是不太实用” — cách này đúng là đơn giản, nhưng không thực tế lắm: thừa nhận một mặt, rồi nói mặt kia.", "examples": [ "这个办法固然简单，但是不太实用。(Zhège bànfǎ gùrán jiǎndān, dànshì bù tài shíyòng.) — Cách này đúng là đơn giản, nhưng không thực tế lắm.", "他固然很努力，但是方法不对，所以进步很慢。(Tā gùrán hěn nǔlì, dànshì fāngfǎ bù duì, suǒyǐ jìnbù hěn màn.) — Anh ấy đúng là rất chăm chỉ, nhưng phương pháp sai nên tiến bộ rất chậm.", "网上学习固然方便，但是需要很强的自律。(Wǎngshang xuéxí gùrán fāngbiàn, dànshì xūyào hěn qiáng de zìlǜ.) — Học online đúng là tiện, nhưng cần tính tự giác rất mạnh.", "这本书固然很有名，但是对初学者来说太难了。(Zhè běn shū gùrán hěn yǒumíng, dànshì duì chūxuézhě lái shuō tài nán le.) — Cuốn sách này đúng là rất nổi tiếng, nhưng với người mới học thì quá khó." ], "speak": "这个办法固然简单，但是不太实用。他固然很努力，但是方法不对，所以进步很慢。网上学习固然方便，但是需要很强的自律。这本书固然很有名，但是对初学者来说太难了。", "rule": "固然 thừa nhận một ưu điểm ở vế đầu, 但是 nêu hạn chế ở vế sau. Dùng khi đánh giá hai mặt của một việc.", "tip": "Hãy nhớ: 固然 là “đúng là…”, 但是 là “nhưng…” — thừa nhận trước, rồi nói mặt hạn chế.", "note": ZH_S6_NOTE, "quiz": [
{ "q": "Câu nào dùng 固然…但是 đúng?", "o": [ "这个办法固然简单，但是不太实用。", "这个办法固然简单，所以不太实用。", "这个办法固然简单，否则不太实用。", "这个办法固然简单，可是简单。" ], "a": 0, "why": "固然 đi cặp với 但是: đúng là đơn giản, nhưng không thực tế." },
{ "q": "Điền vào chỗ trống: 网上学习固然方便，___ 需要很强的自律。", "o": [ "但是", "所以", "否则", "如果" ], "a": 0, "why": "Vế sau nêu hạn chế, dùng 但是." },
{ "q": "“Anh ấy đúng là chăm chỉ, nhưng phương pháp sai nên tiến bộ chậm” viết thế nào?", "o": [ "他固然很努力，但是方法不对，所以进步很慢。", "他固然很努力，所以方法不对，进步很慢。", "他虽然很努力，但是方法不对，进步很慢。", "他如果很努力，但是方法不对，进步很慢。" ], "a": 0, "why": "“Đúng là… nhưng…” là 固然…但是." },
{ "q": "固然 có nghĩa là gì?", "o": [ "Đúng là… (thừa nhận)", "Mặc dù", "Trừ phi", "Chắc chắn không" ], "a": 0, "why": "固然 = đúng là, thừa nhận một mặt trước khi nói mặt kia." },
{ "q": "Câu nào SAI?", "o": [ "这本书固然很有名，但是对初学者来说太难了。", "这本书固然很有名，所以对初学者来说太难了。", "网上学习固然方便，但是需要很强的自律。", "这个办法固然简单，但是不太实用。" ], "a": 1, "why": "固然 đi với 但是, không đi với 所以 ở đây." },
{ "q": "固然 dùng khi nào?", "o": [ "Đánh giá hai mặt của một việc", "Ra lệnh", "Hỏi đường", "Kể chuyện" ], "a": 0, "why": "固然 thừa nhận ưu điểm rồi nêu hạn chế." } ] }
);
ZH_READING.push(
{ "id": "s6-reading-wenhoa", "stage": 6, "title": "Văn hóa đọc đang thay đổi", "topic": "Văn hóa", "text": "以前，人们读书主要是看纸书。现在，很多人用手机和平板看书。有人说，电子书很方便，一个小小的机器里可以装几百本书，出门不用带重重的书包。但是，也有人担心：看电子书的时候，很容易被消息打断，看了半天也记不住什么。专家说，重要的不是用什么看书，而是不是真的在读。一天读十分钟，坚持一年，也能读完很多书。还有人说，纸书有一种特别的感觉，翻页的声音、书的味道，都是电子书没有的。不管用什么方式，读书的习惯本身才是最宝贵的。", "pinyin": "Yǐqián, rénmen dú shū zhǔyào shì kàn zhǐ shū. Xiànzài, hěn duō rén yòng shǒujī hé píngbǎn kàn shū. Yǒu rén shuō, diànzǐ shū hěn fāngbiàn, yí ge xiǎo xiǎo de jīqì lǐ kěyǐ zhuāng jǐ bǎi běn shū, chū mén bù yòng dài zhòng zhòng de shūbāo. Dànshì, yě yǒu rén dānxīn: kàn diànzǐ shū de shíhou, hěn róngyì bèi xiāoxi dǎduàn, kàn le bàn tiān yě jì bu zhù shénme. Zhuānjiā shuō, zhòngyào de bù shì yòng shénme kàn shū, ér shì shì bu shì zhēn de zài dú. Yì tiān dú shí fēnzhōng, jiānchí yì nián, yě néng dú wán hěn duō shū. Hái yǒu rén shuō, zhǐ shū yǒu yì zhǒng tèbié de gǎnjué, fān yè de shēngyīn, shū de wèidao, dōu shì diànzǐ shū méiyǒu de. Bùguǎn yòng shénme fāngshì, dú shū de xíguàn běnshēn cái shì zuì bǎoguì de.", "vi": "Trước đây mọi người đọc chủ yếu bằng sách giấy. Nay nhiều người đọc bằng điện thoại và máy tính bảng. Có người nói sách điện tử rất tiện: một máy nhỏ chứa được vài trăm cuốn, ra ngoài không cần mang cặp nặng. Nhưng cũng có người lo: đọc sách điện tử dễ bị tin nhắn làm gián đoạn, đọc nửa ngày cũng chẳng nhớ gì. Chuyên gia nói: quan trọng không phải đọc bằng gì mà là có thực sự đọc hay không. Mỗi ngày đọc 10 phút, kiên trì một năm cũng đọc xong nhiều sách. Lại có người nói sách giấy có cảm giác đặc biệt: tiếng lật trang, mùi sách — những thứ sách điện tử không có. Dù bằng cách nào, bản thân thói quen đọc mới là quý giá nhất.", "note": ZH_S6_NOTE, "questions": [
{ "q": "以前，人们读书主要看什么？", "o": [ "纸书", "电子书", "报纸", "杂志" ], "a": 0, "why": "Bài viết: 以前，人们读书主要是看纸书 — trước đây chủ yếu đọc sách giấy." },
{ "q": "电子书有什么好处？", "o": [ "一个机器里可以装几百本书", "不用花钱", "不用学习", "可以睡觉" ], "a": 0, "why": "Bài viết: 一个小小的机器里可以装几百本书." },
{ "q": "有人担心看电子书会怎么样？", "o": [ "很容易被消息打断，记不住什么", "眼睛会变大", "机器会坏", "书会不见" ], "a": 0, "why": "Bài viết: 很容易被消息打断，看了半天也记不住什么." },
{ "q": "专家说最重要的是什么？", "o": [ "是不是真的在读", "用什么看书", "读多快的书", "读多贵的书" ], "a": 0, "why": "Bài viết: 重要的不是用什么看书，而是不是真的在读." },
{ "q": "作者最后说最宝贵的是什么？", "o": [ "读书的习惯本身", "纸书", "电子书", "图书馆" ], "a": 0, "why": "Bài viết: 读书的习惯本身才是最宝贵的." } ] },
{ "id": "s6-reading-khihau", "stage": 6, "title": "Khí hậu và cuộc sống của chúng ta", "topic": "Môi trường", "text": "最近几年，天气变得越来越奇怪。有的地方夏天特别热，有的地方冬天不像冬天。科学家说，这跟人类活动有关系：工厂排出的废气、汽车越来越多，都让地球变暖。地球变暖以后，海水会上升，一些地方可能会被水淹。很多人觉得，气候变化离自己很远，其实它就在我们身边：夏天更热，电费更高，农作物也更难种。好消息是，每个人都能做一点事：少开车，多坐公共交通，节约用电，少用塑料。虽然一个人的力量很小，但是大家一起做，改变就会很大。保护环境不是一个人的事，是所有人的事。", "pinyin": "Zuìjìn jǐ nián, tiānqì biàn de yuè lái yuè qíguài. Yǒu de dìfang xiàtiān tèbié rè, yǒu de dìfang dōngtiān bù xiàng dōngtiān. Kēxuéjiā shuō, zhè gēn rénlèi huódòng yǒu guānxi: gōngchǎng pái chū de fèiqì, qìchē yuè lái yuè duō, dōu ràng dìqiú biàn nuǎn. Dìqiú biàn nuǎn yǐhòu, hǎishuǐ huì shàngshēng, yì xiē dìfang kěnéng huì bèi shuǐ yān. Hěn duō rén juéde, qìhòu biànhuà lí zìjǐ hěn yuǎn, qíshí tā jiù zài wǒmen shēnbiān: xiàtiān gèng rè, diànfèi gèng gāo, nóngzuòwù yě gèng nán zhòng. Hǎo xiāoxi shì, měi ge rén dōu néng zuò yì diǎn shì: shǎo kāi chē, duō zuò gōnggòng jiāotōng, jiéyuē yòng diàn, shǎo yòng sùliào. Suīrán yí ge rén de lìliang hěn xiǎo, dànshì dàjiā yì qǐ zuò, gǎibiàn jiù huì hěn dà. Bǎohù huánjìng bù shì yí ge rén de shì, shì suǒyǒu rén de shì.", "vi": "Mấy năm gần đây, thời tiết ngày càng kỳ lạ: có nơi mùa hè đặc biệt nóng, có nơi mùa đông không giống mùa đông. Nhà khoa học nói điều này liên quan đến hoạt động con người: khí thải nhà máy, ô tô ngày càng nhiều đều làm Trái Đất ấm lên. Trái Đất ấm lên thì nước biển dâng, một số nơi có thể bị ngập. Nhiều người thấy biến đổi khí hậu xa mình, thật ra nó ở ngay bên cạnh: hè nóng hơn, tiền điện cao hơn, cây trồng khó trồng hơn. Tin tốt là mỗi người đều có thể làm chút việc: ít lái xe, đi phương tiện công cộng nhiều hơn, tiết kiệm điện, ít dùng nhựa. Dù sức một người rất nhỏ, nhưng mọi người cùng làm thì thay đổi sẽ rất lớn.", "note": ZH_S6_NOTE, "questions": [
{ "q": "最近几年，天气变得怎么样？", "o": [ "越来越奇怪", "越来越正常", "越来越冷", "没有变化" ], "a": 0, "why": "Bài viết: 天气变得越来越奇怪." },
{ "q": "科学家说天气变化跟什么有关系？", "o": [ "人类活动", "月亮", "星星", "海洋" ], "a": 0, "why": "Bài viết: 这跟人类活动有关系." },
{ "q": "地球变暖以后会怎么样？", "o": [ "海水会上升，一些地方可能被水淹", "地球会变小", "天气会变冷", "没有变化" ], "a": 0, "why": "Bài viết: 海水会上升，一些地方可能会被水淹." },
{ "q": "气候变化在我们身边有什么表现？", "o": [ "夏天更热，电费更高，农作物更难种", "冬天更冷", "下雨更多", "风更大" ], "a": 0, "why": "Bài viết: 夏天更热，电费更高，农作物也更难种." },
{ "q": "每个人能做什么？", "o": [ "少开车，多坐公共交通，节约用电，少用塑料", "什么都不做", "只开车", "只用塑料" ], "a": 0, "why": "Bài viết: 少开车，多坐公共交通，节约用电，少用塑料." } ] },
{ "id": "s6-reading-giaoduc", "stage": 6, "title": "Học tập suốt đời", "topic": "Giáo dục", "text": "很多人以为，毕业以后就不用学习了。其实，学习是一辈子的事。小陈大学毕业以后，在一家公司工作。刚开始，他觉得自己什么都会。但是，工作了两年以后，他发现新技术越来越多，自己知道的越来越少。于是，他每天晚上花一个小时学习新的知识，有时候看书，有时候上网课。三年以后，他成了公司的技术骨干，还带了几个新员工。他说，学校教的是怎么学习，真正的工作中，每天都要学新的东西。不怕学得慢，就怕不学。只要坚持学习，人就不会被时代落在后面。", "pinyin": "Hěn duō rén yǐwéi, bìyè yǐhòu jiù bù yòng xuéxí le. Qíshí, xuéxí shì yí bèizi de shì. Xiǎo Chén dàxué bìyè yǐhòu, zài yì jiā gōngsī gōngzuò. Gāng kāishǐ, tā juéde zìjǐ shénme dōu huì. Dànshì, gōngzuò le liǎng nián yǐhòu, tā fāxiàn xīn jìshù yuè lái yuè duō, zìjǐ zhīdào de yuè lái yuè shǎo. Yúshì, tā měitiān wǎnshang huā yí ge xiǎoshí xuéxí xīn de zhīshi, yǒu shíhou kàn shū, yǒu shíhou shàng wǎng kè. Sān nián yǐhòu, tā chéng le gōngsī de jìshù gǔgàn, hái dài le jǐ ge xīn yuángōng. Tā shuō, xuéxiào jiāo de shì zěnme xuéxí, zhēnzhèng de gōngzuò zhōng, měitiān dōu yào xué xīn de dōngxi. Bù pà xué de màn, jiù pà bù xué. Zhǐ yào jiānchí xuéxí, rén jiù bù huì bèi shídài luò zài hòumian.", "vi": "Nhiều người tưởng tốt nghiệp rồi thì không cần học nữa. Thật ra học tập là việc cả đời. Tiểu Trần tốt nghiệp đại học rồi làm ở một công ty. Ban đầu anh thấy mình biết hết. Nhưng làm việc hai năm, anh phát hiện công nghệ mới ngày càng nhiều, mình biết ngày càng ít. Thế là mỗi tối anh dành một tiếng học kiến thức mới, có lúc đọc sách, có lúc học online. Ba năm sau, anh thành trụ cột kỹ thuật của công ty, còn dẫn dắt vài nhân viên mới. Anh nói: trường dạy cách học, còn trong công việc thật, ngày nào cũng phải học thứ mới. Không sợ học chậm, chỉ sợ không học.", "note": ZH_S6_NOTE, "questions": [
{ "q": "很多人以为毕业以后怎么样？", "o": [ "就不用学习了", "还要学习", "可以休息", "可以旅游" ], "a": 0, "why": "Bài viết: 毕业以后就不用学习了 — nhiều người tưởng vậy." },
{ "q": "工作了两年以后，小陈发现了什么？", "o": [ "新技术越来越多，自己知道的越来越少", "自己什么都会", "工作很轻松", "不需要学习" ], "a": 0, "why": "Bài viết: 新技术越来越多，自己知道的越来越少." },
{ "q": "小陈每天晚上花多长时间学习？", "o": [ "一个小时", "半个小时", "两个小时", "十分钟" ], "a": 0, "why": "Bài viết: 每天晚上花一个小时学习新的知识." },
{ "q": "三年以后，小陈怎么样了？", "o": [ "成了公司的技术骨干", "离开了公司", "还是新员工", "不想工作了" ], "a": 0, "why": "Bài viết: 成了公司的技术骨干，还带了几个新员工." },
{ "q": "小陈说学习最怕什么？", "o": [ "怕不学", "怕学得慢", "怕考试", "怕老师" ], "a": 0, "why": "Bài viết: 不怕学得慢，就怕不学." } ] },
{ "id": "s6-reading-suckhoe", "stage": 6, "title": "Sức khỏe tinh thần cũng quan trọng", "topic": "Sức khỏe", "text": "说到健康，很多人只想到身体。其实，心里的健康也很重要。小刘是一家公司的员工，工作很忙，常常加班。有一段时间，他每天都觉得很累，晚上睡不着，白天没有精神。开始的时候，他以为只是身体累，休息一下就好了。但是，休息了一个星期，还是没有好转。后来，他去看了医生，医生说他压力太大了，需要学会放松。现在，他每天早上跑步半个小时，晚上不看手机，早点睡觉。几个月以后，他觉得好多了。他说，身体累了要休息，心里累了也要休息。跟朋友聊聊天、出去走走，都是很好的办法。", "pinyin": "Shuō dào jiànkāng, hěn duō rén zhǐ xiǎngdào shēntǐ. Qíshí, xīnlǐ de jiànkāng yě hěn zhòngyào. Xiǎo Liú shì yì jiā gōngsī de yuángōng, gōngzuò hěn máng, chángcháng jiā bān. Yǒu yí duàn shíjiān, tā měitiān dōu juéde hěn lèi, wǎnshang shuì bù zháo, báitiān méiyǒu jīngshen. Kāishǐ de shíhou, tā yǐwéi zhǐ shì shēntǐ lèi, xiūxi yí xià jiù hǎo le. Dànshì, xiūxi le yí ge xīngqī, háishi méiyǒu hǎozhuǎn. Hòulái, tā qù kàn le yīshēng, yīshēng shuō tā yālì tài dà le, xūyào xuéhuì fàngsōng. Xiànzài, tā měitiān zǎoshang pǎo bù bàn ge xiǎoshí, wǎnshang bù kàn shǒujī, zǎo diǎn shuì jiào. Jǐ ge yuè yǐhòu, tā juéde hǎo duō le. Tā shuō, shēntǐ lèi le yào xiūxi, xīnlǐ lèi le yě yào xiūxi. Gēn péngyou liáo liáo tiān, chū qù zǒu zou, dōu shì hěn hǎo de bànfǎ.", "vi": "Nói đến sức khỏe, nhiều người chỉ nghĩ đến cơ thể. Thật ra sức khỏe tinh thần cũng rất quan trọng. Tiểu Lưu là nhân viên một công ty, việc bận, hay tăng ca. Có một thời gian, ngày nào anh cũng thấy mệt, tối không ngủ được, ban ngày không có tinh thần. Ban đầu anh tưởng chỉ là cơ thể mệt, nghỉ một chút là khỏi. Nhưng nghỉ một tuần vẫn không khá hơn. Sau đó anh đi khám, bác sĩ nói áp lực quá lớn, cần học cách thư giãn. Giờ mỗi sáng anh chạy bộ nửa tiếng, tối không xem điện thoại, ngủ sớm. Vài tháng sau anh thấy khá hơn nhiều. Anh nói: cơ thể mệt cần nghỉ, trong lòng mệt cũng cần nghỉ.", "note": ZH_S6_NOTE, "questions": [
{ "q": "说到健康，很多人只想到什么？", "o": [ "身体", "心里", "工作", "金钱" ], "a": 0, "why": "Bài viết: 很多人只想到身体." },
{ "q": "小刘有一段时间觉得怎么样？", "o": [ "每天都很累，晚上睡不着，白天没有精神", "很开心", "很有精神", "不想上班" ], "a": 0, "why": "Bài viết: 每天都觉得很累，晚上睡不着，白天没有精神." },
{ "q": "医生说小刘怎么了？", "o": [ "压力太大了，需要学会放松", "身体很好", "需要吃药", "需要换工作" ], "a": 0, "why": "Bài viết: 医生说他压力太大了，需要学会放松." },
{ "q": "现在，小刘每天早上做什么？", "o": [ "跑步半个小时", "跑步一个小时", "不跑步", "去游泳" ], "a": 0, "why": "Bài viết: 每天早上跑步半个小时." },
{ "q": "小刘说心里累了要怎么样？", "o": [ "也要休息", "继续工作", "吃药", "不休息" ], "a": 0, "why": "Bài viết: 身体累了要休息，心里累了也要休息." } ] }
);
ZH_LISTENING.push(
{ "id": "s6-listen-tuvansuckhoe", "stage": 6, "title": "Tư vấn sức khỏe", "topic": "Sức khỏe", "lines": [
{ "sp": "A", "han": "医生，我最近总是睡不好，白天没有精神。", "py": "Yīshēng, wǒ zuìjìn zǒngshì shuì bù hǎo, báitiān méiyǒu jīngshen.", "vi": "Thưa bác sĩ, dạo này tôi luôn ngủ không ngon, ban ngày không có tinh thần." },
{ "sp": "B", "han": "你平时几点睡觉？睡前看手机吗？", "py": "Nǐ píngshí jǐ diǎn shuì jiào? Shuì qián kàn shǒujī ma?", "vi": "Bình thường bạn mấy giờ ngủ? Trước khi ngủ có xem điện thoại không?" },
{ "sp": "A", "han": "我一般十二点以后才睡，睡前总要看一会儿手机。", "py": "Wǒ yìbān shí èr diǎn yǐhòu cái shuì, shuì qián zǒng yào kàn yí huìr shǒujī.", "vi": "Tôi thường sau 12 giờ mới ngủ, trước khi ngủ luôn xem điện thoại một lúc." },
{ "sp": "B", "han": "这就是原因。睡前看手机会影响睡眠，你试试十一点以前睡觉，睡前半个小时不看手机。", "py": "Zhè jiù shì yuányīn. Shuì qián kàn shǒujī huì yǐngxiǎng shuìmián, nǐ shì shi shíyī diǎn yǐqián shuì jiào, shuì qián bàn ge xiǎoshí bù kàn shǒujī.", "vi": "Đó chính là nguyên nhân. Xem điện thoại trước khi ngủ ảnh hưởng giấc ngủ, bạn thử ngủ trước 11 giờ, nửa tiếng trước khi ngủ không xem điện thoại." },
{ "sp": "A", "han": "好的，我试试。还需要吃药吗？", "py": "Hǎo de, wǒ shì shi. Hái xūyào chī yào ma?", "vi": "Vâng, tôi thử xem. Có cần uống thuốc không?" },
{ "sp": "B", "han": "先不用吃药，改变习惯一个星期，看看有没有好转。", "py": "Xiān bù yòng chī yào, gǎibiàn xíguàn yí ge xīngqī, kàn kan yǒu méiyǒu hǎozhuǎn.", "vi": "Trước mắt chưa cần uống thuốc, thay đổi thói quen một tuần, xem có khá hơn không." } ], "note": ZH_S6_NOTE, "questions": [
{ "q": "A最近怎么了？", "o": [ "总是睡不好，白天没有精神", "总是睡太多", "不想睡觉", "睡得很好" ], "a": 0, "why": "A nói: 我最近总是睡不好，白天没有精神." },
{ "q": "A平时几点睡觉？", "o": [ "十二点以后", "十点", "十一点", "九点" ], "a": 0, "why": "A nói: 我一般十二点以后才睡." },
{ "q": "医生说原因是什么？", "o": [ "睡前看手机会影响睡眠", "工作太少", "吃得太多", "运动太少" ], "a": 0, "why": "B nói: 睡前看手机会影响睡眠." },
{ "q": "医生建议A怎么做？", "o": [ "十一点以前睡觉，睡前半个小时不看手机", "吃药", "换工作", "多看手机" ], "a": 0, "why": "B nói: 十一点以前睡觉，睡前半个小时不看手机." } ] },
{ "id": "s6-listen-dangkythi", "stage": 6, "title": "Đăng ký thi", "topic": "Học tập", "lines": [
{ "sp": "A", "han": "你好，我想报名参加下个月的中文考试。", "py": "Nǐ hǎo, wǒ xiǎng bàomíng cānjiā xià ge yuè de Zhōngwén kǎoshì.", "vi": "Chào bạn, tôi muốn đăng ký thi tiếng Trung tháng sau." },
{ "sp": "B", "han": "好的，考试分笔试和口试，笔试在星期六上午，口试在星期天下午。", "py": "Hǎo de, kǎoshì fēn bǐshì hé kǒushì, bǐshì zài xīngqī liù shàngwǔ, kǒushì zài xīngqī tiān xiàwǔ.", "vi": "Vâng, kỳ thi gồm thi viết và thi nói, thi viết sáng thứ bảy, thi nói chiều chủ nhật." },
{ "sp": "A", "han": "报名费是多少？", "py": "Bàomíng fèi shì duōshao?", "vi": "Lệ phí đăng ký là bao nhiêu?" },
{ "sp": "B", "han": "报名费是三百块，报名的时候要带身份证和两张照片。", "py": "Bàomíng fèi shì sān bǎi kuài, bàomíng de shíhou yào dài shēnfènzhèng hé liǎng zhāng zhàopiàn.", "vi": "Lệ phí là 300 tệ, khi đăng ký cần mang chứng minh thư và hai tấm ảnh." },
{ "sp": "A", "han": "考试结果什么时候出来？", "py": "Kǎoshì jiéguǒ shénme shíhou chū lái?", "vi": "Kết quả thi khi nào có?" },
{ "sp": "B", "han": "考试以后一个月，成绩会发到你的邮箱里。", "py": "Kǎoshì yǐhòu yí ge yuè, chéngjì huì fā dào nǐ de yóuxiāng lǐ.", "vi": "Một tháng sau khi thi, điểm sẽ gửi vào email của bạn." } ], "note": ZH_S6_NOTE, "questions": [
{ "q": "考试分哪两部分？", "o": [ "笔试和口试", "听力和阅读", "写作和翻译", "选择和填空" ], "a": 0, "why": "B nói: 考试分笔试和口试." },
{ "q": "笔试在什么时候？", "o": [ "星期六上午", "星期天上午", "星期六下午", "星期天下午" ], "a": 0, "why": "B nói: 笔试在星期六上午." },
{ "q": "报名费是多少？", "o": [ "三百块", "二百块", "四百块", "一百块" ], "a": 0, "why": "B nói: 报名费是三百块." },
{ "q": "报名的时候要带什么？", "o": [ "身份证和两张照片", "学生证和书", "护照和钱", "电脑和手机" ], "a": 0, "why": "B nói: 要带身份证和两张照片." } ] },
{ "id": "s6-listen-thuephong", "stage": 6, "title": "Thuê phòng trọ dài hạn", "topic": "Đời sống", "lines": [
{ "sp": "A", "han": "你好，我想租一个房间，住半年以上。", "py": "Nǐ hǎo, wǒ xiǎng zū yí ge fángjiān, zhù bàn nián yǐshàng.", "vi": "Chào bạn, tôi muốn thuê một phòng, ở trên nửa năm." },
{ "sp": "B", "han": "好的，这里有一个房间，朝南，有窗户，一个月一千五百块。", "py": "Hǎo de, zhè lǐ yǒu yí ge fángjiān, cháo nán, yǒu chuānghu, yí ge yuè yì qiān wǔ bǎi kuài.", "vi": "Vâng, ở đây có một phòng, hướng nam, có cửa sổ, một tháng 1500 tệ." },
{ "sp": "A", "han": "水电费怎么算？包不包在房租里？", "py": "Shuǐ diàn fèi zěnme suàn? Bāo bù bāo zài fángzū lǐ?", "vi": "Tiền nước điện tính thế nào? Có bao gồm trong tiền thuê không?" },
{ "sp": "B", "han": "水电费不包，要另外交，每个月大概两百块。", "py": "Shuǐ diàn fèi bù bāo, yào lìngwài jiāo, měi ge yuè dàgài liǎng bǎi kuài.", "vi": "Tiền nước điện không bao gồm, phải đóng riêng, mỗi tháng khoảng 200 tệ." },
{ "sp": "A", "han": "那押金是多少？", "py": "Nà yājīn shì duōshao?", "vi": "Vậy tiền đặt cọc là bao nhiêu?" },
{ "sp": "B", "han": "押金是一个月的房租，退房的时候退给你。", "py": "Yājīn shì yí ge yuè de fángzū, tuì fáng de shíhou tuì gěi nǐ.", "vi": "Tiền cọc là một tháng tiền thuê, khi trả phòng sẽ trả lại cho bạn." } ], "note": ZH_S6_NOTE, "questions": [
{ "q": "A想租房间住多长时间？", "o": [ "半年以上", "一个月", "一个星期", "一年" ], "a": 0, "why": "A nói: 住半年以上." },
{ "q": "这个房间一个月多少钱？", "o": [ "一千五百块", "一千块", "两千块", "一千二百块" ], "a": 0, "why": "B nói: 一个月一千五百块." },
{ "q": "水电费包不包在房租里？", "o": [ "不包，要另外交", "包", "只包水费", "只包电费" ], "a": 0, "why": "B nói: 水电费不包，要另外交." },
{ "q": "押金是多少？", "o": [ "一个月的房租", "两个月的房租", "半个月的房租", "没有押金" ], "a": 0, "why": "B nói: 押金是一个月的房租." } ] },
{ "id": "s6-listen-gopy", "stage": 6, "title": "Góp ý dịch vụ", "topic": "Đời sống", "lines": [
{ "sp": "A", "han": "你好，我想提一点意见，你们店的服务有点慢。", "py": "Nǐ hǎo, wǒ xiǎng tí yì diǎn yìjiàn, nǐmen diàn de fúwù yǒu diǎn màn.", "vi": "Chào bạn, tôi muốn góp chút ý kiến, dịch vụ của quán bạn hơi chậm." },
{ "sp": "B", "han": "谢谢你的意见，请问你等了多长时间？", "py": "Xièxie nǐ de yìjiàn, qǐngwèn nǐ děng le duō cháng shíjiān?", "vi": "Cảm ơn ý kiến của bạn, xin hỏi bạn đã chờ bao lâu?" },
{ "sp": "A", "han": "我等了差不多四十分钟，菜才上来。", "py": "Wǒ děng le chà bu duō sìshí fēnzhōng, cài cái shàng lái.", "vi": "Tôi chờ gần 40 phút món mới lên." },
{ "sp": "B", "han": "真的很抱歉，今天客人特别多，厨房有点忙不过来。", "py": "Zhēn de hěn bàoqiàn, jīntiān kèrén tèbié duō, chúfáng yǒu diǎn máng bu guò lái.", "vi": "Thật sự xin lỗi, hôm nay khách đặc biệt đông, bếp hơi bận không kịp." },
{ "sp": "A", "han": "我理解，希望你们以后能快一点。", "py": "Wǒ lǐjiě, xīwàng nǐmen yǐhòu néng kuài yì diǎn.", "vi": "Tôi hiểu, hy vọng sau này các bạn nhanh hơn một chút." },
{ "sp": "B", "han": "好的，我们一定改进，谢谢你的理解。", "py": "Hǎo de, wǒmen yí dìng gǎijìn, xièxie nǐ de lǐjiě.", "vi": "Vâng, chúng tôi nhất định cải thiện, cảm ơn sự thông cảm của bạn." } ], "note": ZH_S6_NOTE, "questions": [
{ "q": "A想提什么意见？", "o": [ "店的服务有点慢", "菜不好吃", "价格太贵", "地方太小" ], "a": 0, "why": "A nói: 你们店的服务有点慢." },
{ "q": "A等了多长时间菜才上来？", "o": [ "差不多四十分钟", "十分钟", "二十分钟", "一个小时" ], "a": 0, "why": "A nói: 等了差不多四十分钟，菜才上来." },
{ "q": "B说今天为什么慢？", "o": [ "客人特别多，厨房忙不过来", "没有厨师", "没有菜", "停电了" ], "a": 0, "why": "B nói: 今天客人特别多，厨房有点忙不过来." },
{ "q": "B最后说什么？", "o": [ "一定改进，谢谢理解", "不改进", "下次再来", "不要再来了" ], "a": 0, "why": "B nói: 我们一定改进，谢谢你的理解." } ] },
{ "id": "s6-listen-xinvisa", "stage": 6, "title": "Xin visa du học", "topic": "Đi lại", "lines": [
{ "sp": "A", "han": "你好，我想问一下，办留学签证需要什么材料？", "py": "Nǐ hǎo, wǒ xiǎng wèn yí xià, bàn liúxué qiānzhèng xūyào shénme cáiliào?", "vi": "Chào bạn, tôi muốn hỏi, làm visa du học cần tài liệu gì?" },
{ "sp": "B", "han": "需要护照、录取通知书、还有银行存款证明。", "py": "Xūyào hùzhào, lùqǔ tōngzhī shū, hái yǒu yínháng cúnkuǎn zhèngmíng.", "vi": "Cần hộ chiếu, giấy báo trúng tuyển, và giấy chứng minh tiền gửi ngân hàng." },
{ "sp": "A", "han": "存款证明要多少钱？", "py": "Cúnkuǎn zhèngmíng yào duōshao qián?", "vi": "Giấy chứng minh tiền gửi cần bao nhiêu tiền?" },
{ "sp": "B", "han": "一般要二十万以上，越多越好。", "py": "Yìbān yào èrshí wàn yǐshàng, yuè duō yuè hǎo.", "vi": "Thường cần trên 200 nghìn, càng nhiều càng tốt." },
{ "sp": "A", "han": "办签证要多长时间？", "py": "Bàn qiānzhèng yào duō cháng shíjiān?", "vi": "Làm visa mất bao lâu?" },
{ "sp": "B", "han": "一般两个星期，材料齐全的话会更快。", "py": "Yìbān liǎng ge xīngqī, cáiliào qíquán de huà huì gèng kuài.", "vi": "Thường hai tuần, nếu tài liệu đầy đủ sẽ nhanh hơn." } ], "note": ZH_S6_NOTE, "questions": [
{ "q": "办留学签证需要什么材料？", "o": [ "护照、录取通知书、银行存款证明", "身份证和照片", "学生证和书", "机票和护照" ], "a": 0, "why": "B nói: 需要护照、录取通知书、还有银行存款证明." },
{ "q": "存款证明一般要多少钱以上？", "o": [ "二十万以上", "十万以上", "五万以上", "一万以上" ], "a": 0, "why": "B nói: 一般要二十万以上." },
{ "q": "办签证一般要多长时间？", "o": [ "两个星期", "一个星期", "一个月", "三个星期" ], "a": 0, "why": "B nói: 一般两个星期." },
{ "q": "什么情况下办签证会更快？", "o": [ "材料齐全", "材料不全", "钱多", "人多" ], "a": 0, "why": "B nói: 材料齐全的话会更快." } ] }
);
ZH_SPEAK.push(
{ "id": "s6-speak-bienluan", "stage": 6, "title": "Biện luận: học online có tốt không", "topic": "Giáo dục", "hook": "“有人说网上学习不好，我不同意” — biện luận bắt đầu bằng việc phản bác một ý kiến.", "lines": [
{ "sp": "A", "han": "有人说网上学习不好，我不同意。", "py": "Yǒu rén shuō wǎngshang xuéxí bù hǎo, wǒ bù tóngyì.", "vi": "Có người nói học online không tốt, tôi không đồng ý." },
{ "sp": "A", "han": "网上学习最大的好处是可以自己安排时间。", "py": "Wǎngshang xuéxí zuì dà de hǎochù shì kěyǐ zìjǐ ānpái shíjiān.", "vi": "Lợi ích lớn nhất của học online là có thể tự sắp xếp thời gian." },
{ "sp": "A", "han": "固然，网上学习需要很强的自律，但是这正是它锻炼人的地方。", "py": "Gùrán, wǎngshang xuéxí xūyào hěn qiáng de zìlǜ, dànshì zhè zhèngshì tā duànliàn rén de dìfang.", "vi": "Đúng là học online cần tính tự giác rất mạnh, nhưng chính đó là chỗ nó rèn luyện con người." },
{ "sp": "A", "han": "而且，网上的资源比一本书多得多。", "py": "Érqiě, wǎngshang de zīyuán bǐ yì běn shū duō de duō.", "vi": "Hơn nữa, tài nguyên trên mạng nhiều hơn một cuốn sách rất nhiều." },
{ "sp": "A", "han": "所以，问题不是网上学习好不好，而是怎么学。", "py": "Suǒyǐ, wèntí bù shì wǎngshang xuéxí hǎo bu hǎo, ér shì zěnme xué.", "vi": "Vì vậy, vấn đề không phải học online tốt hay không, mà là học thế nào." } ], "note": ZH_S6_NOTE_SPEAK },
{ "id": "s6-speak-gioithieuthanhpho", "stage": 6, "title": "Giới thiệu thành phố của tôi", "topic": "Văn hóa", "hook": "“我的家乡是一个小城市，但是很有意思” — giới thiệu quê hương bắt đầu bằng quy mô và cảm nhận.", "lines": [
{ "sp": "A", "han": "我的家乡是一个小城市，但是很有意思。", "py": "Wǒ de jiāxiāng shì yí ge xiǎo chéngshì, dànshì hěn yǒu yìsi.", "vi": "Quê tôi là một thành phố nhỏ, nhưng rất thú vị." },
{ "sp": "A", "han": "城市不大，可是历史很长，有一座几百年的老桥。", "py": "Chéngshì bù dà, kěshì lìshǐ hěn cháng, yǒu yí zuò jǐ bǎi nián de lǎo qiáo.", "vi": "Thành phố không lớn, nhưng lịch sử rất dài, có một cây cầu cũ vài trăm năm." },
{ "sp": "A", "han": "这里的人很热情，客人来了，总要请客人吃当地的小吃。", "py": "Zhè lǐ de rén hěn rèqíng, kèrén lái le, zǒng yào qǐng kèrén chī dāngdì de xiǎochī.", "vi": "Người ở đây rất nhiệt tình, khách đến là luôn mời khách ăn món ăn địa phương." },
{ "sp": "A", "han": "我最喜欢的是晚上的老街，灯很多，人很多，很热闹。", "py": "Wǒ zuì xǐhuan de shì wǎnshang de lǎo jiē, dēng hěn duō, rén hěn duō, hěn rènao.", "vi": "Tôi thích nhất là phố cũ buổi tối, đèn nhiều, người nhiều, rất náo nhiệt." },
{ "sp": "A", "han": "如果你有机会，一定要来我的家乡看看。", "py": "Rúguǒ nǐ yǒu jīhuì, yí dìng yào lái wǒ de jiāxiāng kàn kan.", "vi": "Nếu bạn có dịp, nhất định phải đến quê tôi xem thử." } ], "note": ZH_S6_NOTE_SPEAK },
{ "id": "s6-speak-kechuyendulich", "stage": 6, "title": "Kể chuyện một chuyến đi đáng nhớ", "topic": "Du lịch", "hook": "“去年夏天，我去了一个很特别的地方” — kể chuyện du lịch bắt đầu bằng thời gian.", "lines": [
{ "sp": "A", "han": "去年夏天，我去了一个很特别的地方。", "py": "Qùnián xiàtiān, wǒ qù le yí ge hěn tèbié de dìfang.", "vi": "Mùa hè năm ngoái, tôi đã đến một nơi rất đặc biệt." },
{ "sp": "A", "han": "那个地方在山里，空气很好，晚上能看到很多星星。", "py": "Nà ge dìfang zài shān lǐ, kōngqì hěn hǎo, wǎnshang néng kàn dào hěn duō xīngxing.", "vi": "Nơi đó ở trong núi, không khí rất tốt, buổi tối có thể thấy nhiều sao." },
{ "sp": "A", "han": "白天，我们爬山、看瀑布，累了就坐在大树下面休息。", "py": "Báitiān, wǒmen pá shān, kàn pùbù, lèi le jiù zuò zài dà shù xiàmiàn xiūxi.", "vi": "Ban ngày, chúng tôi leo núi, xem thác nước, mệt thì ngồi dưới cây lớn nghỉ." },
{ "sp": "A", "han": "最难忘的是最后一天的日出，太阳从云里出来，特别美。", "py": "Zuì nánwàng de shì zuìhòu yì tiān de rìchū, tàiyáng cóng yún lǐ chū lái, tèbié měi.", "vi": "Đáng nhớ nhất là bình minh ngày cuối, mặt trời từ trong mây hiện ra, đặc biệt đẹp." },
{ "sp": "A", "han": "这次旅行让我明白，有时候慢下来，才能看到最美的东西。", "py": "Zhè cì lǚxíng ràng wǒ míngbai, yǒu shíhou màn xià lái, cái néng kàn dào zuì měi de dōngxi.", "vi": "Chuyến đi này cho tôi hiểu: có lúc chậm lại, mới thấy được thứ đẹp nhất." } ], "note": ZH_S6_NOTE_SPEAK },
{ "id": "s6-speak-ykienmoitruong", "stage": 6, "title": "Ý kiến về bảo vệ môi trường", "topic": "Môi trường", "hook": "“保护环境不是一个人的事” — nói ý kiến bắt đầu bằng một nhận định chung.", "lines": [
{ "sp": "A", "han": "保护环境不是一个人的事，是所有人的事。", "py": "Bǎohù huánjìng bù shì yí ge rén de shì, shì suǒyǒu rén de shì.", "vi": "Bảo vệ môi trường không phải việc của một người, mà là việc của mọi người." },
{ "sp": "A", "han": "虽然一个人的力量很小，但是大家一起做，改变就会很大。", "py": "Suīrán yí ge rén de lìliang hěn xiǎo, dànshì dàjiā yì qǐ zuò, gǎibiàn jiù huì hěn dà.", "vi": "Dù sức một người rất nhỏ, nhưng mọi người cùng làm thì thay đổi sẽ rất lớn." },
{ "sp": "A", "han": "我们可以从小事做起：少用塑料，节约用水，少开车。", "py": "Wǒmen kěyǐ cóng xiǎoshì zuò qǐ: shǎo yòng sùliào, jiéyuē yòng shuǐ, shǎo kāi chē.", "vi": "Chúng ta có thể bắt đầu từ việc nhỏ: ít dùng nhựa, tiết kiệm nước, ít lái xe." },
{ "sp": "A", "han": "更重要的是，要让更多人知道环境问题的严重。", "py": "Gèng zhòngyào de shì, yào ràng gèng duō rén zhīdào huánjìng wèntí de yánzhòng.", "vi": "Quan trọng hơn, phải để nhiều người hơn biết mức độ nghiêm trọng của vấn đề môi trường." },
{ "sp": "A", "han": "从今天开始，从我做起。", "py": "Cóng jīntiān kāishǐ, cóng wǒ zuò qǐ.", "vi": "Bắt đầu từ hôm nay, bắt đầu từ tôi." } ], "note": ZH_S6_NOTE_SPEAK },
{ "id": "s6-speak-kehoachhoctap", "stage": 6, "title": "Kế hoạch học tập năm nay", "topic": "Học tập", "hook": "“今年，我给自己定了三个学习目标” — nói kế hoạch bắt đầu bằng số mục tiêu.", "lines": [
{ "sp": "A", "han": "今年，我给自己定了三个学习目标。", "py": "Jīnnián, wǒ gěi zìjǐ dìng le sān ge xuéxí mùbiāo.", "vi": "Năm nay, tôi đặt cho mình ba mục tiêu học tập." },
{ "sp": "A", "han": "第一个目标是每天读半个小时中文书，坚持一年。", "py": "Dì yí ge mùbiāo shì měitiān dú bàn ge xiǎoshí Zhōngwén shū, jiānchí yì nián.", "vi": "Mục tiêu đầu là mỗi ngày đọc nửa tiếng sách tiếng Trung, kiên trì một năm." },
{ "sp": "A", "han": "第二个目标是通过中文考试，拿到证书。", "py": "Dì èr ge mùbiāo shì tōngguò Zhōngwén kǎoshì, ná dào zhèngshū.", "vi": "Mục tiêu hai là thi đỗ kỳ thi tiếng Trung, lấy chứng chỉ." },
{ "sp": "A", "han": "第三个目标是交几个中国朋友，多用中文交流。", "py": "Dì sān ge mùbiāo shì jiāo jǐ ge Zhōngguó péngyou, duō yòng Zhōngwén jiāoliú.", "vi": "Mục tiêu ba là kết bạn với vài người bạn Trung Quốc, dùng tiếng Trung giao tiếp nhiều hơn." },
{ "sp": "A", "han": "目标不怕大，就怕不坚持，我相信自己能做到。", "py": "Mùbiāo bù pà dà, jiù pà bù jiānchí, wǒ xiāngxìn zìjǐ néng zuò dào.", "vi": "Mục tiêu không sợ lớn, chỉ sợ không kiên trì, tôi tin mình làm được." } ], "note": ZH_S6_NOTE_SPEAK },
{ "id": "s6-speak-camon", "stage": 6, "title": "Phát biểu cảm ơn", "topic": "Đời sống", "hook": "“首先，我要感谢所有帮助过我的人” — phát biểu cảm ơn bắt đầu bằng lời cảm ơn chung.", "lines": [
{ "sp": "A", "han": "首先，我要感谢所有帮助过我的人。", "py": "Shǒuxiān, wǒ yào gǎnxiè suǒyǒu bāngzhù guo wǒ de rén.", "vi": "Trước hết, tôi muốn cảm ơn tất cả những người đã giúp tôi." },
{ "sp": "A", "han": "没有老师的指导，我不可能走到今天。", "py": "Méiyǒu lǎoshī de zhǐdǎo, wǒ bù kěnéng zǒu dào jīntiān.", "vi": "Không có sự hướng dẫn của thầy cô, tôi không thể đi đến hôm nay." },
{ "sp": "A", "han": "没有朋友的鼓励，我也不可能坚持下来。", "py": "Méiyǒu péngyou de gǔlì, wǒ yě bù kěnéng jiānchí xià lái.", "vi": "Không có sự động viên của bạn bè, tôi cũng không thể kiên trì đến cùng." },
{ "sp": "A", "han": "以后，我也要像他们一样，帮助更多的人。", "py": "Yǐhòu, wǒ yě yào xiàng tāmen yí yàng, bāngzhù gèng duō de rén.", "vi": "Sau này, tôi cũng muốn như họ, giúp đỡ nhiều người hơn." },
{ "sp": "A", "han": "谢谢大家！", "py": "Xièxie dàjiā!", "vi": "Cảm ơn mọi người!" } ], "note": ZH_S6_NOTE_SPEAK }
);
ZH_ROLE.push(
{ "id": "s6-role-datlichkham", "stage": 6, "title": "Đặt lịch khám bệnh", "setting": "Bệnh viện", "you": "Bệnh nhân", "partner": "Nhân viên tiếp nhận", "goal": "Nêu triệu chứng, chọn giờ khám, xác nhận lịch hẹn.", "turns": [
{ "from": "you", "han": "你好，我想约一个内科的号，最近总是头疼。", "py": "Nǐ hǎo, wǒ xiǎng yuē yí ge nèikē de hào, zuìjìn zǒngshì tóu téng.", "vi": "Chào bạn, tôi muốn đặt một số khám nội khoa, dạo này luôn đau đầu." },
{ "from": "partner", "han": "好的，内科星期三上午和星期五下午都有号，你想约哪天？", "py": "Hǎo de, nèikē xīngqī sān shàngwǔ hé xīngqī wǔ xiàwǔ dōu yǒu hào, nǐ xiǎng yuē nǎ tiān?", "vi": "Vâng, nội khoa sáng thứ tư và chiều thứ sáu đều có số, bạn muốn hẹn ngày nào?" },
{ "from": "you", "han": "星期三上午吧，越早越好。", "py": "Xīngqī sān shàngwǔ ba, yuè zǎo yuè hǎo.", "vi": "Sáng thứ tư đi, càng sớm càng tốt." },
{ "from": "partner", "han": "好的，星期三上午九点半，王医生，你看可以吗？", "py": "Hǎo de, xīngqī sān shàngwǔ jiǔ diǎn bàn, Wáng yīshēng, nǐ kàn kěyǐ ma?", "vi": "Vâng, sáng thứ tư 9 giờ rưỡi, bác sĩ Vương, bạn thấy được không?" },
{ "from": "you", "han": "可以。看病的时候要带什么吗？", "py": "Kěyǐ. Kàn bìng de shíhou yào dài shénme ma?", "vi": "Được. Khi khám cần mang gì không?" },
{ "from": "partner", "han": "带上身份证和医保卡，提前十五分钟到就行了。", "py": "Dài shang shēnfènzhèng hé yībǎo kǎ, tíqián shíwǔ fēnzhōng dào jiù xíng le.", "vi": "Mang chứng minh thư và thẻ bảo hiểm y tế, đến sớm 15 phút là được." },
{ "from": "you", "han": "好的，谢谢你。", "py": "Hǎo de, xièxie nǐ.", "vi": "Vâng, cảm ơn bạn." } ], "tip": "Đặt lịch khám: nêu triệu chứng trước, chọn ngày giờ, rồi hỏi cần mang gì — ghi lại giờ hẹn ngay.", "chunks": [ "我想约一个内科的号。", "星期三上午吧，越早越好。", "看病的时候要带什么吗？" ], "note": ZH_S6_NOTE_ROLE },
{ "id": "s6-role-doihang", "stage": 6, "title": "Đổi hàng sai cỡ", "setting": "Cửa hàng quần áo", "you": "Khách hàng", "partner": "Nhân viên cửa hàng", "goal": "Nêu vấn đề cỡ, đổi sang cỡ khác, kiểm tra lại trước khi về.", "turns": [
{ "from": "you", "han": "你好，我昨天买的这件衣服有点小，想换大一号的。", "py": "Nǐ hǎo, wǒ zuótiān mǎi de zhè jiàn yīfu yǒu diǎn xiǎo, xiǎng huàn dà yí hào de.", "vi": "Chào bạn, chiếc áo tôi mua hôm qua hơi nhỏ, muốn đổi sang cỡ lớn hơn một số." },
{ "from": "partner", "han": "好的，请问你有小票吗？", "py": "Hǎo de, qǐngwèn nǐ yǒu xiǎopiào ma?", "vi": "Vâng, xin hỏi bạn có hóa đơn không?" },
{ "from": "you", "han": "有的，给你。", "py": "Yǒu de, gěi nǐ.", "vi": "Có, gửi bạn." },
{ "from": "partner", "han": "大一号的还有两件，你要不要先试一下？", "py": "Dà yí hào de hái yǒu liǎng jiàn, nǐ yào bù yào xiān shì yí xià?", "vi": "Cỡ lớn hơn một số còn hai chiếc, bạn có muốn thử trước không?" },
{ "from": "you", "han": "好，我试一下。", "py": "Hǎo, wǒ shì yí xià.", "vi": "Được, tôi thử một chút." },
{ "from": "partner", "han": "怎么样，合适吗？", "py": "Zěnmeyàng, héshì ma?", "vi": "Thế nào, vừa không?" },
{ "from": "you", "han": "合适，就换这件吧，谢谢。", "py": "Héshì, jiù huàn zhè jiàn ba, xièxie.", "vi": "Vừa, đổi chiếc này đi, cảm ơn." } ], "tip": "Đổi hàng: mang theo hóa đơn, nói rõ muốn đổi sang gì, thử lại trước khi nhận — đừng ngại thử.", "chunks": [ "想换大一号的。", "你要不要先试一下？", "合适，就换这件吧。" ], "note": ZH_S6_NOTE_ROLE },
{ "id": "s6-role-damphan", "stage": 6, "title": "Đàm phán hợp đồng", "setting": "Phòng họp công ty", "you": "Đại diện công ty", "partner": "Đối tác", "goal": "Nêu điều khoản muốn sửa, nghe đề nghị của đối tác, chốt thỏa thuận.", "turns": [
{ "from": "you", "han": "关于交货时间，我们希望能提前一个星期。", "py": "Guānyú jiāo huò shíjiān, wǒmen xīwàng néng tíqián yí ge xīngqī.", "vi": "Về thời gian giao hàng, chúng tôi hy vọng có thể sớm hơn một tuần." },
{ "from": "partner", "han": "提前一个星期有点难，我们的工厂最近很忙。", "py": "Tíqián yí ge xīngqī yǒu diǎn nán, wǒmen de gōngchǎng zuìjìn hěn máng.", "vi": "Sớm hơn một tuần hơi khó, nhà máy của chúng tôi dạo này rất bận." },
{ "from": "you", "han": "我理解，但是我们的活动已经定好了，不能推迟。", "py": "Wǒ lǐjiě, dànshì wǒmen de huódòng yǐjīng dìng hǎo le, bù néng tuīchí.", "vi": "Tôi hiểu, nhưng hoạt động của chúng tôi đã định rồi, không thể hoãn." },
{ "from": "partner", "han": "那这样吧，我们先交一半，剩下的一个星期以后再交。", "py": "Nà zhèyàng ba, wǒmen xiān jiāo yí bàn, shèng xià de yí ge xīngqī yǐhòu zài jiāo.", "vi": "Vậy thế này nhé, chúng tôi giao trước một nửa, số còn lại một tuần sau giao tiếp." },
{ "from": "you", "han": "这个办法可以，价格能不能再低一点？", "py": "Zhège bànfǎ kěyǐ, jiàgé néng bù néng zài dī yì diǎn?", "vi": "Cách này được, giá có thể thấp hơn chút nữa không?" },
{ "from": "partner", "han": "价格已经是最低的了，但是我们可以送你们一批样品。", "py": "Jiàgé yǐjīng shì zuì dī de le, dànshì wǒmen kěyǐ sòng nǐmen yì pī yàngpǐn.", "vi": "Giá đã là thấp nhất rồi, nhưng chúng tôi có thể tặng các bạn một lô hàng mẫu." },
{ "from": "you", "han": "好的，那就这样定了，合作愉快。", "py": "Hǎo de, nà jiù zhèyàng dìng le, hézuò yúkuài.", "vi": "Được, vậy chốt thế nhé, hợp tác vui vẻ." } ], "tip": "Đàm phán: nêu khó khăn của mình trước, nghe khó khăn của đối tác, rồi tìm cách ở giữa — chốt bằng câu tóm tắt.", "chunks": [ "我们希望能提前一个星期。", "那这样吧，我们先交一半。", "那就这样定了，合作愉快。" ], "note": ZH_S6_NOTE_ROLE },
{ "id": "s6-role-tuvannghe", "stage": 6, "title": "Tư vấn nghề nghiệp", "setting": "Văn phòng tư vấn", "you": "Sinh viên sắp tốt nghiệp", "partner": "Cố vấn nghề nghiệp", "goal": "Nêu sở thích và băn khoăn, nghe tư vấn, chọn hướng đi.", "turns": [
{ "from": "you", "han": "老师，我快毕业了，还不知道应该找什么工作。", "py": "Lǎoshī, wǒ kuài bìyè le, hái bù zhīdào yīnggāi zhǎo shénme gōngzuò.", "vi": "Thưa thầy, em sắp tốt nghiệp rồi mà vẫn chưa biết nên tìm việc gì." },
{ "from": "partner", "han": "你先说说，你最喜欢做什么？", "py": "Nǐ xiān shuō shuo, nǐ zuì xǐhuan zuò shénme?", "vi": "Em nói trước xem, em thích làm gì nhất?" },
{ "from": "you", "han": "我喜欢跟人交流，也喜欢写东西，但是不知道这些能做什么工作。", "py": "Wǒ xǐhuan gēn rén jiāoliú, yě xǐhuan xiě dōngxi, dànshì bù zhīdào zhèxiē néng zuò shénme gōngzuò.", "vi": "Em thích giao tiếp với người khác, cũng thích viết lách, nhưng không biết những thứ này làm được việc gì." },
{ "from": "partner", "han": "喜欢交流又喜欢写东西，不妨考虑做教育或者媒体方面的工作。", "py": "Xǐhuan jiāoliú yòu xǐhuan xiě dōngxi, bùfáng kǎolǜ zuò jiàoyù huòzhě méitǐ fāngmiàn de gōngzuò.", "vi": "Thích giao tiếp lại thích viết, ngại gì mà không cân nhắc làm giáo dục hoặc truyền thông." },
{ "from": "you", "han": "可是我没有这方面的经验，会不会很难？", "py": "Kěshì wǒ méiyǒu zhè fāngmiàn de jīngyàn, huì bù huì hěn nán?", "vi": "Nhưng em không có kinh nghiệm về mặt này, có khó lắm không?" },
{ "from": "partner", "han": "刚开始难免会遇到困难，你可以先从实习开始，慢慢积累经验。", "py": "Gāng kāishǐ nánmiǎn huì yùdào kùnnan, nǐ kěyǐ xiān cóng shíxí kāishǐ, màn màn jīlěi jīngyàn.", "vi": "Mới bắt đầu khó tránh khỏi gặp khó khăn, em có thể bắt đầu từ thực tập, dần dần tích lũy kinh nghiệm." },
{ "from": "you", "han": "好的，谢谢老师，我回去好好想想。", "py": "Hǎo de, xièxie lǎoshī, wǒ huí qù hǎo hǎo xiǎng xiang.", "vi": "Vâng, cảm ơn thầy, em về suy nghĩ kỹ." } ], "tip": "Tư vấn nghề nghiệp: nói rõ sở thích và băn khoăn trước, rồi hỏi hướng đi cụ thể — đừng chỉ hỏi “nên làm gì” chung chung.", "chunks": [ "我快毕业了，还不知道应该找什么工作。", "不妨考虑做教育或者媒体方面的工作。", "先从实习开始，慢慢积累经验。" ], "note": ZH_S6_NOTE_ROLE }
);
ZH_WRITE.push(
{ "id": "s6-write-sapxep-jinguan", "stage": 6, "title": "Sắp xếp: Câu 尽管…还是", "kind": "order", "prompt": "Sắp xếp các từ thành câu đúng: dù trời mưa, anh ấy vẫn đến.", "words": [ "尽管", "下雨", "他", "还是", "来了" ], "why": "Trật tự đúng: 尽管 + khó khăn 下雨 → 他 + 还是 + 来了.", "note": ZH_S6_NOTE },
{ "id": "s6-write-sapxep-nanmian", "stage": 6, "title": "Sắp xếp: Câu 难免", "kind": "order", "prompt": "Sắp xếp các từ thành câu đúng: mới bắt đầu làm việc, khó tránh khỏi sai sót.", "words": [ "刚开始", "工作", "难免", "会", "出错" ], "why": "Trật tự đúng: 刚开始工作 (hoàn cảnh) → 难免 + 会出错.", "note": ZH_S6_NOTE },
{ "id": "s6-write-dientu-wenhoa", "stage": 6, "title": "Điền từ: Văn hóa đọc", "kind": "fill", "prompt": "Chọn từ đúng điền vào câu về văn hóa đọc.", "questions": [
{ "q": "一天读十分钟，坚持一年，也能读完 ___ 书。", "o": [ "很多", "很少", "没有", "一本" ], "a": 0, "why": "读完很多书: kiên trì một năm cũng đọc xong nhiều sách." },
{ "q": "不管用什么方式，读书的习惯本身才是最 ___ 的。", "o": [ "宝贵", "便宜", "简单", "困难" ], "a": 0, "why": "最宝贵的: quý giá nhất — thói quen đọc mới là quý giá nhất." } ], "note": ZH_S6_NOTE },
{ "id": "s6-write-viet-khihau", "stage": 6, "title": "Viết: Tôi có thể làm gì cho môi trường", "kind": "free", "prompt": "Viết một đoạn ngắn (6-10 câu) về những việc bạn có thể làm cho môi trường: trong sinh hoạt hàng ngày, ở trường hoặc ở công ty, và vì sao bạn nghĩ những việc nhỏ cũng quan trọng.", "model": "保护环境不是一个人的事，是所有人的事。虽然一个人的力量很小，但是大家一起做，改变就会很大。我每天都从小事做起：少用塑料袋，节约用水，少开车，多坐公共交通。我还告诉身边的朋友，环境问题就在我们身边，夏天更热，电费更高。从今天开始，从我做起，我希望更多人一起行动。", "analysis": "Đoạn mẫu mở đầu bằng nhận định chung (不是一个人的事), rồi thừa nhận sức một người nhỏ nhưng nhấn mạnh cùng làm sẽ lớn (虽然…但是), sau đó liệt kê việc cụ thể (少用塑料袋…), cuối cùng kêu gọi hành động. Viết theo khung nhận định — việc cụ thể — kêu gọi thì đoạn văn có sức thuyết phục.", "phrases": [ "保护环境不是一个人的事，是所有人的事。", "虽然一个人的力量很小，但是大家一起做，改变就会很大。", "从今天开始，从我做起。" ], "note": ZH_S6_NOTE_FREE }
);
