"文字コード指定
set encoding=utf-8 "基本はUTF-8を使う
set fileencodings=utf-8,cp932,euc-jp
set fileformats=unix,dos,mac


fun! s:AuBufEnter()
    execute ":lcd " . expand("%:p:h")
    execute "normal! 1\<c-g>"
    call s:AuColorScheme()
endf

" カラー設定
fun! s:AuColorScheme()
    hi Directory    ctermfg=white guifg=white term=bold gui=bold
    hi TabLineSel   guifg=white
    hi TabLine      guibg=darkblue ctermbg=lightgray ctermfg=blue
    hi TabLineFill  guifg=darkblue
    hi CursorLine   gui=underline guibg=NONE term=bold cterm=underline
    hi Match2Mark	gui=standout ctermbg=white ctermfg=blue
    hi Todo         gui=bold
    hi link ZenkakuSpace Error
    call matchadd("ZenkakuSpace", '　')
endf

syntax on
colorscheme darkblue
call s:AuColorScheme()

" augroup配下で「au トリガー 処理」を書くことで、都度都度実行してほしい処理を自動化出来る
augroup my_au_group
    au!
    au GUIEnter * simalt ~x
    au BufEnter * call s:AuBufEnter()
    au ColorScheme * call s:AuColorScheme()
    au InsertLeave * execute "set nopaste"
    au BufEnter *.dump execute "setf sql"
    au BufEnter *.scss execute "setf scss"
    autocmd FileType netrw setl bufhidden=delete

    au FileType python setlocal tabstop=4 softtabstop=4 shiftwidth=4
    au FileType python :inoremap # X#
    au FileType ruby setlocal tabstop=2 softtabstop=2 shiftwidth=2
    au FileType coffee setlocal tabstop=2 softtabstop=2 shiftwidth=2

    au FileType text setlocal tw=0
augroup END


set noswapfile                      "スワップファイルは作らない
set nobackup                        "バックアップファイルは作らない
set noundofile                      "undoファイルは作らない
set number                          "行番号を表示
"set cursorline                      "カーソルのある行を強調表示
"set cursorcolumn                    "カーソルのある列を強調表示
set expandtab                       "Tabの代わりにSpaceを入力する
set tabstop=4                       "半角4文字分ごとにTabを止める
set softtabstop=4                   "バックスペースとかで半角4文字分ごとに詰められる
set shiftwidth=4                    "Tabの幅を半角4文字分に
set autoindent                      "改行時に上の行に合わせてインデント
set smartindent                     "括弧とか書いた時にブロック内をいい感じにインデント
set showmatch                       "対応する括弧を強調表示
set hlsearch                        "検索キーワードを強調表示
set incsearch                       "インクリメンタルサーチ
set ignorecase                      "検索とかで大文字小文字を区別しない
set smartcase                       "大文字込みで検索するときは大文字小文字区別する
set nowrap                          "行が見切れても折り返さない
set novisualbell                    "ビープ音とか鳴らさない
set vb t_vb=                        "ビープ音を無音に指定
set guifont=HackGenNerd:h9,MS_Gothic:h9    "フォント設定
set ambiwidth=double                "記号の表示がずれるのを修正
set ve=block                        "矩形選択ビジュアルモードではフリーカーソルをON
set iminsert=0                      "挿入モードに入った時に勝手にIMEを切り替えない
set imsearch=0                      "検索モードに入った時に勝手にIMEを切り替えない
set scrolloff=20                    "上下20行分の視界を確保
set sidescrolloff=8                 "左右4文字分の視界を確保
set sidescroll=1                    "横スクロールは1文字ずつ行う
set lazyredraw                      "マクロなどを実行中は描画を中断
set tw=0                            "勝手に折り返すの禁止
set nf=                             "頭に0が付いてても10進数としてインクリメント・デクリメントする
set diffopt=iwhite                  "空白を無視して比較する
set guioptions=                     "GUI専用の表示周りオプションは全部OFF
set tags+=tags;                     "カレントディレクトリから遡ってtagsファイルを検索する
"set whichwrap=b,s,l,h,<,>,[,]   "行頭行末の左右移動で行をまたぐ
set cmdheight=1                     "コマンドラインの高さは1行にする

" ファイルの改行コードと文字コードをステータスラインに表示
set statusline=%F%m%r%h%w\%=\[%{&ff}]\[ENC=%{&fileencoding}]%L


"-----------------------------------------------------------------------------
" netrw(ディレクトリ表示)
"
" netrwは常にtree view
let g:netrw_liststyle = 3

" netrwで表示しないものリスト
let g:netrw_list_hide = 'NetrwTreeListing,CVS,^\.svn/$,\.swp$'

" 'v'でファイルを開くときは右側に開く。(デフォルトが左側なので入れ替え)
let g:netrw_altv = 1

" 'o'でファイルを開くときは下側に開く。(デフォルトが上側なので入れ替え)
let g:netrw_alto = 1

" netrwでディレクトリを移動した時、移動先をカレントディレクトリに設定する
let g:netrw_keepdir = 0

" カーソル位置を保持する
let b:netrw_col = 1

" 現在の行番号を保持する
let b:netrw_line = 1

" ファイル上でエンターキー押したら左右に開く
""let g:netrw_browse_split = 2
" netrw常時表示やめるんで、その場に上書きで開く
let g:netrw_browse_split = 0



" 自前プラグインの読み込み


"""""""""""""""""""""""""""""""""""""""""""
" 挿入モード時、ステータスラインの色を変更{
"""""""""""""""""""""""""""""""""""""""""""
let g:hi_insert = 'highlight StatusLine guifg=darkblue guibg=darkyellow gui=none ctermfg=blue ctermbg=yellow cterm=none'

if has('syntax')
  augroup InsertHook
    au!
    au InsertEnter * call s:StatusLine('Enter')
    au InsertLeave * call s:StatusLine('Leave')
  augroup END
endif

let s:slhlcmd = ''
fun! s:StatusLine(mode)
  if a:mode == 'Enter'
    silent! let s:slhlcmd = 'highlight ' . s:GetHighlight('StatusLine')
    silent exec g:hi_insert
  else
    highlight clear StatusLine
    silent exec s:slhlcmd
  endif
endf

fun! s:GetHighlight(hi)
  redir => hl
  exec 'highlight '.a:hi
  redir END
  let hl = substitute(hl, '[\r\n]', '', 'g')
  let hl = substitute(hl, 'xxx', '', '')
  return hl
endf
"""""""""""""""""""""""""""""""""""""""""""
""""""""""""""""""""""""""""""""""""""""""}
"""""""""""""""""""""""""""""""""""""""""""


"""""""""""""""""""""""""""""""""""
" クォーテーションをいい感じに入力{
"""""""""""""""""""""""""""""""""""
fun! s:chkEscape (nl, cur)
    if a:cur-1 <= 0
        return 0
    endif
    let sw = 0
    let i = a:cur - 1
    while i >= 0
        if a:nl[i] == '\'
            if sw == 0
                let sw = 1
            else
                let sw = 0
            endif
        else
            return sw
        endif
        let i -= 1
    endwhile
    return sw
endf

fun! CloseQuate(c)
    " 現在行の情報を取得
    let nl = getline('.')
    let cur = col('.')-1

    if a:c == '''' || a:c == '"'
        if s:chkEscape(nl, cur)
            " 直前にエスケープ文字を書いてたら素直に出力する
            return a:c
        endif
    endif

    " 文字列内・スクリプト内にいるか判定
    let kakko = ['.']
    for i in range(0, cur-1)
        if nl[i-1] == '?' && nl[i] == '>'
            if kakko[-1] == '?>'
                unlet kakko[-1]
            endif
        elseif nl[i] == '<' && nl[i+1] == '?'
            call add(kakko, '?>')
        elseif nl[i] == ''''
            if kakko[-1] == ''''
                if s:chkEscape(nl, i) == 0
                    unlet kakko[-1]
                endif
            elseif kakko[-1] == '?>' || kakko[-1] == '.'
                call add(kakko, '''')
            endif
        elseif nl[i] == '"'
            if kakko[-1] == '"'
                if s:chkEscape(nl, i) == 0
                    unlet kakko[-1]
                endif
            elseif kakko[-1] == '?>' || kakko[-1] == '.'
                call add(kakko, '"')
            endif
        endif
    endfor

    if kakko[-1] == a:c
        " 同じクォーテーション文字列内にいる場合

        " 閉じクォーテーションの上にカーソルがいるなら右に進んで終わり
        if nl[cur] == a:c
            return "\<Right>"
        endif

        " 文字列が閉じられているか判定する
        if cur+1 <= strlen(nl)-1
            for i in range(cur+1, strlen(nl)-1)
                if nl[i-1] != '\' && nl[i] == a:c
                    " 閉じられているのでエスケープ付きで文字を出力
                    if a:c == ''''
                        return ''''
                    elseif a:c == '"'
                        return '\"'
                    endif
                endif
            endfor
        endif
    elseif kakko[-1] != '''' && kakko[-1] != '"'
        " 特に文字列内にいたわけではないなら、閉じクォーテーションも含めて出力する
        return a:c . a:c . "\<Left>"
    elseif kakko[-1] != a:c
        " 違うクォーテーションの文字列内では、そのままクォーテーションを出力する
        return a:c
    endif

    " 文字列が閉じられてないっぽいので、閉じクォーテーションとしてそのまま出力
    return a:c
endf

"""""""""""""""""""""""""""""""""""
""""""""""""""""""""""""""""""""""}
"""""""""""""""""""""""""""""""""""


"""""""""""""""""""""""
" 閉じ括弧の重複を防止{
"""""""""""""""""""""""
fun! ClosePair(char)
    let nl = getline('.')
    let cur = col('.')-1
    let ss = ''
    for i in range(cur, cur+strlen(a:char)-1)
        let ss = ss . nl[i]
    endfor
    if ss == a:char
        let ss = ''
        for i in range(1, strlen(a:char))
            let ss = ss . "\<Right>"
        endfor
        return ss
    else
        return a:char
    endif
endf
"""""""""""""""""""""""
""""""""""""""""""""""}
"""""""""""""""""""""""


"""""""""""""""""""""""""""""""""""""""""
" 中括弧とか行が分かれてる括弧を閉じたい{
"""""""""""""""""""""""""""""""""""""""""
fun! CloseBlock(c)
    if match(getline('.'), '^\s*$') > -1 && match(getline(line('.')+1), '^\s*' . a:c) > -1
        return "\<Esc>\"_dda"
    endif
    if getline('.')[col('.') - 1] == a:c
        return "\<Right>"
    endif
    return a:c
endf
"""""""""""""""""""""""""""""""""""""""""
""""""""""""""""""""""""""""""""""""""""}
"""""""""""""""""""""""""""""""""""""""""


""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" dosフォーマットのファイルをunixフォーマットで開き直して改行を除去{
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
fun! FileFormatCleaning()
    e ++ff=unix
    %s///g
endf
command! MYFF call FileFormatCleaning()
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""}
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""


"""""""""""""""""""
" キーバインド設定{
"""""""""""""""""""
fun! MyKeyBind()
    " うちの香り屋版が余計なキーバインド仕込んでるので、その対策
    noremap <c-a> <c-a>
    noremap <c-v> <c-v>

    " 折り返し行で見かけの上下位置にカーソルを移動する
    noremap j gj
    noremap k gk

    " 通常のjkの動作はgj, gkと入れ替える
    noremap gj j
    noremap gk k

    " CTRL+jk でページアップ・ページダウン
    noremap <c-j> <c-f>
    noremap <c-k> <c-b>

    " CTRL+hl でとなりのバッファに移動
    noremap <c-h> <c-w>h
    noremap <c-l> <c-w>l

    " パスを開くときは左右に開きたい
    nnoremap <c-w><c-f> :vs<cr><c-w>l<c-w><c-f><c-w><c-j>:q<cr>

    " uでアンドゥなので SHIFT+u でリドゥさせる
    nnoremap U <c-r>

    " 無名レジスタからのペーストはしない
    noremap p "0p
    noremap P "0P
    " でもdとかxで消したやつは取っときたいので、ヤンクしてから消す
    nnoremap dd yydd
    nnoremap dj yjdj
    nnoremap dk ykjdk
    vnoremap x  ygvx
    "vnoremap s  ygvs

    " カレントバッファの幅を８文字単位で調整
    nnoremap > <c-w>16>
    nnoremap < <c-w>16<

    " zキー活用
    nnoremap zb viBzf<esc><esc>
    nnoremap zp :setf php<cr>
    nnoremap zm :e ++ff=dos<cr>

    " 文字列検索時に普通に正規表現を使えるようにする
    nnoremap / /\v
    nnoremap ? ?\v

    " mmでマークした単語をハイライト表示
    nnoremap mm mm:2match Match2Mark ,<c-r><c-w>,<cr>
    vnoremap mm "ay:2match Match2Mark ,<c-r>a,<cr>

    " タグジャンプ時に複数候補がある場合は手動で選ばせる
    nnoremap <c-]> g<c-]>

    " <c-e>でエクスプローラーを開く
    nnoremap <c-e> :silent ! start %:h<cr>

    " 選択したパスのファイルを開く
    vnoremap <cr> "ay:vs<space><c-r>a<cr>

    " <c-d><c-d>で今日の日付を入れる
    nnoremap <c-d><c-d> i<c-r>=strftime("%Y-%m-%d")<cr><esc>l
    inoremap <c-d><c-d>  <c-r>=strftime("%Y-%m-%d")<cr>
    vnoremap <c-d><c-d> s<c-r>=strftime("%Y-%m-%d")<cr><esc>

    " <c-d><c-t>で今の時刻を入れる
    nnoremap <c-d><c-t> i<c-r>=strftime("%H:%M:%S")<cr><esc>l
    inoremap <c-d><c-t>  <c-r>=strftime("%H:%M:%S")<cr>
    vnoremap <c-d><c-t> s<c-r>=strftime("%H:%M:%S")<cr><esc>

    " <c-d><c-f>で今開いてるファイル名を入れる
    nnoremap <c-d><c-f> i<c-r>=expand("%<")<cr><esc>l
    inoremap <c-d><c-f>  <c-r>=expand("%<")<cr>
    vnoremap <c-d><c-f> s<c-r>=expand("%<")<cr><esc>

    " 選択している文字列で検索
    vnoremap z/ "ay/<c-r>"
    vnoremap z? "ay?<c-r>"

    " 選択範囲を括弧で囲む
    vnoremap () <esc>:set paste<cr>gv"as(<c-r>a)<esc>
    vnoremap {} <esc>:set paste<cr>gv"as{<c-r>a}<esc>
    vnoremap [] <esc>:set paste<cr>gv"as[<c-r>a]<esc>
    vnoremap "" <esc>:set paste<cr>gv"as"<c-r>a"<esc>
    vnoremap '' <esc>:set paste<cr>gv"as'<c-r>a'<esc>

    " insertキー誤爆防止
    inoremap <ins> <nop>
    " jとかkを２回押すとノーマルモードに戻る
    inoremap kk <esc>
    inoremap KK <esc>
    inoremap jj <esc>
    inoremap JJ <esc>

    " 括弧とかクォーテーション入力時に閉じ括弧を補完する
    inoremap { {}<left>
    inoremap <expr> } CloseBlock('}')
    inoremap {<cr> {<cr>}<up><end><cr>
    inoremap ( ()<left>
    inoremap <expr> ) CloseBlock(')')
    inoremap (<cr> (<cr>)<up><end><cr>
    inoremap [ []<left>
    inoremap <expr> ] CloseBlock(']')
    inoremap [<cr> [<cr>]<up><end><cr>

    inoremap <expr> " CloseQuate('"')
    inoremap <expr> ' CloseQuate('''')
endf
"""""""""""""""""""
"""""""""""""""""}}
"""""""""""""""""""
call MyKeyBind()


"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
" バッファ移動時に移動先バッファの幅を広げるキーバインド追加設定{
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
fun! AdjustBufferWidth()
    nnoremap <c-w><c-w> 100<c-w><<c-w><c-w><c-w>=48<c-w>>16<c-w><
    nnoremap <c-w><c-l> 100<c-w><<c-w><c-l><c-w>=48<c-w>>16<c-w><
    nnoremap <c-l> 100<c-w><<c-w><c-l><c-w>=48<c-w>>16<c-w><
    nnoremap <c-h> <c-w><c-h><c-w>=48<c-w>>16<c-w><
endf
command! AdjustBufferWidth call AdjustBufferWidth()
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""}
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
call AdjustBufferWidth()

