def del_line(args):
    with open("/etc/hosts", "r", encoding="utf-8") as old_file:
        with open("/etc/hosts", "r+", encoding="utf-8") as new_file:
            current_line = 0
            # 定位到需要删除的行
            while current_line < (get_count(args) - 1):
                old_file.readline()
                current_line += 1
            # 当前光标在被删除行的行首，记录该位置
            seek_point = old_file.tell()
            # 设置光标位置
            new_file.seek(seek_point, 0)
            # 读需要删除的行，光标移到下一行行首
            old_file.readline()
            # 被删除行的下一行读给 next_line
            next_line = old_file.readline()
            # 连续覆盖剩余行，后面所有行上移一行
            while next_line:
                new_file.write(next_line)
                next_line = old_file.readline()
            # 写完最后一行后截断文件，因为删除操作，文件整体少了一行，原文件最后一行需要去掉
            new_file.truncate()


def get_count(args):
    with open("/etc/hosts", "r", encoding="utf-8") as f:
        lines = f.readlines()
   # with open("/etc/hosts", "w", encoding="utf-8") as f_w:
        count = 0
        for line in lines:
            count = count + 1
            if args in line:
                break
                #continue
            #f_w.write(line)
    return count
