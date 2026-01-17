!macro customHeader
  !system "echo '' > /dev/null"
!macroend

!macro preInit
  SetRegView 64
!macroend

!macro customInstall
  ; Создаём ярлык для удаления в папке установки
  CreateShortCut "$INSTDIR\Удалить thqlabel.lnk" "$INSTDIR\Uninstall thqlabel.exe"
!macroend

!macro customUnInstall
  ; Удаляем ярлык при деинсталляции
  Delete "$INSTDIR\Удалить thqlabel.lnk"
!macroend
