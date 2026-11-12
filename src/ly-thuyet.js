// Ly thuyet co ban dat o dau moi bai (v41). Khoa la tieu de bai trong LESSONS.
// Tao boi: Ngo Ba Hung - Ngay: 2026-11-12
// y: y chinh mot cau; n: nguyen tac; b: but toan khung (neu co); c: can cu.
const LY_THUYET = {
  'Tập đoàn mẫu': {
    y: 'Báo cáo tài chính hợp nhất trình bày cả tập đoàn như một doanh nghiệp duy nhất, nên trước hết phải biết đơn vị nào thuộc tập đoàn và thuộc loại nào.',
    n: [
      'Công ty mẹ là đơn vị kiểm soát, tức có quyền chi phối chính sách tài chính và hoạt động của đơn vị khác để thu lợi ích.',
      'Công ty con là đơn vị bị kiểm soát, thường khi tập đoàn nắm trên 50% quyền biểu quyết. Công ty con được hợp nhất toàn bộ.',
      'Công ty liên kết là đơn vị tập đoàn có ảnh hưởng đáng kể nhưng không kiểm soát, thường nắm từ 20% đến 50% quyền biểu quyết. Liên kết không hợp nhất mà ghi theo phương pháp vốn chủ sở hữu.',
      'Dưới 20% và không có ảnh hưởng đáng kể là đầu tư khác, giữ theo giá gốc.',
      'Phân loại xét trên toàn tập đoàn: tính tỷ lệ sở hữu (nhân theo chuỗi) trước, rồi xét tỷ lệ biểu quyết (cộng phần của các công ty con nắm). Biểu quyết vượt ngưỡng thì phân loại theo biểu quyết.',
    ],
    c: 'VAS 25, VAS 07, Thông tư 202/2014/TT-BTC.',
  },
  'Cộng ngang': {
    y: 'Cộng ngang là cộng từng chỉ tiêu của công ty mẹ và các công ty con, là điểm xuất phát của bảng hợp nhất.',
    n: [
      'Chỉ cộng công ty mẹ và công ty con. Công ty liên kết không cộng ngang.',
      'Các đơn vị phải dùng cùng hệ thống tài khoản, cùng chính sách kế toán và cùng ngày kết thúc kỳ. Khác thì chuẩn hóa trước khi cộng.',
      'Công ty con được cộng 100% số liệu, kể cả khi mẹ chỉ nắm một phần. Phần không thuộc mẹ được tách sang cổ đông không kiểm soát ở bước sau.',
      'Số cộng ngang chưa phải số hợp nhất: còn khoản đầu tư của mẹ, vốn của con và mọi giao dịch nội bộ bị tính hai lần.',
    ],
    c: 'VAS 25, Thông tư 202/2014/TT-BTC.',
  },
  'Đầu tư và LTTM': {
    y: 'Khoản đầu tư của mẹ và phần vốn chủ tương ứng của con tại ngày mua là hai mặt của cùng một giá trị, nên phải loại trừ lẫn nhau. Phần chênh lệch là lợi thế thương mại.',
    n: [
      'Tài sản thuần của công ty con tại ngày mua được xác định theo giá trị hợp lý.',
      'Lợi thế thương mại = giá phí khoản đầu tư − phần sở hữu của mẹ trong giá trị hợp lý tài sản thuần tại ngày mua.',
      'Cổ đông không kiểm soát tại ngày mua = tỷ lệ của họ × giá trị hợp lý tài sản thuần.',
      'Lợi thế thương mại được phân bổ dần vào chi phí quản lý doanh nghiệp, không quá 10 năm. Phần đã phân bổ các năm trước được ghi lại qua lợi nhuận chưa phân phối.',
      'Số loại trừ chỉ lấy vốn chủ tại ngày mua. Lãi của con sau ngày mua thuộc về tập đoàn, không bị loại.',
    ],
    b: [
      'Loại trừ: Nợ 411, 421 và các quỹ (phần của mẹ tại ngày mua), Nợ 269 lợi thế thương mại / Có 221 đầu tư vào công ty con',
      'Phân bổ năm nay: Nợ 642 / Có 269',
      'Phân bổ lũy kế các năm trước: Nợ 421 / Có 269',
    ],
    c: 'VAS 11, VAS 25, Thông tư 202/2014/TT-BTC.',
  },
  'Hàng tồn kho nội bộ': {
    y: 'Với tập đoàn, bán hàng giữa các đơn vị chỉ là chuyển kho. Doanh thu, giá vốn nội bộ phải loại, và lãi chỉ được ghi khi hàng đã bán ra ngoài tập đoàn.',
    n: [
      'Loại toàn bộ doanh thu và giá vốn của giao dịch bán hàng nội bộ.',
      'Hàng mua nội bộ còn tồn cuối kỳ đang mang lãi của bên bán. Phần lãi chưa thực hiện này phải loại khỏi giá trị hàng tồn kho.',
      'Loại lãi chưa thực hiện làm lợi nhuận hợp nhất thấp hơn lợi nhuận đã tính thuế, nên phát sinh tài sản thuế thu nhập hoãn lại.',
      'Lỗ chưa thực hiện chỉ được loại khi giá gốc vẫn thu hồi được.',
      'Khi công ty con có cổ đông không kiểm soát là bên bán, lãi chưa thực hiện ảnh hưởng cả phần của cổ đông không kiểm soát.',
    ],
    b: [
      'Loại doanh thu, giá vốn nội bộ: Nợ 511 / Có 632',
      'Loại lãi chưa thực hiện trong hàng tồn: Nợ 632 / Có 156',
      'Thuế hoãn lại: Nợ 243 / Có 8212',
    ],
    c: 'VAS 25, VAS 17, Thông tư 202/2014/TT-BTC.',
  },
  'Công nợ và vay nội bộ': {
    y: 'Một đơn vị trong tập đoàn không thể nợ chính mình, nên mọi khoản phải thu, phải trả, cho vay, đi vay giữa các đơn vị phải bù trừ về 0.',
    n: [
      'Bù trừ phải thu nội bộ với phải trả nội bộ, cho vay nội bộ với vay nội bộ.',
      'Lãi cho vay và lãi đi vay nội bộ cũng loại trừ lẫn nhau.',
      'Hai bên ghi lệch nhau thì tìm nguyên nhân trước (tiền hoặc hàng đang đi đường, ghi sai đối tượng, khác thời điểm ghi nhận), điều chỉnh xong mới bù trừ.',
      'Phần còn lại sau bù trừ phải trình bày đúng ngắn hạn và dài hạn.',
    ],
    b: [
      'Bù trừ công nợ: Nợ 336 / Có 136',
      'Bù trừ khoản vay: Nợ 341NB / Có 1283NB',
      'Loại lãi vay nội bộ: Nợ 515 / Có 635',
    ],
    c: 'VAS 25, Thông tư 202/2014/TT-BTC.',
  },
  'Ma trận công nợ': {
    y: 'Khi có nhiều đơn vị, đối chiếu công nợ nội bộ phải làm theo từng cặp bên phải thu và bên phải trả.',
    n: [
      'Lập ma trận: dòng là bên phải thu, cột là bên phải trả, mỗi ô so số hai bên ghi.',
      'Tổng phải thu nội bộ bằng tổng phải trả nội bộ chưa chắc từng cặp đã khớp: lệch ở hai cặp có thể bù nhau.',
      'Nguyên nhân lệch thường gặp: tiền đang chuyển, hàng đang đi đường, ghi sai đối tượng, khác tỷ giá, một bên chưa ghi nhận.',
      'Mỗi khoản lệch phải được xử lý theo đúng nguyên nhân, không được bù trừ cho tròn.',
    ],
    c: 'Thông tư 202/2014/TT-BTC; thực hành đối chiếu công nợ nội bộ.',
  },
  'Cổ tức nội bộ': {
    y: 'Cổ tức công ty con trả cho công ty mẹ chỉ là chuyển tiền trong tập đoàn, không tạo ra thu nhập cho tập đoàn.',
    n: [
      'Loại doanh thu tài chính mẹ đã ghi từ cổ tức của con, đồng thời ghi lại lợi nhuận chưa phân phối mà con đã chia.',
      'Phần cổ tức con trả cho cổ đông không kiểm soát là dòng tiền ra khỏi tập đoàn, làm giảm phần của cổ đông không kiểm soát.',
      'Cổ tức nhận từ công ty liên kết không ghi vào thu nhập mà làm giảm giá trị khoản đầu tư theo phương pháp vốn chủ.',
    ],
    b: [
      'Loại cổ tức con trả mẹ: Nợ 515 / Có 421',
      'Phần trả cho cổ đông không kiểm soát: Nợ 429 / Có 421',
    ],
    c: 'VAS 25, VAS 07, Thông tư 202/2014/TT-BTC.',
  },
  'Cổ đông không kiểm soát': {
    y: 'Công ty con được hợp nhất 100% số liệu, rồi phần không thuộc công ty mẹ được tách ra thành lợi ích cổ đông không kiểm soát (NCI).',
    n: [
      'NCI được trình bày trong vốn chủ sở hữu, tách riêng khỏi phần của chủ sở hữu công ty mẹ. Lợi nhuận sau thuế cũng tách phần của mẹ và phần của NCI.',
      'NCI tính theo tỷ lệ lợi ích, tức nhân theo chuỗi, không theo tỷ lệ biểu quyết.',
      'NCI cuối kỳ = NCI tại ngày mua + phần lãi sau ngày mua − cổ tức đã chia cho NCI ± biến động vốn khác.',
      'Phần lãi của NCI tính trên lãi của con đã điều chỉnh các giao dịch nội bộ mà con là bên bán.',
      'Khi lỗ vượt phần vốn của NCI, VAS 25 và TT202 xử lý khác nhau; bài này nói rõ cách làm.',
    ],
    b: ['Tách phần lãi trong kỳ của NCI: Nợ 421 / Có 429'],
    c: 'VAS 25, Thông tư 202/2014/TT-BTC.',
  },
  'Công ty liên kết': {
    y: 'Công ty liên kết không cộng ngang. Khoản đầu tư được ghi theo phương pháp vốn chủ sở hữu.',
    n: [
      'Ban đầu ghi theo giá gốc. Sau đó tăng, giảm theo phần lãi, lỗ của nhà đầu tư trong kết quả của liên kết.',
      'Cổ tức nhận từ liên kết làm giảm giá trị khoản đầu tư, không ghi vào thu nhập.',
      'Lãi chưa thực hiện từ giao dịch với liên kết chỉ loại theo tỷ lệ phần sở hữu của nhà đầu tư, không loại toàn bộ.',
      'Khi phần lỗ làm khoản đầu tư về 0 thì dừng ghi lỗ, trừ khi nhà đầu tư có nghĩa vụ trả thay.',
      'Phần lãi, lỗ trong liên kết trình bày thành một dòng riêng trên báo cáo kết quả kinh doanh hợp nhất.',
    ],
    b: [
      'Ghi phần lãi năm nay: Nợ 222 / Có phần lãi trong công ty liên kết',
      'Ghi phần lãi các năm trước: Nợ 222 / Có 421',
      'Cổ tức từ liên kết: Nợ 515 / Có 222',
    ],
    c: 'VAS 07, Thông tư 202/2014/TT-BTC.',
  },
  'Thực hành bảng hợp nhất': {
    y: 'Bảng hợp nhất = số cộng ngang + các bút toán điều chỉnh. Mỗi bút toán phải cân Nợ, Có, và số cuối cùng phải hợp lý.',
    n: [
      'Mỗi bút toán điều chỉnh chỉ ghi trên bảng hợp nhất, không ghi vào sổ của đơn vị nào.',
      'Sau điều chỉnh, các tài khoản nội bộ (đầu tư vào công ty con, phải thu, phải trả, vay nội bộ) phải về 0.',
      'Bảng cân đối hợp nhất phải cân: tổng tài sản bằng tổng nguồn vốn.',
      'Năm sau phải lập lại các bút toán của năm trước, phần ảnh hưởng tới lãi lỗ năm trước được ghi qua lợi nhuận chưa phân phối đầu kỳ.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Báo cáo hợp nhất': {
    y: 'Từ bảng hợp nhất lập ra bộ báo cáo tài chính hợp nhất, trình bày theo mẫu như báo cáo của một doanh nghiệp.',
    n: [
      'Bộ báo cáo gồm Bảng cân đối kế toán, Báo cáo kết quả kinh doanh, Báo cáo lưu chuyển tiền tệ và Thuyết minh hợp nhất.',
      'Vốn chủ sở hữu và lợi nhuận sau thuế đều tách phần của chủ sở hữu công ty mẹ và phần của cổ đông không kiểm soát.',
      'Lợi thế thương mại và khoản đầu tư vào liên kết theo phương pháp vốn chủ là những dòng chỉ có trên báo cáo hợp nhất.',
      'Số cuối kỳ được chốt làm số đầu kỳ của năm sau.',
    ],
    c: 'VAS 21, VAS 25, Thông tư 202/2014/TT-BTC.',
  },
  'Phạm vi và tỷ lệ': {
    y: 'Phạm vi hợp nhất gồm công ty mẹ và mọi công ty con. Có hai loại tỷ lệ, mỗi loại dùng vào một việc.',
    n: [
      'Tỷ lệ biểu quyết dùng để xét có kiểm soát hay ảnh hưởng đáng kể hay không, tức để phân loại.',
      'Tỷ lệ lợi ích (sở hữu) dùng để chia lãi và tài sản thuần giữa công ty mẹ và cổ đông không kiểm soát.',
      'Phần trăm chỉ là gợi ý: kết luận cuối cùng theo bản chất quyền kiểm soát, phải có hồ sơ như điều lệ, thỏa thuận, quyền bổ nhiệm.',
      'Đơn vị hạch toán phụ thuộc không phải công ty con: số của nó đã nằm trong báo cáo của đơn vị cấp trên.',
    ],
    c: 'VAS 25, Thông tư 202/2014/TT-BTC.',
  },
  'Tính tỷ lệ và phân loại lại': {
    y: 'Mỗi đơn vị chỉ thấy phần mình đầu tư. Trên tập đoàn phải gộp tất cả các bên cùng nắm một công ty rồi mới phân loại lại.',
    n: [
      'Bước 1: tính tỷ lệ sở hữu của mẹ, cộng phần trực tiếp với tích theo chuỗi qua từng đơn vị trung gian.',
      'Bước 2: phân loại sơ bộ theo tỷ lệ sở hữu.',
      'Bước 3: tính tỷ lệ biểu quyết, cộng đủ phần của các đơn vị mà tập đoàn kiểm soát.',
      'Bước 4: biểu quyết vượt sang ngưỡng khác thì phân loại lại theo biểu quyết.',
      'Một công ty chỉ có một kết luận trên tập đoàn. Đơn vị nào ghi khác kết luận đó thì phải phân loại lại khoản đầu tư của đơn vị mình.',
    ],
    b: [
      'Đầu tư khác thành công ty con: Nợ 221 / Có 228',
      'Đầu tư khác thành liên kết: Nợ 222 / Có 228',
    ],
    c: 'VAS 25, VAS 07, Thông tư 202/2014/TT-BTC.',
  },
  'Bảng tách chênh lệch đầu tư': {
    y: 'Trước khi loại trừ đầu tư, phải tách vốn chủ của công ty con tại ngày mua thành từng phần để biết loại trừ vào tài khoản nào.',
    n: [
      'Vốn chủ tại ngày mua gồm vốn góp, thặng dư, các quỹ, lợi nhuận chưa phân phối và chênh lệch đánh giá lại theo giá trị hợp lý.',
      'Số loại trừ được cố định tại ngày mua. Biến động vốn chủ sau ngày mua không làm thay đổi số loại trừ ban đầu.',
      'Khi công ty con chuyển lợi nhuận sau ngày mua thành vốn góp (ví dụ chia cổ tức bằng cổ phiếu), phần vốn tăng đó không thuộc số loại trừ mà phải chuyển về đúng bản chất.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Make up và Revert': {
    y: 'Mỗi đơn vị ghi khoản đầu tư theo phân loại của riêng mình. Khi phân loại trên tập đoàn khác, phải bổ sung hoặc đảo số đơn vị đã ghi.',
    n: [
      'Make up: đơn vị ghi đầu tư khác nhưng trên tập đoàn là liên kết, phải tính thêm theo phương pháp vốn chủ cho phần của đơn vị đó.',
      'Revert: đơn vị đã ghi theo vốn chủ nhưng trên tập đoàn là công ty con hoặc đầu tư khác, phải đảo phần vốn chủ đã ghi.',
      'Hai bên giống nhau thì không phải làm gì.',
      'Mọi điều chỉnh làm trên cấp hợp nhất, không sửa sổ của đơn vị.',
    ],
    c: 'VAS 07, VAS 25, Thông tư 202/2014/TT-BTC.',
  },
  'Mua rẻ và mua nhiều lần': {
    y: 'Giá phí không phải lúc nào cũng cao hơn phần tài sản thuần mua được, và kiểm soát có thể đạt được sau nhiều lần mua.',
    n: [
      'Giá phí nhỏ hơn phần sở hữu trong giá trị hợp lý tài sản thuần thì không có lợi thế thương mại mà có lãi mua rẻ.',
      'Trước khi ghi lãi mua rẻ phải xem lại việc xác định giá trị hợp lý và giá phí. Phần chênh còn lại mới ghi ngay vào kết quả kinh doanh của kỳ mua.',
      'Khi đạt kiểm soát qua nhiều lần mua, phần đã nắm trước đó phải đánh giá lại theo giá trị hợp lý tại ngày đạt kiểm soát rồi mới tính lợi thế thương mại.',
    ],
    c: 'VAS 11 (đoạn 55), Thông tư 202/2014/TT-BTC (Điều 10, 15, 16).',
  },
  'Vốn công ty con biến động': {
    y: 'Có những giao dịch làm thay đổi tỷ lệ của mẹ và cổ đông không kiểm soát mà không làm mất kiểm soát. Đó là giao dịch giữa các chủ sở hữu.',
    n: [
      'Không tạo lợi thế thương mại mới, không ghi lãi, lỗ vào kết quả kinh doanh.',
      'Cách chung: tính phần của mẹ trong tài sản thuần trước và sau giao dịch. Chênh lệch so với số tiền mẹ góp thêm hoặc nhận về được ghi thẳng vào lợi nhuận chưa phân phối, đối ứng phần của cổ đông không kiểm soát.',
      'Các trường hợp: công ty con huy động thêm vốn, mua lại cổ phiếu quỹ, mẹ mua thêm hoặc bán bớt mà vẫn giữ quyền kiểm soát.',
    ],
    b: ['Phần của mẹ tăng hơn số góp: Nợ 429 / Có 421 (ngược lại khi giảm)'],
    c: 'Thông tư 202/2014/TT-BTC (Điều 17, 54).',
  },
  'Đổi trạng thái': {
    y: 'Khi tỷ lệ thay đổi làm một đơn vị chuyển loại (công ty con thành liên kết, liên kết thành đầu tư khác…), cách ghi trên hợp nhất đổi từ ngày chuyển.',
    n: [
      'Kết quả kinh doanh của đơn vị chỉ được hợp nhất đến ngày mất kiểm soát.',
      'Lãi, lỗ bán khoản đầu tư trên hợp nhất tính theo phần tài sản thuần đã bán, khác với lãi trên báo cáo riêng tính theo giá gốc.',
      'Phần còn giữ lại được ghi theo phương pháp mới (vốn chủ nếu thành liên kết, giá gốc nếu thành đầu tư khác) từ ngày chuyển.',
    ],
    c: 'VAS 25, VAS 07, Thông tư 202/2014/TT-BTC.',
  },
  'Chuyển giao trong tập đoàn': {
    y: 'Chuyển một công ty con từ đơn vị này sang đơn vị khác trong cùng tập đoàn là giao dịch dưới sự kiểm soát chung, không phải thoái vốn.',
    n: [
      'Số hợp nhất về bản chất không đổi, lợi thế thương mại ban đầu giữ nguyên.',
      'Loại lãi, lỗ mà bên bán đã ghi trên báo cáo riêng.',
      'Tính lại phần chia giữa công ty mẹ và cổ đông không kiểm soát theo cơ cấu sở hữu mới.',
    ],
    c: 'Thông tư 202/2014/TT-BTC (Điều 48, 55, 56).',
  },
  'Sáp nhập công ty con': {
    y: 'Khi công ty mẹ nhận sáp nhập công ty con, cách ghi tùy giao dịch có phải là hợp nhất kinh doanh và có dưới sự kiểm soát chung hay không.',
    n: [
      'Là hoạt động kinh doanh và dưới kiểm soát chung: ghi tài sản, nợ theo giá trị ghi sổ của bên bị sáp nhập; chênh lệch với giá phí không tạo lợi thế thương mại.',
      'Là hoạt động kinh doanh nhưng không dưới kiểm soát chung: áp dụng phương pháp mua theo VAS 11.',
      'Không phải hoạt động kinh doanh: ghi như mua một nhóm tài sản.',
    ],
    c: 'VAS 11, Thông tư 99/2025/TT-BTC (Điều 23).',
  },
  'Thu chi khác chỉ tiêu': {
    y: 'Giao dịch nội bộ không phải lúc nào bên bán ghi doanh thu và bên mua ghi giá vốn. Loại trừ phải theo đúng chỉ tiêu mỗi bên đã ghi.',
    n: [
      'Bên bán có thể ghi doanh thu hoặc thu nhập khác; bên mua có thể ghi chi phí bán hàng, quản lý, chi phí khác hoặc đưa vào tài sản.',
      'Loại trừ tự động thường chỉ ghi Nợ doanh thu, Có giá vốn, nên phải chỉnh lại theo chỉ tiêu thực tế.',
      'Phần bên mua đã đưa vào tài sản thì lãi trong đó là lãi chưa thực hiện.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Dự phòng nội bộ': {
    y: 'Công nợ và đầu tư nội bộ đã bị loại trừ thì khoản dự phòng trích cho chúng cũng phải hoàn nhập trên hợp nhất.',
    n: [
      'Hoàn dự phòng phải thu nội bộ, dự phòng đầu tư vào công ty con và dự phòng liên quan đến giao dịch nội bộ khác.',
      'Hoàn dự phòng làm lợi nhuận hợp nhất cao hơn lợi nhuận đã tính thuế, nên phát sinh thuế thu nhập hoãn lại phải trả.',
      'Năm sau, phần đã hoàn ở năm trước được ghi lại qua lợi nhuận chưa phân phối đầu kỳ.',
    ],
    b: [
      'Hoàn dự phòng phải thu nội bộ: Nợ 2293 / Có 642',
      'Hoàn dự phòng đầu tư vào công ty con: Nợ 2292 / Có 635',
      'Thuế hoãn lại phải trả: Nợ 821 / Có 347',
    ],
    c: 'VAS 17, Thông tư 202/2014/TT-BTC.',
  },
  'Hàng thành TSCĐ, góp vốn, dự phòng hàng': {
    y: 'Với tập đoàn, lãi từ bán tài sản nội bộ chỉ được thực hiện dần qua khấu hao hoặc khi tài sản được bán ra ngoài.',
    n: [
      'Hàng bên bán xuất ra mà bên mua dùng làm TSCĐ: loại doanh thu, giá vốn, và loại phần lãi khỏi nguyên giá.',
      'Khấu hao trên phần lãi đã loại cũng phải giảm: lãi được thực hiện dần theo thời gian khấu hao.',
      'Góp vốn bằng tài sản vào công ty con: lãi đánh giá lại là lãi nội bộ, phải loại.',
      'Dự phòng giảm giá hàng mua nội bộ chỉ được giữ phần vượt giá gốc của tập đoàn.',
      'Mỗi điều chỉnh làm lệch lợi nhuận kế toán với lợi nhuận tính thuế thì ghi thuế hoãn lại.',
    ],
    b: [
      'Hàng thành TSCĐ: Nợ 511 / Có 632, Có 211 (phần lãi)',
      'Giảm khấu hao phần lãi: Nợ 214 / Có 642',
    ],
    c: 'Thông tư 202/2014/TT-BTC (Điều 28).',
  },
  'Ngân hàng thành viên': {
    y: 'Khi một ngân hàng là thành viên tập đoàn, tiền gửi và khoản vay giữa ngân hàng với các đơn vị khác là nội bộ, nhưng phải xét từng khế ước.',
    n: [
      'Tiền gửi của đơn vị tại ngân hàng thành viên và khoản vay của đơn vị từ ngân hàng đó phải bù trừ.',
      'Không phải khoản nào cũng bù trừ: khoản cho vay đồng tài trợ chỉ bù phần ngân hàng thành viên giải ngân; khoản đã bán nợ cho bên ngoài hoặc vốn ủy thác của bên ngoài thì không bù trừ.',
      'Số của ngân hàng theo mẫu riêng phải ánh xạ sang mẫu chung trước khi cộng ngang.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Công trình và tài sản nội bộ': {
    y: 'Nhà thầu nội bộ xây công trình cho đơn vị khác trong tập đoàn thì với tập đoàn đây là tự xây dựng tài sản, không phải bán hàng.',
    n: [
      'Loại doanh thu và giá vốn của nhà thầu.',
      'Lãi của nhà thầu nằm trong giá trị công trình là lãi chưa thực hiện, phải loại khỏi xây dựng cơ bản dở dang hoặc nguyên giá.',
      'Chi phí dở dang của nhà thầu cho công trình có chủ đầu tư trong tập đoàn được chuyển sang xây dựng cơ bản dở dang.',
    ],
    b: [
      'Chuyển dở dang: Nợ 241 / Có 154',
      'Loại doanh thu và lãi: Nợ 511 / Có 632, Có 241',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'BCC có báo cáo riêng': {
    y: 'Hợp đồng hợp tác kinh doanh (BCC) giữa các đơn vị thành viên mà có báo cáo tài chính riêng thì không nằm trong cột của đơn vị nào, cộng ngang sẽ thiếu.',
    n: [
      'Cộng bảng cân đối và kết quả của BCC vào tập đoàn.',
      'Bù trừ công nợ giữa BCC và từng bên tham gia.',
      'Loại phần lợi nhuận được chia mà các bên đã ghi, để không tính hai lần.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Bao tiêu và khí trả trước': {
    y: 'Với hợp đồng bao tiêu, bên mua trả tiền cả phần chưa nhận hàng. Khi bên bán là thành viên tập đoàn, phải loại đúng phần nội bộ trong cả chi phí đã ghi và chi phí trả trước.',
    n: [
      'Phần đã trả nhưng chưa nhận hàng được treo trên chi phí trả trước, nhận hàng năm sau mới ghi chi phí.',
      'Loại trừ tự động theo doanh thu nội bộ có thể loại thừa giá vốn và loại thiếu chi phí trả trước, phải điều chỉnh lại.',
      'Chỉ loại phần tương ứng với tỷ lệ của thành viên tập đoàn trong doanh thu của mỏ.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Chuyển đổi ngoại tệ': {
    y: 'Công ty con lập báo cáo bằng ngoại tệ phải chuyển đổi sang đồng tiền báo cáo của tập đoàn trước khi cộng ngang.',
    n: [
      'Tài sản và nợ phải trả dùng tỷ giá cuối kỳ.',
      'Doanh thu, chi phí dùng tỷ giá bình quân nếu xấp xỉ tỷ giá thực tế của giao dịch.',
      'Vốn góp dùng tỷ giá lịch sử tại ngày góp.',
      'Phần lệch do dùng các tỷ giá khác nhau là chênh lệch quy đổi, nằm trong vốn chủ. Phần của cổ đông không kiểm soát được chia theo tỷ lệ của họ.',
    ],
    c: 'VAS 10, Thông tư 202/2014/TT-BTC.',
  },
  'Qua nhà điều hành': {
    y: 'Khi đơn vị thành viên bán dịch vụ cho nhà điều hành ngoài tập đoàn mà tập đoàn có góp vốn, một phần doanh thu đó thực chất là chi phí của chính tập đoàn.',
    n: [
      'Phần nội bộ = doanh thu × tỷ lệ tập đoàn thực gánh trong dự án.',
      'Tỷ lệ thực gánh có thể khác tỷ lệ góp vốn khi có thỏa thuận gánh vốn.',
      'Chi phí đã ghi vào giá vốn thì chỉ loại doanh thu và chi phí. Chi phí còn nằm trên tài sản thì phải loại thêm lãi chưa thực hiện.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Chuẩn hóa số liệu': {
    y: 'Trước khi cộng ngang, số liệu của mọi đơn vị phải cùng mẫu và cùng chính sách kế toán với công ty mẹ.',
    n: [
      'Ánh xạ số liệu của đơn vị dùng mẫu riêng (như ngân hàng) sang mẫu chung theo bản chất.',
      'Đơn vị dùng chính sách khác thì điều chỉnh về chính sách của mẹ, tách phần thuộc các năm trước và năm nay.',
      'Kiểm tra số gửi lên khớp với báo cáo đã kiểm toán và đã cập nhật bản mới nhất.',
      'Khác kỳ kế toán thì lập thêm báo cáo cùng kỳ; không được thì lệch không quá 3 tháng và điều chỉnh các giao dịch trọng yếu trong khoảng lệch.',
    ],
    c: 'VAS 25, Thông tư 202/2014/TT-BTC.',
  },
  'Khép sổ': {
    y: 'Ghi xong bút toán chưa phải là xong. Phải chứng minh số cuối cùng hợp lý trước khi phát hành báo cáo.',
    n: [
      'Lập bảng biến động vốn chủ: đầu kỳ + lãi − cổ tức ± biến động khác = cuối kỳ, cho cả phần của mẹ và phần cổ đông không kiểm soát.',
      'Đối chiếu thuế, dòng tiền, bên liên quan và các chênh lệch còn lại so với ngưỡng trọng yếu.',
      'Kiểm tra lỗi kỹ thuật của file tính toán, như công thức bỏ qua dòng đang bị lọc.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Lưu chuyển tiền tệ hợp nhất': {
    y: 'Báo cáo lưu chuyển tiền tệ hợp nhất chỉ phản ánh dòng tiền giữa tập đoàn với bên ngoài.',
    n: [
      'Cộng từng chỉ tiêu dòng tiền của mẹ và các con, rồi loại phần thu, chi giữa các đơn vị trong tập đoàn.',
      'Cổ tức trả cho cổ đông không kiểm soát vẫn là dòng tiền ra; cổ tức nhận từ liên kết vẫn là dòng tiền vào.',
      'Mua hoặc bán công ty con trong kỳ được trình bày thành một dòng riêng trong hoạt động đầu tư, trừ đi tiền của công ty con đó.',
    ],
    c: 'VAS 24, Thông tư 202/2014/TT-BTC.',
  },
  'Thuyết minh và bên liên quan': {
    y: 'Thuyết minh hợp nhất cho biết những điều con số không tự nói được, trong đó có giao dịch với bên liên quan.',
    n: [
      'Giao dịch với công ty con đã bị loại trừ nên không cần thuyết minh là giao dịch với bên liên quan.',
      'Giao dịch với liên doanh, liên kết không bị loại nên vẫn phải trình bày.',
      'Bên liên quan theo VAS 26 gồm công ty mẹ, con, liên kết, cá nhân có ảnh hưởng đáng kể và người thân, người quản lý chủ chốt.',
      'Đổi trạng thái trong năm thì chỉ trình bày giao dịch trong giai đoạn còn là bên liên quan.',
    ],
    c: 'VAS 25, VAS 26, Thông tư 202/2014/TT-BTC.',
  },
  'Thay đổi theo TT99': {
    y: 'Thông tư 99/2025/TT-BTC thay Thông tư 200/2014/TT-BTC từ năm tài chính bắt đầu ngày 01/01/2026, nên tên và mã một số tài khoản, chỉ tiêu thay đổi.',
    n: [
      'Báo cáo năm 2025 vẫn theo TT200, nên các bài dùng tên tài khoản của TT200.',
      'TT99 không thay TT202: báo cáo hợp nhất vẫn làm theo pháp luật về báo cáo tài chính hợp nhất.',
      'Khi chuyển sang TT99, phải đổi mã chỉ tiêu và đối chiếu các tài khoản có thay đổi tên, nội dung.',
    ],
    c: 'Thông tư 99/2025/TT-BTC, Thông tư 200/2014/TT-BTC, Thông tư 202/2014/TT-BTC.',
  },
  'Hợp nhất mở rộng': {
    y: 'Bài này gom các tình huống của phần nâng cao vào một bảng hợp nhất, để thấy chúng tác động cùng lúc.',
    n: [
      'Vẫn đi theo thứ tự: chuẩn hóa, cộng ngang, loại trừ đầu tư, loại giao dịch nội bộ, tách cổ đông không kiểm soát, ghi liên kết.',
      'Mỗi bút toán có thể bật, tắt để thấy ảnh hưởng của nó tới số hợp nhất.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Từ cộng ngang đến hợp nhất': {
    y: 'Bài tổng hợp đi hết một vòng từ số cộng ngang tới báo cáo hợp nhất trên một bộ số nhỏ.',
    n: [
      'Lợi nhuận hợp nhất = tổng lợi nhuận các đơn vị ± các điều chỉnh hợp nhất.',
      'Lợi nhuận của chủ sở hữu công ty mẹ = lợi nhuận hợp nhất − phần của cổ đông không kiểm soát.',
      'Mỗi con số trên báo cáo hợp nhất phải truy được về số cộng ngang và các bút toán.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
  'Bắt lỗi bảng hợp nhất': {
    y: 'Khi bảng hợp nhất không cân hoặc số lạ, phải đi từ triệu chứng tới nguyên nhân theo một thứ tự cố định.',
    n: [
      'Kiểm tra từng bút toán có cân Nợ, Có không.',
      'Kiểm tra các tài khoản nội bộ đã về 0 chưa.',
      'Kiểm tra số đầu kỳ đã khớp số cuối kỳ năm trước chưa.',
      'Kiểm tra biến động vốn chủ và phần của cổ đông không kiểm soát.',
    ],
    c: 'Thông tư 202/2014/TT-BTC.',
  },
};
function lyThuyet() {
  const x = LY_THUYET[LESSONS[lesson].t];
  if (!x) return '';
  return `<div class="card ly-thuyet"><h2>Lý thuyết cơ bản</h2>
    <p class="lt-y">${x.y}</p>
    <h3>Nguyên tắc</h3><ul>${x.n.map(s => `<li>${s}</li>`).join('')}</ul>
    ${x.b ? `<h3>Bút toán khung</h3><ul class="lt-bt">${x.b.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
    <p class="lt-c">Căn cứ: ${x.c}</p></div>`;
}
