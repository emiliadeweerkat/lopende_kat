function kat (x: number) {
    LCD1IN8.LCD_ClearBuf()
    LCD1IN8.DrawCircle(
    x,
    70,
    40,
    LCD1IN8.select_color(COLOR.GBLUE),
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DrawLine(
    x + 10,
    30,
    x + 15,
    10,
    LCD1IN8.select_color(COLOR.GREEN),
    DOT_PIXEL.DOT_PIXEL_3,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.DrawLine(
    x + 15,
    10,
    x + 25,
    37,
    LCD1IN8.select_color(COLOR.BLACK),
    DOT_PIXEL.DOT_PIXEL_3,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.DrawLine(
    x - 10,
    30,
    x - 15,
    10,
    LCD1IN8.select_color(COLOR.RED),
    DOT_PIXEL.DOT_PIXEL_3,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.DrawLine(
    x - 15,
    10,
    x - 25,
    37,
    LCD1IN8.select_color(COLOR.MAGENTA),
    DOT_PIXEL.DOT_PIXEL_3,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.DrawLine(
    x + 10,
    50,
    x + 10,
    65,
    LCD1IN8.select_color(COLOR.RED),
    DOT_PIXEL.DOT_PIXEL_3,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.DrawLine(
    x - 10,
    50,
    x - 10,
    65,
    LCD1IN8.select_color(COLOR.GREEN),
    DOT_PIXEL.DOT_PIXEL_3,
    LINE_STYLE.LINE_SOLID
    )
    LCD1IN8.DrawPoint(
    x,
    70,
    LCD1IN8.select_color(COLOR.MAGENTA),
    DOT_PIXEL.DOT_PIXEL_4
    )
    LCD1IN8.LCD_Display()
}
let x = 0
LCD1IN8.LCD_Init()
LCD1IN8.LCD_ClearBuf()
LCD1IN8.LCD_SetBL(40)
basic.forever(function () {
    kat(x)
    x += 10
})
